import { useRef, useEffect, useState } from 'react'

const Footer = () => {
  const footerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

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

  return (
    <footer className={`relative border-t border-gray-800 bg-black ${isInView ? 'animate-fade-in' : 'opacity-0'}`} ref={footerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 hover-scale">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-lg">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">WhatsApp Bot Studio</h3>
                <p className="text-sm text-gray-400">Enterprise AI Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Build intelligent WhatsApp bots that convert visitors into customers. 
              Our platform combines the power of Meta&apos;s official API with advanced AI 
              to deliver exceptional customer experiences.
            </p>
            
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'GitHub'].map((social, index) => (
                <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover-scale">
                  <span className="text-sm font-semibold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Documentation', 'Support', 'API Reference', 'Tutorials'].map((link, index) => (
                <li key={link}>
                  <a href="#" className={`text-gray-400 hover:text-white transition-colors duration-300 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                     style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Case Studies', 'Webinars', 'Templates', 'Community', 'Partners'].map((resource, index) => (
                <li key={resource}>
                  <a href="#" className={`text-gray-400 hover:text-white transition-colors duration-300 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                     style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center ${isInView ? 'animate-fade-in animate-delay-800' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2024 WhatsApp Bot Studio. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Powered by</span>
            <div className="flex space-x-2">
              <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Meta API</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Python AI</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
