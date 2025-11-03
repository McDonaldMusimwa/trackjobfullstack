

import { useEffect, useState } from 'react'

import { DesktopHeader } from './ui/desktop'
import { MobileHeader } from './ui/mobile'

export default function Header() {

  const [screensize, setScreensize] = useState(700)

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
  return (
    <>
     {screensize >700 ?<DesktopHeader/>:<MobileHeader/>}
    </>
  )
}
