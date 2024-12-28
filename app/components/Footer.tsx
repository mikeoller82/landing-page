import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/seo">SEO Optimization</Link></li>
              <li><Link href="/ppc">PPC Management</Link></li>
              <li><Link href="/social-media">Social Media Marketing</Link></li>
              <li><Link href="/content">Content Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/webinars">Webinars</Link></li>
              <li><Link href="/ebooks">eBooks</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <p>1234 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@mikeoller.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Get Weekly Marketing Tips</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-2">Join 15,000+ subscribers</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500"><Facebook /></a>
              <a href="#" className="hover:text-orange-500"><Twitter /></a>
              <a href="#" className="hover:text-orange-500"><LinkedIn /></a>
              <a href="#" className="hover:text-orange-500"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MikeOller.com. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            {' | '}
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

