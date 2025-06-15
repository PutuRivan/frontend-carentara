import Link from 'next/link'
import React from 'react'

export default function Navlink({ label }: { label: string }) {
  return (
    <>
      <li key={label}>
        <Link href={`/${label.toLowerCase()}`} className="hover:text-accent">
          {label}
        </Link>
      </li>
    </>
  )
}
