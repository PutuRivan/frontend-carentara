// src/components/base/Footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">Carentara</h3>
          <p className="text-sm text-gray-600">
            Bridging car-owners and borrowers with ease.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>support@carentara.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Carentara. All rights reserved.
      </div>
    </footer>
  )
}
