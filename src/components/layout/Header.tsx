"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Target, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo simple */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            <Target className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-900">ProspectPro</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/fonctionnalites" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="/tarifs" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Tarifs
          </Link>
          <Link href="/a-propos" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900" asChild>
            <Link href="/connexion">Connexion</Link>
          </Button>
          
          <Button 
            className="bg-slate-900 hover:bg-slate-800 text-white" 
            asChild
          >
            <Link href="/inscription">
              Essai gratuit
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Menu Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link 
                href="/fonctionnalites" 
                className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="/tarifs" 
                className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="/a-propos" 
                className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium text-slate-900 hover:text-slate-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/connexion" onClick={() => setIsOpen(false)}>
                    Connexion
                  </Link>
                </Button>
                <Button className="w-full bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="/inscription" onClick={() => setIsOpen(false)}>
                    Essai gratuit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}