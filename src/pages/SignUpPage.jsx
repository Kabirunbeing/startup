import { SignUp } from '@clerk/clerk-react'
import { motion } from 'framer-motion'

const SignUpPage = () => {
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
            Create Account
          </h1>
          <p className="text-gray-400 font-light tracking-wide">
            Join thousands building intelligent WhatsApp bots
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <SignUp 
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
                formFieldInputShowPasswordButton: 'text-gray-400 hover:text-white',
              },
              layout: {
                socialButtonsPlacement: 'top',
                showOptionalFields: false,
              },
            }}
            redirectUrl="/dashboard"
            signInUrl="/sign-in"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 text-sm font-light">
            Already have an account?{' '}
            <a 
              href="/sign-in" 
              className="text-white hover:text-gray-300 font-medium tracking-wide transition-colors"
            >
              Sign in
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
        >
          <p className="text-gray-400 text-xs font-light mb-2">
            🚀 Free 14-day trial • No credit card required
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>✓ 1,000 free messages</span>
            <span>✓ AI automation</span>
            <span>✓ 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignUpPage
