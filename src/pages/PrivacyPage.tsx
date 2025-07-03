import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Server, 
  Mail,
  FileText,
  Calendar
} from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Users,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you create an account or register for events, we collect information such as your name, email address, phone number, organization details, and profile preferences.'
        },
        {
          subtitle: 'Event Data',
          text: 'We collect information about events you create, attend, or interact with, including registration details, attendance records, and engagement metrics.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect device information, IP addresses, browser types, and usage patterns to improve our services and ensure security.'
        },
        {
          subtitle: 'Communication Data',
          text: 'Messages, feedback, and communications you send through our platform are stored to provide customer support and improve our services.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our event management platform, including registration, check-in, networking, and analytics features.'
        },
        {
          subtitle: 'Communication',
          text: 'We send you event-related notifications, platform updates, marketing communications (with your consent), and customer support responses.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to improve our platform, develop new features, and provide better user experiences.'
        },
        {
          subtitle: 'Security and Compliance',
          text: 'We use your information to detect fraud, ensure platform security, and comply with legal obligations.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Server,
      content: [
        {
          subtitle: 'Event Organizers',
          text: 'When you register for events, your information is shared with event organizers to facilitate your participation and provide event services.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We share information with trusted third-party service providers who help us operate our platform, including payment processors, email services, and analytics providers.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, court order, or government regulation, or to protect our rights and the safety of our users.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Encryption',
          text: 'All data transmitted to and from our platform is encrypted using industry-standard SSL/TLS protocols. Sensitive information is encrypted at rest.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls, ensuring only authorized personnel can access user data on a need-to-know basis.'
        },
        {
          subtitle: 'Regular Audits',
          text: 'We conduct regular security audits and vulnerability assessments to identify and address potential security risks.'
        },
        {
          subtitle: 'Data Centers',
          text: 'Our data is stored in secure, SOC 2 Type II certified data centers with 24/7 monitoring and redundant backup systems.'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: Lock,
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to access your personal information and request a copy of your data in a portable format.'
        },
        {
          subtitle: 'Correction and Updates',
          text: 'You can update or correct your personal information through your account settings or by contacting our support team.'
        },
        {
          subtitle: 'Deletion',
          text: 'You can request deletion of your account and personal information, subject to our legal obligations and legitimate business interests.'
        },
        {
          subtitle: 'Opt-out',
          text: 'You can opt out of marketing communications at any time by using the unsubscribe link in emails or updating your communication preferences.'
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: FileText,
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'We use essential cookies to provide core platform functionality, including authentication, session management, and security features.'
        },
        {
          subtitle: 'Analytics Cookies',
          text: 'We use analytics cookies to understand how users interact with our platform and improve user experience.'
        },
        {
          subtitle: 'Marketing Cookies',
          text: 'With your consent, we use marketing cookies to show you relevant advertisements and measure campaign effectiveness.'
        },
        {
          subtitle: 'Cookie Control',
          text: 'You can control cookie preferences through your browser settings or our cookie preference center.'
        }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Information Collection', href: '#information-collection' },
    { name: 'How We Use Data', href: '#information-use' },
    { name: 'Information Sharing', href: '#information-sharing' },
    { name: 'Data Security', href: '#data-security' },
    { name: 'Your Rights', href: '#user-rights' },
    { name: 'Cookies & Tracking', href: '#cookies' }
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
            Privacy{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your personal information when you use Eventpadi.
          </motion.p>
          <div className="flex items-center justify-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <p className="text-gray-600">Jump to the section you're interested in</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Eventpadi, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy outlines our practices regarding 
                the collection, use, and protection of your data when you use our event management platform.
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-20"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-3 rounded-xl mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">privacy@eventpadi.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Data Protection Officer</p>
                  <p className="text-gray-600">dpo@eventpadi.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms of Service Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Also review our{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                Terms of Service
              </a>{' '}
              for information about your rights and responsibilities as a user.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Privacy Practices?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Our privacy team is here to help. Contact us for any questions or concerns 
            about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Privacy Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Download Policy (PDF)
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPage;