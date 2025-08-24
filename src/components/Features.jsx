import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const features = [
    {
      icon: "🤖",
      title: "Meta API Integration",
      description: "Official WhatsApp Business API integration with full compliance and enterprise-grade security.",
      benefits: ["Verified business account", "Rich media support", "Global reach", "99.9% delivery rate"]
    },
    {
      icon: "🐍",
      title: "Python-Powered AI",
      description: "Advanced AI capabilities built with Python, featuring natural language processing and machine learning.",
      benefits: ["Custom AI models", "Multi-language support", "Context awareness", "Continuous learning"]
    },
    {
      icon: "⚡",
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with live metrics, conversation insights, and performance tracking.",
      benefits: ["Live chat monitoring", "Conversion tracking", "Performance insights", "Custom reports"]
    },
    {
      icon: "🔧",
      title: "No-Code Builder",
      description: "Intuitive drag-and-drop interface to create complex conversation flows without coding.",
      benefits: ["Visual flow builder", "Pre-built templates", "Instant deployment", "A/B testing"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption, GDPR compliance, and secure data handling for peace of mind.",
      benefits: ["End-to-end encryption", "GDPR compliant", "SOC 2 certified", "Data residency"]
    },
    {
      icon: "🚀",
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your business growth.",
      benefits: ["Auto-scaling", "99.9% uptime", "Global CDN", "Load balancing"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 lg:py-32 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything You Need to Build
            <span className="text-white"> Winning Bots</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our platform combines the power of Meta&apos;s official API with cutting-edge AI technology, 
            giving you all the tools to create bots that actually convert.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full"
                whileHover={{ 
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div 
                      key={benefitIndex} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + benefitIndex * 0.1 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Showcase */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Seamless Integrations
            </h3>
            <p className="text-gray-400">Connect with your favorite tools and platforms</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {['Meta', 'OpenAI', 'Python', 'MongoDB', 'AWS', 'Stripe'].map((integration, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-white font-semibold">{integration}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
