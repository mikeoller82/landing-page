import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import StructuredData from './components/StructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'MikeOller.com - Increase Your Revenue with Proven Digital Marketing Strategies',
  description: 'Join 500+ growing businesses getting 3x more leads with our data-driven approach. Get your free custom marketing plan today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`font-sans`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

