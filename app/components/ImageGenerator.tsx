'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<'1024x1024' | '1792x1024' | '1024x1792'>('1024x1024');

  const generateImage = async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setImageUrl('');

    try {
      const response = await axios.post('/api/generate-image', {
        prompt,
        size,
      });

      setImageUrl(response.data.imageUrl);
    } catch (error: any) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please make sure your OpenAI API key is configured correctly.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateImage();
    }
  };

  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'generated-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
      {/* Generated Image Display */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 dark:text-gray-300">Creating your image...</p>
          </div>
        ) : imageUrl ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Generated image"
                className="max-w-full h-auto"
              />
            </div>
            <button
              onClick={downloadImage}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Download Image
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Describe an image and I'll create it for you
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="border-t dark:border-gray-700 p-4 space-y-3">
        {/* Size Selector */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setSize('1024x1024')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              size === '1024x1024'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Square
          </button>
          <button
            onClick={() => setSize('1792x1024')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              size === '1792x1024'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Landscape
          </button>
          <button
            onClick={() => setSize('1024x1792')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              size === '1024x1792'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Portrait
          </button>
        </div>

        {/* Prompt Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe the image you want to generate..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
            disabled={loading}
          />
          <button
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
