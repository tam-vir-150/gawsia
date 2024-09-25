import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Section 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <UserGroupIcon className="w-5 h-5 mr-2" />
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <HeartIcon className="w-5 h-5 mr-2" />
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ChevronDownIcon className="w-5 h-5 mr-2" />
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ChevronDownIcon className="w-5 h-5 mr-2" />
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ChevronDownIcon className="w-5 h-5 mr-2" />
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ShieldCheckIcon className="w-5 h-5 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center hover:text-white">
                  <ChevronDownIcon className="w-5 h-5 mr-2" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M24 4.5c-.9.4-1.8.6-2.8.7 1-.6 1.7-1.6 2-2.8-.9.5-1.9.9-2.9 1.1-.9-.9-2.1-1.5-3.5-1.5-2.6 0-4.7 2.1-4.7 4.7 0 .4.1.8.2 1.1-3.9-.2-7.3-2.1-9.6-4.9-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.1 2.1 4-.8 0-1.5-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.2 4.4 3.2-1.6 1.3-3.7 2.1-5.9 2.1-.4 0-.7 0-1-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.7 0 13.5-7.2 13.5-13.5 0-.2 0-.4 0-.5.9-.6 1.7-1.4 2.3-2.3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.7 0h-21.4c-.7 0-1.3.6-1.3 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.5v-9.3h-3.1v-3.6h3.1v-2.7c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.4.1 2.7.1v3.1h-1.8c-1.4 0-1.6.7-1.6 1.6v2.7h3.1l-.4 3.6h-2.7v9.3h5.4c.7 0 1.3-.6 1.3-1.3v-21.4c0-.7-.6-1.3-1.3-1.3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 7.9 6.7 9.2-.1-.8-.1-1.9 0-2.7.1-.7.5-4.6.5-4.6s-.1-.3-.1-.6c0-.6.3-1 .6-1.3-.8-.1-1.7-.3-2.1-1.3-.3-.7-.8-1.1-.8-1.1s-.6 0-.1.4c.4.4.7 1 .7 1 .3.6.7.7.9.7.2 0 .4-.2.5-.3.1-.2.2-.4.1-.7-.1-.3-.2-.8-.4-1.1-.2-.3-.6-.5-.9-.5-1.2-.1-2.1 1.1-2.1 2.3 0 .7.4 1.1.8 1.4.3.3.5.4.3.7-.1.3-.3 1-.3 1.2-.1.2-.2.3-.5.2-1.5-.7-2.5-3.2-2.5-5.3 0-4.4 3.4-7.8 7.8-7.8 4.1 0 7.8 3.3 7.8 7.8 0 4.3-2.7 7.6-6.5 7.6-1.3 0-2.5-.7-2.9-1.4l-.8 3c-.3 1.2-1 2.6-1.5 3.5 1.1.3 2.2.4 3.4.4 5.4 0 9.8-4.4 9.8-9.8 0-5.4-4.4-9.8-9.8-9.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M23.5 7.4c-.4-.2-2.3-1.1-4.5-1.1-3.6 0-4.9 2.2-4.9 4.5v2.7h-2.8v4.3h2.8v10.8h4.6v-10.8h3.1s.3-1.9.4-4.3h-3.5v-1.8c0-1 .3-1.8 1.9-1.8h1.6v-3.2z" />
                </svg>
              </a>
            </div>

            {/* Contact Icons */}
            <div className="flex items-center mb-2">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-300">contact@company.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-300">+123 456 7890</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
