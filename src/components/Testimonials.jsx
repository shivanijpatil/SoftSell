import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Solutions',
    content:
      'We had over 200 unused Microsoft licenses after downsizing. SoftSell made selling them incredibly simple and secure. The valuation exceeded our expectations, and we received payment within 24 hours of approval. Their platform completely transformed our asset recovery strategy.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Software Asset Manager',
    company: 'InnovateSoft',
    content:
      'I was skeptical about license reselling at first, but SoftSell provided the best rates in the market. Their verification process was thorough yet efficient, and their customer service team was exceptionally responsive. We have now made this a regular part of our IT cost management.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    name: 'Alexandra Rivera',
    role: 'CTO',
    company: 'Nexus Enterprises',
    content:
      'After a merger, we had significant software license overlap. SoftSell helped us navigate the complex process of reselling enterprise licenses with regulatory compliance in mind. Their expertise saved us countless hours and maximized our recovery value.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses that have successfully recovered value from unused software licenses
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl"></div>
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                <span className="text-3xl text-blue-600/30 dark:text-blue-500/30 font-serif leading-none">"</span>
                {testimonial.content}
                <span className="text-3xl text-blue-600/30 dark:text-blue-500/30 font-serif leading-none">"</span>
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, <span className="text-blue-600 dark:text-blue-400">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-200"
          >
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;