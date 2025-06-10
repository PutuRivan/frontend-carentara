// src/components/base/Navbar.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Carentara
        </Link>

        {/* Links */}
        <ul className="flex space-x-6">
          {['Home', 'Cars', 'About', 'Contact'].map((label) => (
            <li key={label}>
              <Link href={`/${label.toLowerCase()}`} className="hover:text-accent">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="text-accent hover:bg-accent-light hover:text-white">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  )
}
