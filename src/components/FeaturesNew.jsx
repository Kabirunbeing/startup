import React, { useRef, useEffect, useState } from 'react'
import { Bot, Code, Zap, Settings, Shield, Rocket } from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const features = [
    {
      icon: "Bot",
      title: "Meta API Integration",
      description: "Official WhatsApp Business API integration with full compliance and enterprise-grade security.",
      benefits: ["Verified business account", "Rich media support", "Global reach", "99.9% delivery rate"]
    },
    {
      icon: "Code",
      title: "Python-Powered AI",
      description: "Advanced AI capabilities built with Python, featuring natural language processing and machine learning.",
      benefits: ["Custom AI models", "Multi-language support", "Context awareness", "Continuous learning"]
    },
    {
      icon: "Zap",
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with live metrics, conversation insights, and performance tracking.",
      benefits: ["Live chat monitoring", "Conversion tracking", "Performance insights", "Custom reports"]
    },
    {
      icon: "Settings",
      title: "No-Code Builder",
      description: "Intuitive drag-and-drop interface to create complex conversation flows without coding.",
      benefits: ["Visual flow builder", "Pre-built templates", "Instant deployment", "A/B testing"]
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-level encryption, GDPR compliance, and secure data handling for peace of mind.",
      benefits: ["End-to-end encryption", "GDPR compliant", "SOC 2 certified", "Data residency"]
    },
    {
      icon: "Rocket",
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your business growth.",
      benefits: ["Auto-scaling", "99.9% uptime", "Global CDN", "Load balancing"]
    }
  ]

  const iconComponents = {
    Bot,
    Code,
    Zap,
    Settings,
    Shield,
    Rocket
  }

  return (
    <section id="features" className="py-20 lg:py-32 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            Everything You Need to Build
            <span className="text-white"> Winning Bots</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${isInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            Our platform combines the power of Meta&apos;s official API with cutting-edge AI technology, 
            giving you all the tools to create bots that actually convert.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isInView ? 'animate-fade-in animate-delay-600' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div key={index} className={`bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full hover-scale ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                 style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 hover-scale-sm transition-transform duration-300 border border-white/10">
                {iconComponents[feature.icon] && React.createElement(iconComponents[feature.icon], { 
                  className: "w-8 h-8 text-white" 
                })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className={`flex items-center space-x-2 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                       style={{ animationDelay: `${1.2 + index * 0.2 + benefitIndex * 0.1}s` }}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-sm text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className={`mt-20 ${isInView ? 'animate-fade-in-up animate-delay-1000' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Seamless Integrations
            </h3>
            <p className="text-gray-400">Connect with your favorite tools and platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Meta', 'OpenAI', 'Python', 'MongoDB', 'AWS', 'Stripe'].map((integration, index) => (
              <div key={index} 
                   className={`bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover-scale ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                <div className="text-white font-semibold">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
