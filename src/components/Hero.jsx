import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] 
      }
    }
  };

 

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              Transform Your Unused Licenses into Revenue
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Maximize the Value of Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Software Investments
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Our platform helps businesses recover costs from unused software licenses with a secure, streamlined marketplace trusted by thousands of companies worldwide.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-200"
            >
              Get Your Free Valuation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              See How It Works
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by companies worldwide</span>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {['Microsoft', 'Adobe', 'Autodesk', 'Oracle', 'IBM'].map((company) => (
                <div key={company} className="text-gray-400 dark:text-gray-600 font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '5,000+', label: 'Licenses Sold' },
            { number: '99.8%', label: 'Customer Satisfaction' },
            { number: '48hrs', label: 'Average Turnaround' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white dark:text-gray-900 w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;