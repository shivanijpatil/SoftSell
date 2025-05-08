import React, { useState, useRef, useEffect } from 'react';

const responseDatabase = {
  sell: [
    'To sell your license, we offer a streamlined process with competitive rates. Our team will guide you through each step and handle all the verification work for you.',
    'Our license selling process is simple: submit your details, we verify your license, and you get paid within 2-3 business days after approval.',
    'We have successfully helped over 5,000 clients sell their licenses with an average satisfaction rating of 4.8/5.'
  ],
  license: [
    'We accept a wide range of licenses including Microsoft Office, Adobe Creative Suite, Autodesk, and many others. Enterprise licenses often fetch premium rates.',
    'Our platform specializes in both individual and volume licenses. The most valuable are typically perpetual enterprise licenses.',
    'Looking to sell multiple licenses? We offer bulk processing with additional benefits for volume sellers.'
  ],
  process: [
    'Our verification process typically takes 1-2 business days, followed by payment processing within 24 hours after approval.',
    'The entire license transfer process is handled by our team, requiring minimal effort from you after initial submission.',
    'We use a secure verification system that protects both sellers and buyers throughout the transaction process.'
  ],
  payment: [
    'We offer multiple payment methods including direct bank transfer, PayPal, and cryptocurrency options for international clients.',
    'Our fee structure is transparent: we charge 8-15% based on license type and value, with no hidden fees.',
    'Payments are processed securely with end-to-end encryption to protect your financial information.'
  ],
  default: [
    "I'm happy to help with your inquiry. Could you provide more details about your license type and what you are looking to accomplish?",
    "That's a great question. For this specific information, I recommend speaking with our license specialists who can provide tailored guidance.",
    "Thanks for reaching out. To better assist you, could you specify which license products you're interested in selling?"
  ]
};

const exampleQuestions = [
  'How do I sell my Microsoft Office license?',
  'What types of Adobe licenses do you accept?',
  'How long does the verification process take?',
  'What are your payment methods and fees?'
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [showInitialQuestions, setShowInitialQuestions] = useState(true);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setShowInitialQuestions(true);
        setMessages([]);
      }, 300); 
    }
  }, [isOpen]);

  const getAIResponse = (message) => {
    const lower = message.toLowerCase();
    
    let category = 'default';
    if (lower.includes('sell') || lower.includes('selling')) {
      category = 'sell';
    } else if (lower.includes('license') || lower.includes('software') || lower.includes('product')) {
      category = 'license';
    } else if (lower.includes('process') || lower.includes('time') || lower.includes('long') || lower.includes('how long') || lower.includes('verification')) {
      category = 'process';
    } else if (lower.includes('fee') || lower.includes('cost') || lower.includes('payment') || lower.includes('money') || lower.includes('pay')) {
      category = 'payment';
    }
    
    const responses = responseDatabase[category];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleSend = (message) => {
    if (!message.trim()) return;

    setShowInitialQuestions(false);
    
    setMessages((prev) => [...prev, { type: 'user', content: message }]);
    setInput('');
    
    setIsTyping(true);
    
    // Simulate AI thinking and typing with variable timing
    const thinkingTime = 800 + Math.random() * 1200; // 800-2000ms
    
    setTimeout(() => {
      const response = getAIResponse(message);
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: 'ai', content: response }]);
    }, thinkingTime);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-110 hover:shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            opacity: 1,
            transform: 'scale(1)',
            animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
          }}
        >
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-1.5 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25-9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-lg">License Assistant</h2>
                <div className="flex items-center text-xs text-white/80">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="hover:bg-white/10 rounded-full p-1.5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto px-4 py-6 space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.length === 0 ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">Welcome to our License Assistant</h3>
                <p className="mb-5 text-gray-600 dark:text-gray-400">How can we assist you today? You can ask about selling your licenses, our process, or payment options.</p>
                
                {showInitialQuestions && (
                  <div className="space-y-2">
                    {exampleQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="block w-full text-left px-4 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 shadow-sm transition-colors duration-150 border border-gray-200 dark:border-gray-600"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {msg.type === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl shadow-sm max-w-[80%] ${
                          msg.type === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-100 dark:border-gray-600'
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center ml-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                      </div>
                      <div className="px-4 py-3 rounded-2xl shadow-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-100 dark:border-gray-600">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(input);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
            <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
              For urgent assistance, call us at (800) 123-4567
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;