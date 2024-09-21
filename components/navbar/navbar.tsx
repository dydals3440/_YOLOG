import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/navbar/theme-toggle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10">
      <div className="text-lg font-bold md:text-xl">YOLOG</div>
      <ul className="hidden md:flex w-full justify-end items-center space-x-4 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="flex px-4 items-center space-x-1">
          <Link
            href="/login"
            className={buttonVariants({ variant: 'outline' })}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={buttonVariants({ variant: 'outline' })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="flex gap-x-4">
        <ModeToggle />
        <div className="flex items-center justify-center sm:hidden">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <HamburgerMenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
