import React, { useRef, useEffect, useState } from 'react'
import { 
  MessageSquare, 
  ShoppingCart, 
  HeadphonesIcon, 
  BarChart3, 
  Users, 
  Zap, 
  Clock, 
  Globe,
  Shield,
  Rocket,
  Bot,
  Calendar
} from 'lucide-react'

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
      icon: "ShoppingCart",
      title: "E-commerce Automation",
      description: "Transform your WhatsApp into a powerful sales channel with automated product catalogs, order processing, and payment integration.",
      benefits: ["Product showcase", "Order tracking", "Payment processing", "Abandoned cart recovery"],
      useCases: ["Online stores", "Restaurants", "Fashion brands"]
    },
    {
      icon: "HeadphonesIcon",
      title: "24/7 Customer Support",
      description: "Provide instant customer support with AI-powered responses, ticket routing, and seamless human handover when needed.",
      benefits: ["Instant responses", "Multi-language support", "Ticket management", "Human escalation"],
      useCases: ["SaaS companies", "Service providers", "Help desks"]
    },
    {
      icon: "Calendar",
      title: "Appointment Booking",
      description: "Let customers book appointments, consultations, and services directly through WhatsApp with automatic calendar integration.",
      benefits: ["Real-time availability", "Automated reminders", "Calendar sync", "Cancellation handling"],
      useCases: ["Healthcare", "Beauty salons", "Professional services"]
    },
    {
      icon: "MessageSquare",
      title: "Lead Generation",
      description: "Capture and qualify leads automatically with intelligent conversation flows and seamless CRM integration.",
      benefits: ["Lead qualification", "CRM integration", "Follow-up automation", "Conversion tracking"],
      useCases: ["Real estate", "Insurance", "B2B services"]
    },
    {
      icon: "BarChart3",
      title: "Marketing Campaigns",
      description: "Run targeted marketing campaigns with broadcast messages, personalized offers, and detailed performance analytics.",
      benefits: ["Broadcast messaging", "Segmentation", "A/B testing", "ROI tracking"],
      useCases: ["Retail brands", "Event companies", "Educational institutes"]
    },
    {
      icon: "Users",
      title: "Community Management",
      description: "Build and manage customer communities with group messaging, announcements, and interactive engagement features.",
      benefits: ["Group management", "Announcements", "Member engagement", "Content sharing"],
      useCases: ["Online communities", "Educational groups", "Brand loyalty programs"]
    },
    {
      icon: "Clock",
      title: "Order Status Updates",
      description: "Keep customers informed with automated order confirmations, shipping updates, and delivery notifications.",
      benefits: ["Order confirmations", "Shipping tracking", "Delivery alerts", "Return processing"],
      useCases: ["Delivery services", "E-commerce", "Food delivery"]
    },
    {
      icon: "Globe",
      title: "Multi-location Support",
      description: "Manage multiple business locations with location-specific information, hours, and service offerings.",
      benefits: ["Location routing", "Local information", "Store finder", "Regional customization"],
      useCases: ["Franchise businesses", "Chain stores", "Service networks"]
    },
    {
      icon: "Zap",
      title: "Integration Hub",
      description: "Connect with your existing tools including CRM, ERP, payment gateways, and marketing platforms seamlessly.",
      benefits: ["API integrations", "Data synchronization", "Workflow automation", "Custom connectors"],
      useCases: ["Enterprise businesses", "Tech companies", "Growing startups"]
    }
  ]

  const iconComponents = {
    MessageSquare,
    ShoppingCart, 
    HeadphonesIcon, 
    BarChart3, 
    Users, 
    Zap, 
    Clock, 
    Globe,
    Shield,
    Rocket,
    Bot,
    Calendar
  }

  const businessTypes = [
    {
      name: "E-commerce",
      description: "Boost sales with automated product catalogs and order management",
      features: ["Product showcase", "Payment processing", "Order tracking", "Customer support"]
    },
    {
      name: "Healthcare",
      description: "Streamline patient interactions and appointment scheduling",
      features: ["Appointment booking", "Prescription reminders", "Health tips", "Emergency alerts"]
    },
    {
      name: "Education",
      description: "Enhance student engagement and administrative efficiency",
      features: ["Course updates", "Assignment reminders", "Fee notifications", "Parent communication"]
    },
    {
      name: "Real Estate",
      description: "Connect with prospects and showcase properties effectively",
      features: ["Property listings", "Virtual tours", "Appointment booking", "Market updates"]
    },
    {
      name: "Restaurants",
      description: "Simplify ordering and improve customer experience",
      features: ["Menu showcase", "Online ordering", "Table reservations", "Loyalty programs"]
    },
    {
      name: "Financial Services",
      description: "Provide secure and efficient financial consultations",
      features: ["Account updates", "Transaction alerts", "Loan applications", "Investment advice"]
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> WhatsApp Automation</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto ${isInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            From customer support to sales automation, our platform helps businesses of all sizes 
            leverage WhatsApp to increase efficiency, boost sales, and improve customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ${isInView ? 'animate-fade-in animate-delay-600' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div key={index} className={`bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full hover-scale ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                 style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 hover-scale-sm transition-transform duration-300 border border-blue-500/20">
                {iconComponents[feature.icon] && React.createElement(iconComponents[feature.icon], { 
                  className: "w-8 h-8 text-blue-400" 
                })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              {/* Benefits */}
              <div className="space-y-2 mb-4">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className={`flex items-center space-x-2 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
                       style={{ animationDelay: `${1.0 + index * 0.1 + benefitIndex * 0.05}s` }}>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-sm text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-2">Perfect for:</p>
                <div className="flex flex-wrap gap-1">
                  {feature.useCases.map((useCase, useCaseIndex) => (
                    <span key={useCaseIndex} className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Types Section */}
        <div className={`mb-20 ${isInView ? 'animate-fade-in-up animate-delay-1000' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Businesses Across Industries
            </h3>
            <p className="text-gray-400">See how different industries are leveraging WhatsApp automation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((business, index) => (
              <div key={index} 
                   className={`bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover-scale ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                <h4 className="text-lg font-semibold text-white mb-2">{business.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{business.description}</p>
                <div className="flex flex-wrap gap-1">
                  {business.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className={`${isInView ? 'animate-fade-in-up animate-delay-1400' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Seamless Integrations
            </h3>
            <p className="text-gray-400">Connect with your favorite tools and platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: 'WhatsApp Business', desc: 'Official API' },
              { name: 'Shopify', desc: 'E-commerce' },
              { name: 'Salesforce', desc: 'CRM' },
              { name: 'Stripe', desc: 'Payments' },
              { name: 'Google Calendar', desc: 'Scheduling' },
              { name: 'Zapier', desc: 'Automation' }
            ].map((integration, index) => (
              <div key={index} 
                   className={`bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover-scale ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                   style={{ animationDelay: `${1.6 + index * 0.1}s` }}>
                <div className="text-white font-semibold text-sm mb-1">{integration.name}</div>
                <div className="text-gray-500 text-xs">{integration.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isInView ? 'animate-fade-in-up animate-delay-1800' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using WhatsApp automation to increase sales, 
              improve customer service, and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
