import { motion } from 'framer-motion'
import g1 from '../assets/gallery/gallery1.png'
import g2 from '../assets/gallery/gallery2.png'
import g3 from '../assets/gallery/gallery3.png'
import g4 from '../assets/gallery/gallery4.png'
import g5 from '../assets/gallery/gallery5.png'

const images = [g1, g2, g3, g4, g5]

const Gallery = () => {
  return (
    <section id='gallery' className='py-20 px-6 bg-[#FDF6F0]'>
      <div className='max-w-6xl mx-auto'>

        <div className='text-center mb-14'>
          <p className='text-[#E8431A] font-semibold uppercase tracking-widest text-sm mb-3'>Our Work</p>
          <h2 className='text-4xl font-bold text-[#1a1f3a]'>Moments That Matter</h2>
          <p className='text-gray-400 mt-4 max-w-xl mx-auto'>A glimpse into the lives we touch and the communities we serve across India.</p>
        </div>

        <div className='columns-2 md:columns-3 gap-4 space-y-4'>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='break-inside-avoid overflow-hidden rounded-2xl'
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className='w-full object-cover hover:scale-105 transition-transform duration-500'
              />
            </motion.div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <a
            href='https://www.instagram.com/shecanfoundation.ngo/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 border-2 border-[#E8431A] text-[#E8431A] px-8 py-3 rounded-full font-medium hover:bg-[#E8431A] hover:text-white transition-colors'
          >
            Find More on Instagram
          </a>
        </div>

      </div>
    </section>
  )
}

export default Gallery