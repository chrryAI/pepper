# Changelog

All notable changes to Pepper Router will be documented in this file.

## [1.1.73] - 2025-01-19

### 🐛 Bug Fixes

- Disable view transitions for native browser back/forward navigation (mobile swipe gestures, browser buttons)
- Improves UX by letting the browser handle native navigation animations smoothly

## [0.1.0] - 2025-01-19

### 🎉 Initial Release

- ✨ Universal router for React (web, React Native, browser extensions)
- 🎨 Built-in View Transitions API support
- ⚡ Lightweight (~7KB minified)
- 🔒 Full TypeScript support
- 📱 Platform-aware navigation
- 🚀 SSR-friendly with hydration support
- 🎯 Zero dependencies (peer: React 18+)

### Features

- `HistoryRouterProvider` - Main provider component
- `useNavigation()` - Primary navigation hook
- `usePathname()` - Get current pathname
- `useSearchParams()` - Get URL search params
- `useHash()` - Get URL hash
- `useRouter()` - Low-level router access
- Platform-specific exports: `/web`, `/native`, `/extension`

### API

```tsx
const {
  navigate, // Navigate to path
  replace, // Replace current entry
  goBack, // Go back
  goForward, // Go forward
  refresh, // Refresh current route
  prefetch, // Prefetch route
  pathname, // Current path
  searchParams, // URL params
  hash, // URL hash
} = useNavigation()
```
