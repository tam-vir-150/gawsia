// components/Footer.js
import React, { useState, useEffect } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa'; // Importing the new icons
import { IoSend } from 'react-icons/io5';

const Footer = () => {
  // Form state
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({ email: false, message: false });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form validation
  useEffect(() => {
    const validationErrors = {};
    if (touched.email && !validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }
    if (touched.message && message.trim().length === 0) {
      validationErrors.message = 'Message cannot be empty.';
    }
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [email, message, touched]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Handle form submission here
      console.log('Form Submitted:', { email, message });
      // Clear the form
      setEmail('');
      setMessage('');
      setTouched({ email: false, message: false }); // Reset touched state
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Social Icons */}
        <div className='flex flex-col items-start'>
          <img src="/logo2.png" alt="Logo" width={220} height={260} className="mb-4" />
          <div className="w-[220px] flex justify-evenly space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 ">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 ">
            <li><a href="/about" className="hover:underline hover:text-white underline-offset-2">About Us</a></li>
            <li><a href="/services" className="hover:underline hover:text-white underline-offset-2">Services</a></li>
            <li><a href="/contact" className="hover:underline hover:text-white underline-offset-2">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 ">Contact Us</h2>
          <div className="flex items-center mb-2 text-gray-400 hover:text-white  underline-offset-2">
            <FaPhoneAlt size={20} className="mr-2" />
            <span className='hover:underline text-gray-400 hover:text-white'>+8801995767752,</span> <span className='hover:text-white hover:underline text-gray-400 '> +8801929969797</span>
          </div>
          <div className="flex items-center mb-4 text-gray-400 hover:text-white hover:underline underline-offset-2">
            
            <p className='ml-20'> </p>
          </div>
          
         <div className='text-gray-400 hover:text-white '>
         <div className="flex items-center mb-2  underline-offset-2">
            <FaEnvelope size={20} className="mr-2 text-gray-400 hover:underline underline-offset-2 hover:text-white" />
            <p>ceo@gawsiainternationaltrade.com</p>
          </div>
          <div className="flex items-center mb-4 text-gray-400 hover:underline underline-offset-2 hover:text-white">
          <FaEnvelope size={20} className="mr-2 text-gray-900" />
            <p > md@gawsiainternationaltrade.com</p>
          </div>
         </div>
          <div className='text-gray-400 hover:text-white hover:underline underline-offset-2'>
          <div className="flex items-center mb-2  ">
            <FaMapMarkerAlt size={20} className="mr-2" />
            <p>A/10, Bscic Industrial Area, Konabri</p>
          </div>
          <div className="flex items-center mb-2">
            <p className='ml-6'> Gazipur - 1700, Dhaka, 
            Bangladesh.</p>
          </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                className={`w-full px-4 py-2 bg-gray-800 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? 'focus:ring-red-500' : 'focus:ring-indigo-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="relative mb-4">
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                rows="4"
                className={`w-full px-4 py-6 bg-gray-800 border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.message ? 'focus:ring-red-500' : 'focus:ring-indigo-500'
                } pr-16 resize-none pb-10`} // Added pb-10 for bottom padding
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
              <button
                type="submit"
                disabled={!isValid}
                className={`absolute px-4 py-4 rounded-full ${
                  isValid
                    ? 'bg-indigo-500 hover:bg-indigo-600 bottom-2 right-2'
                    : 'bg-gray-500 cursor-not-allowed bottom-8 right-2'
                } text-white focus:outline-none mb-2`}
              >
                <IoSend size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
