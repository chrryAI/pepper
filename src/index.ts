/**
 * 🌶️ Pepper Router
 * Universal router for React - works in web, React Native, and browser extensions
 */

export type { NavigateOptions, RouterState } from "./core/ClientRouter"
// Core
export { ClientRouter, clientRouter } from "./core/ClientRouter"
// Hooks
export {
  useHash,
  useNavigation,
  usePathname,
  useRouter,
  useSearchParams,
} from "./hooks/useNavigation"
// Provider
export {
  HistoryRouterProvider,
  useHistoryRouter,
} from "./providers/HistoryRouterProvider"
