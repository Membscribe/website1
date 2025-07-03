import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  Calendar, 
  Building, 
  MessageSquare, 
  BarChart3,
  UserCheck,
  Globe,
  Smartphone,
  Shield,
  Clock,
  Zap
} from 'lucide-react';

const FeaturesPage = () => {
  const featureCategories = [
    {
      title: 'Guest Registration & Check-in',
      icon: UserCheck,
      description: 'Streamline your event registration process with custom forms and instant check-in',
      features: [
        'Custom registration forms with conditional logic',
        'QR code check-in for instant entry',
        'Automated confirmation emails and reminders',
        'Waitlist management and automated promotions',
        'Badge printing and name tag generation'
      ]
    },
    {
      title: 'Ticketing & Payments',
      icon: CreditCard,
      description: 'Secure payment processing with flexible ticketing options',
      features: [
        'Multiple ticket types and pricing tiers',
        'Early bird and promotional discounts',
        'Secure payment processing (Stripe, PayPal)',
        'Split payments and group bookings',
        'Revenue tracking and financial reporting'
      ]
    },
    {
      title: 'Agenda & Speaker Management',
      icon: Calendar,
      description: 'Create detailed agendas and manage speakers effortlessly',
      features: [
        'Drag-and-drop agenda builder',
        'Speaker profiles and bio management',
        'Session scheduling and room assignments',
        'Breakout room management',
        'Presentation upload and sharing'
      ]
    },
    {
      title: 'Exhibitor & Sponsor Tools',
      icon: Building,
      description: 'Comprehensive tools for exhibitors and sponsors',
      features: [
        'Interactive floor plan and booth mapping',
        'Lead capture and business card scanning',
        'Sponsor branding and logo placement',
        'Exhibitor directory and profiles',
        'ROI tracking for sponsors'
      ]
    },
    {
      title: 'Networking & Messaging',
      icon: MessageSquare,
      description: 'Foster connections with built-in networking features',
      features: [
        'AI-powered attendee matching',
        'In-app messaging and chat rooms',
        'Virtual networking lounges',
        'Business card exchange',
        'Meeting scheduler and calendar integration'
      ]
    },
    {
      title: 'Surveys, Polls & Q&A',
      icon: BarChart3,
      description: 'Engage your audience with interactive features',
      features: [
        'Live polls and real-time voting',
        'Session feedback and ratings',
        'Q&A management with moderation',
        'Post-event surveys and NPS tracking',
        'Word clouds and interactive displays'
      ]
    },
    {
      title: 'Real-Time Analytics',
      icon: BarChart3,
      description: 'Comprehensive insights and reporting dashboard',
      features: [
        'Live attendance tracking',
        'Engagement metrics and heatmaps',
        'Revenue and ROI analytics',
        'Social media integration and tracking',
        'Custom reports and data export'
      ]
    },
    {
      title: 'Multi-Event Dashboard',
      icon: Globe,
      description: 'Manage multiple events from a single dashboard',
      features: [
        'Centralized event management',
        'Template library and event cloning',
        'Team collaboration and permissions',
        'White-label customization options',
        'API access for custom integrations'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Native mobile apps for iOS and Android with offline capabilities'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption and data protection'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers'
    },
    {
      icon: Zap,
      title: 'Fast Setup',
      description: 'Get your event live in minutes with our quick setup wizard'
    }
  ];

  const comparisonData = [
    { feature: 'Custom Registration Forms', eventpadi: true, whova: true, swapcard: true },
    { feature: 'QR Code Check-in', eventpadi: true, whova: true, swapcard: false },
    { feature: 'AI-Powered Networking', eventpadi: true, whova: false, swapcard: true },
    { feature: 'White-label Options', eventpadi: true, whova: false, swapcard: true },
    { feature: 'Free Plan Available', eventpadi: true, whova: false, swapcard: false },
    { feature: 'API Access', eventpadi: true, whova: true, swapcard: true },
    { feature: 'Live Streaming Integration', eventpadi: true, whova: true, swapcard: true },
    { feature: 'Multi-language Support', eventpadi: true, whova: false, swapcard: true },
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
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Every Event
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            From small gatherings to large conferences, our comprehensive platform 
            provides everything you need to create memorable event experiences.
          </motion.p>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featureCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-xl mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-emerald-100 rounded-full p-1 mr-3 mt-0.5">
                        <UserCheck className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eventpadi?
            </h2>
            <p className="text-xl text-gray-600">
              Built with modern technology and designed for today's event organizers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See how Eventpadi stacks up against other leading platforms
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-emerald-500">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Eventpadi</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Whova</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Swapcard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.eventpadi ? (
                          <div className="text-emerald-600 font-bold">✓</div>
                        ) : (
                          <div className="text-gray-400">✗</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.whova ? (
                          <div className="text-emerald-600 font-bold">✓</div>
                        ) : (
                          <div className="text-gray-400">✗</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.swapcard ? (
                          <div className="text-emerald-600 font-bold">✓</div>
                        ) : (
                          <div className="text-gray-400">✗</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Start your free account today and see why thousands of event organizers choose Eventpadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FeaturesPage;