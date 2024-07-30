'use client'

import Image from 'next/image'

import logo from '../assets/ana-paula.svg'
import clsx from 'clsx'
import { usePathname, Link } from '@/navigation'

import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa6'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed h-screen w-[9.6875rem] bg-purple pb-[4.75rem] pl-9 pr-6 pt-10 text-white">
      <Link href="/" className="mb-[6.875rem] block">
        <Image src={logo} alt="" />
      </Link>
      <nav className="mb-[17.5rem]">
        <ul className="space-y-5">
          <li
            className={clsx(
              'relative after:absolute after:-bottom-1 after:block after:h-1 after:w-10/12 after:origin-left after:scale-x-0 after:bg-gradient-to-tr after:from-pink after:to-[#EBEBEB] after:transition after:duration-300 hover:font-bold after:hover:scale-x-100',
              {
                'font-bold after:scale-x-100': pathname === '/',
              },
            )}
          >
            <Link className="font-ibm text-base uppercase" href="/">
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
            <Link className="font-ibm text-base uppercase" href="/about">
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
            <Link className="font-ibm text-base uppercase" href="/works">
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
            <Link className="font-ibm text-base uppercase" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mb-14">
        <ul className="space-y-3">
          <li>
            <Link
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-purple"
            >
              <FaBehance />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-purple"
            >
              <FaDribbble />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-purple"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <span className="font-ibm text-xs">
        Copyright &copy;{new Date().getFullYear().toString()}
      </span>
    </aside>
  )
}
