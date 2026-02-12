import { useEffect, useState } from "react"
import { clientRouter, NavigateOptions } from "../core/ClientRouter"

export function useRouter() {
  return {
    push: clientRouter.push.bind(clientRouter),
    replace: clientRouter.replace.bind(clientRouter),
    back: clientRouter.back.bind(clientRouter),
    forward: clientRouter.forward.bind(clientRouter),
    refresh: clientRouter.refresh.bind(clientRouter),
    prefetch: clientRouter.prefetch.bind(clientRouter),
  }
}

export function usePathname() {
  const [pathname, setPathname] = useState(clientRouter.getState().pathname)

  useEffect(() => {
    const unsubscribe = clientRouter.subscribe(() => {
      setPathname(clientRouter.getState().pathname)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return pathname
}

export function useSearchParams() {
  const [searchParams, setSearchParams] = useState(
    clientRouter.getState().searchParams,
  )

  useEffect(() => {
    const unsubscribe = clientRouter.subscribe(() => {
      setSearchParams(clientRouter.getState().searchParams)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return searchParams
}

export function useHash() {
  const [hash, setHash] = useState(clientRouter.getState().hash)

  useEffect(() => {
    const unsubscribe = clientRouter.subscribe(() => {
      setHash(clientRouter.getState().hash)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return hash
}

/**
 * Main navigation hook - provides all navigation methods and state
 *
 * @example
 * ```tsx
 * const { navigate, pathname, searchParams } = useNavigation()
 *
 * navigate('/about')
 * navigate('/search?q=pepper', { replace: true })
 * ```
 */
export function useNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hash = useHash()

  return {
    // Navigation methods
    navigate: router.push,
    replace: router.replace,
    goBack: router.back,
    goForward: router.forward,
    refresh: router.refresh,
    prefetch: router.prefetch,

    // Current state
    pathname,
    searchParams,
    hash,
  }
}
