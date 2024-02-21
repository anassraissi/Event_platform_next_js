import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItem  from '../shared/NavItem';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
            <img src="/assets/images/logo.svg" width={128} height={38} alt='Evently logo'></img>
        </Link>
        <nav className='md:flex-between hidden w-full max-w-xs'>
        <NavItem/>
        </nav>
    <div className="flex w-32 justify-end gap-3">
      <SignedIn> 
        <UserButton afterSignOutUrl='/'/>
        <NavMobile/>
      </SignedIn>
    <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
     </SignedOut>
    </div>
    </div>
    </header>
    )
}

export default Header