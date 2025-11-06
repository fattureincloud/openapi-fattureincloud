# Scripts

## enrich.js

Enriches the OpenAPI specification with additional details and modifications.

**What it does:**

- Adds details from `details.yaml` to input schemas (descriptions, constraints, etc.)
- Removes `nullable` properties from request body schemas
- Adds manual authentication method for API documentation
- Configures OAuth2 token reception settings

**Usage:**

```bash
node enrich.js <details-file> <output-file>
```

**Arguments:**

- `<details-file>` - Path to the details YAML file (e.g., `./details.yaml`)
- `<output-file>` - Path to the output enriched OpenAPI file (e.g., `./openapi-enriched.yaml`)

**Example:**

```bash
node ./scripts/enrich.js ./details.yaml ./openapi-enriched.yaml
```

**Used in GitHub Actions:**

- `enrich-spec.yaml`

---

## format-yaml.js

Formats YAML files according to standard conventions.

**What it does:**

- Loads YAML files and rewrites them with consistent formatting
- Can format a single file or all YAML files in the repository

**Usage:**

```bash
node format-yaml.js single <file-path>    # Format a single file
node format-yaml.js all                   # Format all *.yaml files
```

**Arguments:**

- `single <file-path>` - Format a specific YAML file
- `all` - Format all YAML files found recursively in the repository

**Examples:**

```bash
node ./scripts/format-yaml.js single ./openapi.yaml
node ./scripts/format-yaml.js all
```

**Used in GitHub Actions:**

- Not currently used in any workflow

---

## generate-scopes.js

Generates OAuth2 scope definitions for SDK language-specific files from the OpenAPI specification.

**What it does:**

- Extracts OAuth2 scopes from `openapi.yaml`
- Generates language-specific scope constants using Liquid templates
- Creates scope files for multiple SDK languages

**Usage:**

```bash
node generate-scopes.js <language>
```

**Arguments:**

- `<language>` - Target SDK language: `csharp`, `java`, `javascript`, `python`, `php`, `ruby`, `typescript-axios`, or `go`

**Example:**

```bash
node ./scripts/generate-scopes.js javascript
```

**Used in GitHub Actions:**

- `generate-csharp.yaml`
- `generate-go.yaml`
- `generate-java.yaml`
- `generate-javascript.yaml`
- `generate-php.yaml`
- `generate-python.yaml`
- `generate-ruby.yaml`
- `generate-typescript-axios.yaml`

---

## openapi-version-updater.js

Utility module for reading and updating the version in OpenAPI specification files.

**What it does:**

- Provides functions to read and write the version field in OpenAPI YAML files
- Exports `readVersion()` and `writeVersion()` functions

**Usage:**

```javascript
const updater = require("./openapi-version-updater.js");
const version = updater.readVersion(yamlContents);
const updated = updater.writeVersion(yamlContents, "2.0.1");
```

**Used in GitHub Actions:**

- Not currently used in any workflow

---

## postprocess-php.js

Post-processes generated PHP SDK files to update documentation links and author information.

**What it does:**

- Recursively processes all PHP files in specified directories
- Updates `@link` tags to point to `https://fattureincloud.it`
- Updates `@author` tags to "Fatture In Cloud API team"

**Usage:**

```bash
node postprocess-php.js clean <dir1> [dir2] [dir3] ...
```

**Arguments:**

- `clean` - Command to clean PHP comments
- `<dir1> [dir2] ...` - One or more directories to process

**Example:**

```bash
node ./scripts/postprocess-php.js clean './generated/php/lib/' './generated/php/test/'
```

**Used in GitHub Actions:**

- `generate-php.yaml`

---

## postprocess-zapier.js

Post-processes generated Zapier integration files to add dynamic triggers for dropdowns.

**What it does:**

- Adds global triggers (e.g., company_id selection)
- Adds model-specific triggers for VatType and PaymentAccount
- Configures dynamic dropdown functionality for Zapier

**Usage:**

```bash
node postprocess-zapier.js <apis-path>
```

**Arguments:**

