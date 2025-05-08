import React, { useState } from 'react';

const licenseTypes = [
  'Microsoft Office',
  'Adobe Creative Suite',
  'Autodesk',
  'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
    terms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState({});
  const [touched, setTouched] = useState({});
  const [charCount, setCharCount] = useState({
    name: 0,
    email: 0,
    company: 0,
    message: 0
  });

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens and apostrophes';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email cannot exceed 100 characters';
    }
    
    if (!formData.company) {
      newErrors.company = 'Company is required';
    } else if (formData.company.length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    } else if (formData.company.length > 100) {
      newErrors.company = 'Company name cannot exceed 100 characters';
    } else if (!/^[a-zA-Z0-9\s.,&'-]+$/.test(formData.company)) {
      newErrors.company = 'Company name contains invalid characters';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'License type is required';
    } else if (!licenseTypes.includes(formData.licenseType)) {
      newErrors.licenseType = 'Please select a valid license type';
    }
    
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters';
    }
    
    return newErrors;
  };

  const validateField = (field, value) => {
    const fieldErrors = {};
    
    switch (field) {
      case 'name':
        if (!value) {
          fieldErrors.name = 'Name is required';
        } else if (value.length < 2) {
          fieldErrors.name = 'Name must be at least 2 characters';
        } else if (value.length > 50) {
          fieldErrors.name = 'Name cannot exceed 50 characters';
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          fieldErrors.name = 'Name can only contain letters, spaces, hyphens and apostrophes';
        }
        break;
        
      case 'email':
        if (!value) {
          fieldErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          fieldErrors.email = 'Invalid email address format';
        } else if (value.length > 100) {
          fieldErrors.email = 'Email cannot exceed 100 characters';
        }
        break;
        
      case 'company':
        if (!value) {
          fieldErrors.company = 'Company is required';
        } else if (value.length < 2) {
          fieldErrors.company = 'Company name must be at least 2 characters';
        } else if (value.length > 100) {
          fieldErrors.company = 'Company name cannot exceed 100 characters';
        } else if (!/^[a-zA-Z0-9\s.,&'-]+$/.test(value)) {
          fieldErrors.company = 'Company name contains invalid characters';
        }
        break;
        
      case 'licenseType':
        if (!value) {
          fieldErrors.licenseType = 'License type is required';
        } else if (!licenseTypes.includes(value)) {
          fieldErrors.licenseType = 'Please select a valid license type';
        }
        break;
        
      case 'message':
        if (!value) {
          fieldErrors.message = 'Message is required';
        } else if (value.length < 10) {
          fieldErrors.message = 'Message must be at least 10 characters';
        } else if (value.length > 1000) {
          fieldErrors.message = 'Message cannot exceed 1000 characters';
        }
        break;
        
      default:
        break;
    }
    
    return fieldErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (['name', 'email', 'company', 'message'].includes(name)) {
      setCharCount(prev => ({
        ...prev,
        [name]: value.length
      }));
    }
    
    if (touched[name]) {
      const fieldErrors = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
    }
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    
    setIsFocused(prev => ({
      ...prev,
      [field]: false
    }));
    
    const fieldErrors = validateField(field, formData[field]);
    setErrors(prev => ({
      ...prev,
      ...fieldErrors
    }));
  };

  const handleSubmit = () => {
    if (!formData.terms) {
      setErrors(prev => ({
        ...prev,
        terms: 'You must accept the terms and conditions'
      }));
    }
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0 && formData.terms) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log(formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    } else {
      setErrors({...newErrors, ...(formData.terms ? {} : {terms: 'You must accept the terms and conditions'})});
    }
  };

  const inputClasses = (field) => `
    mt-1 block w-full rounded-lg border
    ${errors[field] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 
      isFocused[field] ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500' : 'border-gray-300 dark:border-gray-600'}
    p-3 transition-all duration-200 ease-in-out
    shadow-sm focus:ring-2 focus:ring-opacity-50
    dark:bg-gray-800 dark:text-white
    ${isFocused[field] ? 'shadow-md' : ''}
  `;

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-xl p-8 max-w-2xl mx-auto text-center py-20">
        <div className="inline-block mb-8 rounded-full p-2 bg-white/10">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-xl text-white/90 mb-8">Your submission has been received. We'll contact you within 24 hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto max-w-6xl">
        <div 
          className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500"
          style={{
            opacity: 1,
            transform: 'translateY(0px)'
          }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-8 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Get Started Today
            </h2>
            <p className="text-lg text-white/90">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="space-y-6 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className={inputClasses('name')}
                    placeholder="John Doe"
                    maxLength={50}
                  />
                  <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                    {charCount.name}/50
                  </div>
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={inputClasses('email')}
                    placeholder="john@example.com"
                    maxLength={100}
                    autoComplete="email"
                  />
                  <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                    {charCount.email}/100
                  </div>
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={() => handleBlur('company')}
                    className={inputClasses('company')}
                    placeholder="Acme Inc."
                    maxLength={100}
                    autoComplete="organization"
                  />
                  <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                    {charCount.company}/100
                  </div>
                </div>
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="licenseType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  onFocus={() => handleFocus('licenseType')}
                  onBlur={() => handleBlur('licenseType')}
                  className={inputClasses('licenseType')}
                >
                  <option value="">Select a license type</option>
                  {licenseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {errors.licenseType}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  className={inputClasses('message')}
                  placeholder="Tell us about your needs..."
                  maxLength={1000}
                />
                <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                  {charCount.message}/1000
                  {charCount.message < 10 && charCount.message > 0 && (
                    <span className="text-amber-500 ml-1">(min. 10)</span>
                  )}
                </div>
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      terms: e.target.checked
                    }));
                    
                    if (touched.terms) {
                      if (e.target.checked) {
                        setErrors(prev => {
                          const newErrors = {...prev};
                          delete newErrors.terms;
                          return newErrors;
                        });
                      } else {
                        setErrors(prev => ({
                          ...prev,
                          terms: 'You must accept the terms and conditions'
                        }));
                      }
                    }
                  }}
                  onBlur={() => {
                    setTouched(prev => ({
                      ...prev,
                      terms: true
                    }));
                    
                    if (!formData.terms) {
                      setErrors(prev => ({
                        ...prev,
                        terms: 'You must accept the terms and conditions'
                      }));
                    }
                  }}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  I agree to the <span className="text-blue-600 cursor-pointer">Terms and Conditions</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  {errors.terms}
                </p>
              )}
            
              <button
                onClick={() => {
                  const allTouched = {};
                  Object.keys(formData).forEach(key => {
                    allTouched[key] = true;
                  });
                  allTouched.terms = true;
                  setTouched(allTouched);
                  
                  handleSubmit();
                }}
                type="button"
                className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white 
                          bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                          transition-all duration-200 transform hover:scale-105 hover:shadow-lg
                          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : "Submit Request"}
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Your data is secured and encrypted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;