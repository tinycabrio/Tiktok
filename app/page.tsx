'use client';

import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import ImageGenerator from './components/ImageGenerator';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chat' | 'image'>('chat');

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              AI Studio
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Chat with AI and generate amazing images
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'chat'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                💬 Chat
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'image'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                🎨 Generate Image
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {activeTab === 'chat' ? <ChatInterface /> : <ImageGenerator />}
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
            Powered by OpenAI GPT-4 & DALL-E 3
          </div>
        </div>
      </div>
    </main>
  );
}
