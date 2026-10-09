'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

function msToNextMidnight() {
  const now = new Date()
  const end = new Date(now)
  end.setHours(24, 0, 0, 0)
  return end.getTime() - now.getTime()
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export default function Countdown() {
  const [left, setLeft] = useState(msToNextMidnight)

  useEffect(() => {
    const id = setInterval(() => {
      setLeft((prev) => (prev <= 1000 ? msToNextMidnight() : prev - 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const total = Math.floor(left / 1000)
  const hh = pad(Math.floor(total / 3600))
  const mm = pad(Math.floor((total % 3600) / 60))
  const ss = pad(total % 60)

  return (
    <span className="f3k9-wheel-c">
      <Clock aria-hidden="true" />
      {`${hh}:${mm}:${ss}`}
    </span>
  )
}
