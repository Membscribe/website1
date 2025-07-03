import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Download, 
  Star, 
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Wifi,
  Bell,
  QrCode,
  CheckCircle
} from 'lucide-react';

const AppDownloadPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Event Schedules',
      description: 'View personalized agendas and never miss important sessions'
    },
    {
      icon: Users,
      title: 'Smart Networking',
      description: 'Connect with attendees based on shared interests and goals'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Message other attendees and speakers directly'
    },
    {
      icon: QrCode,
      title: 'QR Check-in',
      description: 'Fast, contactless check-in at events and sessions'
    },
    {
      icon: Bell,
      title: 'Real-time Updates',
      description: 'Get instant notifications about schedule changes and announcements'
    },
    {
      icon: Wifi,
      title: 'Offline Access',
      description: 'Access event information even without internet connection'
    }
  ];

  const screenshots = [
    {
      title: 'Event Dashboard',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
    },
    {
      title: 'Schedule View',
      image: 'https://images.pexels.com/photos/7688333/pexels-photo-7688333.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
    },
    {
      title: 'Networking',
      image: 'https://images.pexels.com/photos/7688330/pexels-photo-7688330.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Downloads' },
    { value: '4.8', label: 'App Store Rating' },
    { value: '25K+', label: 'Active Users' },
    { value: '1,200+', label: 'Events Supported' }
  ];

  const testimonials = [
    {
      quote: "The app made networking so much easier. I connected with more relevant people than I ever have at an event.",
      author: "David Kim",
      title: "Product Manager",
      rating: 5
    },
    {
      quote: "Love the offline access feature. Even when WiFi was spotty, I could still access my schedule and speaker info.",
      author: "Maria Santos",
      title: "Marketing Director",
      rating: 5
    },
    {
      quote: "QR code check-in was lightning fast. No more waiting in long lines to get into sessions.",
      author: "James Wilson",
      title: "Software Engineer",
      rating: 5
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Take Your Events{' '}
                <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                  Mobile
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Download the Eventpadi mobile app and transform how you experience events. 
                Stay connected, network smarter, and never miss a moment.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                  <div className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                  <div className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* QR Code */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-gray-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Scan to Download</p>
                  <p className="text-gray-600 text-sm">Quick access via QR code</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-72 h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gray-900 rounded-3xl p-2 h-full">
                  <div className="bg-white rounded-2xl h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Eventpadi Mobile App</p>
                      <p className="text-sm text-gray-500 mt-2">iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in Your Pocket
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for the modern event attendee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600">
              Get a preview of the beautiful, intuitive interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto w-48 h-80 mb-6">
                  <div className="bg-gray-900 rounded-2xl p-1 h-full">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{screenshot.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Event Attendees
            </h2>
            <p className="text-xl text-gray-600">
              See what users are saying about the Eventpadi app
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
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
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
            Download Now and Transform Your Event Experience
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of attendees who are already using Eventpadi to make the most 
            of their event experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </button>
            <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </button>
          </div>

          <div className="flex items-center justify-center text-purple-100">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Free download • No subscription required</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AppDownloadPage;