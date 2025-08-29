import { useState, useRef, useEffect } from 'react'

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

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

  const categories = [
    { id: 'general', label: 'General', icon: '💬' },
    { id: 'technical', label: 'Technical', icon: '🔧' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'api', label: 'API Issues', icon: '🔌' }
  ]

  const faqs = {
    general: [
      {
        question: "How do I get started with WhatsBot Pro?",
        answer: "Simply sign up for an account, choose your plan, and follow our quick start guide. You'll have your first bot running in under 5 minutes."
      },
      {
        question: "Is WhatsBot Pro compliant with WhatsApp's terms?",
        answer: "Yes, we use Meta's official WhatsApp Business API, ensuring full compliance with all terms and conditions."
      },
      {
        question: "What kind of businesses can use WhatsBot Pro?",
        answer: "Any business that communicates with customers can benefit - e-commerce, restaurants, healthcare, education, real estate, and more."
      },
      {
        question: "Do you provide training and onboarding?",
        answer: "Yes, we offer comprehensive onboarding for all plans, including video tutorials, documentation, and live training sessions for Enterprise customers."
      }
    ],
    technical: [
      {
        question: "What programming languages are supported?",
        answer: "Our platform primarily uses Python for AI capabilities, but we provide SDKs for Python, Node.js, and REST APIs for any language."
      },
      {
        question: "How do I handle webhook events?",
        answer: "Configure your webhook URL in the dashboard, and we'll send all message events to your endpoint in real-time."
      },
      {
        question: "Can I integrate with my existing CRM?",
        answer: "Yes, we support integrations with popular CRMs like Salesforce, HubSpot, Pipedrive, and custom integrations via our API."
      },
      {
        question: "What's the API rate limit?",
        answer: "Rate limits vary by plan: Starter (100 req/min), Professional (500 req/min), Enterprise (unlimited with dedicated infrastructure)."
      }
    ],
    billing: [
      {
        question: "Can I change my plan anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee for all plans. Contact support for assistance."
      },
      {
        question: "Are there any setup fees?",
        answer: "No setup fees for any plan. You only pay the monthly or annual subscription fee."
      },
      {
        question: "Do you offer annual discounts?",
        answer: "Yes, annual plans come with a 20% discount compared to monthly billing."
      }
    ],
    api: [
      {
        question: "Where can I find the API documentation?",
        answer: "Complete API documentation is available in your dashboard under the 'Developers' section with interactive examples."
      },
      {
        question: "How do I authenticate API requests?",
        answer: "Use the API key provided in your dashboard. Include it in the Authorization header: 'Bearer YOUR_API_KEY'."
      },
      {
        question: "What's the webhook retry policy?",
        answer: "We retry failed webhooks up to 3 times with exponential backoff (1s, 5s, 25s intervals)."
      },
      {
        question: "Can I test the API in a sandbox?",
        answer: "Yes, all plans include a sandbox environment for testing without affecting your production setup."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950" ref={sectionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Find answers to common questions, get technical support, or contact our team directly.
            </p>
          </div>

          {/* Search Bar */}
          <div className={`max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-400">Choose a category to find relevant answers</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs[selectedCategory].map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:border-gray-600 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '1.5s' }}>
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our support team is here to help you succeed with WhatsBot Pro
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📧",
                  title: "Email Support",
                  description: "Get help via email within 24 hours",
                  action: "Send Email",
                  contact: "support@example.com"
                },
                {
                  icon: "💬",
                  title: "Live Chat",
                  description: "Chat with our team in real-time",
                  action: "Start Chat",
                  contact: "Available 9-5 EST"
                },
                {
                  icon: "📞",
                  title: "Phone Support",
                  description: "Enterprise customers get priority phone support",
                  action: "Call Now",
                  contact: "+1 (555) 123-4567"
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:border-gray-600"
                >
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-400 mb-4">{contact.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{contact.contact}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    {contact.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
