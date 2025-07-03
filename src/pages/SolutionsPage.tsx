import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  Store, 
  Mic, 
  Award, 
  UserCheck,
  BarChart3,
  Calendar,
  CreditCard,
  MessageSquare,
  Globe,
  Star
} from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: 'Event Organizers',
      icon: Users,
      description: 'Complete event management platform for professional organizers',
      color: 'purple',
      features: [
        'Multi-event dashboard',
        'Advanced analytics & reporting',
        'White-label customization',
        'Team collaboration tools',
        'API integrations',
        'Priority support'
      ],
      useCases: [
        'Conference planning',
        'Trade show management',
        'Corporate events',
        'Wedding coordination'
      ],
      testimonial: {
        quote: "Eventpadi has transformed how we manage our events. We've increased efficiency by 60% and client satisfaction scores are at an all-time high.",
        author: "Sarah Johnson",
        title: "Event Director, Premier Events Co."
      }
    },
    {
      title: 'Corporates',
      icon: Building,
      description: 'Enterprise-grade solutions for corporate events and meetings',
      color: 'emerald',
      features: [
        'Single sign-on (SSO)',
        'Enterprise security',
        'Custom branding',
        'Department-level permissions',
        'Budget tracking & approvals',
        'Integration with HR systems'
      ],
      useCases: [
        'Company meetings',
        'Training sessions',
        'Team building events',
        'Board meetings'
      ],
      testimonial: {
        quote: "The enterprise features and security controls give us peace of mind. Our legal and IT teams love the compliance features.",
        author: "Michael Chen",
        title: "VP Operations, TechCorp Inc."
      }
    },
    {
      title: 'Exhibitors',
      icon: Store,
      description: 'Maximize your exhibition ROI with powerful exhibitor tools',
      color: 'blue',
      features: [
        'Lead capture tools',
        'QR code business cards',
        'Attendee engagement tracking',
        'Real-time analytics',
        'Follow-up automation',
        'ROI measurement'
      ],
      useCases: [
        'Trade shows',
        'Industry exhibitions',
        'Product showcases',
        'B2B networking events'
      ],
      testimonial: {
        quote: "We captured 40% more leads and our follow-up conversion rate doubled. The ROI tracking helps us prove value to management.",
        author: "Lisa Rodriguez",
        title: "Marketing Manager, InnovateTech"
      }
    },
    {
      title: 'Speakers',
      icon: Mic,
      description: 'Engage your audience and build your speaking brand',
      color: 'orange',
      features: [
        'Speaker profile management',
        'Presentation uploads',
        'Audience Q&A tools',
        'Live polls & surveys',
        'Speaking history tracking',
        'Audience feedback collection'
      ],
      useCases: [
        'Keynote presentations',
        'Workshop facilitation',
        'Panel discussions',
        'Virtual speaking engagements'
      ],
      testimonial: {
        quote: "The audience engagement tools have made my presentations much more interactive. I can see real-time feedback and adjust accordingly.",
        author: "Dr. James Wilson",
        title: "Keynote Speaker & Industry Expert"
      }
    },
    {
      title: 'Sponsors',
      icon: Award,
      description: 'Maximize sponsorship value with detailed ROI tracking',
      color: 'indigo',
      features: [
        'Brand visibility tracking',
        'Sponsor portal access',
        'Lead generation tools',
        'Engagement analytics',
        'Custom sponsor packages',
        'ROI reporting'
      ],
      useCases: [
        'Brand awareness campaigns',
        'Lead generation',
        'Product launches',
        'Industry positioning'
      ],
      testimonial: {
        quote: "We can finally measure the real impact of our event sponsorships. The detailed analytics help us make better investment decisions.",
        author: "Amanda Parker",
        title: "Sponsorship Manager, GlobalBrand"
      }
    },
    {
      title: 'Attendees',
      icon: UserCheck,
      description: 'Seamless event experience from registration to networking',
      color: 'pink',
      features: [
        'Mobile event app',
        'Personalized agenda',
        'Networking recommendations',
        'Real-time updates',
        'Social sharing',
        'Digital business cards'
      ],
      useCases: [
        'Conference attendance',
        'Networking events',
        'Training sessions',
        'Social gatherings'
      ],
      testimonial: {
        quote: "The mobile app made networking so much easier. I connected with more relevant people in one event than I usually do in a year.",
        author: "David Kim",
        title: "Product Manager, StartupTech"
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-600 to-purple-700',
      emerald: 'from-emerald-600 to-emerald-700',
      blue: 'from-blue-600 to-blue-700',
      orange: 'from-orange-600 to-orange-700',
      indigo: 'from-indigo-600 to-indigo-700',
      pink: 'from-pink-600 to-pink-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-600 to-gray-700';
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
            Tailored Solutions for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Every Role
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Whether you're an event organizer, corporate team, exhibitor, or attendee, 
            Eventpadi has the perfect solution to meet your specific needs and goals.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(solution.color)} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-8 h-8 mr-4" />
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-white/90 text-lg">{solution.description}</p>
                </div>

                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="bg-emerald-100 rounded-full p-1 mr-3">
                            <BarChart3 className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span
                          key={useCaseIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{solution.testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{solution.testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{solution.testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect Eventpadi with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Salesforce', 'HubSpot', 'Mailchimp', 'Zoom', 'Teams', 'Slack',
              'Google Workspace', 'Outlook', 'PayPal', 'Stripe', 'Zapier', 'API'
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-lg font-semibold text-gray-700">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              See the impact Eventpadi has made for organizations like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-700">Average increase in event efficiency</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">72%</div>
              <div className="text-gray-700">Improvement in attendee satisfaction</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.2x</div>
              <div className="text-gray-700">More leads captured by exhibitors</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
              <div className="text-gray-700">Customer retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Let us show you exactly how Eventpadi can work for your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SolutionsPage;