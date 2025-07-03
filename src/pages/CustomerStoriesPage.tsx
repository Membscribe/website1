import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Users, 
  TrendingUp, 
  Award,
  Calendar,
  BarChart3,
  Heart,
  Building
} from 'lucide-react';

const CustomerStoriesPage = () => {
  const featuredStory = {
    company: 'TechConf Africa 2024',
    organizer: 'Chioma Okafor',
    title: 'Event Director',
    eventType: 'Technology Conference',
    attendees: '2,500+',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    challenge: 'Managing Africa\'s largest tech conference with attendees from 35 countries, multiple tracks, and complex speaker logistics.',
    solution: 'Eventpadi\'s comprehensive platform streamlined registration, enabled seamless check-in, and facilitated meaningful networking.',
    results: [
      { metric: 'Registration Increase', value: '65%', description: 'compared to previous year' },
      { metric: 'Check-in Time', value: '3 min', description: 'average per attendee' },
      { metric: 'Networking Connections', value: '4,200+', description: 'made through the app' },
      { metric: 'Satisfaction Score', value: '4.8/5', description: 'from post-event survey' }
    ],
    quote: "Eventpadi transformed how we manage TechConf. What used to take our team weeks now happens in days. The networking features alone generated more meaningful connections than we've ever seen at our events.",
    features: [
      'Multi-track scheduling with 45 sessions',
      'QR code check-in for 2,500+ attendees',
      'AI-powered networking matching',
      'Real-time analytics dashboard',
      'Multi-language support (English, French, Swahili)',
      'Integration with sponsor systems'
    ]
  };

  const customerStories = [
    {
      company: 'Elite Weddings Lagos',
      organizer: 'Adunni Fashola',
      title: 'Wedding Planner',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      eventType: 'Luxury Weddings',
      quote: "Our clients love the elegant RSVP system and real-time guest management. We've planned 50+ weddings using Eventpadi with zero issues.",
      results: {
        primary: '50+ Weddings',
        metrics: ['100% On-time delivery', '98% Client satisfaction', '40% Time saved']
      },
      industry: 'Wedding Planning'
    },
    {
      company: 'Nigeria Fintech Summit',
      organizer: 'Kemi Adeleke',
      title: 'Conference Director',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      eventType: 'Financial Conference',
      quote: "The sponsor management tools and ROI tracking helped us increase sponsorship revenue by 150%. Our sponsors can see real-time engagement metrics.",
      results: {
        primary: '1,200 Attendees',
        metrics: ['150% Sponsor revenue increase', '85% Lead conversion', '300+ Speaking requests']
      },
      industry: 'Financial Services'
    },
    {
      company: 'Lagos Fashion Week',
      organizer: 'Omoyemi Akerele',
      title: 'Creative Director',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      eventType: 'Fashion Show',
      quote: "Managing media accreditation and VIP guests became effortless. The mobile app's photo sharing feature created amazing social media buzz.",
      results: {
        primary: '5,000+ Guests',
        metrics: ['2M Social media reach', '500+ Media attendees', '12 International buyers']
      },
      industry: 'Fashion & Entertainment'
    },
    {
      company: 'Corporate Training Solutions',
      organizer: 'Ibrahim Musa',
      title: 'Training Manager',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      eventType: 'Corporate Training',
      quote: "The certification tracking and progress monitoring features have revolutionized our training programs. Clients can see immediate ROI.",
      results: {
        primary: '800+ Trainees',
        metrics: ['95% Completion rate', '90% Certification success', '25% Cost reduction']
      },
      industry: 'Corporate Training'
    },
    {
      company: 'Startup Grind Abuja',
      organizer: 'Grace Ihejiamaizu',
      title: 'Community Lead',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      eventType: 'Startup Events',
      quote: "The networking features are incredible. Entrepreneurs are making real connections and deals. We've facilitated over $2M in funding connections.",
      results: {
        primary: '300+ Entrepreneurs',
        metrics: ['$2M+ Funding connected', '150+ Startups featured', '80% Return rate']
      },
      industry: 'Startup Ecosystem'
    }
  ];

  const industries = [
    { name: 'Technology', count: '850+ events', icon: Building },
    { name: 'Wedding & Events', count: '1,200+ events', icon: Heart },
    { name: 'Corporate Training', count: '650+ events', icon: Users },
    { name: 'Healthcare', count: '400+ events', icon: Award },
    { name: 'Finance', count: '300+ events', icon: BarChart3 },
    { name: 'Education', count: '550+ events', icon: Calendar }
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
            Customer{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Discover how event organizers across Africa and beyond are using Eventpadi to 
            create extraordinary experiences and achieve remarkable results.
          </motion.p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-12 text-white">
                <div className="flex items-center mb-6">
                  <img
                    src={featuredStory.avatar}
                    alt={featuredStory.organizer}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-white/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{featuredStory.organizer}</h3>
                    <p className="text-purple-100">{featuredStory.title}</p>
                    <p className="text-purple-200 text-sm">{featuredStory.company}</p>
                  </div>
                </div>

                <div className="flex text-yellow-300 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl italic mb-8 leading-relaxed">
                  "{featuredStory.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-2xl font-bold">{featuredStory.attendees}</div>
                    <div className="text-purple-200 text-sm">Attendees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">35</div>
                    <div className="text-purple-200 text-sm">Countries</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold mb-3">Key Features Used:</h4>
                  {featuredStory.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-emerald-300 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-600/20"></div>
              </div>
            </div>
          </motion.div>

          {/* Results Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {featuredStory.results.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{result.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations across different industries are thriving with Eventpadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={story.image}
                  alt={story.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.avatar}
                      alt={story.organizer}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{story.organizer}</h3>
                      <p className="text-gray-600 text-sm">{story.title}</p>
                      <p className="text-purple-600 text-sm font-medium">{story.company}</p>
                    </div>
                  </div>

                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  <div className="bg-gradient-to-br from-purple-50 to-emerald-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {story.results.primary}
                    </div>
                    <div className="space-y-1">
                      {story.results.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 text-emerald-500 mr-2" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              From startups to enterprises, across every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-purple-600 font-semibold">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of successful event organizers who have transformed their events with Eventpadi. 
            Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CustomerStoriesPage;