import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Footer = () => {
  const footerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900" ref={footerRef}>
      {/* Background Effects - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            
            {/* Company Info - Full width on mobile, spans 2 columns on large screens */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base sm:text-lg">W</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl blur opacity-50 -z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">WhatsBot Pro</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">AI-Powered Messaging</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transform your business with intelligent WhatsApp automation. 
                Join thousands of companies already using our platform to boost sales and improve customer experience.
              </p>
              
              {/* Contact Info - Stack on mobile */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">support@whatsbotpro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links - Larger touch targets on mobile */}
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social, index) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    aria-label={social.label}
                    className="w-10 sm:w-10 h-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 group active:scale-95"
                  >
                    <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-6">Product</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Features', href: '/features' },
                  { name: 'Pricing', href: '/home#pricing' },
                  { name: 'Integrations', href: '#' },
                  { name: 'API Docs', href: '/documentation' },
                  { name: 'Templates', href: '#' },
                  { name: 'Changelog', href: '#' }
                ].map((link, index) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'About Us', href: '#' },
                  { name: 'Careers', href: '#' },
                  { name: 'Blog', href: '#' },
                  { name: 'Press Kit', href: '#' },
                  { name: 'Partners', href: '#' },
                  { name: 'Contact', href: '/support' }
                ].map((link, index) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-6">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Help Center', href: '/support' },
                  { name: 'Case Studies', href: '#' },
                  { name: 'Webinars', href: '#' },
                  { name: 'Community', href: '#' },
                  { name: 'Status Page', href: '#' },
                  { name: 'Security', href: '#' }
                ].map((link, index) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base py-1 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter - Full width on small screens */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3 sm:mb-4">
                Get the latest updates, tips, and exclusive offers delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                <div className="flex flex-col space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group text-sm sm:text-base"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-xs">No spam, unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-xs">10,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`pt-6 sm:pt-8 border-t border-gray-800 ${isInView ? 'animate-fade-in animate-delay-800' : 'opacity-0'}`}>
            <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
              {/* Copyright and Legal */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                  © 2025 WhatsBot Pro. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-4 text-xs sm:text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 py-1">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 py-1">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 py-1">Cookie Policy</a>
                </div>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-col items-center lg:items-end space-y-2">
                <span className="text-gray-400 text-xs sm:text-sm">Powered by</span>
                <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                  <span className="bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap">
                    WhatsApp Business API
                  </span>
                  <span className="bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                    OpenAI
                  </span>
                  <span className="bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                    Enterprise Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto px-4">
                WhatsBot Pro is not affiliated with WhatsApp Inc. WhatsApp is a trademark of Meta Platforms, Inc. 
                We are an authorized Business Solution Provider using the official WhatsApp Business API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
