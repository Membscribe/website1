import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Users, 
  Calendar, 
  BarChart3, 
  Star, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react';

const HomePage = () => {
  const stats = [
    { label: 'Active Events', value: '12,847', icon: Calendar },
    { label: 'Happy Organizers', value: '3,200+', icon: Users },
    { label: 'Countries', value: '45', icon: Globe },
    { label: 'Success Rate', value: '99.9%', icon: TrendingUp }
  ];

  const features = [
    {
      icon: Users,
      title: 'Guest Registration',
      description: 'Streamlined registration with custom forms and instant confirmations'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Complete event lifecycle management from planning to execution'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track attendance, engagement, and ROI with detailed insights'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Event Director, TechConf 2024',
      content: 'Eventpadi transformed how we manage our annual conference. The platform is intuitive and our attendee satisfaction increased by 40%.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      title: 'Wedding Planner, Elegant Events',
      content: 'From intimate gatherings to grand celebrations, Eventpadi handles it all. My clients love the seamless RSVP process.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Patel',
      title: 'Corporate Events Manager',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking and attendee engagement metrics are game-changers.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const trustedCompanies = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify', 'Airbnb'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Plan Smart.{' '}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Execute Seamless.
              </span>{' '}
              Impress Every Guest.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              The all-in-one event management platform trusted by 3,200+ organizers worldwide. 
              From conferences to weddings, we make every event unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="group flex items-center space-x-3 text-gray-700 hover:text-purple-600 px-6 py-4 transition-colors duration-200">
                <div className="bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-lg font-medium">Watch Demo (2 min)</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-lg">Trusted by leading companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create amazing events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to execution, our comprehensive platform provides all the tools 
              you need to deliver exceptional event experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-xl w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg"
            >
              Explore all features
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by event organizers worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful event creators who trust Eventpadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-emerald-50 p-8 rounded-2xl"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to create your next amazing event?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join over 3,200 event organizers who have already discovered the power of Eventpadi. 
            Start your free account today!
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
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;