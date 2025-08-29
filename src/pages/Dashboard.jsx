import React from 'react'
import { useUser, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Bot, BarChart3, Users, MessageSquare, Plus, Settings, LogOut, Zap } from 'lucide-react'

const Dashboard = ({ isGuest = false }) => {
  const { user } = useUser()
  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                WhatsApp Bot Platform
              </h1>
              {isGuest && (
                <span className="bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                  Guest Mode
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <span className="text-gray-300 font-light text-sm sm:text-base">
                Welcome, {isGuest ? 'Guest' : (user?.firstName || 'User')}
              </span>
              {isGuest ? (
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => navigate('/sign-up')}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors text-sm"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-12">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Welcome to Your Dashboard
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light tracking-wide px-4">
            Start building intelligent WhatsApp bots today
          </p>
        </div>

        {/* Quick Stats */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-light text-white mb-2">{isGuest ? '1' : '0'}</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">Active Bots</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-light text-white mb-2">{isGuest ? '100' : '1,000'}</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">{isGuest ? 'Guest Messages' : 'Free Messages'}</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-light text-white mb-2">{isGuest ? '∞' : '14'}</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">{isGuest ? 'Limited Features' : 'Days Trial Left'}</div>
          </div>
        </div>

        {/* Action Cards */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-wide">
              {isGuest ? 'Try Demo Bot' : 'Create Your First Bot'}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              {isGuest 
                ? 'Explore a pre-built demo bot to see the platform capabilities.'
                : 'Set up an intelligent WhatsApp bot in minutes with our no-code builder.'
              }
            </p>
            <button className="mt-4 px-4 sm:px-6 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
              {isGuest ? 'Try Demo' : 'Get Started'}
            </button>
            {isGuest && (
              <p className="text-yellow-400 text-xs mt-2 font-light">
                Limited to demo features only
              </p>
            )}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-wide">
              {isGuest ? 'View Demo Analytics' : 'View Analytics'}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              {isGuest
                ? 'See sample analytics data and understand bot performance metrics.'
                : 'Monitor your bot performance, message delivery, and user engagement.'
              }
            </p>
            <button className="mt-4 px-4 sm:px-6 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base w-full sm:w-auto">
              {isGuest ? 'View Demo' : 'View Reports'}
            </button>
            {isGuest && (
              <p className="text-yellow-400 text-xs mt-2 font-light">
                Sample data only
              </p>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-4 tracking-wide">
              {isGuest ? 'Enjoying the Demo?' : 'Need Help Getting Started?'}
            </h3>
            <p className="text-gray-400 font-light mb-6 leading-relaxed text-sm sm:text-base">
              {isGuest 
                ? 'Sign up for a free account to unlock all features and create your own WhatsApp bots.'
                : 'Our team is here to help you build amazing WhatsApp experiences. Check out our documentation or contact support.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {isGuest ? (
                <>
                  <button
                    onClick={() => navigate('/sign-up')}
                    className="px-4 sm:px-6 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    Sign Up Free
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base">
                    View Pricing
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 sm:px-6 py-2 bg-white text-black font-medium tracking-wide rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base">
                    View Docs
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-black border border-white/20 text-white font-medium tracking-wide rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base">
                    Contact Support
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
