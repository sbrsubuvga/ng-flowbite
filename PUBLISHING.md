# Publishing ng-flowbite to npm

## Prerequisites

1. Create an npm account at https://www.npmjs.com/signup
2. Login to npm from your terminal:
   ```bash
   npm login
   ```

## Build the Library

Before publishing, build the library:

```bash
npm run build
```

This will create the distributable files in the `dist/ng-flowbite` directory.

## Version Management

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

## Publishing Steps

1. **Update version** in `package.json`:
   ```json
   "version": "0.1.0"
   ```

2. **Build the library**:
   ```bash
   npm run build
   ```

3. **Navigate to dist folder**:
   ```bash
   cd dist/ng-flowbite
   ```

4. **Publish to npm**:
   ```bash
   npm publish --access public
   ```

   Or from the root directory:
   ```bash
   npm publish dist/ng-flowbite --access public
   ```

## Post-Publishing

1. Create a git tag for the version:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

2. Update CHANGELOG.md with the release notes

3. Create a GitHub release with the changelog

## Testing Before Publishing

You can test the package locally before publishing:

```bash
# In the dist/ng-flowbite directory
npm pack

# This creates a .tgz file that you can install in another project:
# npm install /path/to/ng-flowbite-0.1.0.tgz
```

## Important Notes

- The `.npmignore` file controls what gets published
- Make sure all peer dependencies are correctly specified
- Test the built package in a fresh Angular project before publishing
- The package name `@ng-flowbite/ng-flowbite` requires an npm organization or scoped package access

