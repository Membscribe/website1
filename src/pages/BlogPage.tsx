import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  Users,
  Lightbulb,
  Megaphone
} from 'lucide-react';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', icon: null, count: 24 },
    { name: 'Event Trends', icon: TrendingUp, count: 8 },
    { name: 'Planning Tips', icon: Lightbulb, count: 10 },
    { name: 'Product Updates', icon: Megaphone, count: 6 }
  ];

  const featuredPost = {
    title: 'The Ultimate Guide to Hybrid Events in 2025',
    excerpt: 'Discover the latest trends, best practices, and technology solutions for creating successful hybrid events that engage both in-person and virtual attendees.',
    author: 'Adaora Okafor',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Event Trends',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    featured: true
  };

  const blogPosts = [
    {
      title: '10 Event Registration Best Practices That Boost Attendance',
      excerpt: 'Learn proven strategies to optimize your event registration process and increase sign-up rates.',
      author: 'Kemi Adeleke',
      date: 'January 12, 2025',
      readTime: '5 min read',
      category: 'Planning Tips',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Registration', 'Marketing', 'Best Practices']
    },
    {
      title: 'New Feature: AI-Powered Attendee Matching is Here',
      excerpt: 'Introducing smart networking that automatically connects attendees with similar interests and goals.',
      author: 'Chidi Igwe',
      date: 'January 10, 2025',
      readTime: '3 min read',
      category: 'Product Updates',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Product', 'AI', 'Networking']
    },
    {
      title: 'How to Measure Event ROI: Metrics That Matter',
      excerpt: 'Discover the key performance indicators that will help you demonstrate the value of your events.',
      author: 'Fatima Hassan',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Event Trends',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Analytics', 'ROI', 'Strategy']
    },
    {
      title: 'The Art of Creating Memorable Event Experiences',
      excerpt: 'Transform ordinary events into extraordinary experiences with these creative strategies.',
      author: 'Tunde Bakare',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Planning Tips',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Experience Design', 'Creativity', 'Engagement']
    },
    {
      title: 'Event Technology Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with these emerging technologies reshaping the events industry.',
      author: 'Amina Yusuf',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Event Trends',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Technology', 'Innovation', 'Future']
    },
    {
      title: 'Building Stronger Sponsor Relationships',
      excerpt: 'Proven strategies for attracting, managing, and retaining event sponsors year after year.',
      author: 'Kemi Adeleke',
      date: 'December 30, 2024',
      readTime: '5 min read',
      category: 'Planning Tips',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Sponsorship', 'Relationships', 'Revenue']
    },
    {
      title: 'Enhanced Analytics Dashboard: See Your Event Data Like Never Before',
      excerpt: 'Our redesigned analytics provide deeper insights into attendee behavior and event performance.',
      author: 'Chidi Igwe',
      date: 'December 28, 2024',
      readTime: '4 min read',
      category: 'Product Updates',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Analytics', 'Dashboard', 'Data']
    },
    {
      title: 'Sustainable Event Planning: Going Green in 2025',
      excerpt: 'How to organize eco-friendly events that make a positive impact on the environment.',
      author: 'Amina Yusuf',
      date: 'December 25, 2024',
      readTime: '6 min read',
      category: 'Event Trends',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      tags: ['Sustainability', 'Environment', 'Green Events']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Event Planning{' '}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Stay ahead of the curve with expert insights, industry trends, and practical tips 
              for creating extraordinary events.
            </motion.p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category.name)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4 mr-2" />}
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-purple-600 font-medium text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm mr-4">{featuredPost.date}</span>
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay In The Loop
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Get the latest event planning insights, tips, and Eventpadi updates delivered 
            straight to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Join 5,000+ event professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-emerald-50 p-12 rounded-2xl text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Lightbulb className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Event Planning Checklist
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download our comprehensive 50-point checklist that covers everything from 
              initial planning to post-event follow-up. Used by 10,000+ event organizers.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Download Free Checklist
            </button>
            <p className="text-sm text-gray-500 mt-4">
              No spam, ever. Just valuable event planning resources.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;