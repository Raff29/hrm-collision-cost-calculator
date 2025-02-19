"use client"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-hrm-blue to-hrm-accent text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Halifax Regional Municipality</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-hrm-light transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-hrm-light transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-hrm-light transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

