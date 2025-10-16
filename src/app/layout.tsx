import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProspectPro - SaaS de Prospection TPE/PME',
  description: 'La première solution de prospection tout-en-un pensée pour les TPE et PME françaises. Trouvez, enrichissez et convertissez vos prospects en clients.',
  keywords: 'prospection, TPE, PME, SaaS, CRM, emailing, enrichissement données',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}