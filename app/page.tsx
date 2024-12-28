import Header from './components/Header'
import Hero from './components/Hero'
import Results from './components/Results'
import Solutions from './components/Solutions'
import TrustBuilding from './components/TrustBuilding'
import Urgency from './components/Urgency'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ExitIntentPopup from './components/ExitIntentPopup'
import FeaturedProducts from './components/FeaturedProducts'
import { getProductsInCollection } from '../lib/shopify'

export default async function Home() {
  const products = await getProductsInCollection()

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Results />
      <Solutions />
      <FeaturedProducts products={products} />
      <TrustBuilding />
      <Urgency />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup />
    </main>
  )
}

