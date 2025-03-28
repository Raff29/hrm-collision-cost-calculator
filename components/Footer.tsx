"use client";

import { landingContent } from "@/app/content/landing";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-hrm-blue to-hrm-accent text-white p-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">{landingContent.footer.title}</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/raff29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hrm-light transition-colors"
            data-testid="github-link"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:raphael.pinto1@outlook.com"
            className="hover:text-hrm-light transition-colors"
            data-testid="email-link"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
