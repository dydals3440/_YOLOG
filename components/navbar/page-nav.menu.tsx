'use client'

import Link from 'next/link'
import { Icons } from './icons'
import SiteConfig from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function PageNavMenu() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{SiteConfig.title}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/contact' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        Contact
      </Link>
    </nav>
  )
}
