import { useState, useEffect } from 'react'


const Documentation = () => {
  const [activeTab, setActiveTab] = useState('quickstart')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const tabs = [
    { id: 'quickstart', label: 'Quick Start', icon: '🚀' },
    { id: 'api', label: 'API Reference', icon: '📚' },
    { id: 'examples', label: 'Examples', icon: '💡' },
    { id: 'sdks', label: 'SDKs', icon: '🔧' }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <div 
        className="bg-gray-950 border-b border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            {...fadeInUp}
          >
            Documentation
          </h1>
          <p 
            className="text-xl text-gray-400 max-w-2xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to build powerful WhatsApp bots with our platform
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-black'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{tab.icon}</span>
                      <span className="font-medium">{tab.label}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div 
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {activeTab === 'quickstart' && (
              <div variants={fadeInUp} className="space-y-8">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Quick Start Guide</h2>
                  <p className="text-gray-400 mb-6">Get your first WhatsApp bot running in under 5 minutes.</p>
                  
                  <div className="space-y-6">
                    <div className="bg-black border border-gray-700 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">1. Install the SDK</h3>
                      <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                        pip install whatsbot-pro
                      </div>
                    </div>
                    
                    <div className="bg-black border border-gray-700 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">2. Initialize Your Bot</h3>
                      <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                        from whatsbot import WhatsBot<br/>
                        bot = WhatsBot(api_key="your_api_key")
                      </div>
                    </div>
                    
                    <div className="bg-black border border-gray-700 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">3. Start Building</h3>
                      <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                        @bot.message_handler()<br/>
                        def handle_message(message):<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;return "Hello from WhatsBot!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div variants={fadeInUp} className="space-y-8">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
                  <p className="text-gray-400 mb-6">Complete API documentation for WhatsBot Pro.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black border border-gray-700 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-3">Messages API</h3>
                      <p className="text-gray-400 text-sm mb-4">Send and receive messages</p>
                      <div className="space-y-2">
                        <div className="text-green-400 text-sm font-mono">POST /api/v1/messages/send</div>
                        <div className="text-blue-400 text-sm font-mono">GET /api/v1/messages/history</div>
                      </div>
                    </div>
                    
                    <div className="bg-black border border-gray-700 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-3">Bots API</h3>
                      <p className="text-gray-400 text-sm mb-4">Manage your bot instances</p>
                      <div className="space-y-2">
                        <div className="text-green-400 text-sm font-mono">POST /api/v1/bots/create</div>
                        <div className="text-yellow-400 text-sm font-mono">PUT /api/v1/bots/update</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
