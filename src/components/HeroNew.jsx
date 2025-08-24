import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(20,20,20,0.9)" }}
            >
              <motion.span 
                className="text-white text-xs sm:text-sm font-medium tracking-wider"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀 Official Meta WhatsApp Business API Partner
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Build{" "}
                <motion.span 
                  className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] font-serif italic"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Intelligent
                </motion.span>
                <br />
                WhatsApp Bots
                <br />
                <motion.span 
                  className="text-gray-400 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  That Convert
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transform your business with AI-powered WhatsApp automation. Connect with customers, 
              automate support, and boost sales with our enterprise-grade platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-4 bg-white text-black font-medium tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-black border border-white/20 text-white font-medium tracking-wide rounded-xl hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Right side - Realistic Earth Globe - Hidden on small devices */}
          <motion.div 
            className="relative flex items-center justify-center order-1 lg:order-2 hidden md:flex"
            style={{ height: windowSize.width < 768 ? '400px' : windowSize.width < 1024 ? '500px' : '600px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, type: "spring", stiffness: 100 }}
          >
            {/* Central Earth Globe */}
            <motion.div 
              className="relative rounded-full shadow-2xl overflow-hidden"
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
              }}
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
              }}
            >
              {/* Continents and Land Masses */}
              
              {/* North America */}
              <motion.div
                className="absolute bg-white/15 rounded-lg"
                style={{
                  width: '50px',
                  height: '70px',
                  top: '25%',
                  left: '15%',
                  clipPath: 'polygon(20% 0%, 80% 10%, 85% 60%, 60% 90%, 10% 85%, 5% 40%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.15, 0.2, 0.15]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4, repeat: Infinity }
                }}
              />
              
              {/* South America */}
              <motion.div
                className="absolute bg-white/20 rounded-lg"
                style={{
                  width: '35px',
                  height: '60px',
                  top: '45%',
                  left: '20%',
                  clipPath: 'polygon(30% 0%, 70% 5%, 85% 100%, 15% 95%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 5, repeat: Infinity }
                }}
              />
              
              {/* Africa */}
              <motion.div
                className="absolute bg-white/18 rounded-lg"
                style={{
                  width: '55px',
                  height: '75px',
                  top: '30%',
                  left: '47%',
                  clipPath: 'polygon(40% 0%, 60% 0%, 80% 25%, 90% 60%, 85% 100%, 15% 95%, 10% 60%, 20% 25%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.18, 0.23, 0.18]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3.5, repeat: Infinity }
                }}
              />
              
              {/* Europe */}
              <motion.div
                className="absolute bg-white/22 rounded"
                style={{
                  width: '40px',
                  height: '30px',
                  top: '20%',
                  left: '48%',
                  clipPath: 'polygon(0% 40%, 30% 0%, 100% 20%, 90% 80%, 60% 100%, 20% 90%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.22, 0.27, 0.22]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity }
                }}
              />
              
              {/* Asia */}
              <motion.div
                className="absolute bg-white/15 rounded-lg"
                style={{
                  width: '80px',
                  height: '60px',
                  top: '15%',
                  left: '58%',
                  clipPath: 'polygon(0% 30%, 25% 0%, 80% 10%, 100% 40%, 90% 80%, 70% 100%, 30% 90%, 10% 60%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.15, 0.2, 0.15]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4.5, repeat: Infinity }
                }}
              />
              
              {/* Australia */}
              <motion.div
                className="absolute bg-white/25 rounded"
                style={{
                  width: '30px',
                  height: '25px',
                  top: '65%',
                  left: '75%',
                  clipPath: 'polygon(10% 20%, 80% 0%, 100% 60%, 70% 100%, 0% 80%)',
                  filter: 'blur(0.5px)'
                }}
                animate={{ 
                  rotateY: [0, -360],
                  opacity: [0.25, 0.3, 0.25]
                }}
                transition={{ 
                  rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3.8, repeat: Infinity }
                }}
              />

              {/* Latitude Lines */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-white/10"
                    style={{ 
                      top: `${15 + (i * 10)}%`,
                      transform: `scaleX(${Math.cos((i - 4) * 0.4)})`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>

              {/* Longitude Lines */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-full w-px bg-white/10 left-1/2 origin-center"
                    style={{ 
                      transform: `translateX(-50%) rotateZ(${i * 15}deg)`,
                      background: `linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent 100%)`
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 0.3, scaleY: 1 }}
                    transition={{ delay: 2.5 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>

              {/* Cloud Layer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05), transparent 30%),
                    radial-gradient(circle at 75% 30%, rgba(255,255,255,0.04), transparent 25%),
                    radial-gradient(circle at 60% 70%, rgba(255,255,255,0.03), transparent 20%),
                    radial-gradient(circle at 30% 80%, rgba(255,255,255,0.045), transparent 28%)
                  `,
                }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  rotateZ: [0, 360]
                }}
                transition={{ 
                  opacity: { duration: 6, repeat: Infinity },
                  rotateZ: { duration: 50, repeat: Infinity, ease: "linear" }
                }}
              />

              {/* Atmosphere Glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, transparent 65%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.1) 85%, transparent 100%)',
                  filter: 'blur(2px)'
                }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Central Logo/Icon */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-10"
                animate={{ rotateY: [0, -360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="bg-black backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl border border-white/20"
                  style={{
                    width: windowSize.width < 768 ? '50px' : '60px',
                    height: windowSize.width < 768 ? '50px' : '60px',
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.4)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className={`text-white font-bold ${windowSize.width < 768 ? 'text-xl' : 'text-2xl'}`}>🌍</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Orbiting Technologies */}
            {orbitingTechs.map((tech, index) => {
              const angle = (index / orbitingTechs.length) * 360
              const radius = windowSize.width < 768 ? 180 : windowSize.width < 1024 ? 200 : 220
              const techSize = windowSize.width < 768 ? 'w-16 h-16' : 'w-20 h-20'
              const iconSize = windowSize.width < 768 ? 'text-lg' : 'text-2xl'
              const textSize = windowSize.width < 768 ? 'text-xs' : 'text-xs'
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotateZ: [angle, angle + 360]
                  }}
                  transition={{ 
                    opacity: { delay: 3 + tech.delay * 0.2, duration: 0.5 },
                    scale: { delay: 3 + tech.delay * 0.2, duration: 0.5, type: "spring" },
                    rotateZ: { duration: 40, repeat: Infinity, ease: "linear", delay: tech.delay * 0.5 }
                  }}
                  style={{
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - ${windowSize.width < 768 ? '32px' : '40px'})`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - ${windowSize.width < 768 ? '32px' : '40px'})`,
                  }}
                >
                  <motion.div 
                    className={`${techSize} ${tech.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg backdrop-blur-sm border border-white/20`}
                    whileHover={{ 
                      scale: windowSize.width < 768 ? 1.2 : 1.3, 
                      zIndex: 10,
                      boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
                    }}
                    animate={{ 
                      rotateZ: [0, -360]
                    }}
                    transition={{ 
                      rotateZ: { duration: 40, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <span className={`${iconSize} mb-1`}>{tech.icon}</span>
                    <span className={`${textSize} font-semibold text-center px-1 leading-tight`}>
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Connection Lines to Globe */}
            {orbitingTechs.map((_, index) => {
              const angle = (index / orbitingTechs.length) * 360
              const innerRadius = windowSize.width < 768 ? 150 : windowSize.width < 1024 ? 175 : 200
              const outerRadius = windowSize.width < 768 ? 180 : windowSize.width < 1024 ? 200 : 220
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0.2, 0.4, 0.2], scaleX: 1 }}
                  transition={{ 
                    delay: 4 + index * 0.1, 
                    duration: 0.8,
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                  }}
                  style={{
                    height: `${outerRadius - innerRadius}px`,
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * innerRadius}px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * innerRadius}px)`,
                    transform: `rotateZ(${angle + 90}deg)`,
                    transformOrigin: 'top center'
                  }}
                />
              )
            })}

            {/* Orbital Ring */}
            <motion.div 
              className="absolute rounded-full border border-white/5"
              style={{
                width: windowSize.width < 768 ? '360px' : windowSize.width < 1024 ? '400px' : '440px',
                height: windowSize.width < 768 ? '360px' : windowSize.width < 1024 ? '400px' : '440px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{ 
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Export as a named export and as default
export const Hero = HeroComponent
export default HeroComponent
