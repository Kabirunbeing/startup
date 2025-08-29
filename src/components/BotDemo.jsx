import React, { useRef, useEffect, useState } from 'react'
import { Bot, BarChart3, CreditCard, Target } from 'lucide-react'
import WhatsAppSimulator from './WhatsAppSimulator'

const BotDemo = () => {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            See Your Bot in Action
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${isInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            Experience how our AI-powered WhatsApp bots engage customers, handle inquiries, 
            and drive conversions with natural, intelligent conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className={`space-y-8 ${isInView ? 'animate-fade-in-left animate-delay-600' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Conversations</h3>
                  <p className="text-gray-400">
                    Our AI understands context and responds naturally, creating engaging conversations 
                    that feel human-like while automating your customer support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Product Recommendations</h3>
                  <p className="text-gray-400">
                    Smart product suggestions based on customer preferences, increasing 
                    sales and improving customer satisfaction automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Seamless Ordering</h3>
                  <p className="text-gray-400">
                    Complete order processing within WhatsApp, from product selection 
                    to payment confirmation, all handled by your AI assistant.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
                  <p className="text-gray-400">
                    Never miss a customer inquiry. Your bot works around the clock, 
                    capturing leads and converting customers even while you sleep.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 border-t border-gray-800 ${isInView ? 'animate-fade-in animate-delay-1000' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-400">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-sm text-gray-400">Faster Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-sm text-gray-400">More Sales</div>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp Simulator */}
          <div className={`flex justify-center lg:justify-end ${isInView ? 'animate-scale-in animate-delay-800' : 'opacity-0'}`}>
            <WhatsAppSimulator />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isInView ? 'animate-fade-in-up animate-delay-1200' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your Own Bot?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using WhatsApp Bot Studio to automate customer support, 
            increase sales, and provide 24/7 service to their customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-500 text-white font-medium tracking-wide rounded-xl hover:bg-green-600 transition-all duration-300 shadow-xl hover-scale">
              Start Building Now
            </button>
            <button className="px-8 py-4 bg-black border border-white/20 text-white font-medium tracking-wide rounded-xl hover:bg-white/5 transition-all duration-300 hover-scale">
              View More Demos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BotDemo
