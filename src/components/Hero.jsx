import { motion } from 'framer-motion'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-8"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-gray-400">🚀 New: Meta API Integration Available</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
            Build Intelligent
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            > WhatsApp Bots</motion.span>
            <br />
            That Actually <motion.span 
              className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >Sell</motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Create sophisticated AI-powered WhatsApp business bots using Meta&apos;s official API and Python. 
            Automate customer support, boost sales, and scale your business with legitimate, enterprise-grade solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.button 
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Now
            </motion.button>
            <motion.button 
              className="w-full sm:w-auto border border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:border-gray-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
            variants={staggerContainer}
          >
            {[
              { number: "10K+", label: "Active Bots Deployed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Expert Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 border border-gray-800 rounded-xl bg-gray-900/50"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(255,255,255,0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Demo Preview */}
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        variants={floatingAnimation}
      >
        <div className="relative">
          <motion.div 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
            whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-4">WhatsBot Dashboard</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="space-y-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <motion.div 
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-green-400 text-sm mb-2">Customer → Bot</div>
                  <div className="text-white">Hi, I need help with pricing for your premium plan.</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <div className="text-gray-400 text-sm mb-2">AI Bot → Customer</div>
                  <div className="text-white">I&apos;d be happy to help! Our premium plan starts at $99/month and includes unlimited bots, advanced analytics, and priority support. Would you like me to show you a detailed comparison?</div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="bg-gray-800 border border-gray-700 rounded-lg p-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <h3 className="text-white font-semibold mb-4">Live Analytics</h3>
                <div className="space-y-3">
                  {[
                    { label: "Messages Today", value: "2,847", color: "text-white" },
                    { label: "Conversion Rate", value: "23.4%", color: "text-green-400" },
                    { label: "Response Time", value: "0.8s", color: "text-white" }
                  ].map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.8 + index * 0.2 }}
                    >
                      <span className="text-gray-400">{metric.label}</span>
                      <span className={`${metric.color} font-semibold`}>{metric.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
