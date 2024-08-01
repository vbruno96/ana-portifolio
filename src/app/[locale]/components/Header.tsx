'use client'

import { useEffect, useState } from 'react'
import { Menu } from './Menu'
import Sidebar from './Sidebar'
import clsx from 'clsx'
import { usePathname, Link } from '@/navigation'
import { useLocale } from 'next-intl'

export function Header() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440,
  )

  const pathname = usePathname()
  const locale = useLocale()

  function handleResizeScreen() {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeScreen)

    return () => window.removeEventListener('resize', handleResizeScreen)
  }, [])

  return (
    <header>
      {screenWidth > 1023 ? <Sidebar /> : <Menu />}
      <div
        className={clsx(
          'flex items-center justify-end gap-4 px-4 lg:gap-6 lg:pr-9 lg:pt-10 2xl:mx-auto 2xl:max-w-[1440px] 2xl:pr-0',
          {
            'pt-[8rem]': screenWidth <= 1023,
          },
        )}
      >
        <Link
          href={pathname}
          locale="pt-br"
          className={clsx(
            'rounded-lg bg-opacity-15 px-4 py-1.5 text-center text-xs text-black transition hover:bg-purple hover:bg-opacity-15 lg:py-[0.625rem] lg:text-base',
            {
              'bg-purple font-semibold': locale === 'pt-br',
            },
          )}
        >
          Português - Br
        </Link>
        <Link
          href={pathname}
          locale="en"
          className={clsx(
            'rounded-lg bg-opacity-15 px-4 py-1.5 text-center text-xs text-black transition hover:bg-purple hover:bg-opacity-15 lg:py-[0.625rem] lg:text-base',
            {
              'bg-purple font-semibold': locale === 'en',
            },
          )}
        >
          English - US
        </Link>
      </div>
    </header>
  )
}
