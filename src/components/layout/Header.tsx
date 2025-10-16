"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">ProspectPro</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/fonctionnalites" className="text-sm font-medium hover:text-primary transition-colors">
            Fonctionnalités
          </Link>
          <Link href="/tarifs" className="text-sm font-medium hover:text-primary transition-colors">
            Tarifs
          </Link>
          <Link href="/a-propos" className="text-sm font-medium hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/connexion">Connexion</Link>
          </Button>
          <Button asChild>
            <Link href="/inscription">Essai gratuit</Link>
          </Button>
        </div>

        {/* Menu Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link 
                href="/fonctionnalites" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="/tarifs" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="/a-propos" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2 border-t">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/connexion" onClick={() => setIsOpen(false)}>
                    Connexion
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/inscription" onClick={() => setIsOpen(false)}>
                    Essai gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}