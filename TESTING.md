# Testing and Checking the ng-flowbite Package

This guide explains how to test and validate the `ng-flowbite` library package.

## Prerequisites

Before testing, ensure all dependencies are installed:

```bash
npm install
```

If you encounter missing test dependencies, install them:

```bash
npm install --save-dev karma karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage @types/jasmine jasmine-core
```

## 1. Running Unit Tests

### Run all tests

```bash
npm test
```

Or using Angular CLI directly:

```bash
ng test ng-flowbite
```

This will:
- Start the Karma test runner
- Open Chrome browser (or run headless)
- Execute all `.spec.ts` files
- Watch for file changes and re-run tests automatically
- Generate coverage reports in `coverage/ng-flowbite/`

### Run tests in headless mode (CI/CD)

To run tests without opening a browser, modify `karma.conf.js` to use `ChromeHeadless`:

```javascript
browsers: ['ChromeHeadless'],
```

Or run with a one-time execution:

```bash
ng test ng-flowbite --watch=false --browsers=ChromeHeadless
```

### View test coverage

After running tests, coverage reports are generated in:
- HTML: `coverage/ng-flowbite/index.html` (open in browser)
- Text summary: displayed in terminal

## 2. Building the Package

### Build for production

```bash
npm run build
```

Or:

```bash
ng build ng-flowbite
```

This creates the distributable package in `dist/ng-flowbite/` with:
- FESM (Flat ECMAScript Module) bundles
- UMD bundles
- TypeScript declaration files (`.d.ts`)
- Source maps

### Build for development

```bash
ng build ng-flowbite --configuration=development
```

Development builds include:
- Source maps for debugging
- No minification
- Faster build times

### Verify build output

Check the generated files:

```bash
ls -la dist/ng-flowbite/
```

Key files to verify:
- `fesm2022/ng-flowbite.mjs` - Main ES module bundle
- `index.d.ts` - TypeScript declarations
- `package.json` - Package metadata

## 3. Type Checking

### Check TypeScript types

```bash
npx tsc --noEmit -p projects/ng-flowbite/tsconfig.lib.json
```

This validates:
- Type errors
- Missing imports
- Incorrect type usage
- Without generating output files

### Check library types specifically

```bash
npx tsc --noEmit -p projects/ng-flowbite/tsconfig.lib.prod.json
```

## 4. Linting

### Run linter

```bash
npm run lint
```

Or:

```bash
ng lint
```

This checks:
- Code style consistency
- Potential errors
- Best practices
- Angular-specific rules

### Fix linting issues automatically

```bash
ng lint --fix
```

## 5. Testing in Demo Application

The demo app (`projects/demo`) allows you to test components interactively.

### Start demo app

```bash
npm run demo
```

Or:

```bash
ng serve demo
```

Then open `http://localhost:4200` in your browser.

### Build demo app

```bash
npm run build:demo
```

Or:

```bash
ng build demo
```

## 6. Package Validation Checklist

Before publishing or using the package, verify:

### ✅ Build succeeds
```bash
npm run build
```

### ✅ All tests pass
```bash
npm test
```

### ✅ No type errors
```bash
npx tsc --noEmit -p projects/ng-flowbite/tsconfig.lib.json
```

### ✅ No linting errors
```bash
npm run lint
```

### ✅ Public API exports correctly
Check `projects/ng-flowbite/src/public-api.ts`:
- All public components/services are exported
- No internal-only code is exported
- Exports match the package.json entry points

### ✅ Package.json configuration
Verify in `package.json`:
- `main`, `module`, `es2022` point to correct build outputs
- `typings` points to `dist/ng-flowbite/index.d.ts`
- `exports` field is correctly configured
- `peerDependencies` are correct

### ✅ Demo app works
```bash
npm run demo
```
- All components render correctly
- No console errors
- Interactive features work

## 7. Quick Validation Script

Create a script to run all checks at once. Add to `package.json`:

```json
"scripts": {
  "validate": "npm run lint && npm run build && npm test -- --watch=false"
}
```

Then run:

```bash
npm run validate
```

## 8. Testing Individual Components

To test a specific component, you can:

1. **Write unit tests** - Create or update `.spec.ts` files
2. **Test in demo app** - Add the component to demo app pages
3. **Manual testing** - Use the demo app to interact with components

### Example: Testing a new component

1. Create component test file:
   ```bash
   ng generate component components/my-component --project=ng-flowbite
   ```

2. Write tests in `my-component.component.spec.ts`

3. Add to demo app to test visually:
   ```typescript
   // projects/demo/src/app/components/my-component-demo.component.ts
   ```

4. Run tests:
   ```bash
   npm test
   ```

## 9. Continuous Integration

For CI/CD pipelines, use:

```bash
# Install dependencies
npm ci

# Run all validations
npm run lint
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

## Troubleshooting

### Tests fail with "Cannot find module 'karma-jasmine'"

Install missing test dependencies:
```bash
npm install --save-dev karma karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage @types/jasmine jasmine-core
```

### Build fails with type errors

Check TypeScript configuration:
```bash
npx tsc --noEmit -p projects/ng-flowbite/tsconfig.lib.json
```

### Demo app doesn't reflect library changes

Rebuild the library:
```bash
npm run build
```

The demo app should pick up changes from `dist/ng-flowbite/` automatically.

## Additional Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Karma Configuration](https://karma-runner.github.io/latest/config/configuration-file.html)
- [ng-packagr Documentation](https://github.com/ng-packagr/ng-packagr)

