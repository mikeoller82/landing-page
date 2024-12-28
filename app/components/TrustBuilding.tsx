import Image from 'next/image'

export default function TrustBuilding() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-4">Awards & Certifications</h2>
            <div className="flex flex-wrap gap-4">
              <Image src="/google-partner-badge.png" alt="Google Partner Badge" width={100} height={100} />
              <Image src="/industry-cert1.png" alt="Industry Certification 1" width={100} height={100} />
              <Image src="/industry-cert2.png" alt="Industry Certification 2" width={100} height={100} />
              <Image src="/recent-award.png" alt="Recent Award" width={100} height={100} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Live Stats Counter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">891</p>
                <p>Leads Generated This Month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">127</p>
                <p>Websites Optimized</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">3.2x</p>
                <p>Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

