/**
 * 🌶️ Pepper Router
 * Universal router for React - works in web, React Native, and browser extensions
 */

// Core
export { ClientRouter, clientRouter } from "./core/ClientRouter"
export type { NavigateOptions, RouterState } from "./core/ClientRouter"

// Provider
export {
  HistoryRouterProvider,
  useHistoryRouter,
} from "./providers/HistoryRouterProvider"

// Hooks
export {
  useNavigation,
  useRouter,
  usePathname,
  useSearchParams,
  useHash,
} from "./hooks/useNavigation"
