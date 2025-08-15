'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    // Temporarily disable Lenis to test if it's the issue
    // const lenis = new Lenis({ 
    //   duration: 1.1, 
    //   smoothWheel: true,
    //   smoothTouch: false,
    //   normalizeWheel: true
    // })
    
    // function raf(time: number) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    
    // requestAnimationFrame(raf)
    
    // return () => { 
    //   lenis.destroy() 
    // }
  }, [])
  return null
}
