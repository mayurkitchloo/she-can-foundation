import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/she-can-logo.avif'

const AdminDashboard = () => {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshing, setRefreshing] = useState('')
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => {
    if (!token) {
      navigate('/admin/login')
      return
    }

    fetchSubmissions()
  }, [token])

  const fetchSubmissions = async () => {
    setRefreshing('loading')

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/submissions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status === 401) {
        logout()
        navigate('/admin/login')
        return
      }

      const data = await res.json()

      setSubmissions(data)
      setRefreshing('done')

      setTimeout(() => setRefreshing(''), 1500)
    } catch (err) {
      setError('Failed to load submissions.')
      setRefreshing('')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/submissions/${deleteId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status === 401) {
        logout()
        navigate('/admin/login')
        return
      }

      setSubmissions((prev) =>
        prev.filter((sub) => sub._id !== deleteId)
      )

      setDeleteId(null)
    } catch (err) {
      setError('Failed to delete submission.')
      setDeleteId(null)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className='min-h-screen bg-[#FDF6F0]'>
      <div className='bg-[#1a1f3a] px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img
            src={logo}
            alt='She Can Foundation'
            className='h-8 w-8 rounded-full object-cover'
          />

          <span className='text-white font-semibold'>
            She Can Foundation — Admin
          </span>
        </div>

        <button
          onClick={handleLogout}
          className='text-white/60 hover:text-white text-sm transition-colors cursor-pointer'
        >
          Sign out
        </button>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-2xl font-bold text-[#1a1f3a]'>
              Submissions
            </h1>

            <p className='text-gray-400 text-sm mt-1'>
              {submissions.length} total response
              {submissions.length !== 1 ? 's' : ''}
            </p>
          </div>

          <button
            onClick={fetchSubmissions}
            disabled={refreshing === 'loading'}
            className='text-sm text-[#E8431A] border border-[#E8431A] px-4 py-2 rounded-lg hover:bg-[#E8431A] hover:text-white transition-colors disabled:opacity-60 cursor-pointer'
          >
            {refreshing === 'done'
              ? 'Refreshed ✓'
              : refreshing === 'loading'
              ? 'Refreshing...'
              : 'Refresh'}
          </button>
        </div>

        {loading && (
          <div className='text-center py-20 text-gray-400'>
            Loading submissions...
          </div>
        )}

        {error && (
          <div className='text-center py-20 text-red-400'>
            {error}
          </div>
        )}

        {!loading && !error && submissions.length === 0 && (
          <div className='text-center py-20 text-gray-400'>
            No submissions yet.
          </div>
        )}

        {!loading && !error && submissions.length > 0 && (
          <div className='grid gap-4'>
            {submissions.map((sub) => (
              <div
                key={sub._id}
                className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='w-9 h-9 rounded-full bg-[#E8431A]/10 flex items-center justify-center text-[#E8431A] font-bold text-sm'>
                        {sub.name?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className='font-semibold text-[#1a1f3a]'>
                          {sub.name}
                        </p>

                        <p className='text-sm text-gray-400'>
                          {sub.email}
                        </p>
                      </div>
                    </div>

                    <p className='text-gray-600 text-sm mt-3 leading-relaxed'>
                      {sub.message}
                    </p>
                  </div>

                  <div className='flex flex-col items-end gap-3 shrink-0'>
                    <div className='text-xs text-gray-300 md:text-right'>
                      {new Date(sub.createdAt).toLocaleDateString(
                        'en-IN',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
                    </div>

                    <button
                      onClick={() => setDeleteId(sub._id)}
                      className='text-xs text-red-400 hover:text-red-500 transition-colors cursor-pointer'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteId && (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4'>
          <div className='bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl'>
            <h3 className='text-xl font-bold text-[#1a1f3a] mb-3'>
              Delete Response?
            </h3>

            <p className='text-gray-400 text-sm leading-relaxed mb-8'>
              This action cannot be undone. Are you sure you want to delete this submission?
            </p>

            <div className='flex justify-end gap-3'>
              <button
                onClick={() => setDeleteId(null)}
                className='px-5 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer'
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className='px-5 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors cursor-pointer'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
