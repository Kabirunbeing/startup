import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/home#pricing' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Support', href: '/support' }
  ]

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside, { passive: true })
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-200 will-change-transform ${
        scrolled 
          ? 'bg-black border-b border-gray-800/50' 
          : 'bg-black border-b border-gray-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/home" className="flex items-center space-x-3 transition-transform duration-200 active:scale-95">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight tracking-tight">WhatsBot Pro</span>
                <span className="text-gray-400 text-xs font-medium tracking-wide">AI-Powered Messaging</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.href.startsWith('/home#') ? (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 relative py-2 px-1 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></div>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-colors duration-200 relative py-2 px-1 group ${
                      location.pathname === item.href 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform transition-transform duration-200 origin-left ${
                      location.pathname === item.href 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Link to="/sign-in">
                <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-800/50 font-medium tracking-wide">
                  Sign In
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold tracking-wide transition-transform duration-200 hover:scale-105 active:scale-95">
                  <span className="relative z-10">Get Started</span>
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard">
                <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-800/50 font-medium tracking-wide">
                  Dashboard
                </button>
              </Link>
              <div className="relative">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: 'w-9 h-9 rounded-lg border-2 border-gray-700 hover:border-gray-500 transition-colors duration-200',
                      userButtonPopoverCard: 'bg-gray-900 border border-gray-700',
                      userButtonPopoverActionButton: 'text-gray-300 hover:text-white hover:bg-gray-800',
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative w-10 h-10 rounded-lg text-white active:bg-gray-800/50 transition-colors duration-150 flex items-center justify-center touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-1 w-full h-0.5 bg-current transform transition-transform duration-200 will-change-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-4 w-full h-0.5 bg-current transform transition-transform duration-200 will-change-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-800/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.href.startsWith('/home#') ? (
                    <a
                      href={item.href}
                      className="text-gray-300 active:text-white transition-colors duration-150 py-2 px-4 rounded-lg active:bg-gray-800/50 block touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`transition-colors duration-150 py-2 px-4 rounded-lg active:bg-gray-800/50 block touch-manipulation ${
                        location.pathname === item.href 
                          ? 'text-white bg-gray-800/30' 
                          : 'text-gray-300 active:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800/50">
                <SignedOut>
                  <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
                    <button className="text-gray-300 active:text-white transition-colors duration-150 py-2 px-4 rounded-lg active:bg-gray-800/50 w-full text-left font-medium tracking-wide touch-manipulation">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold tracking-wide active:scale-95 transition-transform duration-150 w-full touch-manipulation">
                      Get Started
                    </button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <button className="text-gray-300 active:text-white transition-colors duration-150 py-2 px-4 rounded-lg active:bg-gray-800/50 w-full text-left font-medium tracking-wide touch-manipulation">
                      Dashboard
                    </button>
                  </Link>
                  <div className="flex items-center justify-center pt-2">
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: 'w-9 h-9 rounded-lg border-2 border-gray-700',
                          userButtonPopoverCard: 'bg-gray-900 border border-gray-700',
                          userButtonPopoverActionButton: 'text-gray-300 hover:text-white hover:bg-gray-800',
                        }
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header