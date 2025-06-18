import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { ArrowLeft, Send, CheckCircle, Clock, Users, Star, BookOpen } from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  phone: string
  qualification: string
  city: string
}

const CourseEnquiry = () => {
  const { courseId } = useParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  // Course data (in a real app, this would come from an API)
  const courses = {
    'web-development': {
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12 weeks',
      students: '2.5K+',
      rating: 4.9,
      price: '$299',
      features: ['React & Redux', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment']
    },
    'data-science': {
      title: 'Data Science & Analytics',
      description: 'Learn Python, machine learning, and data visualization to become a data science expert.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '16 weeks',
      students: '1.8K+',
      rating: 4.8,
      price: '$399',
      features: ['Python & Pandas', 'Machine Learning', 'Data Visualization', 'SQL', 'Statistics', 'Deep Learning']
    },
    'mobile-development': {
      title: 'Mobile App Development',
      description: 'Create stunning mobile apps for iOS and Android using React Native and Flutter.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 weeks',
      students: '1.2K+',
      rating: 4.7,
      price: '$249',
      features: ['React Native', 'Flutter', 'Firebase', 'App Store Deployment', 'Push Notifications', 'Native APIs']
    },
    'ui-ux-design': {
      title: 'UI/UX Design Mastery',
      description: 'Design beautiful and user-friendly interfaces with Figma, Adobe XD, and design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 weeks',
      students: '3.1K+',
      rating: 4.9,
      price: '$199',
      features: ['Figma & Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing', 'Portfolio']
    },
    'digital-marketing': {
      title: 'Digital Marketing Pro',
      description: 'Master SEO, social media marketing, Google Ads, and content marketing strategies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 weeks',
      students: '4.2K+',
      rating: 4.6,
      price: '$149',
      features: ['SEO & SEM', 'Social Media', 'Google Analytics', 'Content Strategy', 'Email Marketing', 'PPC Campaigns']
    },
    'cybersecurity': {
      title: 'Cybersecurity Fundamentals',
      description: 'Learn ethical hacking, network security, and cybersecurity best practices.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '14 weeks',
      students: '950+',
      rating: 4.8,
      price: '$349',
      features: ['Ethical Hacking', 'Network Security', 'Risk Assessment', 'Compliance', 'Incident Response', 'Forensics']
    }
  }

  const course = courses[courseId as keyof typeof courses]

  useEffect(() => {
    // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
    emailjs.init("uF0P18fJQrHSdf2CL") // Replace with your EmailJS public key
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'saitejak.react@gmail.com',
        cc_email: data.email,
        course_name: course?.title,
        student_name: data.fullName,
        student_email: data.email,
        student_phone: data.phone,
        student_qualification: data.qualification,
        student_city: data.city,
        name: 'Sai Teja',
        message: `New course enquiry for ${course?.title}`,
      }

      // Send email using EmailJS
      await emailjs.send(
        'service_uwekkdn', // Replace with your EmailJS service ID
        'template_286u2ln', // Replace with your EmailJS template ID
        templateParams
      )

      setIsSubmitted(true)
      toast.success('Registration successful! We\'ll contact you soon.')
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">Course Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="h-10 w-10 text-green-600" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Registration Successful!
          </h2>
          <p className="text-secondary-600 mb-6">
            Thank you for your interest in <strong>{course.title}</strong>. 
            We've received your registration and will contact you soon with more details.
          </p>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/#courses"
              className="block w-full border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              View More Courses
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Courses</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Course Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <h1 className="text-3xl font-bold text-secondary-900 mb-4">
                  {course.title}
                </h1>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span className="text-secondary-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary-600" />
                    <span className="text-secondary-700">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-secondary-700">{course.rating} Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary-600" />
                    <span className="text-secondary-700 font-semibold">{course.price}</span>
                  </div>
                </div>

                {/* Course Features */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    What You'll Learn:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Register for This Course
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Highest Qualification *
                  </label>
                  <select
                    {...register('qualification', { required: 'Qualification is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select your qualification</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.qualification && (
                    <p className="mt-1 text-sm text-red-600">{errors.qualification.message}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Registration</span>
                    </>
                  )}
                </motion.button>
              </form>

              <p className="mt-4 text-sm text-secondary-500 text-center">
                By submitting this form, you agree to receive course information and updates from EduAcademy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CourseEnquiry