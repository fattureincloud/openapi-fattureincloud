#!/usr/bin/env node
/**
 * Test script to verify that the validation script correctly detects missing headers
 * This creates a temporary OpenAPI spec with missing headers and validates detection
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { execSync } = require("child_process");

const OPENAPI_FILE = path.join(__dirname, "..", "openapi.yaml");
const BACKUP_FILE = path.join(__dirname, "..", "openapi.yaml.backup");

console.log("🧪 Testing validation script...\n");

// Backup original file
console.log("📦 Creating backup...");
fs.copyFileSync(OPENAPI_FILE, BACKUP_FILE);

try {
  // Read the spec
  const spec = yaml.load(fs.readFileSync(OPENAPI_FILE, "utf8"));

  // Find first endpoint with 200 response that has headers
  let testPath = null;
  let testMethod = null;

  Object.entries(spec.paths).forEach(([path, pathItem]) => {
    if (testPath) return;

    ["get", "post", "put", "delete", "patch"].forEach((method) => {
      if (testPath) return;

      if (
        pathItem[method] &&
        pathItem[method].responses &&
        pathItem[method].responses["200"]
      ) {
        const response = pathItem[method].responses["200"];
        if (!response.$ref && response.headers) {
          testPath = path;
          testMethod = method;
        }
      }
    });
  });

  if (!testPath) {
    console.error("❌ Could not find suitable endpoint for testing");
    process.exit(1);
  }

  console.log(`📝 Modifying endpoint: ${testMethod.toUpperCase()} ${testPath}`);

  // Remove one header to test detection
  const endpoint = spec.paths[testPath][testMethod];
  delete endpoint.responses["200"].headers["RateLimit-HourlyRemaining"];
  console.log("   Removed: RateLimit-HourlyRemaining header");

  // Remove 429 response
  delete endpoint.responses["429"];
  console.log("   Removed: 429 response\n");

  // Write modified spec
  fs.writeFileSync(
    OPENAPI_FILE,
    yaml.dump(spec, { lineWidth: -1, noRefs: true, indent: 2 })
  );

  // Run validation (should fail)
  console.log("🔍 Running validation (should FAIL)...\n");
  try {
    execSync("node rate-limit-headers.js validate", {
      cwd: __dirname,
      stdio: "inherit",
    });
    console.error(
      "\n❌ TEST FAILED: Validation should have detected missing headers but passed!"
    );
    process.exit(1);
  } catch (error) {
    console.log(
      "\n✅ TEST PASSED: Validation correctly detected missing headers!\n"
    );
  }
} finally {
  // Restore original file
  console.log("♻️  Restoring original file...");
  fs.copyFileSync(BACKUP_FILE, OPENAPI_FILE);
  fs.unlinkSync(BACKUP_FILE);
  console.log("✅ Original file restored\n");
}

console.log("🎉 All tests passed!\n");
