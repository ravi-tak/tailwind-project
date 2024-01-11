import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../contants'
import { hamburger } from '../assets/icons'

export default function Navbar() {
  return (
    <nav className='padding-x py-8 flex justify-between items-center info-text'>
      <a href='/'>
        <img
          src={headerLogo}
          alt='logo'
        />
      </a>

      <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className='padding-r flex gap-2 font-medium text-black max-lg:hidden'>
        <a href='/'>Sign in</a>
        <span>/</span>
        <a href='/'>Explore now</a>
      </div>

      <div className='hidden max-lg:block'>
        <img
          src={hamburger}
          alt='hamburger icon'
          width={25}
          height={25}
        />
      </div>
    </nav>
  )
}
