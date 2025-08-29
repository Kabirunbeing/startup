import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
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
            Create Account
          </h1>
          <p className="text-gray-400 font-light tracking-wide text-sm sm:text-base">
            Join thousands building intelligent WhatsApp bots
          </p>
        </div>

        <div
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          <SignUp 
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
            signInUrl="/sign-in"
          />
        </div>

        <div
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
        </div>

        <div
          className="text-center mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
        >
          <p className="text-gray-400 text-xs font-light mb-2">
            Free 14-day trial • No credit card required
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>✓ 1,000 free messages</span>
            <span>✓ AI automation</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpPage
