"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/layanan", label: "Layanan" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "/blog", label: "Blog" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/kontak", label: "Kontak" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-subtle supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">Web Perdana</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  {/* <Link href="/kontak" onClick={() => setIsOpen(false)}>
                    Hubungi Kami
                  </Link> */}
                  <Link href="https://wa.me/6285179552735">
                    Hubungi Kami
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
