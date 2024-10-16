'use client'

import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-white bg-opacity-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="An Tailor Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-10">
              <Link href="/collections" className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium text-lg">
                Collections
              </Link>
              <Link href="/tailoring" className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium text-lg">
                Tailoring
              </Link>
              <Link href="/world-of-brioni" className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-medium text-lg">
                World of Brioni
              </Link>
            </nav>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-900 hover:text-gray-700 transition-colors duration-200">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/collections" className="block px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200">
              Collections
            </Link>
            <Link href="/tailoring" className="block px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200">
              Tailoring
            </Link>
            <Link href="/world-of-brioni" className="block px-3 py-2 rounded-md text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200">
              World of Brioni
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}