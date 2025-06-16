import './globals.css'
import { Navbar } from '@/components/base/navbar'
import { Footer } from '@/components/base/footer'
import AuthProvider from '@/provider/auth-provider'
import { Toaster } from 'sonner'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </body>
  )
}
