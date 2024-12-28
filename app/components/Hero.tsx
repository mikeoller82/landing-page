'use client'

import Image from 'next/image'
import { Lock, CheckCircle, Search } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement the search functionality here
    console.log('Searching for:', searchTerm)
    // You would typically make an API call to Shopify here to search for products
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Boost Your Revenue by <span className="text-orange-500">30%+</span> with Proven Digital Marketing Strategies
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ Growing Businesses Getting <span className="font-bold">3x More Leads</span> With Our Data-Driven Approach
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <Image 
                src="/placeholder.svg?height=50&width=300" 
                alt="Trusted by Industry Leaders" 
                width={300} 
                height={50} 
                className="bg-white/10 rounded p-2"
              />
              <p className="text-white/80 text-sm">Trusted By Industry Leaders</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span>127% Avg. Traffic Increase</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span>3.2x Return on Ad Spend</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span>85% Organic Traffic Growth</span>
              </div>
            </div>
            <form onSubmit={handleSearch} className="mt-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-3 rounded-r-md hover:bg-orange-600 transition duration-300"
                >
                  <Search size={24} />
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-center">Get Your Free Custom Marketing Plan</h2>
              <p className="text-center mb-6 text-orange-500 font-semibold">Limited Time Offer: First Month 50% Off</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300 font-bold text-lg"
                >
                  Get My Free Marketing Plan
                </button>
              </form>
              <p className="text-sm text-center mt-4 text-gray-600">12 businesses analyzed this week</p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-sm text-gray-600">
                  <Lock size={16} className="mr-2 text-green-500" /> 
                  100% Free, No Obligation
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <Lock size={16} className="mr-2 text-green-500" /> 
                  Guaranteed Response in 24 Hours
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <Lock size={16} className="mr-2 text-green-500" /> 
                  Your Information is Secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



