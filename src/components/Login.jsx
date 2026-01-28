import React, { useState } from 'react'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    if (isSignup && !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    // Simulate login/signup
    localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }))
    onLogin(email)
  }

  return (
    <div className='w-full h-screen bg-gradient-to-br from-[#1db954] to-[#0f0f0f] flex items-center justify-center'>
      <div className='w-full max-w-md mx-auto px-6'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <h1 className='text-6xl font-bold text-white mb-2'>♫</h1>
          <h2 className='text-4xl font-bold text-white'>Spotify</h2>
          <p className='text-gray-300 mt-2'>Your Music, Your Way</p>
        </div>

        {/* Login Form */}
        <div className='bg-[#121212] rounded-lg p-8 shadow-2xl border border-[#282828]'>
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h3>

          {error && (
            <div className='bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg mb-4 text-sm'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-semibold text-white mb-2'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder='your@email.com'
                className='w-full px-4 py-3 rounded-lg bg-[#282828] text-white border border-[#404040] focus:border-[#1db954] focus:outline-none transition'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-white mb-2'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder='••••••••'
                className='w-full px-4 py-3 rounded-lg bg-[#282828] text-white border border-[#404040] focus:border-[#1db954] focus:outline-none transition'
              />
            </div>

            <button
              type='submit'
              className='w-full py-3 bg-gradient-to-r from-[#1db954] to-[#1ed760] text-black font-bold rounded-lg hover:from-[#1ed760] hover:to-[#1db954] transition mt-6'
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </form>

          {/* Toggle Signup/Login */}
          <div className='mt-6 text-center'>
            <p className='text-gray-400'>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsSignup(!isSignup)
                  setError('')
                }}
                className='text-[#1db954] hover:text-[#1ed760] font-semibold transition'
              >
                {isSignup ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className='mt-6 bg-[#282828]/30 rounded-lg p-4 border border-[#1db954]/30'>
          <p className='text-xs text-gray-300 mb-2'>Demo Credentials:</p>
          <p className='text-sm text-white font-mono'>Email: demo@spotify.com</p>
          <p className='text-sm text-white font-mono'>Password: demo123</p>
        </div>
      </div>
    </div>
  )
}

export default Login
