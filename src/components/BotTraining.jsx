import React, { useState } from 'react'
import { Bot, Code, Shield, Zap, CheckCircle, ArrowRight, Key, Brain, MessageSquare } from 'lucide-react'

const BotTraining = () => {
  const [activeTab, setActiveTab] = useState('training')

  const aiProviders = [
    {
      name: 'OpenAI GPT-4',
      logo: '🤖',
      features: ['Advanced reasoning', 'Natural conversations', 'Multi-language support', 'Custom fine-tuning'],
      popular: true
    },
    {
      name: 'Google Gemini',
      logo: '💎',
      features: ['Multimodal AI', 'Real-time processing', 'Enterprise security', 'Cost-effective'],
      popular: false
    },
    {
      name: 'Custom Models',
      logo: '⚡',
      features: ['Your own API', 'Complete control', 'Data privacy', 'Custom training'],
      popular: false
    }
  ]

  const trainingSteps = [
    {
      step: 1,
      title: 'Get Meta API Keys',
      description: 'Sign into Meta for Developers using your Facebook account to get official WhatsApp Business API keys',
      icon: Key,
      details: ['Sign in with Facebook account', 'Access Meta for Developers', 'Get WhatsApp Business API keys', 'Official Meta authentication']
    },
    {
      step: 2,
      title: 'Configure API Keys',
      description: 'Your Meta API keys are securely integrated into our Python application for WhatsApp connectivity',
      icon: Shield,
      details: ['Secure API key integration', 'WhatsApp Business verification', 'Official Meta compliance', 'No third-party access']
    },
    {
      step: 3,
      title: 'Python Bot Creation',
      description: 'Your bot is built in Python with integrated AI capabilities using your preferred AI provider',
      icon: Code,
      details: ['Custom Python development', 'AI integration (OpenAI/Gemini)', 'Business logic implementation', 'Conversational AI setup']
    },
    {
      step: 4,
      title: 'Cloud Deployment',
      description: 'Deploy your bot on reliable cloud platforms like Heroku, Railway, or similar hosting services',
      icon: Zap,
      details: ['Heroku deployment', 'Railway hosting', 'Cloud platform options', '24/7 uptime guarantee']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Bots That 
            <span className="text-green-400"> Never Get Blocked</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Built with Python, trained with your preferred AI models, and deployed through Meta's official Business API for guaranteed reliability
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-1 border border-gray-800">
            <button
              onClick={() => setActiveTab('training')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'training'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Training Process
            </button>
            <button
              onClick={() => setActiveTab('providers')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'providers'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              AI Providers
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'benefits'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Why Meta API
            </button>
          </div>
        </div>

        {/* Training Process Tab */}
        {activeTab === 'training' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">How Your Bot Gets Trained</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our Python-based training system creates intelligent bots using your preferred AI provider
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainingSteps.map((step) => (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {step.step < trainingSteps.length && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent transform translate-x-4"></div>
                  )}
                  
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors h-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-6 mx-auto">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-green-400 text-sm font-semibold mb-2">Step {step.step}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>

                    <div className="space-y-2">
                      {step.details.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Code Example */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold text-white">Python Bot Development</h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`# WhatsApp Bot Development Process
class WhatsAppBot:
    def __init__(self, meta_api_keys, ai_provider_key):
        self.meta_api = MetaBusinessAPI(meta_api_keys)
        self.ai_provider = OpenAI(ai_provider_key)  # or Gemini
        
    def create_bot(self):
        # Integrate AI with WhatsApp Business API
        self.setup_webhook()
        self.configure_ai_responses()
        
    def deploy_to_cloud(self):
        # Deploy on Heroku, Railway, or similar
        platform.deploy(self.bot_instance)
        
# Your bot runs 24/7 on cloud platforms`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* AI Providers Tab */}
        {activeTab === 'providers' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your AI Provider</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Use your own API keys for complete control, privacy, and cost transparency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiProviders.map((provider, index) => (
                <div key={index} className={`relative bg-gray-900 rounded-2xl p-8 border transition-all hover:scale-105 ${
                  provider.popular ? 'border-green-500 bg-green-900/10' : 'border-gray-800 hover:border-gray-700'
                }`}>
                  {provider.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{provider.logo}</div>
                    <h4 className="text-xl font-bold text-white">{provider.name}</h4>
                  </div>

                  <div className="space-y-3">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Key className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm font-medium">Use your own API key</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-2xl p-8 text-center">
              <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Complete Data Privacy</h4>
              <p className="text-gray-300 max-w-2xl mx-auto">
                When you use your own API keys, your business data never touches our servers. 
                Everything stays between you and your chosen AI provider.
              </p>
            </div>
          </div>
        )}

        {/* Meta API Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Why Meta Business API?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Official partnership ensures your bots never get blocked and always stay compliant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <Shield className="w-12 h-12 text-green-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">Never Get Blocked</h4>
                <p className="text-gray-400 mb-6">
                  Using Meta's official Business API means your bots are fully compliant and will never face restrictions or blocks.
                </p>
                <div className="space-y-2">
                  {['Official Meta partnership', 'Business API compliance', 'No sending limits', 'WhatsApp verified'].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <MessageSquare className="w-12 h-12 text-blue-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">Enterprise Features</h4>
                <p className="text-gray-400 mb-6">
                  Access advanced WhatsApp Business features that regular accounts can't use.
                </p>
                <div className="space-y-2">
                  {['Rich media support', 'Interactive buttons', 'Template messages', 'Advanced analytics'].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <Zap className="w-12 h-12 text-purple-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">High Volume Support</h4>
                <p className="text-gray-400 mb-6">
                  Handle thousands of conversations simultaneously without any performance issues.
                </p>
                <div className="space-y-2">
                  {['Unlimited conversations', 'Real-time processing', 'Auto-scaling', 'Global delivery'].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <Bot className="w-12 h-12 text-yellow-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4">Professional Presence</h4>
                <p className="text-gray-400 mb-6">
                  Your business gets a verified WhatsApp Business profile with green checkmark.
                </p>
                <div className="space-y-2">
                  {['Verified business badge', 'Professional profile', 'Business catalog', 'Customer trust'].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Set up your AI-powered WhatsApp bot with your preferred provider and Meta's official API
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
                <span>Start Building Your Bot</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BotTraining
