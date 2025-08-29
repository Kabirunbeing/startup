import { useState, useEffect, useRef } from 'react'
import { Phone, Video, Paperclip, Mic, Play, RotateCcw, Bot, MessageCircle, Zap, Users } from 'lucide-react'

const WhatsAppSimulator = () => {
  const [messages, setMessages] = useState([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const messagesEndRef = useRef(null)

  // Professional conversation flow without emojis
  const conversationFlow = [
    {
      id: 1,
      type: 'bot',
      text: "Hello! Welcome to TechStore Pro. I'm your AI assistant, ready to help you find the perfect technology solutions.",
      delay: 1000
    },
    {
      id: 2,
      type: 'bot',
      text: "I can assist you with:\n• Product recommendations\n• Technical specifications\n• Order management\n• Customer support\n• Price comparisons",
      delay: 2000
    },
    {
      id: 3,
      type: 'user',
      text: "Hi! I'm looking for a business laptop for my team. Can you help me choose?",
      delay: 1500
    },
    {
      id: 4,
      type: 'bot',
      text: "Absolutely! I'd be happy to help you select the ideal business laptops. Could you tell me more about your team's requirements?",
      delay: 1000
    },
    {
      id: 5,
      type: 'bot',
      text: "Please select your primary use case:\n• Software Development\n• Business Analytics\n• Creative Design\n• General Office Work\n• Data Processing",
      delay: 1500
    },
    {
      id: 6,
      type: 'user',
      text: "We need them for software development and some data analytics work",
      delay: 2000
    },
    {
      id: 7,
      type: 'bot',
      text: "Perfect! Based on your requirements, here are my top recommendations for development and analytics work:",
      delay: 1000
    },
    {
      id: 8,
      type: 'bot',
      text: "**MacBook Pro M3 Pro** - $2,499\n• 16-core CPU, 18-core GPU\n• 32GB unified memory\n• 1TB SSD storage\n• Excellent for development",
      delay: 2000
    },
    {
      id: 9,
      type: 'bot',
      text: "**ThinkPad X1 Carbon** - $1,899\n• Intel i7-13700H processor\n• 32GB DDR5 RAM\n• 1TB NVMe SSD\n• Military-grade durability",
      delay: 1500
    },
    {
      id: 10,
      type: 'user',
      text: "The ThinkPad looks great! What about bulk pricing for 10 units?",
      delay: 2000
    },
    {
      id: 11,
      type: 'bot',
      text: "Excellent choice! For 10 ThinkPad X1 Carbon units, I can offer:\n• 15% bulk discount\n• Extended 3-year warranty\n• Free setup and configuration\n• Priority technical support",
      delay: 1000
    },
    {
      id: 12,
      type: 'bot',
      text: "**Bulk Order Summary:**\n10x ThinkPad X1 Carbon: $18,990\nBulk Discount (15%): -$2,849\n**Total: $16,141**\n\nShall I prepare the quote?",
      delay: 2000
    },
    {
      id: 13,
      type: 'user',
      text: "Yes, please prepare the formal quote and send it to procurement@company.com",
      delay: 1500
    },
    {
      id: 14,
      type: 'bot',
      text: "Quote generated successfully! I've sent a comprehensive proposal to procurement@company.com including:\n• Detailed specifications\n• Warranty information\n• Payment terms\n• Delivery timeline",
      delay: 1000
    },
    {
      id: 15,
      type: 'bot',
      text: "Your quote reference: TQ-2024-0892\nValid until: 30 days from today\n\nOur sales team will follow up within 24 hours. Thank you for choosing TechStore Pro!",
      delay: 2000
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!showDemo) return

    if (currentMessageIndex < conversationFlow.length) {
      const currentMessage = conversationFlow[currentMessageIndex]
      
      const timer = setTimeout(() => {
        if (currentMessage.type === 'bot') {
          setIsTyping(true)
          setTimeout(() => {
            setMessages(prev => [...prev, currentMessage])
            setIsTyping(false)
            setCurrentMessageIndex(prev => prev + 1)
          }, 1500) // Typing indicator duration
        } else {
          setMessages(prev => [...prev, currentMessage])
          setCurrentMessageIndex(prev => prev + 1)
        }
      }, currentMessage.delay)

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, showDemo])

  const startDemo = () => {
    setMessages([])
    setCurrentMessageIndex(0)
    setIsTyping(false)
    setShowDemo(true)
  }

  const resetDemo = () => {
    setMessages([])
    setCurrentMessageIndex(0)
    setIsTyping(false)
    setShowDemo(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      {/* WhatsApp Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex items-center space-x-3">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">TechStore AI Assistant</h3>
          <div className="flex items-center space-x-2 text-green-100">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <p className="text-sm">Online • Powered by WhatsBot Pro</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center border border-white/30">
            <Phone className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 flex items-center justify-center border border-white/30">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 p-4 space-y-4 relative">
        {/* Professional background pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        {messages.length === 0 && !showDemo && (
          <div className="text-center py-12 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">WhatsApp Business Demo</h3>
            <p className="text-gray-600 mb-6 max-w-sm mx-auto leading-relaxed">
              Experience how our AI assistant handles real customer interactions with professional efficiency
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-xs mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-xs text-gray-600">Instant Response</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600">AI Powered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-xs text-gray-600">24/7 Support</p>
              </div>
            </div>
            <button 
              onClick={startDemo}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              <span>Start Demo</span>
            </button>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white rounded-br-md shadow-lg'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-lg border border-gray-100'
              } animate-fade-in-up transition-all duration-300 hover:shadow-xl`}
            >
              <p className="text-sm whitespace-pre-line leading-relaxed font-medium">{message.text}</p>
              <div className={`flex items-center justify-between mt-2 ${
                message.type === 'user' ? 'text-green-100' : 'text-gray-400'
              }`}>
                <p className="text-xs">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                {message.type === 'user' && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-green-200 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-200 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start relative z-10">
            <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-lg border border-gray-100 px-4 py-3 max-w-xs">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-green-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-xs text-gray-500">AI is typing...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-200 flex items-center space-x-3">
        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center text-gray-600 border border-gray-200">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 border border-gray-200 hover:border-gray-300 transition-all duration-200">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
            disabled
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center text-gray-600 border border-gray-200">
          <Paperclip className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center text-white shadow-lg">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      {/* Demo Controls */}
      {showDemo && (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Demo in progress</span>
          </div>
          <button 
            onClick={resetDemo}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 font-medium flex items-center space-x-2 shadow-lg"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo</span>
          </button>
        </div>
      )}

      {/* Professional Footer */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 border-t border-green-200 p-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Bot className="w-5 h-5 text-green-700" />
            <span className="text-sm font-bold text-green-800">Powered by WhatsBot Pro</span>
          </div>
          <p className="text-xs text-green-700 font-medium">
            Enterprise AI Assistant • Built by Kabeer Ahmad
          </p>
          <div className="flex justify-center space-x-4 mt-2 text-xs text-green-600">
            <span>24/7 Availability</span>
            <span>•</span>
            <span>Multi-language</span>
            <span>•</span>
            <span>CRM Integration</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppSimulator
