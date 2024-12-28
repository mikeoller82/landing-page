'use client'

import { useState, useEffect } from 'react'

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-16 bg-orange-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
        <p className="text-xl mb-4">Offer expires in <span className="font-bold">{formatTime(timeLeft)}</span></p>
        <p className="text-2xl font-bold mb-4">First Month 50% Off - Only 5 Spots Available</p>
        <p className="text-lg">3 businesses claimed this offer today</p>
      </div>
    </section>
  )
}

