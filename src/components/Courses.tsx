import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Clock, Users, Star } from 'lucide-react'

const Courses = () => {
  const navigate = useNavigate()

  const courses = [
    {
      id: 'web-development',
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12 weeks',
      students: '2.5K+',
      rating: 4.9,
      price: '$299',
      features: ['React & Redux', 'Node.js & Express', 'MongoDB', 'REST APIs']
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Learn Python, machine learning, and data visualization to become a data science expert.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '16 weeks',
      students: '1.8K+',
      rating: 4.8,
      price: '$399',
      features: ['Python & Pandas', 'Machine Learning', 'Data Visualization', 'SQL']
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Create stunning mobile apps for iOS and Android using React Native and Flutter.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 weeks',
      students: '1.2K+',
      rating: 4.7,
      price: '$249',
      features: ['React Native', 'Flutter', 'Firebase', 'App Store Deployment']
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Mastery',
      description: 'Design beautiful and user-friendly interfaces with Figma, Adobe XD, and design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 weeks',
      students: '3.1K+',
      rating: 4.9,
      price: '$199',
      features: ['Figma & Adobe XD', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Pro',
      description: 'Master SEO, social media marketing, Google Ads, and content marketing strategies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 weeks',
      students: '4.2K+',
      rating: 4.6,
      price: '$149',
      features: ['SEO & SEM', 'Social Media', 'Google Analytics', 'Content Strategy']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn ethical hacking, network security, and cybersecurity best practices.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '14 weeks',
      students: '950+',
      rating: 4.8,
      price: '$349',
      features: ['Ethical Hacking', 'Network Security', 'Risk Assessment', 'Compliance']
    }
  ]

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`)
  }

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Our Popular Courses
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Choose from our comprehensive selection of courses designed to help you 
            master in-demand skills and advance your career.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-secondary-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-secondary-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {course.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {course.features.length > 2 && (
                      <span className="text-secondary-500 text-sm">
                        +{course.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCourseClick(course.id)}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary-700 transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses