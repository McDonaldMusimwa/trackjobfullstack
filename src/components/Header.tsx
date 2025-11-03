'use client'
import { useEffect, useState } from 'react'

import { DesktopHeader } from './ui/desktop'
import { MobileHeader } from './ui/mobile'

export default function Header() {
  const [screensize, setScreensize] = useState<number | null>(null)

  useEffect(() => {
    function handleresize() {
      setScreensize(window.innerWidth)
    }
    window.addEventListener('resize', handleresize)
    return () => {
      window.removeEventListener('resize', handleresize)
    }
  }, [])

  console.log('screen size', screensize)
  if (screensize === null) return null
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </>
  )
}
