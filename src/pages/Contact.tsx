import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '100 ft road block-B, Sant Nagar near Agrawal Sweet, Burari, Delhi - 110084',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '099909 91630',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'signaturelibrary01@gmail.com',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Open 24/7',
      action: 'Always Available'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your study journey? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-primary-100 dark:border-gray-700"
              >
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <info.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {info.content}
                </p>
                <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                  {info.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-br from-white via-secondary-50 to-primary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have questions about our packages or facilities? Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900 dark:to-success-800 border border-success-200 dark:border-success-700 rounded-2xl p-6 text-center shadow-lg">
                  <CheckCircle className="h-12 w-12 text-success-600 dark:text-success-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-success-800 dark:text-success-200 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-success-600 dark:text-success-300">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="pricing">Package Pricing Inquiry</option>
                      <option value="facilities">Facilities Information</option>
                      <option value="registration">Registration Process</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-gray-500 resize-none"
                      placeholder="Tell us about your inquiry or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Location Info */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
                Find Us
              </h2>
              <p className="text-gray-600 mb-6">
                Located in the heart of Sant Nagar, Burari, our library is easily accessible and well-connected to major transportation routes.
              </p>

              {/* Google Maps Embed */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg mb-6 border border-primary-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8232.809472155921!2d75.31154203194149!3d22.598890704028747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962370076f3f799%3A0xc11bb05762229941!2sRV%20swadhyay%20library!5e1!3m2!1sen!2sus!4v1753953000010!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Quick Contact Actions */}
              <div className="space-y-4">
                <a
                  href="tel:09926216052"
                  className="flex items-center space-x-3 bg-gradient-to-r from-success-50 to-success-100 hover:from-success-100 hover:to-success-200 p-4 rounded-xl transition-all duration-300 border border-success-200 shadow-md"
                >
                  <Phone className="h-6 w-6 text-success-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Call Us Now</div>
                    <div className="text-sm text-gray-600">099909 91630</div>
                  </div>
                </a>

                <a
                  href="mailto:signaturelibrary01@gmail.com"
                  className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 p-4 rounded-xl transition-all duration-300 border border-primary-200 shadow-md"
                >
                  <Mail className="h-6 w-6 text-primary-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-sm text-gray-600">signaturelibrary01@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-xl border border-accent-200 shadow-md">
                  <Clock className="h-6 w-6 text-accent-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Opening Hours</div>
                    <div className="text-sm text-gray-600">24/7 - Always Open</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
            How to Reach Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-100">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">From Bus Stand</h3>
              <p className="text-gray-600 text-sm">
                Take an auto-rickshaw or walk 5 minutes to Burari. We're located near the main market area.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-100">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">From Burari</h3>
              <p className="text-gray-600 text-sm">
                15-minute drive by taxi or auto-rickshaw. Public buses are also available every 30 minutes.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-100">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Landmarks</h3>
              <p className="text-gray-600 text-sm">
                Near Bikaner Sweets, opposite to Sant Nagar, next to FuncherShop Store.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;












