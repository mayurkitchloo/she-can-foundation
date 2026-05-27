import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Education and Training',
    description: 'We provide skill building workshops, literacy programs, and vocational training to help women gain knowledge and confidence to shape their futures.',
  },
  {
    title: 'Healthcare Access',
    description: 'We connect underprivileged women to essential healthcare resources, awareness campaigns, and medical support within their communities.',
  },
  {
    title: 'Economic Growth',
    description: 'Through microfinance support and entrepreneurship training, we create pathways for women to achieve financial independence and stability.',
  },
  {
    title: 'Community Advocacy',
    description: 'We run awareness initiatives and advocacy campaigns to promote gender equality and amplify the voices of women across India.',
  },
]

const Programs = () => {
  return (
    <section id='programs' className='py-20 px-6 bg-[#FDF6F0]'>
      <div className='max-w-6xl mx-auto'>

        <div className='text-center mb-14'>
          <p className='text-[#E8431A] font-semibold uppercase tracking-widest text-sm mb-3'>What We Do</p>
          <h2 className='text-4xl font-bold text-[#1a1f3a]'>Our Core Programs</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='text-[#E8431A] text-4xl font-bold mb-4'>0{index + 1}</div>
              <h3 className='text-xl font-bold text-[#1a1f3a] mb-3'>{program.title}</h3>
              <p className='text-gray-500 leading-relaxed'>{program.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programs
