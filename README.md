# 🌶️ Pepper Router

**Universal router for React** - Works seamlessly in web apps, React Native, and browser extensions with built-in view transitions.

## ✨ Features

- 🌍 **Universal** - One API for web, React Native, and browser extensions
- ⚡ **Lightweight** - Zero dependencies, minimal bundle size
- 🎨 **View Transitions** - Built-in support for smooth page transitions
- 📱 **Platform-aware** - Automatically adapts to your environment
- 🔒 **Type-safe** - Full TypeScript support
- 🚀 **Battle-tested** - Powers [Vex](https://vex.chrry.ai)'s polished UX

## 📦 Installation

```bash
npm install @chrryai/pepper
```

## 🚀 Quick Start

### Web (with View Transitions)

```tsx
import { HistoryRouterProvider, useNavigation } from "@chrryai/pepper/web";

function App() {
  return (
    <HistoryRouterProvider>
      <YourApp />
    </HistoryRouterProvider>
  );
}

function YourComponent() {
  const { navigate, pathname } = useNavigation();

  return (
    <button type="button" onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}
```

### React Native

```tsx
import { HistoryRouterProvider, useNavigation } from "@chrryai/pepper/native";

function App() {
  return (
    <HistoryRouterProvider>
      <YourApp />
    </HistoryRouterProvider>
  );
}
```

### Browser Extension

```tsx
import { HistoryRouterProvider, useNavigation } from "@chrryai/pepper/extension";

function App() {
  return (
    <HistoryRouterProvider>
      <YourApp />
    </HistoryRouterProvider>
  );
}
```

## 📖 API

### `HistoryRouterProvider`

Wrap your app with this provider to enable routing.

```tsx
<HistoryRouterProvider>
  <App />
</HistoryRouterProvider>
```

### `useNavigation()`

Hook to access navigation functions and state.

```tsx
const {
  navigate, // Navigate to a path
  goBack, // Go back in history
  goForward, // Go forward in history
  pathname, // Current pathname
  searchParams, // URL search params
  hash, // URL hash
} = useNavigation();
```

#### Methods

- **`navigate(path: string, options?)`** - Navigate to a new path
  - `options.replace?: boolean` - Replace current history entry
  - `options.state?: any` - Pass state to the new route

- **`goBack()`** - Navigate back in history
- **`goForward()`** - Navigate forward in history

### View Transitions (Web only)

Pepper automatically uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) when available for smooth page transitions.

```tsx
// Transitions happen automatically!
navigate("/about"); // ✨ Smooth transition
```

## 🎯 Why Pepper?

Most routers are built for one platform. Pepper works everywhere:

| Feature            | Pepper | React Router | Expo Router |
| ------------------ | ------ | ------------ | ----------- |
| Web                | ✅     | ✅           | ❌          |
| React Native       | ✅     | ❌           | ✅          |
| Browser Extensions | ✅     | ❌           | ❌          |
| View Transitions   | ✅     | ❌           | ❌          |
| Zero Config        | ✅     | ❌           | ❌          |

## 🏗️ Platform Detection

Pepper automatically detects your platform and uses the appropriate navigation method:

- **Web**: Uses `window.history` API with view transitions
- **React Native**: Uses in-memory history stack
- **Extensions**: Uses extension-compatible history management

## 📱 Examples

Check out the [examples](./examples) directory for complete working examples:

- [Web App](./examples/web)
- [React Native App](./examples/native)
- [Browser Extension](./examples/extension)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT © [Iliyan Velinov](https://github.com/askvex)

## 🔗 Links

- [GitHub](https://github.comchrryAIpepper)
- [Issues](https://github.comchrryAIpepper/issues)
- [Vex - Powered by Pepper](https://vex.chrry.ai)

---

Made with 🌶️ by the Vex team
