import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to your chat service
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Chat with us</h4>
                  <p className="text-sm text-purple-100">We're here to help!</p>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 p-1 rounded transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Hi! 👋 How can we help you today?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Support Team</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Feel free to ask about our features, pricing, or anything else!
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Support Team</p>
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
          className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default LiveChat;