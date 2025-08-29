import { useRef, useEffect, useState } from 'react'

const Pricing = () => {
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

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "1 WhatsApp Bot",
        "1,000 messages/month",
        "Basic AI responses",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "5 WhatsApp Bots",
        "10,000 messages/month",
        "Advanced AI + Custom training",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "A/B testing",
        "API access"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited scale with dedicated support",
      features: [
        "Unlimited bots",
        "Unlimited messages",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="text-white"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                plan.popular ? 'scale-105' : ''
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: isInView ? `${index * 0.2}s` : '0s'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-110">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-black border ${plan.popular ? 'border-white' : 'border-gray-800'} rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full relative overflow-hidden hover:shadow-2xl`}>
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/5 to-transparent hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center transition-transform duration-300 hover:scale-105">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1"
                      >
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-125 hover:rotate-180">
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-200 hover:shadow-lg' 
                      : 'border border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className={`mt-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            animationDelay: isInView ? '1.2s' : '0s'
          }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is this compliant with WhatsApp's terms?",
                answer: "Yes, we use Meta's official WhatsApp Business API, ensuring full compliance with all terms and conditions."
              },
              {
                question: "Can I customize the AI responses?",
                answer: "Absolutely! Our Python-based AI allows for complete customization and training on your specific business data."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer email support for Starter, priority support for Professional, and 24/7 dedicated support for Enterprise."
              },
              {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes, you can change your plan at any time. Changes take effect at the next billing cycle."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:border-gray-600"
              >
                <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
