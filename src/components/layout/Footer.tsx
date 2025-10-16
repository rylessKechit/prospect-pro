import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">ProspectPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La première solution de prospection tout-en-un pensée pour les TPE et PME françaises.
            </p>
          </div>

          {/* Produit */}
          <div className="space-y-4">
            <h3 className="font-semibold">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fonctionnalites" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/integration" className="text-muted-foreground hover:text-foreground transition-colors">
                  Intégrations
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h3 className="font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carriere" className="text-muted-foreground hover:text-foreground transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-foreground transition-colors">
                  Statut
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sécurité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-foreground transition-colors">
              CGU
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 ProspectPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}