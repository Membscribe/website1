import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  Rocket, 
  Coffee, 
  Heart, 
  Mountain, 
  Monitor,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const EventTypesPage = () => {
  const eventTypes = [
    {
      title: 'Conferences',
      icon: Users,
      description: 'Professional conferences and conventions',
      color: 'purple',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Multi-track scheduling',
        'Speaker management',
        'Networking tools',
        'Live streaming',
        'Q&A sessions',
        'Sponsor integration'
      ],
      useCases: [
        'Industry conferences',
        'Academic symposiums',
        'Business summits',
        'Professional meetups'
      ],
      stats: {
        events: '2,500+',
        attendees: '450K+',
        satisfaction: '94%'
      }
    },
    {
      title: 'Trade Shows',
      icon: Building,
      description: 'Exhibitions and trade shows',
      color: 'emerald',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Floor plan mapping',
        'Exhibitor management',
        'Lead capture tools',
        'Badge scanning',
        'ROI tracking',
        'Visitor analytics'
      ],
      useCases: [
        'Industry exhibitions',
        'B2B trade shows',
        'Product launches',
        'Vendor showcases'
      ],
      stats: {
        events: '850+',
        attendees: '125K+',
        satisfaction: '91%'
      }
    },
    {
      title: 'Product Launches',
      icon: Rocket,
      description: 'Product unveilings and launch events',
      color: 'blue',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Media management',
        'Press kit distribution',
        'Live demonstrations',
        'Social media integration',
        'Influencer tracking',
        'Media coverage analytics'
      ],
      useCases: [
        'Tech product launches',
        'Fashion shows',
        'Book releases',
        'App launches'
      ],
      stats: {
        events: '320+',
        attendees: '45K+',
        satisfaction: '96%'
      }
    },
    {
      title: 'Networking Events',
      icon: Coffee,
      description: 'Professional networking and mixers',
      color: 'orange',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'AI-powered matching',
        'Digital business cards',
        'Connection tracking',
        'Follow-up tools',
        'Icebreaker activities',
        'ROI measurement'
      ],
      useCases: [
        'Business mixers',
        'Industry meetups',
        'Alumni events',
        'Professional associations'
      ],
      stats: {
        events: '1,800+',
        attendees: '89K+',
        satisfaction: '92%'
      }
    },
    {
      title: 'Weddings',
      icon: Heart,
      description: 'Weddings and private celebrations',
      color: 'pink',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'RSVP management',
        'Guest communication',
        'Seating arrangements',
        'Photo sharing',
        'Gift registry',
        'Timeline coordination'
      ],
      useCases: [
        'Weddings',
        'Anniversaries',
        'Birthday parties',
        'Family reunions'
      ],
      stats: {
        events: '4,200+',
        attendees: '78K+',
        satisfaction: '98%'
      }
    },
    {
      title: 'Retreats',
      icon: Mountain,
      description: 'Corporate retreats and team building',
      color: 'indigo',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Activity planning',
        'Accommodation management',
        'Transportation coordination',
        'Team building tools',
        'Feedback collection',
        'Budget tracking'
      ],
      useCases: [
        'Corporate retreats',
        'Team building events',
        'Leadership workshops',
        'Training sessions'
      ],
      stats: {
        events: '680+',
        attendees: '25K+',
        satisfaction: '95%'
      }
    },
    {
      title: 'Webinars & Hybrid',
      icon: Monitor,
      description: 'Virtual and hybrid events',
      color: 'teal',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Live streaming',
        'Interactive polls',
        'Breakout rooms',
        'Recording capabilities',
        'Global accessibility',
        'Engagement analytics'
      ],
      useCases: [
        'Webinars',
        'Virtual conferences',
        'Hybrid events',
        'Online workshops'
      ],
      stats: {
        events: '3,100+',
        attendees: '312K+',
        satisfaction: '93%'
      }
    },
    {
      title: 'Workshops',
      icon: Calendar,
      description: 'Educational workshops and training',
      color: 'gray',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Skill tracking',
        'Certification management',
        'Resource sharing',
        'Progress monitoring',
        'Interactive exercises',
        'Completion certificates'
      ],
      useCases: [
        'Training workshops',
        'Skill development',
        'Educational seminars',
        'Certification courses'
      ],
      stats: {
        events: '1,950+',
        attendees: '67K+',
        satisfaction: '97%'
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: { bg: 'from-purple-600 to-purple-700', text: 'text-purple-600', light: 'from-purple-50 to-purple-100' },
      emerald: { bg: 'from-emerald-600 to-emerald-700', text: 'text-emerald-600', light: 'from-emerald-50 to-emerald-100' },
      blue: { bg: 'from-blue-600 to-blue-700', text: 'text-blue-600', light: 'from-blue-50 to-blue-100' },
      orange: { bg: 'from-orange-600 to-orange-700', text: 'text-orange-600', light: 'from-orange-50 to-orange-100' },
      pink: { bg: 'from-pink-600 to-pink-700', text: 'text-pink-600', light: 'from-pink-50 to-pink-100' },
      indigo: { bg: 'from-indigo-600 to-indigo-700', text: 'text-indigo-600', light: 'from-indigo-50 to-indigo-100' },
      teal: { bg: 'from-teal-600 to-teal-700', text: 'text-teal-600', light: 'from-teal-50 to-teal-100' },
      gray: { bg: 'from-gray-600 to-gray-700', text: 'text-gray-600', light: 'from-gray-50 to-gray-100' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

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
            Every Event Type,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Perfectly Supported
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            From intimate workshops to large-scale conferences, Eventpadi adapts to your specific 
            event needs with tailored features and dedicated support.
          </motion.p>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {eventTypes.map((eventType, index) => {
              const colors = getColorClasses(eventType.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={eventType.image}
                      alt={eventType.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`bg-gradient-to-r ${colors.bg} p-3 rounded-xl`}>
                        <eventType.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Title and Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{eventType.title}</h3>
                      <p className="text-gray-600">{eventType.description}</p>
                    </div>

                    {/* Stats */}
                    <div className={`bg-gradient-to-r ${colors.light} p-4 rounded-xl mb-6`}>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className={`text-lg font-bold ${colors.text}`}>{eventType.stats.events}</div>
                          <div className="text-xs text-gray-600">Events</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${colors.text}`}>{eventType.stats.attendees}</div>
                          <div className="text-xs text-gray-600">Attendees</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${colors.text}`}>{eventType.stats.satisfaction}</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {eventType.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Perfect For</h4>
                      <div className="flex flex-wrap gap-2">
                        {eventType.useCases.map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className={`w-full bg-gradient-to-r ${colors.bg} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center`}>
                      Start Planning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories Across All Event Types
            </h2>
            <p className="text-xl text-gray-600">
              See how different organizations have succeeded with Eventpadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Our annual tech conference doubled in attendance after switching to Eventpadi. 
                The networking features were a game-changer."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600 text-sm">TechSummit Conference Director</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Planning our wedding was stress-free with Eventpadi. RSVP management and guest 
                communication tools saved us so much time."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Emily & James Rodriguez</div>
                <div className="text-gray-600 text-sm">Newlyweds</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The lead capture tools at our trade show generated 300% more qualified leads 
                compared to previous years."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Mark Thompson</div>
                <div className="text-gray-600 text-sm">Exhibition Manager, InnovCorp</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Type of Event Are You Planning?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            No matter the size, type, or complexity, Eventpadi has the perfect solution for your event. 
            Start creating memorable experiences today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Create My Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Explore Features
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EventTypesPage;