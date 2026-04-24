"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
]

export function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-headline text-primary">Profolio Canvas</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="transition-colors hover:text-accent font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            {mounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black/95 border-white/10 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-left text-white">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-8">
                    {NAV_ITEMS.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="text-lg font-medium hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>

      {/* Moving Text Effect Ticker */}
      <div className="w-full bg-accent/10 border-b border-white/10 backdrop-blur-sm overflow-hidden py-1.5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8 text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent"></span>
                Selected in Wall Street Quant BootCamp ~ 2% Acceptance
              </span>
              <span className="mx-8 text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent"></span>
                In Final Stage in IIMA Ventures AI Summer Residency Program
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  )
}
