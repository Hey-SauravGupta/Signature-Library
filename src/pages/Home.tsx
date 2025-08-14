import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Wifi, Users, Shield, BookOpen, Coffee, Instagram, MapPin, Phone } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Open',
      description: 'Study anytime, day or night'
    },
    {
      icon: Wifi,
      title: 'High-Speed Wi-Fi',
      description: 'Fast internet for research'
    },
    {
      icon: Users,
      title: 'Peaceful Environment',
      description: 'Zero noise, complete focus'
    },
    {
      icon: Shield,
      title: 'Hygienic Space',
      description: 'Clean and sanitized daily'
    },
    {
      icon: BookOpen,
      title: 'Study Resources',
      description: 'Reference books available'
    },
    {
      icon: Coffee,
      title: 'Comfort Zone',
      description: 'Long seating chairs'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ThreeBackground />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Signature Library
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
            A peaceful, hygienic, 24/7 self-study space empowering students<br />
            with an ideal environment to focus, learn, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl"
            >
              <span>Explore More</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              Why Choose Signature Library?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide everything you need for focused, productive study sessions in a comfortable and professional environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group border border-primary-100 dark:border-gray-700"
              >
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 group-hover:from-primary-200 group-hover:to-secondary-200 dark:from-primary-900 dark:to-secondary-900 dark:group-hover:from-primary-800 dark:group-hover:to-secondary-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Always Open</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-100">Happy Students</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Hygienic</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">Fast</div>
              <div className="text-primary-100">Wi-Fi Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
            Connect With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Social Media */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Instagram className="h-10 w-10 text-primary-600 dark:text-primary-400" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Follow Us</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay updated with our latest photos, student success stories, and library updates
              </p>
              <a 
                href="https://www.instagram.com/rv_swadhyay_library__dhar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Instagram className="h-6 w-6" />
                <span>@rajesh13me31</span>
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-100">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <MapPin className="h-10 w-10 text-primary-600" />
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Visit Us</h3>
              </div>
              <div className="text-gray-600 mb-6 leading-relaxed">
                <p className="font-semibold text-lg mb-3">📍 100 ft road block-B, Sant Nagar,</p>
                <p className="mb-2">near Agrawal Sweet, Burari, Delhi</p>
                <p>110084</p>
              </div>
              <a
                href="tel:09926216052"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful students who chose Signature Library for their preparation.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl"
          >
            <span>Visit Us Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;