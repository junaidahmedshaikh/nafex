"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"
import { SearchBox } from "@/components/search-box"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/comparison", label: "Comparison" },
    { href: "/docs", label: "Docs" },
    { href: "/examples", label: "Examples" },
    { href: "/about", label: "About" },
    { href: "/get-started", label: "Get Started" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold">nafex</span>
          </Link>

          {/* Search Box - Desktop */}
          <div className="hidden md:block flex-1 max-w-md">
            <SearchBox />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-3 pb-4 border-t border-border pt-4">
            {/* Search Box - Mobile */}
            <div className="mb-3">
              <SearchBox />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded transition-colors ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
