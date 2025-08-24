import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Pricing = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "1 WhatsApp Bot",
        "1,000 messages/month",
        "Basic AI responses",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "5 WhatsApp Bots",
        "10,000 messages/month",
        "Advanced AI + Custom training",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "A/B testing",
        "API access"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited scale with dedicated support",
      features: [
        "Unlimited bots",
        "Unlimited messages",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple, Transparent
            <span className="text-white"> Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                scale: plan.popular ? 1.08 : 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <motion.div 
                className={`bg-black border ${plan.popular ? 'border-white' : 'border-gray-800'} rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full relative overflow-hidden`}
                whileHover={{
                  boxShadow: plan.popular 
                    ? "0 20px 40px rgba(255,255,255,0.1)" 
                    : "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/5 to-transparent"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <motion.div 
                      className="flex items-baseline justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="space-y-4 mb-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 + 0.5 }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        variants={featureVariants}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.div 
                          className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button 
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'border border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: plan.popular 
                        ? "0 10px 25px rgba(255,255,255,0.2)" 
                        : "0 10px 25px rgba(255,255,255,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.6
                }
              }
            }}
          >
            {[
              {
                question: "Is this compliant with WhatsApp's terms?",
                answer: "Yes, we use Meta's official WhatsApp Business API, ensuring full compliance with all terms and conditions."
              },
              {
                question: "Can I customize the AI responses?",
                answer: "Absolutely! Our Python-based AI allows for complete customization and training on your specific business data."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer email support for Starter, priority support for Professional, and 24/7 dedicated support for Enterprise."
              },
              {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes, you can change your plan at any time. Changes take effect at the next billing cycle."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "#374151",
                  transition: { duration: 0.2 }
                }}
              >
                <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

