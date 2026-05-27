import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import logo from '../assets/she-can-logo.avif'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-[#1a1f3a] text-white'>

      {/* Top CTA band */}
      <div className='bg-[#E8431A] py-14 px-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-white leading-tight'>
              Ready to Make a Difference?
            </h2>
            <p className='text-white/80 mt-2 text-lg'>Join us in empowering women across India.</p>
          </div>
          <a
            href='#contact'
            className='shrink-0 bg-white text-[#E8431A] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FDF6F0] transition-colors'
          >
            Get Involved Today
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div className='max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12'>

        {/* Brand column */}
        <div className='md:col-span-2'>
          <div className='flex items-center gap-3 mb-5'>
            <img src={logo} alt='She Can Foundation' className='h-12 w-12 rounded-full object-cover' />
            <span className='text-xl font-bold'>She Can Foundation</span>
          </div>
          <p className='text-white/60 leading-relaxed text-sm max-w-xs'>
            A government registered NGO under the Indian Society Registration Act of 1860, dedicated to uplifting underprivileged women through education, training, and community support.
          </p>

          {/* Social links */}
          <div className='flex items-center gap-4 mt-8'>
            <a
              href='https://www.instagram.com/shecanfoundation.ngo'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E8431A] hover:border-[#E8431A] transition-all duration-300'
            >
              <FaInstagram className='w-4 h-4' />
            </a>

            <a
              href='https://www.linkedin.com/company/shecanfoundation'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E8431A] hover:border-[#E8431A] transition-all duration-300'
            >
              <FaLinkedin className='w-4 h-4' />
            </a>

            <a
              href='https://shecanfoundation.org'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E8431A] hover:border-[#E8431A] transition-all duration-300'
            >
              <FaGlobe className='w-4 h-4' />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-widest text-white/40 mb-6'>Quick Links</h3>
          <ul className='space-y-3'>
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Our Programs', href: '#programs' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className='text-white/60 hover:text-[#E8431A] transition-colors text-sm'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-widest text-white/40 mb-6'>Contact</h3>
          <ul className='space-y-4 text-sm text-white/60'>
            <li className='flex items-start gap-3'>
              <MdLocationOn className='text-[#E8431A] text-lg mt-0.5 shrink-0' />
              <span>India</span>
            </li>
            <li className='flex items-start gap-3'>
              <MdEmail className='text-[#E8431A] text-lg mt-0.5 shrink-0' />
              <a href='mailto:president@shecanfoundation.org' className='hover:text-[#E8431A] transition-colors break-all'>
                president@shecanfoundation.org
              </a>
            </li>
            <li className='flex items-start gap-3'>
              <MdPhone className='text-[#E8431A] text-lg mt-0.5 shrink-0' />
              <a href='tel:+918283841830' className='hover:text-[#E8431A] transition-colors'>
                +91 82838 41830
              </a>
            </li>
            <li className='flex items-start gap-3'>
              <FaGlobe className='text-[#E8431A] text-lg mt-0.5 shrink-0' />
              <a href='https://shecanfoundation.org' target='_blank' rel='noopener noreferrer' className='hover:text-[#E8431A] transition-colors'>
                shecanfoundation.org
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/10 px-6 py-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/30'>
          <span>© {currentYear} She Can Foundation. All rights reserved.</span>
          <span>Registered under the Indian Society Registration Act of 1860</span>
        </div>
      </div>

    </div>
  )
}

export default Footer