import { useState } from 'react'
import { motion } from 'framer-motion'

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const categories = [
    { id: 'general', label: 'General', icon: '💬' },
    { id: 'technical', label: 'Technical', icon: '🔧' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'api', label: 'API Issues', icon: '🔌' }
  ]

  const faqs = {
    general: [
      {
        question: "How do I get started with WhatsBot Pro?",
        answer: "Simply sign up for an account, choose your plan, and follow our quick start guide. You'll have your first bot running in under 5 minutes."
      },
      {
        question: "Is WhatsBot Pro compliant with WhatsApp's terms?",
        answer: "Yes, we use Meta's official WhatsApp Business API, ensuring full compliance with all terms and conditions."
      }
    ],
    technical: [
      {
        question: "What programming languages are supported?",
        answer: "Our platform primarily uses Python for AI capabilities, but we provide SDKs for Python, Node.js, and REST APIs for any language."
      },
      {
        question: "How do I handle webhook events?",
        answer: "Configure your webhook URL in the dashboard, and we'll send all message events to your endpoint in real-time."
      }
    ],
    billing: [
      {
        question: "Can I change my plan anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee for all plans. Contact support for assistance."
      }
    ],
    api: [
      {
        question: "What's the API rate limit?",
        answer: "Rate limits vary by plan: Starter (100/min), Professional (1000/min), Enterprise (unlimited)."
      },
      {
        question: "How do I authenticate API requests?",
        answer: "Use your API key in the Authorization header: 'Bearer YOUR_API_KEY'"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <motion.div 
        className="bg-gray-950 border-b border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            {...fadeInUp}
          >
            Support Center
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get help and find answers to your questions
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Options */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-gray-400 mb-4">Get help via email within 24 hours</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200">
              Send Email
            </button>
          </motion.div>

          <motion.div 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400 mb-4">Chat with our support team instantly</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200">
              Start Chat
            </button>
          </motion.div>

          <motion.div 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400 mb-4">Join our developer community</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200">
              Join Discord
            </button>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-4"
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {faqs[selectedCategory].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Still need help?</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="Describe your issue briefly"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your issue..."
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Support
