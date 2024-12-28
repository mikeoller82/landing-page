import Image from 'next/image'
import { Play, Star } from 'lucide-react'

export default function Results() {
  const resultCards = [
    { logo: '/logo1.png', industry: 'E-commerce', challenge: 'Low conversion rate', solution: 'Optimized product pages & PPC', metrics: '200% increase in sales', testimonial: 'MikeOller.com transformed our online presence. Our sales have doubled!' },
    { logo: '/logo2.png', industry: 'SaaS', challenge: 'High churn rate', solution: 'Improved onboarding & content strategy', metrics: '50% reduction in churn', testimonial: 'Their strategies helped us retain customers like never before.' },
    { logo: '/logo3.png', industry: 'Local Business', challenge: 'Low foot traffic', solution: 'Local SEO & social media campaign', metrics: '300% increase in store visits', testimonial: 'Our store is bustling with new customers thanks to their local SEO expertise.' },
    { logo: '/logo4.png', industry: 'B2B Services', challenge: 'Long sales cycle', solution: 'Automated lead nurturing & LinkedIn ads', metrics: '40% shorter sales cycle', testimonial: 'MikeOller.com streamlined our sales process, resulting in faster conversions.' },
    { logo: '/logo5.png', industry: 'Healthcare', challenge: 'Low online visibility', solution: 'Content marketing & PR strategy', metrics: '500% increase in organic traffic', testimonial: 'We\'re now the go-to resource in our field, thanks to their content strategy.' },
    { logo: '/logo6.png', industry: 'Real Estate', challenge: 'Few qualified leads', solution: 'Targeted PPC & remarketing campaign', metrics: '3x increase in qualified leads', testimonial: 'The quality of leads we\'re getting has dramatically improved our closing rate.' },
  ]

  return (
    <section id="results" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Real Results for Real Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <Image src="/video-thumbnail.jpg" alt="Video Testimonial" width={600} height={400} className="rounded-lg" />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-300">
              <Play size={64} className="text-white" />
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">John Doe, CEO of XYZ Corp</h3>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg italic mb-4">
              "MikeOller.com's strategies have been game-changing for our business. We've seen incredible growth in traffic, leads, and revenue. Their team is professional, knowledgeable, and always goes the extra mile."
            </blockquote>
            <ul className="space-y-2">
              <li className="flex items-center"><span className="font-bold mr-2">312% Traffic Increase</span> in 6 months</li>
              <li className="flex items-center"><span className="font-bold mr-2">127 New Leads/Month</span> on average</li>
              <li className="flex items-center"><span className="font-bold mr-2">3.2x ROI</span> on marketing spend</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultCards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={card.logo} alt={`Client ${index + 1}`} width={100} height={50} className="mb-4" />
              <p className="font-bold mb-2">{card.industry}</p>
              <p className="mb-2"><span className="font-bold">Challenge:</span> {card.challenge}</p>
              <p className="mb-2"><span className="font-bold">Solution:</span> {card.solution}</p>
              <p className="mb-4"><span className="font-bold">Results:</span> {card.metrics}</p>
              <blockquote className="text-sm italic mb-4">"{card.testimonial}"</blockquote>
              <a href="#" className="text-orange-500 hover:underline font-semibold">Read Full Case Study</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

