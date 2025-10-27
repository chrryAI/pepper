# Publishing Pepper Router 🌶️

## Prerequisites

1. **npm account**: You need an npm account with publish permissions
2. **Login**: Run `npm login` to authenticate

## Publishing Steps

### 1. Update Version

```bash
cd packages/pepper
npm version patch  # or minor, or major
```

### 2. Build

```bash
npm run build
```

### 3. Test Locally (Optional)

```bash
npm pack
# This creates a .tgz file you can test with:
# npm install /path/to/pepper-router-0.1.0.tgz
```

### 4. Publish

```bash
npm publish --access public
```

## Version Guidelines

- **Patch** (0.1.X): Bug fixes, documentation updates
- **Minor** (0.X.0): New features, backwards compatible
- **Major** (X.0.0): Breaking changes

## Checklist Before Publishing

- [ ] All tests pass
- [ ] Build succeeds without errors
- [ ] README is up to date
- [ ] CHANGELOG is updated
- [ ] Version number is bumped
- [ ] No uncommitted changes

## Post-Publish

1. Create a GitHub release with the same version tag
2. Update Vex to use the published version
3. Announce on Twitter/social media 🎉

## Scoped Package

If you want to publish under your own scope:

```bash
# Change package name to @yourusername/router
npm publish --access public
```

## Current Package

- **Name**: `@pepper/router`
- **Registry**: https://www.npmjs.com/package/@pepper/router
- **Scope**: `@pepper`
