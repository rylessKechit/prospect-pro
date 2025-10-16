import React from 'react';
import Link from 'next/link';
import { Target, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <Target className="h-5 w-5 text-slate-900" />
              </div>
              <span className="font-bold text-xl">ProspectPro</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              La première solution de prospection tout-en-un pensée pour les TPE et PME françaises.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Shield className="h-4 w-4" />
              <span>100% RGPD • Hébergé en France</span>
            </div>
          </div>

          {/* Produit */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Produit</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/fonctionnalites" className="hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-white transition-colors">
                  Intégrations
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Entreprise</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cas-clients" className="hover:text-white transition-colors">
                  Cas clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@prospectpro.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm text-slate-400">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-white transition-colors">
              CGU
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            © 2025 ProspectPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}