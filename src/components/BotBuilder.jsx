import React, { useState } from 'react'
import { Bot, Plus, Play, Save, Download, MessageSquare, ArrowRight } from 'lucide-react'

const BotBuilder = () => {
  const [flows, setFlows] = useState([
    { id: 1, trigger: 'Hi', response: 'Hello! How can I help you today?', type: 'greeting' }
  ])
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const addFlow = () => {
    const newFlow = {
      id: flows.length + 1,
      trigger: '',
      response: '',
      type: 'custom'
    }
    setFlows([...flows, newFlow])
  }

  const updateFlow = (id, field, value) => {
    setFlows(flows.map(flow => 
      flow.id === id ? { ...flow, [field]: value } : flow
    ))
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Build Your Bot in 
            <span className="text-green-400"> Real-Time</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No coding required. Create intelligent conversation flows and see instant results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Builder Panel */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Conversation Flows</h3>
              <div className="flex space-x-2">
                <button
                  onClick={addFlow}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Flow</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {flows.map((flow) => (
                <div key={flow.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Customer Message
                      </label>
                      <input
                        type="text"
                        value={flow.trigger}
                        onChange={(e) => updateFlow(flow.id, 'trigger', e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                        placeholder="What customers will type..."
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Bot Response
                      </label>
                      <textarea
                        value={flow.response}
                        onChange={(e) => updateFlow(flow.id, 'response', e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                        placeholder="How your bot will respond..."
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>{isPreviewMode ? 'Stop Preview' : 'Test Bot'}</span>
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Live Preview</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Live Testing</span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-4 h-96 overflow-y-auto">
              {isPreviewMode ? (
                <div className="space-y-4">
                  <div className="text-center text-gray-400 text-sm mb-4">
                    Bot is ready for testing. Try typing a message!
                  </div>
                  
                  {flows.filter(flow => flow.trigger && flow.response).map((flow) => (
                    <div key={flow.id} className="space-y-2">
                      <div className="flex justify-end">
                        <div className="bg-green-600 text-white rounded-lg px-3 py-2 max-w-xs">
                          {flow.trigger}
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white text-gray-800 rounded-lg px-3 py-2 max-w-xs">
                          {flow.response}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Test Bot" to see your flows in action</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-300 font-medium">
                  {flows.filter(flow => flow.trigger && flow.response).length} flows ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Templates */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Start Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'E-commerce Support', flows: 8, description: 'Product inquiries, order tracking, refunds' },
              { name: 'Lead Generation', flows: 6, description: 'Capture leads, qualify prospects, book demos' },
              { name: 'Customer Service', flows: 10, description: 'FAQ, ticket creation, escalation' }
            ].map((template, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold text-white mb-2">{template.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">{template.flows} pre-built flows</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BotBuilder
