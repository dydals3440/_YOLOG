import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/navbar/theme-toggle'

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b backdrop-blur flex px-8 items-center">
      <div className="font-bold text-xl">YOLOG</div>
      <ul className="flex w-full justify-end items-center gap-x-4">
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
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
