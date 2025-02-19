"use client"

import { Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-hrm-blue to-hrm-accent text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">Developed by Raphael Pinto</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hrm-light transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-hrm-light transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

