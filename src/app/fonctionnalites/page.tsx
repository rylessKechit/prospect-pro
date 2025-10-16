import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Search, 
  Zap, 
  Mail, 
  Users, 
  BarChart3, 
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Clock,
  Smartphone
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Toutes les fonctionnalités pour 
                <span className="text-primary"> réussir votre prospection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ProspectPro centralise tous les outils dont vous avez besoin pour trouver, contacter et convertir vos prospects en clients.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {/* Prospection intelligente */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Prospection intelligente</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Accédez à notre base de données de plus de 2 millions d'entreprises françaises enrichie en temps réel.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Base INSEE SIRENE complète et mise à jour</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Filtres avancés par secteur, taille, localisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Détection de signaux déclencheurs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Import/export CSV et intégrations</span>
                    </div>
                  </div>
                </div>
                <Card className="h-64 flex items-center justify-center">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Capture d'écran de la recherche de prospects]
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enrichissement automatique */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Card className="h-64 flex items-center justify-center order-2 lg:order-1">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Capture d'écran de l'enrichissement]
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Enrichissement automatique</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Enrichissez automatiquement vos prospects avec des emails professionnels, téléphones et données d'entreprise.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>85% de taux de succès sur les emails</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Données d'entreprise complètes (CA, effectif)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Scoring automatique de qualité (0-100)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Mise à jour continue des données</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation multi-canal */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Automation multi-canal</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Créez des séquences de prospection automatisées par email, SMS et LinkedIn avec des templates prêts à l'emploi.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Templates sectoriels optimisés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Personnalisation IA avancée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>A/B testing automatique</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Gestion des désinscriptions RGPD</span>
                    </div>
                  </div>
                </div>
                <Card className="h-64 flex items-center justify-center">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Capture d'écran des séquences]
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CRM intégré */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Card className="h-64 flex items-center justify-center order-2 lg:order-1">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Capture d'écran du CRM]
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">CRM intégré ultra-simple</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Suivez vos prospects avec un CRM pensé pour la simplicité. Pipeline visuel, historique complet et notifications intelligentes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Pipeline Kanban intuitif</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Historique complet des interactions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Rappels et notifications intelligentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Sync calendrier Google/Outlook</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics & ROI */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Analytics & ROI</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Mesurez l'efficacité de vos campagnes avec des analytics détaillés et des prédictions IA pour optimiser vos résultats.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Dashboard temps réel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Calcul automatique du ROI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Prédictions IA de conversion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Benchmark sectoriel</span>
                    </div>
                  </div>
                </div>
                <Card className="h-64 flex items-center justify-center">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Capture d'écran analytics]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Et bien plus encore...
              </h2>
              <p className="text-xl text-muted-foreground">
                Toutes les fonctionnalités pour une prospection professionnelle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Conformité RGPD native</CardTitle>
                  <CardDescription>
                    Gestion automatique des consentements, désinscriptions et droits des prospects selon la réglementation française.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Scoring prédictif</CardTitle>
                  <CardDescription>
                    Intelligence artificielle qui évalue la probabilité de conversion de chaque prospect pour optimiser vos efforts.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Extension LinkedIn</CardTitle>
                  <CardDescription>
                    Prospectez directement sur LinkedIn avec notre extension Chrome pour enrichir et contacter vos prospects.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Signaux déclencheurs</CardTitle>
                  <CardDescription>
                    Détection automatique des événements business : recrutements, déménagements, créations d'entreprise.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>SMS Marketing</CardTitle>
                  <CardDescription>
                    Campagnes SMS intégrées aux séquences email pour multiplier vos points de contact et améliorer les conversions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gestion d'équipe</CardTitle>
                  <CardDescription>
                    Collaborez efficacement avec votre équipe commerciale, assignez des prospects et suivez les performances individuelles.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à découvrir toutes ces fonctionnalités ?
              </h2>
              <p className="text-xl text-muted-foreground">
                Testez ProspectPro gratuitement pendant 14 jours, sans engagement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/inscription">
                    Essai gratuit 14 jours
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/demo">
                    Demander une démo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}