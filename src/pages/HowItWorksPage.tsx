import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Settings, 
  Users, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Calendar,
  CreditCard,
  MessageSquare,
  UserCheck
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Create',
      subtitle: 'Set up your event in minutes',
      icon: PlusCircle,
      description: 'Use our intuitive event builder to create your event page, set up registration forms, and customize your branding.',
      features: [
        'Quick setup wizard',
        'Custom registration forms',
        'Brand customization',
        'Event page builder'
      ],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      number: 2,
      title: 'Manage',
      subtitle: 'Control every aspect of your event',
      icon: Settings,
      description: 'From ticketing to speaker management, handle all event logistics from one comprehensive dashboard.',
      features: [
        'Ticket management',
        'Speaker coordination',
        'Agenda scheduling',
        'Attendee communication'
      ],
      image: 'https://images.pexels.com/photos/7688333/pexels-photo-7688333.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      number: 3,
      title: 'Engage',
      subtitle: 'Create memorable experiences',
      icon: Users,
      description: 'Foster connections with networking tools, interactive features, and real-time engagement capabilities.',
      features: [
        'Live polls & Q&A',
        'Networking matching',
        'Mobile app access',
        'Real-time updates'
      ],
      image: 'https://images.pexels.com/photos/7688330/pexels-photo-7688330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      number: 4,
      title: 'Analyze',
      subtitle: 'Measure success and improve',
      icon: BarChart3,
      description: 'Get detailed insights on attendance, engagement, and ROI to make data-driven decisions for future events.',
      features: [
        'Attendance tracking',
        'Engagement metrics',
        'Revenue analytics',
        'Custom reports'
      ],
      image: 'https://images.pexels.com/photos/7688338/pexels-photo-7688338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const detailedFeatures = [
    {
      category: 'Registration & Check-in',
      icon: UserCheck,
      features: [
        {
          name: 'Custom Registration Forms',
          description: 'Create tailored forms with conditional logic and custom fields'
        },
        {
          name: 'QR Code Check-in',
          description: 'Fast, contactless check-in with QR code scanning'
        },
        {
          name: 'Badge Printing',
          description: 'Generate and print professional name badges on-site'
        },
        {
          name: 'Waitlist Management',
          description: 'Automatically promote attendees from waitlist when spots open'
        }
      ]
    },
    {
      category: 'Payment & Ticketing',
      icon: CreditCard,
      features: [
        {
          name: 'Multiple Ticket Types',
          description: 'Create various ticket tiers with different pricing and access levels'
        },
        {
          name: 'Secure Payments',
          description: 'Process payments safely with Stripe and PayPal integration'
        },
        {
          name: 'Group Discounts',
          description: 'Offer bulk pricing and promotional codes for groups'
        },
        {
          name: 'Revenue Tracking',
          description: 'Monitor sales performance and financial metrics in real-time'
        }
      ]
    },
    {
      category: 'Event Management',
      icon: Calendar,
      features: [
        {
          name: 'Agenda Builder',
          description: 'Drag-and-drop interface for creating detailed event schedules'
        },
        {
          name: 'Speaker Management',
          description: 'Manage speaker profiles, bios, and presentation materials'
        },
        {
          name: 'Room Assignment',
          description: 'Organize sessions across multiple rooms and venues'
        },
        {
          name: 'Resource Planning',
          description: 'Track equipment, catering, and other event resources'
        }
      ]
    },
    {
      category: 'Engagement & Networking',
      icon: MessageSquare,
      features: [
        {
          name: 'AI-Powered Matching',
          description: 'Connect attendees with similar interests automatically'
        },
        {
          name: 'In-App Messaging',
          description: 'Enable direct communication between attendees'
        },
        {
          name: 'Live Polls & Q&A',
          description: 'Engage audiences with interactive polls and question sessions'
        },
        {
          name: 'Social Sharing',
          description: 'Boost event visibility with integrated social media tools'
        }
      ]
    }
  ];

  const timeline = [
    { time: 'Pre-Event', tasks: ['Set up event page', 'Launch registration', 'Promote event', 'Manage speakers'] },
    { time: 'During Event', tasks: ['Check-in attendees', 'Monitor engagement', 'Facilitate networking', 'Collect feedback'] },
    { time: 'Post-Event', tasks: ['Send thank you emails', 'Analyze results', 'Generate reports', 'Plan follow-up'] }
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
            How{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Eventpadi Works
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            From concept to completion, Eventpadi guides you through every step of event management. 
            Our proven process ensures your events are successful, engaging, and memorable.
          </motion.p>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-20 last:mb-0`}
            >
              {/* Content */}
              <div className="lg:w-1/2 lg:px-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mr-6">
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    <p className="text-lg text-gray-600">{step.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span className="mr-2">Next Step</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                      <step.icon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              Every tool you need for successful event management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {detailedFeatures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-xl mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="space-y-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Management Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Stay organized with our comprehensive event timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.time}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Events?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of successful event organizers who have streamlined their process with Eventpadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Free Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              See It In Action
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorksPage;