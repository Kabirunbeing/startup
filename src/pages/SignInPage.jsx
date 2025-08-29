import { SignIn } from '@clerk/clerk-react'
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

  // Custom CSS for Clerk component responsiveness
  const clerkStyles = `
    .cl-rootBox {
      width: 100% !important;
      max-width: 100% !important;
    }
    .cl-card {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }
    .cl-socialButtonsBlockButton {
      font-size: 14px !important;
      padding: 8px 12px !important;
    }
    .cl-formFieldInput {
      font-size: 14px !important;
      padding: 8px 12px !important;
    }
    .cl-formButtonPrimary {
      font-size: 14px !important;
      padding: 8px 12px !important;
    }
    @media (min-width: 640px) {
      .cl-socialButtonsBlockButton {
        font-size: 16px !important;
        padding: 12px 16px !important;
      }
      .cl-formFieldInput {
        font-size: 16px !important;
        padding: 12px 16px !important;
      }
      .cl-formButtonPrimary {
        font-size: 16px !important;
        padding: 12px 16px !important;
      }
    }
  `
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: clerkStyles }} />
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 font-light tracking-wide text-sm sm:text-base">
            Sign in to continue to your WhatsApp Bot platform
          </p>
        </div>

        <div
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          {showClerkForm ? (
            <>
              <SignIn 
                appearance={{
                  elements: {
                    rootBox: 'w-full max-w-full',
                    card: 'bg-transparent shadow-none border-none w-full max-w-full overflow-hidden',
                    headerTitle: 'text-white font-medium tracking-wide text-lg sm:text-xl',
                    headerSubtitle: 'text-gray-400 font-light text-sm sm:text-base',
                    socialButtonsBlockButton: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium tracking-wide text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4',
                    socialButtonsBlockButtonText: 'text-white font-medium text-sm sm:text-base',
                    dividerLine: 'bg-white/10',
                    dividerText: 'text-gray-400 font-light text-sm',
                    formFieldLabel: 'text-white font-medium tracking-wide text-sm sm:text-base',
                    formFieldInput: 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4',
                    formButtonPrimary: 'bg-white text-black hover:bg-gray-100 font-medium tracking-wide text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4',
                    footerActionLink: 'text-white hover:text-gray-300 font-medium text-sm sm:text-base',
                    footerActionText: 'text-gray-400 font-light text-sm sm:text-base',
                    identityPreviewText: 'text-white text-sm sm:text-base',
                    identityPreviewEditButton: 'text-white hover:text-gray-300 text-sm sm:text-base',
                    formFieldSuccessText: 'text-green-400 text-sm',
                    formFieldErrorText: 'text-red-400 text-sm',
                    alertClerkError: 'text-red-400 bg-red-400/10 border border-red-400/20 text-sm p-2 sm:p-3',
                    formFieldInputShowPasswordButton: 'text-gray-400 hover:text-white',
                    formFieldAction: 'text-white hover:text-gray-300 text-sm',
                  },
                  layout: {
                    socialButtonsPlacement: 'top',
                    showOptionalFields: false,
                  },
                  variables: {
                    colorPrimary: '#ffffff',
                    spacingUnit: '0.75rem',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    borderRadius: '8px',
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-1 text-sm sm:text-base"
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-1 text-sm sm:text-base"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 font-medium tracking-wide py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
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
        </div>

        <div
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
          <button
            onClick={handleGuestMode}
            className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 text-white py-3 px-6 rounded-xl font-medium tracking-wide transition-all duration-200 backdrop-blur-sm"
          >
            Continue as Guest
          </button>
          
          <p className="text-gray-500 text-xs font-light">
            Guest mode provides limited features. Sign up for full access.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignInPage
