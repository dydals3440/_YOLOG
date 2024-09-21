'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/navbar/theme-toggle'
import SiteConfig from '@/config/site'

import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import MobileNav from '@/components/navbar/mobile-nav'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/navbar/icons'
import { PageNavMenu } from '@/components/navbar/page-nav.menu'

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    setProgress(30)
    setTimeout(() => {
      setProgress(100)
    }, 100)
  }, [pathname])

  useEffect(() => {
    setProgress(0)
  }, [])

  return (
    <nav className="h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-center z-10">
      <LoadingBar
        color="#000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <PageNavMenu />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={SiteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex',
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={SiteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex',
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={SiteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex',
                )}
              >
                <Icons.linkedIn className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
