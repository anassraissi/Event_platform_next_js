import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
            <img src="/assets/images/logo.svg" width={128} height={38} alt='Evently logo'></img>
        </Link>
    </div> 
    </header>
    )
}

export default Header