'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // auth logic 
    console.log('Logging in:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder='Email Account'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#0E641B]  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#0E641B]  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0E641B] text-white py-2 rounded-lg hover:bg-[#0E641B]/70 transition"
          >
            Continue
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Dont have an account?{' '}
          <button
            onClick={() => router.push('/signup')}
            className="text-[#0E641B] hover:underline"
          >
            Sign up
          </button>
        </p>

        <div className="flex justify-between gap-6 mt-6">
          <ArrowLeft className="w-6 h-6 cursor-pointer text-gray-600 hover:text-black border rounded-full" />
          <ArrowRight className="w-6 h-6 cursor-pointer text-gray-600 hover:text-black border rounded-full" />
        </div>
      </div>
    </div>
  )
}
