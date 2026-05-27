import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const steps = [
  {
    field: 'name',
    label: 'Name',
    question: 'What should we call you?',
    description: 'We would love to know who we are speaking with.',
    placeholder: 'Full name',
    type: 'text'
  },
  {
    field: 'email',
    label: 'Email',
    question: 'How can we reach you?',
    description: 'We will use this to get back to you.',
    placeholder: 'your@email.com',
    type: 'email'
  },
  {
    field: 'message',
    label: 'Message',
    question: 'What would you like to tell us?',
    description: 'Share your thoughts or how you want to get involved.',
    placeholder: 'Write your message here...',
    type: 'textarea'
  }
]

const Form = () => {
  const [step, setStep] = useState(() => {
    return parseInt(localStorage.getItem('form_step') || '0')
  })

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('form_data')
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' }
  })

  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem('form_submitted') === 'true'
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    localStorage.setItem('form_step', step)
    localStorage.setItem('form_data', JSON.stringify(formData))
    localStorage.setItem('form_submitted', submitted)
  }, [step, formData, submitted])

  const handleNext = async () => {
    if (!formData[steps[step].field].trim()) {
      setError('This field is required')
      return
    }

    if (step === 1) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address')
        return
      }
    }

    setError('')

    if (step === steps.length - 1) {
      setLoading(true)

      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/submissions`,
          formData
        )

        setSubmitted(true)
      } catch {
        setError('Something went wrong. Please try again.')
        setLoading(false)
      }

      return
    }

    setDirection(1)
    setStep((s) => s + 1)
  }

  const handleBack = () => {
    setError('')
    setDirection(-1)
    setStep((s) => s - 1)
  }

  const handleNewResponse = () => {
    const emptyForm = {
      name: '',
      email: '',
      message: ''
    }

    setFormData(emptyForm)
    setStep(0)
    setSubmitted(false)
    setError('')
    setLoading(false)

    localStorage.removeItem('form_data')
    localStorage.removeItem('form_step')
    localStorage.removeItem('form_submitted')
  }

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 })
  }

  return (
    <section id='contact' className='py-24 px-6 bg-[#FDF6F0]'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-[#E8431A] font-semibold uppercase tracking-widest text-sm mb-3'>
            Get In Touch
          </p>

          <h2 className='text-4xl font-bold text-[#1a1f3a]'>
            We Would Love to Hear From You
          </h2>
        </div>

        <div
          className='bg-white rounded-3xl p-10'
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className='text-center py-8'
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200
                }}
                className='w-16 h-16 bg-[#E8431A] rounded-full flex items-center justify-center mx-auto mb-6'
              >
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </motion.div>

              <h3 className='text-2xl font-bold text-[#1a1f3a] mb-3'>
                Thank You, {formData.name}!
              </h3>

              <p className='text-gray-400 mb-8'>
                Your message has been submitted. We will get back to you soon.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNewResponse}
                className='bg-[#E8431A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c73a15] transition-colors'
              >
                Fill Another Response
              </motion.button>
            </motion.div>
          ) : (
            <>
              <div className='flex items-center justify-center gap-3 mb-10'>
                {steps.map((s, i) => (
                  <div key={i} className='flex items-center gap-3'>
                    <div className='flex flex-col items-center gap-1'>
                      <motion.div
                        animate={{
                          backgroundColor:
                            i < step
                              ? '#E8431A'
                              : i === step
                              ? '#1a1f3a'
                              : '#e5e7eb',
                          scale: i === step ? 1.1 : 1
                        }}
                        className='w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold'
                      >
                        {i < step ? (
                          <svg
                            className='w-4 h-4 text-white'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={3}
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                        ) : (
                          <span
                            style={{
                              color:
                                i === step ? 'white' : '#9ca3af'
                            }}
                          >
                            {i + 1}
                          </span>
                        )}
                      </motion.div>

                      <span
                        className={`text-xs font-medium ${
                          i === step
                            ? 'text-[#1a1f3a]'
                            : i < step
                            ? 'text-[#E8431A]'
                            : 'text-gray-300'
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>

                    {i < steps.length - 1 && (
                      <motion.div
                        animate={{
                          backgroundColor:
                            i < step ? '#E8431A' : '#e5e7eb'
                        }}
                        className='h-px w-16 rounded-full mb-4'
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <p className='text-gray-400 text-sm mb-1'>
                    {steps[step].description}
                  </p>

                  <h3 className='text-2xl font-bold text-[#1a1f3a] mb-8'>
                    {steps[step].question}
                  </h3>

                  {steps[step].type === 'textarea' ? (
                    <textarea
                      rows={5}
                      placeholder={steps[step].placeholder}
                      value={formData[steps[step].field]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [steps[step].field]: e.target.value
                        })
                      }
                      className='w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#1a1f3a] focus:outline-none focus:border-[#E8431A] resize-none transition-all duration-200 bg-gray-50/50 placeholder-gray-300'
                    />
                  ) : (
                    <input
                      type={steps[step].type}
                      placeholder={steps[step].placeholder}
                      value={formData[steps[step].field]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [steps[step].field]: e.target.value
                        })
                      }
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleNext()
                      }
                      className='w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#1a1f3a] focus:outline-none focus:border-[#E8431A] transition-all duration-200 bg-gray-50/50 placeholder-gray-300'
                    />
                  )}

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-red-400 text-sm mt-2'
                    >
                      {error}
                    </motion.p>
                  )}

                  <div className='flex justify-between items-center mt-10'>
                    {step > 0 ? (
                      <button
                        onClick={handleBack}
                        className='text-gray-400 hover:text-[#1a1f3a] transition-colors font-medium text-sm'
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      disabled={loading}
                      className='bg-[#E8431A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c73a15] transition-colors flex items-center gap-2'
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: 'linear'
                            }}
                            className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full'
                          />
                          Submitting
                        </>
                      ) : step === steps.length - 1 ? (
                        'Submit'
                      ) : (
                        'Continue'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Form

