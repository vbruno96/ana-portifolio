'use client'

import { useEffect, useState } from 'react'
import { Menu } from './Menu'
import Sidebar from './Sidebar'
import clsx from 'clsx'

export function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
          'flex items-center justify-end gap-6 pr-9 pt-10 2xl:mx-auto 2xl:max-w-[1440px] 2xl:pr-0',
          {
            'pt-[8rem]': screenWidth <= 1023,
          },
        )}
      >
        <button className="font-base rounded-lg px-4 py-[0.625rem] text-black transition hover:bg-purple hover:bg-opacity-15 hover:font-semibold">
          Português - Br
        </button>
        <button className="font-base rounded-lg bg-purple bg-opacity-15 px-4 py-[0.625rem] font-semibold text-black transition hover:bg-purple hover:bg-opacity-15 hover:font-semibold">
          English - US
        </button>
      </div>
    </header>
  )
}
