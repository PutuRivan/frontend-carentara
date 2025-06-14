// src/components/base/Navbar.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navlink from './navlink'

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
            <Navlink key={label} label={label} />
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="text-accent hover:bg-accent-light hover:text-white cursor-pointer">
            Log In
          </Button>
          <Button variant="default" className="cursor-pointer" >Sign Up</Button>
        </div>
      </nav>
    </header>
  )
}
