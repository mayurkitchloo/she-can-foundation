import { motion } from 'framer-motion'
import aboutImage from '../assets/about-us.avif'

const About = () => {
  return (
    <section id='about' className='py-20 px-6 bg-[#FDF6F0]'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full md:w-1/2'
        >
          <img
            src={aboutImage}
            alt='About She Can Foundation'
            className='w-full h-[450px] object-cover rounded-2xl shadow-lg'
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full md:w-1/2'
        >
          <p className='text-[#E8431A] font-semibold uppercase tracking-widest text-sm mb-3'>Who We Are</p>
          <h2 className='text-4xl font-bold text-[#1a1f3a] leading-tight mb-6'>
            Uplifting Women, Building Stronger Communities
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-6'>
            She Can Foundation is a government registered NGO under the Indian Society Registration Act of 1860. We are dedicated to uplifting underprivileged women by providing education, training, and resources to help them overcome obstacles and achieve their full potential.
          </p>
          <p className='text-gray-600 text-lg leading-relaxed'>
            We work to promote gender equality, increase access to healthcare and education, and create opportunities for economic growth. Through our programs, we aim to build a world where every woman has the support she needs to succeed.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About