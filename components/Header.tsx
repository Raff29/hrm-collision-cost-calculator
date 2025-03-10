"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-hrm-blue to-hrm-accent text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">HRM Crash Analytics</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-hrm-light transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-hrm-light transition-colors">
                About
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

