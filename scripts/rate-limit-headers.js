#!/usr/bin/env node

/**
 * Rate Limiting Headers Management Script
 *
 * This script manages rate limiting headers in the OpenAPI specification.
 *
 * Usage:
 *   node rate-limit-headers.js add [--dry-run]    Add headers to all endpoints
 *   node rate-limit-headers.js validate           Validate all endpoints have headers
 *
 * Exit codes:
 *   0 = Success
 *   1 = Error or validation failed
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const OPENAPI_FILE = path.join(__dirname, "..", "openapi.yaml");

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];
const isDryRun = args.includes("--dry-run");

// Headers to add to 200 responses
const rateLimitHeaders = {
  "RateLimit-HourlyRemaining": {
    $ref: "#/components/headers/RateLimitHourlyRemaining",
  },
  "RateLimit-HourlyLimit": {
    $ref: "#/components/headers/RateLimitHourlyLimit",
  },
  "RateLimit-MonthlyRemaining": {
    $ref: "#/components/headers/RateLimitMonthlyRemaining",
  },
  "RateLimit-MonthlyLimit": {
    $ref: "#/components/headers/RateLimitMonthlyLimit",
  },
};

// Response references
const forbidden403Response = {
  $ref: "#/components/responses/Forbidden403",
};

const tooManyRequests429Response = {
  $ref: "#/components/responses/TooManyRequests429",
};

// Required headers for validation
const REQUIRED_HEADERS = [
  "RateLimit-HourlyRemaining",
  "RateLimit-HourlyLimit",
  "RateLimit-MonthlyRemaining",
  "RateLimit-MonthlyLimit",
];

// Required response codes for validation
const REQUIRED_RESPONSES = ["403", "429"];

/**
 * Add headers to a response object
 */
function addHeadersToResponse(response) {
  if (!response.headers) {
    response.headers = {};
  }

  let added = 0;

  Object.entries(rateLimitHeaders).forEach(([headerName, headerRef]) => {
    if (!response.headers[headerName]) {
      response.headers[headerName] = headerRef;
      added++;
    }
  });

  return added > 0;
}

/**
 * Process an endpoint to add headers and responses
 */
function processEndpointForAdd(endpoint) {
  if (!endpoint.responses) {
    return false;
  }

  let modified = false;

  // Add headers to 200 responses
  if (endpoint.responses["200"]) {
    const response200 = endpoint.responses["200"];

    if (response200.$ref) {
      console.log("    → 200 response is a $ref, skipping");
    } else {
      const headersAdded = addHeadersToResponse(response200);
      if (headersAdded) {
        console.log("    ✓ Added rate limit headers to 200 response");
        modified = true;
      } else {
        console.log("    → Rate limit headers already present in 200 response");
      }
    }
  }

  // Add 403 response if not present
  if (!endpoint.responses["403"]) {
    endpoint.responses["403"] = forbidden403Response;
    console.log("    ✓ Added 403 Forbidden response");
    modified = true;
  } else {
    console.log("    → 403 response already present");
  }

  // Add 429 response if not present
  if (!endpoint.responses["429"]) {
    endpoint.responses["429"] = tooManyRequests429Response;
    console.log("    ✓ Added 429 Too Many Requests response");
    modified = true;
  } else {
    console.log("    → 429 response already present");
  }

  return modified;
}

/**
 * Check an endpoint for validation
 */
function checkEndpointForValidation(method, endpoint, path) {
  const issues = [];

  if (!endpoint.responses) {
    return ["No responses defined"];
  }

  // Check 200 response for rate limit headers (if not a $ref)
  if (endpoint.responses["200"]) {
    const response200 = endpoint.responses["200"];

    if (!response200.$ref) {
      if (!response200.headers) {
        issues.push("Missing headers in 200 response");
      } else {
        REQUIRED_HEADERS.forEach((headerName) => {
          if (!response200.headers[headerName]) {
            issues.push(`Missing header '${headerName}' in 200 response`);
          }
        });
      }
    }
  }

  // Check required error responses
  REQUIRED_RESPONSES.forEach((code) => {
    if (!endpoint.responses[code]) {
      issues.push(`Missing ${code} response`);
    }
  });

  return issues;
}

/**
 * Add command: Add rate limiting headers to all endpoints
 */
