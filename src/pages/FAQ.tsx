import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Wifi, Shield, Users, BookOpen } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'Timings & Access',
      icon: Clock,
      questions: [
        {
          question: 'What are your operating hours?',
          answer: 'We are open 24/7, 365 days a year. You can study anytime that suits your schedule, whether early morning or late night.'
        },
        {
          question: 'Is the library really open on holidays and weekends?',
          answer: 'Yes, absolutely! We understand that students often get their best study time during holidays and weekends. Our 24/7 policy means we never close.'
        },
        {
          question: 'How do I get access during night hours?',
          answer: 'Once you register for any of our packages, you will receive access credentials. Our staff is available round the clock for assistance.'
        }
      ]
    },
    {
      title: 'Packages & Pricing',
      icon: CreditCard,
      questions: [
        {
          question: 'What packages do you offer?',
          answer: 'We offer flexible hybrid packages: Daily passes, Weekly passes, Monthly subscriptions, and Hourly rates. All packages include high-speed Wi-Fi, comfortable seating, and access to our resources.'
        },
        {
          question: 'Can I switch between different packages?',
          answer: 'Yes, you can upgrade or change your package anytime. We offer prorated billing and flexible switching options to suit your changing study needs.'
        },
        {
          question: 'Are there any student discounts available?',
          answer: 'Yes, we offer special rates for long-term commitments and group bookings. Contact us for customized pricing based on your specific requirements.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, UPI, bank transfers, and all major debit/credit cards. We also offer online payment options for your convenience.'
        }
      ]
    },
    {
      title: 'Facilities & Services',
      icon: Wifi,
      questions: [
        {
          question: 'How fast is your Wi-Fi?',
          answer: 'We provide high-speed fiber internet with speeds up to 100 Mbps. The connection is stable and reliable for research, online classes, and downloading study materials.'
        },
        {
          question: 'Do you provide charging points?',
          answer: 'Yes, every study desk has dedicated charging points for laptops, phones, and other devices. We also have backup power to ensure uninterrupted study sessions.'
        },
        {
          question: 'Are reference books available?',
          answer: 'Yes, we have a collection of reference books for various competitive exams including UPSC, Banking, SSC, and academic subjects. Books are available for in-library use.'
        },
        {
          question: 'Is food and drink allowed inside?',
          answer: 'We have a designated refreshment area where you can have snacks and drinks. Eating is not allowed in the main study areas to maintain cleanliness and avoid distractions.'
        }
      ]
    },
    {
      title: 'Safety & Hygiene',
      icon: Shield,
      questions: [
        {
          question: 'What safety measures do you follow?',
          answer: 'We have CCTV surveillance, security personnel, and follow all safety protocols. The library is well-lit and secure for students studying at any hour.'
        },
        {
          question: 'How do you maintain hygiene standards?',
          answer: 'We sanitize the library multiple times daily, provide hand sanitizers, and maintain clean restrooms. All surfaces and seating areas are regularly cleaned and disinfected.'
        },
        {
          question: 'Is the library air-conditioned?',
          answer: 'Yes, we maintain optimal temperature throughout the library with centralized air conditioning to ensure comfortable study conditions.'
        }
      ]
    },
    {
      title: 'Rules & Policies',
      icon: Users,
      questions: [
        {
          question: 'What is your silence policy?',
          answer: 'We maintain strict silence in all study areas. Mobile phones must be on silent mode, and conversations are only allowed in designated discussion areas.'
        },
        {
          question: 'Can I reserve a specific seat?',
          answer: 'Yes, regular members can reserve preferred seats. We also have different seating options including individual desks, comfortable chairs, and group study tables.'
        },
        {
          question: 'What items am I not allowed to bring?',
          answer: 'We don\'t allow outside food in study areas, loud music, or any disruptive items. Personal laptops, tablets, and study materials are welcome.'
        },
        {
          question: 'Is there a dress code?',
          answer: 'We don\'t have a strict dress code, but we expect students to dress appropriately for a study environment. Comfort and modesty are the key guidelines.'
        }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      questions: [
        {
          question: 'Do you provide study guidance?',
          answer: 'While we primarily provide study space, our staff can help with basic queries about resources and facilities. We also organize occasional study technique workshops.'
        },
        {
          question: 'Can I print documents here?',
          answer: 'Yes, we have printing and scanning facilities available at nominal charges. You can print study materials, applications, and other documents.'
        },
        {
          question: 'Do you have group study areas?',
          answer: 'Yes, we have designated group study rooms for collaborative learning and discussion. These rooms can be booked in advance.'
        },
        {
          question: 'What if I face technical issues with Wi-Fi or power?',
          answer: 'Our technical support team is available 24/7 to resolve any connectivity or power issues immediately. We also have backup systems in place.'
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Get answers to common questions about our facilities, packages, and policies
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
                {/* Category Header */}
                <div className="bg-purple-50 dark:bg-purple-900/20 px-6 py-4 border-b border-purple-100 dark:border-purple-800">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded-lg">
                      <category.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {category.questions.map((faq) => {
                    const currentIndex = questionIndex++;
                    const isOpen = openItems.includes(currentIndex);
                    
                    return (
                      <div key={currentIndex} className="px-6 py-4">
                        <button
                          onClick={() => toggleItem(currentIndex)}
                          className="w-full text-left flex items-center justify-between py-2 focus:outline-none group"
                        >
                          <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-shrink-0 transition-colors" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="mt-3 pb-2">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Can't find what you're looking for? Get in touch with us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="bg-purple-100 dark:bg-purple-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sant Nagar, Burari, Delhi,110084
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="bg-purple-100 dark:bg-purple-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                099909 91630
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="bg-purple-100 dark:bg-purple-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                signaturelibrary01@gmail.com
              </p>
            </div>
          </div>
          
          <a
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;