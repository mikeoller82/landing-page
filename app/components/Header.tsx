import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <a href="tel:+11234567890" className="flex items-center hover:text-blue-600">
              <Phone size={16} className="mr-1" />
              (123) 456-7890
            </a>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              1234 Main Street, Anytown, USA
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">500+ Businesses Served</span> | <span className="font-semibold">127% Average Traffic Increase</span>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MikeOller.com
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#solutions" className="font-semibold hover:text-blue-600">Our Solutions</Link>
            <Link href="#results" className="font-semibold hover:text-blue-600">Client Results</Link>
            <Link href="#about" className="font-semibold hover:text-blue-600">About Us</Link>
            <Link href="#contact" className="font-semibold hover:text-blue-600">Contact</Link>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
            Get Free Analysis
          </button>
        </div>
      </nav>
    </header>
  )
}

