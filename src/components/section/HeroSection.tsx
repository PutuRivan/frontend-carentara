import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DecryptedText from '@/components/react-bits/TextAnimations/DecryptedText/DecryptedText'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero_section.jpg"
        alt="Car on the road"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center max-w-3xl px-6 space-y-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1 className="text-5xl font-bold text-white">
            <DecryptedText text="Rent a Car for Every Journey" speed={0.3} />
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <p className="text-lg text-gray-200">
            Flexible, reliable car rentals—wherever life takes you.
          </p>
        </motion.div>

        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }}>
          <Button size="lg" className="bg-white text-black hover:bg-accent hover:text-white cursor-pointer">
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
