import { SignIn } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignInPage = ({ setIsGuestMode }) => {
  const navigate = useNavigate()
  const [showClerkForm, setShowClerkForm] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGuestMode = () => {
    if (setIsGuestMode) {
      setIsGuestMode(true)
    }
    navigate('/guest-dashboard')
  }

  const handleTestSignIn = (e) => {
    e.preventDefault()
    // For demo purposes, just redirect to dashboard
    navigate('/guest-dashboard')
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 font-light tracking-wide">
            Sign in to continue to your WhatsApp Bot platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          {showClerkForm ? (
            <>
              <SignIn 
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'bg-transparent shadow-none border-none',
                    headerTitle: 'text-white font-medium tracking-wide',
                    headerSubtitle: 'text-gray-400 font-light',
                    socialButtonsBlockButton: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium tracking-wide',
                    socialButtonsBlockButtonText: 'text-white font-medium',
                    dividerLine: 'bg-white/10',
                    dividerText: 'text-gray-400 font-light',
                    formFieldLabel: 'text-white font-medium tracking-wide',
                    formFieldInput: 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20',
                    formButtonPrimary: 'bg-white text-black hover:bg-gray-100 font-medium tracking-wide',
                    footerActionLink: 'text-white hover:text-gray-300 font-medium',
                    footerActionText: 'text-gray-400 font-light',
                    identityPreviewText: 'text-white',
                    identityPreviewEditButton: 'text-white hover:text-gray-300',
                    formFieldSuccessText: 'text-green-400',
                    formFieldErrorText: 'text-red-400',
                    alertClerkError: 'text-red-400 bg-red-400/10 border border-red-400/20',
                  },
                  layout: {
                    socialButtonsPlacement: 'top',
                    showOptionalFields: false,
                  },
                }}
                redirectUrl="/dashboard"
                signUpUrl="/sign-up"
              />
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowClerkForm(false)}
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Having trouble? Try our demo form
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-white text-lg font-medium mb-4 text-center tracking-wide">
                Demo Sign In Form
              </h3>
              <form onSubmit={handleTestSignIn} className="space-y-4">
                <div>
                  <label className="block text-white font-medium tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-1"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium tracking-wide mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-1"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 font-medium tracking-wide py-3 rounded-lg transition-colors"
                >
                  Sign In (Demo)
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowClerkForm(true)}
                  className="text-gray-400 hover:text-white text-sm font-light transition-colors"
                >
                  Back to Clerk form
                </button>
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6 space-y-4"
        >
          <p className="text-gray-400 text-sm font-light">
            Don't have an account?{' '}
            <a 
              href="/sign-up" 
              className="text-white hover:text-gray-300 font-medium tracking-wide transition-colors"
            >
              Sign up
            </a>
            {' '}or{' '}
            <a 
              href="/home" 
              className="text-white hover:text-gray-300 font-medium tracking-wide transition-colors"
            >
              explore our platform
            </a>
          </p>
          
          {/* Guest Mode Button */}
          <motion.button
            onClick={handleGuestMode}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 text-white py-3 px-6 rounded-xl font-medium tracking-wide transition-all duration-200 backdrop-blur-sm"
          >
            Continue as Guest
          </motion.button>
          
          <p className="text-gray-500 text-xs font-light">
            Guest mode provides limited features. Sign up for full access.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SignInPage
