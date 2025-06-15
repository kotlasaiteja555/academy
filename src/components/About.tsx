import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Zap } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide accessible, high-quality education that empowers individuals to achieve their career goals.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading platform for professional development and skill enhancement globally.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Excellence, integrity, innovation, and student success are at the core of everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to create engaging and effective learning experiences.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
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
            About EduAcademy
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We're passionate about transforming lives through education. Our comprehensive 
            courses and expert instructors help you build the skills needed for success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-secondary-900 mb-6">
              Why Choose EduAcademy?
            </h3>
            <div className="space-y-4">
              {[
                'Expert instructors with industry experience',
                'Hands-on projects and real-world applications',
                'Flexible learning schedules to fit your lifestyle',
                'Career support and job placement assistance',
                'Community of learners and networking opportunities'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-secondary-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Learning environment"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-2">{value.title}</h4>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About