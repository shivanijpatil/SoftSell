import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and compliance with industry standards protect your license details and financial transactions.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    stat: '256-bit',
    statLabel: 'Encryption'
  },
  {
    title: 'Industry-Leading Valuations',
    description: 'Our proprietary market analysis consistently offers 15-30% higher valuations than competitor platforms.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '27%',
    statLabel: 'Higher Value'
  },
  {
    title: 'Rapid Processing',
    description: 'Our optimized workflow and automated verification system completes the entire process in record time.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '24hr',
    statLabel: 'Turnaround'
  },
  {
    title: 'Dedicated Support Team',
    description: 'Our team of license experts is available via chat, email, and phone to ensure a smooth and efficient process.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    stat: '99.7%',
    statLabel: 'Satisfaction'
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              Industry-Leading Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Businesses <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our platform is designed to maximize value, minimize effort, and ensure security throughout the license reselling process
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Trusted by Companies Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {['Microsoft', 'Adobe', 'Oracle', 'IBM', 'SAP'].map((company) => (
                <motion.div 
                  key={company}
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="text-xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
                    {company}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;