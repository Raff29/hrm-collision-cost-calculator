import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HRM Vehicle Collision Cost Estimator",
  description: "Estimate the cost of vehicle collisions in Halifax Regional Municipality",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-white to-hrm-light`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

