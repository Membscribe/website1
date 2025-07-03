import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight, Users, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const plans = [
    {
      name: 'Essentials',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for small events and getting started',
      popular: false,
      features: [
        'Up to 100 attendees',
        'Basic registration forms',
        'Email confirmations',
        'Simple check-in',
        'Basic analytics',
        'Community support',
        '1 event at a time'
      ],
      notIncluded: [
        'Custom branding',
        'Advanced analytics',
        'API access',
        'Priority support',
        'Multiple events'
      ],
      cta: 'Start Free',
      ctaLink: '/demo'
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per event',
      description: 'Ideal for professional events and growing businesses',
      popular: true,
      features: [
        'Up to 1,000 attendees',
        'Custom registration forms',
        'QR code check-in',
        'Payment processing',
        'Advanced analytics',
        'Custom branding',
        'Email & chat support',
        'Multiple events',
        'Sponsor management',
        'Mobile app access'
      ],
      notIncluded: [
        'White-label solution',
        'API access',
        'Dedicated support',
        'Custom integrations'
      ],
      cta: 'Start Pro Trial',
      ctaLink: '/demo'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale events and organizations',
      popular: false,
      features: [
        'Unlimited attendees',
        'Full platform access',
        'White-label solution',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'Advanced security',
        'Custom training',
        'SLA guarantee'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by bank transfer or check.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! Our Essentials plan is completely free, and Pro/Enterprise plans only charge for what you use.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll provide a full refund.'
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Yes! Pro and Enterprise plans include custom domain support, so your event pages can match your brand perfectly.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 email support for all users, live chat for Pro users, and dedicated phone support for Enterprise customers.'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Analytics',
      price: '$19',
      period: 'per event',
      description: 'Deep insights with custom reports and data export'
    },
    {
      name: 'Live Streaming',
      price: '$99',
      period: 'per event',
      description: 'Professional live streaming with recording capabilities'
    },
    {
      name: 'Custom Integrations',
      price: '$299',
      period: 'one-time',
      description: 'Connect with your existing tools and workflows'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Choose the perfect plan for your events. Start free and scale as you grow. 
            No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-purple-600 scale-105 lg:scale-110' 
                    : 'hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <Link
                    to={plan.ctaLink}
                    className={`block w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-emerald-500 text-white hover:shadow-lg transform hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Events
            </h2>
            <p className="text-xl text-gray-600">
              Add powerful features to make your events even more successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-purple-600 mb-3">
                  {addon.price}
                  <span className="text-sm text-gray-600 font-normal">/{addon.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage-based Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Usage-Based Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Only pay for what you use. No hidden fees or surprise charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Per Attendee</h3>
              <p className="text-gray-600">
                Pay only for registered attendees. No charges for no-shows or cancellations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl text-center">
              <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Per Event</h3>
              <p className="text-gray-600">
                Simple event-based pricing. Run multiple sessions under one event.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volume Discounts</h3>
              <p className="text-gray-600">
                The more events you run, the more you save. Ask about our volume pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of event organizers who trust Eventpadi. Start your free account today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Start Free Account
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PricingPage;