- `<apis-path>` - Path to the Zapier APIs directory

**Example:**

```bash
node ./scripts/postprocess-zapier.js './generated/zapier/apis/'
```

**Used in GitHub Actions:**

- `generate-zapier.yaml`

---

## rate-limit-headers.js

Manages rate limiting headers in the OpenAPI specification.

**What it does:**

- **add**: Adds rate limiting headers to all endpoint responses (200, 403, 429)
- **validate**: Validates that all endpoints have required rate limiting headers
- Ensures compliance with API rate limiting documentation

**Usage:**

```bash
node rate-limit-headers.js add [--dry-run]    # Add headers to all endpoints
node rate-limit-headers.js validate           # Validate headers presence
```

**Commands:**

- `add` - Add rate limiting headers to all endpoints
  - `--dry-run` - Preview changes without modifying files
- `validate` - Validate that all endpoints have required headers (exits with code 1 if validation fails)

**Examples:**

```bash
node ./scripts/rate-limit-headers.js add --dry-run    # Preview changes
node ./scripts/rate-limit-headers.js add              # Apply changes
node ./scripts/rate-limit-headers.js validate         # Validate spec
```

**Used in GitHub Actions:**

- `openapi-validation.yaml` (validate command)

---

## sdk-version-checker.js

Determines the SDK version bump type by comparing OpenAPI version with SDK version.

**What it does:**

- Compares OpenAPI specification version with SDK version
- Outputs bump type: `patch` (increment patch), `openapi` (use OpenAPI version for major/minor changes)
- Creates SDK version file if it doesn't exist

**Usage:**

```bash
node sdk-version-checker.js <sdk-version-file> <openapi-version>
```

**Arguments:**

- `<sdk-version-file>` - Path to SDK version YAML file (e.g., `./generated/java/sdk-version.yaml`)
- `<openapi-version>` - OpenAPI specification version (e.g., `2.0.5`)

**Example:**

```bash
BUMP_TYPE=$(node ./scripts/sdk-version-checker.js ./generated/java/sdk-version.yaml 2.0.5)
```

**Used in GitHub Actions:**

- `generate-csharp.yaml`
- `generate-go.yaml`
- `generate-java.yaml`
- `generate-javascript.yaml`
- `generate-php.yaml`
- `generate-python.yaml`
- `generate-ruby.yaml`
- `generate-typescript-axios.yaml`

---

## test-validation.js

Test script to verify that rate limiting header validation works correctly.

**What it does:**

- Creates a temporary backup of `openapi.yaml`
- Removes rate limiting headers from a test endpoint
- Runs validation (should fail)
- Restores original file
- Reports test results

**Usage:**

```bash
node test-validation.js
```

**Example:**

```bash
node ./scripts/test-validation.js
```

**Used in GitHub Actions:**

- Not currently used in any workflow

---

## transform-json.js

Utility module for transforming JSON files using JSONata expressions.

**What it does:**

- Provides `transformJsonByLocation()` function to update JSON files
- Uses JSONata transformation syntax for complex updates
- Writes transformed JSON back to file

**Usage:**

```javascript
const transform = require("./transform-json.js");
transform.transformJsonByLocation(filePath, updateMap);
```

**Used by:**

- Required in `postprocess-php.js` (currently not actively used)

---

## onetime/

One-time utility scripts used for initial setup and data migration. These scripts were used during project setup and are kept for reference.

### extract.js

Extracts property details from OpenAPI specification to create `details.yaml` file.

**What it does:**

- Reads `openapi-resolved.yaml`
- Extracts details of interest (nullable, default, required, properties, maximum, minimum)
- Generates `details.yaml` with extracted information

**Usage:**

```bash
node onetime/extract.js
```

### prepare.js

Prepares YAML model files for enrichment process.

**What it does:**

- Processes all YAML files in `./models/` directory
- Removes details that will be in `details.yaml` (required, default, minimum, maximum)
- Adds `nullable: true` to all properties

**Usage:**

```bash
node onetime/prepare.js
```

**Note:** These scripts are historical and not used in current workflows.
