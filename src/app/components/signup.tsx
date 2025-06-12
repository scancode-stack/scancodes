'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUpPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sign up logic here
    console.log('Sign up data:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-6">
        {/* Header with image */}
        <div className="flex items-center justify-between mb-6 gap-2">
            <h2 className="text-2xl font-semibold">Profile</h2>

        <Link href="/">
          <Image
            src="/signup.png" 
            alt="Profile"
            width={32}
            height={32}
          />
          </Link>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#73C633] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#73C633] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#73C633] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#73C633] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#73C633] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#73C633] text-black py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <button
            onClick={() => router.push('/signin')}
            className="text-[#0E641B] hover:underline"
          >
            Log in
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
