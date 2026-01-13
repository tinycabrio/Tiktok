'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        messages: updatedMessages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.reply,
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure your OpenAI API key is configured correctly.',
      };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t dark:border-gray-700 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
