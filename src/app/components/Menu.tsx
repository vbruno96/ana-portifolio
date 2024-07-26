'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../assets/ana-paula.svg'
import { useState } from 'react'

export function Menu() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  function handleToggleMenu() {
    setIsOpen(!isOpen)
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <div
      className="group fixed z-50 w-full bg-purple px-4 py-6"
      data-menu-open={isOpen}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="" className="size-10" width={40} height={40} />
        </Link>
        <button onClick={handleToggleMenu} className="relative size-5">
          <span className="absolute block h-[2.5px] w-full rounded-full bg-off-white transition-all ease-in-out before:absolute before:-top-1.5 before:block before:h-[2.5px] before:w-full before:rounded-full before:bg-off-white before:transition-all before:ease-in-out after:absolute after:top-1.5 after:block after:h-[2.5px] after:w-full after:rounded-full after:bg-off-white after:transition-all after:ease-in-out group-data-[menu-open=true]:rotate-45 group-data-[menu-open=true]:before:top-0 group-data-[menu-open=true]:before:w-0 group-data-[menu-open=true]:after:top-0 group-data-[menu-open=true]:after:rotate-90" />
        </button>
      </div>
      <nav className="max-h-[12.75rem] w-full overflow-hidden transition-all duration-300 ease-in group-data-[menu-open=false]:max-h-0 group-data-[menu-open=false]:opacity-0">
        <ul className="my-6 max-w-20 space-y-5 text-white">
          <li
            className={clsx(
              'relative after:absolute after:-bottom-1 after:block after:h-1 after:w-10/12 after:origin-left after:scale-x-0 after:bg-gradient-to-tr after:from-pink after:to-[#EBEBEB] after:transition after:duration-300 hover:font-bold after:hover:scale-x-100',
              {
                'font-bold after:scale-x-100': pathname === '/',
              },
            )}
          >
            <Link
              className="font-ibm text-base uppercase"
              href="/"
              onClick={handleToggleMenu}
            >
              Home
            </Link>
          </li>
          <li
            className={clsx(
              'relative after:absolute after:-bottom-1 after:block after:h-1 after:w-10/12 after:origin-left after:scale-x-0 after:bg-gradient-to-tr after:from-pink after:to-[#EBEBEB] after:transition after:duration-300 hover:font-bold after:hover:scale-x-100',
              {
                'font-bold after:scale-x-100': pathname === '/about',
              },
            )}
          >
            <Link
              className="font-ibm text-base uppercase"
              href="/about"
              onClick={handleToggleMenu}
            >
              About
            </Link>
          </li>
          <li
            className={clsx(
              'relative after:absolute after:-bottom-1 after:block after:h-1 after:w-10/12 after:origin-left after:scale-x-0 after:bg-gradient-to-tr after:from-pink after:to-[#EBEBEB] after:transition after:duration-300 hover:font-bold after:hover:scale-x-100',
              {
                'font-bold after:scale-x-100': pathname === '/works',
              },
            )}
          >
            <Link
              className="font-ibm text-base uppercase"
              href="/works"
              onClick={handleToggleMenu}
            >
              Works
            </Link>
          </li>
          <li
            className={clsx(
              'relative after:absolute after:-bottom-1 after:block after:h-1 after:w-10/12 after:origin-left after:scale-x-0 after:bg-gradient-to-tr after:from-pink after:to-[#EBEBEB] after:transition after:duration-300 hover:font-bold after:hover:scale-x-100',
              {
                'font-bold after:scale-x-100': pathname === '/contact',
              },
            )}
          >
            <Link
              className="font-ibm text-base uppercase"
              href="/contact"
              onClick={handleToggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
