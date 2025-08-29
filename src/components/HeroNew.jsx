import { useEffect, useState } from 'react'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const HeroComponent = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial size
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Technologies and features that orbit around the globe
  const orbitingTechs = [
    { name: "Meta API", icon: "🏢", delay: 0, color: "bg-gray-800" },
    { name: "WhatsApp", icon: "💬", delay: 1, color: "bg-gray-900" },
    { name: "Python AI", icon: "🐍", delay: 2, color: "bg-black" },
    { name: "Enterprise", icon: "🏆", delay: 3, color: "bg-gray-800" },
    { name: "Analytics", icon: "📊", delay: 4, color: "bg-gray-900" },
    { name: "24/7 Support", icon: "🛟", delay: 5, color: "bg-black" },
    { name: "Auto Scale", icon: "⚡", delay: 6, color: "bg-gray-800" },
    { name: "Secure", icon: "🔒", delay: 7, color: "bg-gray-900" }
  ]

  // Animated numbers effect
  const AnimatedCounter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      let start = 0
      const end = parseInt(target)
      if (start === end) return

      let totalMilSecDur = 2000
      let incrementTime = (totalMilSecDur / end) * 1
      let timer = setInterval(() => {
        start += 1
        setCount(String(start) + suffix)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }, [target])

    return <span>{count}</span>
  }

  return (
    <section className="min-h-screen bg-black md:bg-gradient-to-br md:from-black md:via-gray-900 md:to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-bg" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-bg-reverse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none animate-fade-in-left animate-delay-200">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm hover-scale animate-fade-in-up animate-delay-200">
              <span className="text-white text-xs sm:text-sm font-medium tracking-wider">
                🚀 Official Meta WhatsApp Business API Partner
              </span>
            </div>

            {/* Main Headline */}
            <div className="animate-fade-in-up animate-delay-400">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                Build{" "}
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] font-serif italic animate-shimmer">
                  Intelligent
                </span>
                <br />
                WhatsApp Bots
                <br />
                <span className="text-gray-400 font-light animate-fade-in animate-delay-1200">
                  That Convert
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light tracking-wide animate-fade-in-up animate-delay-600">
              Transform your business with AI-powered WhatsApp automation. Connect with customers, 
              automate support, and boost sales with our enterprise-grade platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-800">
              <SignedOut>
                <Link to="/sign-up">
                  <button className="px-8 py-4 bg-white text-black font-medium tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl w-full sm:w-auto hover-scale">
                    Start Free Trial
                  </button>
                </Link>
                <button className="px-8 py-4 bg-black border border-white/20 text-white font-medium tracking-wide rounded-xl hover:bg-white/5 transition-all duration-300 hover-scale">
                  Watch Demo
                </button>
              </SignedOut>
              <SignedIn>
                <Link to="/dashboard">
                  <button className="px-8 py-4 bg-white text-black font-medium tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl w-full sm:w-auto hover-scale">
                    Go to Dashboard
                  </button>
                </Link>
                <button className="px-8 py-4 bg-black border border-white/20 text-white font-medium tracking-wide rounded-xl hover:bg-white/5 transition-all duration-300 hover-scale">
                  Create New Bot
                </button>
              </SignedIn>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 animate-fade-in animate-delay-1500">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-white tracking-wide">
                  <AnimatedCounter target="500" suffix="K+" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest text-xs">Messages Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-white tracking-wide">
                  <AnimatedCounter target="99" suffix="%" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest text-xs">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-white tracking-wide">
                  <AnimatedCounter target="150" suffix="+" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest text-xs">Countries</div>
              </div>
            </div>
          </div>

          {/* Right side - Simplified Globe - Hidden on small devices */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 hidden md:flex animate-scale-in animate-delay-600"
               style={{ height: windowSize.width < 768 ? '400px' : windowSize.width < 1024 ? '500px' : '600px' }}>
            
            {/* Central Earth Globe */}
            <div className="relative rounded-full shadow-2xl overflow-hidden animate-rotate"
                 style={{
                   width: windowSize.width < 768 ? '300px' : windowSize.width < 1024 ? '350px' : '400px',
                   height: windowSize.width < 768 ? '300px' : windowSize.width < 1024 ? '350px' : '400px',
                   background: `
                     radial-gradient(circle at 30% 40%, #222, #000),
                     linear-gradient(45deg, #111, #000)
                   `,
                   border: '2px solid rgba(255,255,255,0.05)',
                   boxShadow: `
                     0 0 100px rgba(255, 255, 255, 0.15),
                     inset 0 0 50px rgba(0,0,0,0.8),
                     0 0 200px rgba(255, 255, 255, 0.05)
                   `
                 }}>
              
              {/* Simplified Continents */}
              <div className="absolute bg-white/15 rounded-lg animate-opacity-pulse"
                   style={{
                     width: '50px', height: '70px', top: '25%', left: '15%',
                     clipPath: 'polygon(20% 0%, 80% 10%, 85% 60%, 60% 90%, 10% 85%, 5% 40%)',
                     filter: 'blur(0.5px)'
                   }} />
              
              <div className="absolute bg-white/20 rounded-lg animate-opacity-pulse animate-delay-300"
                   style={{
                     width: '35px', height: '60px', top: '45%', left: '20%',
                     clipPath: 'polygon(30% 0%, 70% 5%, 85% 100%, 15% 95%)',
                     filter: 'blur(0.5px)'
                   }} />
              
              <div className="absolute bg-white/18 rounded-lg animate-opacity-pulse animate-delay-600"
                   style={{
                     width: '55px', height: '75px', top: '30%', left: '47%',
                     clipPath: 'polygon(40% 0%, 60% 0%, 80% 25%, 90% 60%, 85% 100%, 15% 95%, 10% 60%, 20% 25%)',
                     filter: 'blur(0.5px)'
                   }} />
              
              <div className="absolute bg-white/22 rounded animate-opacity-pulse animate-delay-900"
                   style={{
                     width: '40px', height: '30px', top: '20%', left: '48%',
                     clipPath: 'polygon(0% 40%, 30% 0%, 100% 20%, 90% 80%, 60% 100%, 20% 90%)',
                     filter: 'blur(0.5px)'
                   }} />

              {/* Simplified Grid Lines */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute w-full h-px bg-white/10 animate-fade-in animate-delay-1000"
                       style={{ 
                         top: `${20 + (i * 12)}%`,
                         transform: `scaleX(${Math.cos((i - 3) * 0.4)})`
                       }} />
                ))}
              </div>

              {/* Atmosphere Glow */}
              <div className="absolute inset-0 rounded-full animate-glow"
                   style={{
                     background: 'radial-gradient(circle, transparent 65%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.1) 85%, transparent 100%)',
                     filter: 'blur(2px)'
                   }} />

              {/* Central Logo/Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10 animate-rotate-reverse">
                <div className="bg-black backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl border border-white/20 hover-glow"
                     style={{
                       width: windowSize.width < 768 ? '50px' : '60px',
                       height: windowSize.width < 768 ? '50px' : '60px',
                     }}>
                  <span className={`text-white font-bold ${windowSize.width < 768 ? 'text-xl' : 'text-2xl'}`}>🌍</span>
                </div>
              </div>
            </div>

            {/* Simplified Orbiting Technologies */}
            {orbitingTechs.map((tech, index) => {
              const angle = (index / orbitingTechs.length) * 360
              const radius = windowSize.width < 768 ? 180 : windowSize.width < 1024 ? 200 : 220
              const techSize = windowSize.width < 768 ? 'w-16 h-16' : 'w-20 h-20'
              const iconSize = windowSize.width < 768 ? 'text-lg' : 'text-2xl'
              const textSize = windowSize.width < 768 ? 'text-xs' : 'text-xs'
              
              return (
                <div key={tech.name} className="absolute animate-fade-in animate-orbit hover-glow"
                     style={{
                       left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - ${windowSize.width < 768 ? '32px' : '40px'})`,
                       top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - ${windowSize.width < 768 ? '32px' : '40px'})`,
                       animationDelay: `${3 + tech.delay * 0.2}s, ${tech.delay * 0.5}s`
                     }}>
                  <div className={`${techSize} ${tech.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg backdrop-blur-sm border border-white/20 animate-orbit-counter`}>
                    <span className={`${iconSize} mb-1`}>{tech.icon}</span>
                    <span className={`${textSize} font-semibold text-center px-1 leading-tight`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Orbital Ring */}
            <div className="absolute rounded-full border border-white/5 animate-orbit animate-opacity-pulse"
                 style={{
                   width: windowSize.width < 768 ? '360px' : windowSize.width < 1024 ? '400px' : '440px',
                   height: windowSize.width < 768 ? '360px' : windowSize.width < 1024 ? '400px' : '440px',
                   left: '50%', top: '50%',
                   transform: 'translate(-50%, -50%)'
                 }} />
          </div>
        </div>
      </div>
    </section>
  )
}

// Export as a named export and as default
export const Hero = HeroComponent
export default HeroComponent
