import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Invalid credentials')
        return
      }

      login(data.token)
      navigate('/admin/dashboard')
    } catch (err) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-[#FDF6F0] flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>

        {/* Card */}
        <div className='bg-white rounded-2xl shadow-xl p-10'>

          {/* Header */}
          <div className='text-center mb-8'>
            <div className='w-14 h-14 bg-[#E8431A] rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
              </svg>
            </div>
            <h1 className='text-2xl font-bold text-[#1a1f3a]'>Admin Access</h1>
            <p className='text-gray-400 text-sm mt-1'>She Can Foundation</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm font-medium text-[#1a1f3a] mb-1.5'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E8431A]/30 focus:border-[#E8431A] text-[#1a1f3a] text-sm transition'
                placeholder='Enter email'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-[#1a1f3a] mb-1.5'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E8431A]/30 focus:border-[#E8431A] text-[#1a1f3a] text-sm transition'
                placeholder='Enter password'
              />
            </div>

            {error && (
              <p className='text-red-500 text-sm text-center'>{error}</p>
            )}

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-[#E8431A] text-white py-3 rounded-xl font-semibold hover:bg-[#d03a14] transition-colors disabled:opacity-60'
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin