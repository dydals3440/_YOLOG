import React from 'react'
import type { Metadata } from 'next'
import { Inter as Fontsans } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar/navbar'
import ClientThemeProvider from '@/components/client-theme-provider'

import { cn } from '@/lib/utils'
import SiteConfig from '@/config/site'

const fontSans = Fontsans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ClientThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  )
}
