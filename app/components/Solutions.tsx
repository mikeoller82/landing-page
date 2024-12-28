import { Calculator, CheckCircle } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      title: 'SEO Optimization',
      description: 'Boost Your Organic Traffic and Rankings',
      metrics: '127% Average Traffic Increase in 6 Months',
      price: 'Starting from $2,500/month',
      deliverables: ['In-depth Keyword Research', 'On-Page & Technical SEO', 'High-Quality Link Building', 'Content Strategy & Creation'],
      caseStudy: 'E-commerce site saw 200% increase in organic traffic and 150% boost in conversions'
    },
    {
      title: 'PPC Management',
      description: 'Maximize Your Ad Spend ROI',
      metrics: '3.2x Average Return on Ad Spend',
      price: 'Starting from $1,500/month',
      deliverables: ['Campaign Strategy & Setup', 'Ad Creation & Optimization', 'Advanced Bid Management', 'Conversion Tracking & Analysis'],
      caseStudy: 'B2B company achieved 40% lower cost per lead and 2.5x increase in qualified leads'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage Your Audience and Build Brand Loyalty',
      metrics: '5x Increase in Social Engagement',
      price: 'Starting from $2,000/month',
      deliverables: ['Platform-specific Content Strategy', 'Engaging Post Creation', 'Community Management', 'Paid Social Advertising'],
      caseStudy: 'Retail brand saw 300% increase in social media sales and 4x growth in followers'
    },
    {
      title: 'Content Marketing',
      description: 'Establish Authority and Drive Organic Growth',
      metrics: '85% Increase in Organic Traffic',
      price: 'Starting from $3,000/month',
      deliverables: ['Content Strategy Development', 'SEO-optimized Blog Writing', 'Infographic & Visual Content Design', 'Content Distribution & Promotion'],
      caseStudy: 'SaaS company doubled lead generation and saw 70% increase in demo requests'
    },
    {
      title: 'Email Marketing',
      description: 'Nurture Leads and Boost Customer Retention',
      metrics: '25% Average Open Rate, 15% Click-through Rate',
      price: 'Starting from $1,000/month',
      deliverables: ['List Segmentation & Management', 'Email Design & Copywriting', 'Automation Workflow Setup', 'A/B Testing & Performance Analysis'],
      caseStudy: 'E-commerce brand increased revenue by 35% with targeted email campaigns'
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Turn More Visitors into Customers',
      metrics: '50% Average Conversion Rate Increase',
      price: 'Starting from $2,500/month',
      deliverables: ['User Experience Analysis', 'A/B Testing & Multivariate Testing', 'Landing Page Optimization', 'Funnel Analysis & Improvement'],
      caseStudy: 'Lead gen website improved form submissions by 75% and reduced cost per acquisition by 40%'
    }
  ]

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Revenue-Generating Digital Marketing Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-orange-500 font-bold mb-2">{solution.description}</p>
              <p className="text-green-600 font-semibold mb-2">{solution.metrics}</p>
              <p className="mb-4">{solution.price}</p>
              <ul className="list-none pl-0 mb-4">
                {solution.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start mb-2">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic mb-4">Case Study: {solution.caseStudy}</p>
              <a href="#" className="text-orange-500 hover:underline font-semibold">Learn More</a>
            </div>
          ))}
        </div>
        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Calculator className="mr-2" /> ROI Calculator
          </h3>
          <p className="mb-4">Discover your potential ROI with our interactive calculator:</p>
          <ul className="list-none pl-0 mb-4">
            <li className="flex items-center mb-2">
              <CheckCircle className="text-green-400 mr-2" size={16} />
              <span>Estimate traffic increase</span>
            </li>
            <li className="flex items-center mb-2">
              <CheckCircle className="text-green-400 mr-2" size={16} />
              <span>Project lead conversion rates</span>
            </li>
            <li className="flex items-center mb-2">
              <CheckCircle className="text-green-400 mr-2" size={16} />
              <span>Calculate potential revenue growth</span>
            </li>
          </ul>
          <p className="text-sm italic mb-4">Based on industry averages and our client results</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300 font-semibold">
            Calculate Your ROI Now
          </button>
        </div>
      </div>
    </section>
  )
}

