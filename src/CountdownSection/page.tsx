import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

interface CountdownProps {
  onCountdownEnd: () => void
}

const TARGET_DATE = new Date("2025-09-28T15:50:59")

export function CountdownSection({ onCountdownEnd }: CountdownProps) {
  const calculateTimeLeft = useCallback((): Partial<TimeLeft> => {
    const difference = +TARGET_DATE - +new Date()

    if (difference <= 0) return {}

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    }
  }, [])

  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      if (Object.keys(newTimeLeft).length === 0) {
        onCountdownEnd()
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, onCountdownEnd])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center mx-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-4xl font-light tracking-widest">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-sm uppercase tracking-wide">{label}</span>
    </motion.div>
  )

  return (
    <section className="w-screen bg-gray-200 flex justify-center py-12">
      <motion.div
        className="text-center py-8 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {Object.keys(timeLeft).length ? (
          <motion.div
            className="text-3xl font-light text-center tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold">28 de Septiembre de 2025</h2>
            <div className="flex justify-center mt-6">
              {Object.entries(timeLeft).map(([key, value]) => (
                <TimeUnit key={key} value={value} label={key} />
              ))}
            </div>
          </motion.div>
        ) : (
          <span className="text-3xl font-light tracking-wider">
            Listo... Hoy es el gran día!
          </span>
        )}
      </motion.div>
    </section>
  )
}