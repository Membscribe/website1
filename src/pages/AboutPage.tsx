import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'We believe great events start with understanding people. Every feature we build puts the human experience at the center.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push the boundaries of event technology, bringing cutting-edge solutions to traditional challenges.'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We empower event creators to focus on what matters most - creating meaningful connections and memorable experiences.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'When your event depends on us, we deliver. 99.9% uptime and enterprise-grade security you can trust.'
    }
  ];

  const team = [
    {
      name: 'Adaora Okafor',
      title: 'CEO & Co-Founder',
      bio: 'Former event director with 15+ years of experience. Led digital transformation at major event companies across Africa.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Kemi Adeleke',
      title: 'CTO & Co-Founder',
      bio: 'Full-stack engineer and former tech lead at Google. Passionate about building scalable platforms that solve real problems.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Chidi Igwe',
      title: 'Head of Product',
      bio: 'Product strategist with deep expertise in user experience design. Previously led product teams at Microsoft and Uber.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Fatima Hassan',
      title: 'VP of Sales',
      bio: 'Sales leader with proven track record in SaaS growth. Former director of enterprise sales at Salesforce.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Tunde Bakare',
      title: 'Head of Customer Success',
      bio: 'Customer advocate with expertise in scaling support operations. Ensures every Eventpadi user achieves their goals.',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Amina Yusuf',
      title: 'Head of Marketing',
      bio: 'Growth marketing expert who previously scaled user acquisition at several Nigerian startups. Storyteller at heart.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Started with a simple mission: make event management effortless for everyone'
    },
    {
      year: '2022',
      title: 'First 1,000 Events',
      description: 'Reached our first major milestone with events across 15 countries'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised $12M to accelerate product development and market expansion'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Launched in 45 countries with multilingual support and local partnerships'
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Introduced AI-powered features for smart event planning and attendee matching'
    }
  ];

  const stats = [
    { label: 'Active Events Monthly', value: '12,000+' },
    { label: 'Happy Customers', value: '3,200+' },
    { label: 'Countries Served', value: '45' },
    { label: 'Team Members', value: '85' }
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
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Empowering Event Creators{' '}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Worldwide
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Born from the frustration of complex event management tools, Eventpadi was created 
              to simplify the process and help organizers focus on what truly matters - creating 
              unforgettable experiences.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To democratize event management by providing powerful, intuitive tools that enable 
                anyone to create professional, engaging events regardless of their technical expertise 
                or budget constraints.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that great events have the power to bring people together, spark innovation, 
                and create lasting memories. Our platform removes the barriers that prevent amazing 
                ideas from becoming amazing experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our Mission"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-xl w-fit mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform event management
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-emerald-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to revolutionizing event management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 to-emerald-50 p-12 rounded-2xl"
          >
            <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate individuals who want to help shape the future 
              of event management. Join our growing team and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
                Learn About Our Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Events?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of event organizers who have already discovered the power of Eventpadi. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Free Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;