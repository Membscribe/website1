import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronRight,
  Users,
  CreditCard,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: '',
    message: ''
  });

  const categories = [
    { name: 'All', icon: Book, count: 48, color: 'purple' },
    { name: 'Getting Started', icon: Users, count: 12, color: 'emerald' },
    { name: 'Event Setup', icon: Calendar, count: 15, color: 'blue' },
    { name: 'Registration & Check-in', icon: CheckCircle, count: 10, color: 'orange' },
    { name: 'Payments & Billing', icon: CreditCard, count: 8, color: 'pink' },
    { name: 'Analytics & Reports', icon: BarChart3, count: 7, color: 'indigo' },
    { name: 'Account Settings', icon: Settings, count: 6, color: 'teal' }
  ];

  const knowledgeBaseArticles = [
    {
      title: 'How to Create Your First Event',
      excerpt: 'Step-by-step guide to setting up your first event on Eventpadi',
      category: 'Getting Started',
      readTime: '5 min',
      views: '12.5K',
      helpful: 95
    },
    {
      title: 'Setting Up Registration Forms',
      excerpt: 'Learn how to customize registration forms for your events',
      category: 'Event Setup',
      readTime: '7 min',
      views: '8.3K',
      helpful: 92
    },
    {
      title: 'QR Code Check-in Process',
      excerpt: 'Complete guide to using QR codes for fast attendee check-in',
      category: 'Registration & Check-in',
      readTime: '4 min',
      views: '15.2K',
      helpful: 98
    },
    {
      title: 'Payment Processing Setup',
      excerpt: 'Configure Stripe and PayPal for seamless payment collection',
      category: 'Payments & Billing',
      readTime: '6 min',
      views: '6.7K',
      helpful: 89
    },
    {
      title: 'Understanding Analytics Dashboard',
      excerpt: 'How to read and interpret your event analytics data',
      category: 'Analytics & Reports',
      readTime: '8 min',
      views: '4.2K',
      helpful: 91
    },
    {
      title: 'Managing Team Permissions',
      excerpt: 'Set up team access and permissions for collaborative planning',
      category: 'Account Settings',
      readTime: '5 min',
      views: '3.8K',
      helpful: 87
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Eventpadi?',
      answer: 'Getting started is easy! Simply sign up for a free account, use our event setup wizard to create your first event, customize your registration form, and start promoting. Our onboarding guide will walk you through each step.',
      category: 'Getting Started'
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We support all major payment methods including Visa, MasterCard, American Express, PayPal, and bank transfers. For Nigerian events, we also support local payment methods like Paystack and Flutterwave.',
      category: 'Payments & Billing'
    },
    {
      question: 'Can I customize the look of my event page?',
      answer: 'Absolutely! You can customize colors, fonts, logos, and layout to match your brand. Pro and Enterprise plans include advanced white-label customization options.',
      category: 'Event Setup'
    },
    {
      question: 'How does the QR code check-in work?',
      answer: 'Each registered attendee receives a unique QR code via email. At the event, scan the code with our mobile app for instant check-in. The system works offline and syncs when connected.',
      category: 'Registration & Check-in'
    },
    {
      question: 'What analytics are available?',
      answer: 'You get comprehensive analytics including registration trends, attendance rates, engagement metrics, revenue tracking, and attendee demographics. Export data to CSV for further analysis.',
      category: 'Analytics & Reports'
    },
    {
      question: 'Is there a mobile app for attendees?',
      answer: 'Yes! We have native iOS and Android apps that attendees can download. The app includes event schedules, networking features, maps, and push notifications.',
      category: 'Getting Started'
    },
    {
      question: 'How do I invite team members?',
      answer: 'Go to Account Settings > Team Members, click "Invite Member," enter their email and select their role (Admin, Editor, or Viewer). They\'ll receive an invitation email to join your workspace.',
      category: 'Account Settings'
    },
    {
      question: 'What if I need to refund a ticket?',
      answer: 'Refunds can be processed directly from your dashboard. Go to the attendee list, find the person, and click "Issue Refund." The refund will be processed within 5-7 business days.',
      category: 'Payments & Billing'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Fri, 9AM-6PM WAT',
      responseTime: '< 2 minutes',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message about your issue',
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk directly with our technical experts',
      availability: 'Enterprise customers only',
      responseTime: 'Immediate',
      action: 'Schedule Call'
    }
  ];

  const filteredArticles = knowledgeBaseArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', supportForm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSupportForm(prev => ({ ...prev, [name]: value }));
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
            How Can We{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Help You?
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Find answers in our knowledge base, get help from our support team, 
            or browse our comprehensive guides to get the most out of Eventpadi.
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support Your Way</h2>
            <p className="text-xl text-gray-600">Choose the support channel that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">Response: {channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Base</h2>
            <p className="text-xl text-gray-600">Find answers to common questions and detailed guides</p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {article.views} views • {article.helpful}% helpful
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to the most common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    <div className="mt-3">
                      <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Send us a message and we'll get back to you within 4 hours</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-8 text-white text-center">
              <HelpCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Contact Support</h3>
              <p className="text-purple-100">We're here to help you succeed with your events</p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={supportForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={supportForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={supportForm.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="feature">Feature Request</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={supportForm.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={supportForm.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your issue *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={supportForm.message}
                  onChange={handleInputChange}
                  placeholder="Please provide as much detail as possible about your issue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white py-4 px-6 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Send Support Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SupportPage;