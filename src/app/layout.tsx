"use client";

import './globals.css'
import { Navbar } from '@/components/base/navbar'
import { Footer } from '@/components/base/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            key={path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  )
}
