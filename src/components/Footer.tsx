import React from 'react';
import { BookOpen, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-400 to-secondary-400 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                 Signature Library
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              A peaceful, hygienic, 24/7 self-study space empowering students with an ideal environment to focus, learn, and grow.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-full">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-primary-300 transition-colors">100 ft road block-B, Sant Nagar,
near Agrawal Sweet, Burari, Delhi

 110084</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-full">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-primary-300 transition-colors">099909 91630</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-full">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-primary-300 transition-colors">signaturelibrary01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-full">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-primary-300 transition-colors">Open 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200">About Us</a>
              <a href="/gallery" className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200">Photo Gallery</a>
              <a href="/reviews" className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200">Student Reviews</a>
              <a href="/faq" className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200">FAQ</a>
              <a href="/contact" className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-primary-600 to-secondary-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Signature Library. All rights reserved. | Designed for student success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;