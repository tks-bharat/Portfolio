"use client"

import React from 'react'
import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { Download, Menu } from 'lucide-react'
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
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              CV Download
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
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
                <Button className="w-full gap-2 mt-4" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
