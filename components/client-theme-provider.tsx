'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }

  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default Providers
