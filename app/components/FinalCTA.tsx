import { Calendar, Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Ready to Grow Your Business?</h2>
        <p className="text-xl text-center mb-12">Book Your Free Strategy Session - Value $1,000</p>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
            <ul className="list-disc pl-5 mb-8">
              <li>Personalized marketing strategy</li>
              <li>Competitive analysis</li>
              <li>ROI projections</li>
              <li>Action plan for immediate implementation</li>
            </ul>
            <h3 className="text-2xl font-bold mb-4">Timeline:</h3>
            <p className="mb-8">45-minute consultation followed by a detailed report within 24 hours</p>
            <h3 className="text-2xl font-bold mb-4">Expected Results:</h3>
            <p>Clear roadmap to achieve 30%+ revenue growth within 6 months</p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Schedule Your Session</h3>
              <div className="flex items-center mb-4">
                <Calendar className="mr-2 text-blue-900" />
                <p className="text-blue-900">Choose a date and time</p>
              </div>
              {/* Add your calendar booking widget here */}
              <div className="flex items-center mb-4">
                <Phone className="mr-2 text-blue-900" />
                <p className="text-blue-900">Or call us: (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-2 text-blue-900" />
                <p className="text-blue-900">Start a chat with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

