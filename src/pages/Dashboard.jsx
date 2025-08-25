import { useUser, UserButton } from '@clerk/clerk-react'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-white tracking-tight">
                WhatsApp Bot Platform
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-light">
                Welcome, {user?.firstName || 'User'}
              </span>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: 'w-8 h-8',
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Welcome to Your Dashboard
          </h2>
          <p className="text-xl text-gray-400 font-light tracking-wide">
            Start building intelligent WhatsApp bots today
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-light text-white mb-2">0</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Active Bots</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-light text-white mb-2">1,000</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Free Messages</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-light text-white mb-2">14</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Days Trial Left</div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-xl font-medium text-white mb-2 tracking-wide">Create Your First Bot</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Set up an intelligent WhatsApp bot in minutes with our no-code builder.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-xl font-medium text-white mb-2 tracking-wide">View Analytics</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Monitor your bot performance, message delivery, and user engagement.
            </p>
            <button className="mt-4 px-6 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors">
              View Reports
            </button>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-white mb-4 tracking-wide">Need Help Getting Started?</h3>
            <p className="text-gray-400 font-light mb-6 leading-relaxed">
              Our team is here to help you build amazing WhatsApp experiences. 
              Check out our documentation or contact support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors">
                View Docs
              </button>
              <button className="px-6 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Dashboard
