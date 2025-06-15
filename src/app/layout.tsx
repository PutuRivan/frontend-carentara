import './globals.css'
import { Navbar } from '@/components/base/navbar'
import { Footer } from '@/components/base/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Carentara</title>
        <meta name="description" content="Bridging car-owners and borrowers with ease." />
      </head>
      <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
