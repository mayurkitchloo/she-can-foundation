import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/she-can-logo.avif'

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const progress = Math.min(scrollY / 800, 1)
      setScrollProgress(progress)
      setPastHero(scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = `font-medium transition-colors hover:text-[#E8431A] ${pastHero ? 'text-[#1a1f3a]' : 'text-white'}`

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-4'>
      <motion.nav
        animate={{
          width: `${70 + scrollProgress * 25}%`,
          borderRadius: `${999 - scrollProgress * 950}px`,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className='flex items-center justify-between px-6 py-3 bg-white/20 backdrop-blur-md shadow-md border border-white/30'
      >
        <img src={logo} alt='She Can Foundation' className='h-10 w-10 rounded-full object-cover' />

        <div className='hidden md:flex items-center gap-8'>
          <a href='#programs' className={linkClass}>Programs</a>
          <a href='#about' className={linkClass}>About</a>
          <a href='#gallery' className={linkClass}>Gallery</a>
          <a href='#contact' className={linkClass}>Contact</a>
        </div>

        <a
          href='#contact'
          className='bg-[#E8431A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#c73a15] transition-colors'
        >
          Get Involved
        </a>
      </motion.nav>
    </div>
  )
}

export default Navbar