function addCommand() {
  console.log("📄 Reading OpenAPI spec...");
  const fileContent = fs.readFileSync(OPENAPI_FILE, "utf8");
  const spec = yaml.load(fileContent);

  if (!spec.paths) {
    console.error("❌ No paths found in OpenAPI spec");
    process.exit(1);
  }

  if (isDryRun) {
    console.log("\n🔍 DRY RUN MODE - No changes will be made\n");
  } else {
    console.log("\n✏️  WRITE MODE - Changes will be applied\n");
  }

  let totalEndpoints = 0;
  let modifiedEndpoints = 0;

  console.log("Processing endpoints...");

  // Iterate through all paths
  Object.entries(spec.paths).forEach(([path, pathItem]) => {
    console.log(`\n📍 Path: ${path}`);

    // Process each HTTP method
    const methods = [
      "get",
      "post",
      "put",
      "delete",
      "patch",
      "options",
      "head",
    ];
    methods.forEach((method) => {
      if (pathItem[method]) {
        totalEndpoints++;
        const operationId =
          pathItem[method].operationId || `${method.toUpperCase()} ${path}`;
        console.log(`  🔹 ${method.toUpperCase()}: ${operationId}`);

        const wasModified = processEndpointForAdd(pathItem[method]);
        if (wasModified) {
          modifiedEndpoints++;
        }
      }
    });
  });

  console.log(`\n${"=".repeat(50)}`);
  console.log("📊 Summary:");
  console.log(`  Total endpoints: ${totalEndpoints}`);
  console.log(`  Modified endpoints: ${modifiedEndpoints}`);
  console.log(`  Unchanged endpoints: ${totalEndpoints - modifiedEndpoints}`);
  console.log("=".repeat(50) + "\n");

  // Write back to file
  if (isDryRun) {
    console.log("🔍 Dry run complete - no changes were made");
    console.log("💡 Run without --dry-run to apply changes");
  } else {
    if (modifiedEndpoints > 0) {
      console.log("💾 Writing updated OpenAPI spec...");
      const updatedYaml = yaml.dump(spec, {
        lineWidth: -1,
        noRefs: true,
        indent: 2,
      });

      fs.writeFileSync(OPENAPI_FILE, updatedYaml, "utf8");
      console.log("✅ Done! File has been updated.");
    } else {
      console.log(
        "✅ No changes needed - all endpoints already have rate limit headers!"
      );
    }
  }
}

/**
 * Validate command: Validate all endpoints have required headers
 */
function validateCommand() {
  console.log("🔍 Validating rate limiting headers in OpenAPI spec...\n");

  const fileContent = fs.readFileSync(OPENAPI_FILE, "utf8");
  const spec = yaml.load(fileContent);

  if (!spec.paths) {
    console.error("❌ No paths found in OpenAPI spec");
    process.exit(1);
  }

  let totalEndpoints = 0;
  let invalidEndpoints = 0;
  const errors = [];

  // Iterate through all paths
  Object.entries(spec.paths).forEach(([path, pathItem]) => {
    const methods = [
      "get",
      "post",
      "put",
      "delete",
      "patch",
      "options",
      "head",
    ];
    methods.forEach((method) => {
      if (pathItem[method]) {
        totalEndpoints++;
        const endpoint = pathItem[method];
        const operationId =
          endpoint.operationId || `${method.toUpperCase()} ${path}`;

        const issues = checkEndpointForValidation(method, endpoint, path);

        if (issues.length > 0) {
          invalidEndpoints++;
          errors.push({
            path,
            method: method.toUpperCase(),
            operationId,
            issues,
          });
        }
      }
    });
  });

  // Print results
  console.log("=".repeat(60));
  console.log("📊 Validation Summary:");
  console.log(`  Total endpoints: ${totalEndpoints}`);
  console.log(`  Valid endpoints: ${totalEndpoints - invalidEndpoints}`);
  console.log(`  Invalid endpoints: ${invalidEndpoints}`);
  console.log("=".repeat(60) + "\n");

  if (invalidEndpoints > 0) {
    console.error("❌ VALIDATION FAILED!\n");
    console.error(
      "The following endpoints are missing rate limiting headers or responses:\n"
    );

    errors.forEach(({ path, method, operationId, issues }) => {
      console.error(`📍 ${method} ${path}`);
      console.error(`   Operation: ${operationId}`);
      issues.forEach((issue) => {
        console.error(`   ❌ ${issue}`);
      });
      console.error("");
    });

    console.error(
      "💡 To fix this, run: node scripts/rate-limit-headers.js add\n"
    );
    process.exit(1);
  }

  console.log("✅ VALIDATION PASSED!\n");
  console.log(
    "All endpoints have the required rate limiting headers and responses.\n"
  );
  process.exit(0);
}

/**
 * Show usage information
 */
function showUsage() {
  console.log(`
Rate Limiting Headers Management Script

Usage:
  node rate-limit-headers.js add [--dry-run]    Add headers to all endpoints
  node rate-limit-headers.js validate           Validate all endpoints have headers

Commands:
  add         Add rate limiting headers to all endpoints
              --dry-run  Preview changes without modifying the file
  
  validate    Validate that all endpoints have the required headers
              Exits with code 1 if validation fails

Examples:
  node rate-limit-headers.js add --dry-run      # Preview changes
  node rate-limit-headers.js add                # Apply changes
  node rate-limit-headers.js validate           # Validate spec
`);
  process.exit(0);
}

// Main execution
try {
  if (!command || command === "--help" || command === "-h") {
    showUsage();
  }

  switch (command) {
    case "add":
      addCommand();
      break;
    case "validate":
      validateCommand();
      break;
    default:
      console.error(`❌ Unknown command: ${command}\n`);
      showUsage();
  }
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
