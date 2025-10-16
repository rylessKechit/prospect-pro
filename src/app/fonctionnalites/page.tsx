import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Search, 
  Zap, 
  BarChart3, 
  Shield,
  CheckCircle,
  ArrowRight,
  Database,
  Bot,
  Target,
  Users,
  Globe,
  Clock,
  Mail,
  Smartphone,
  TrendingUp,
  Lock,
  Award
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge className="bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
                Plateforme complète
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Tout ce dont vous avez besoin pour{' '}
                <span className="text-amber-500">réussir votre prospection</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                ProspectPro centralise tous les outils essentiels dans une interface simple et intuitive. 
                Découvrez comment automatiser votre croissance commerciale.
              </p>
            </div>
          </div>
        </section>

        {/* Fonctionnalités principales */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-20">
              
              {/* Base de données */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Base de données</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    2.1M entreprises françaises à portée de clic
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Accédez instantanément aux informations de contact vérifiées de tous les décideurs français. 
                    Notre base est mise à jour quotidiennement via l'INSEE, BODACC et nos partenaires certifiés.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Emails vérifiés (98.7%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Téléphones directs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Données financières</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Signaux d'affaires</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-white border border-slate-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">2.1M</div>
                        <div className="text-slate-600">Entreprises référencées</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <div className="text-xl font-semibold text-slate-900">12M</div>
                          <div className="text-sm text-slate-600">Contacts décideurs</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <div className="text-xl font-semibold text-slate-900">150K</div>
                          <div className="text-sm text-slate-600">Nouveaux/mois</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Automation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Card className="bg-white border border-slate-200 shadow-lg order-2 lg:order-1">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Exemple de séquence automatisée :</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-700">1</div>
                          <span className="text-sm">Email personnalisé envoyé</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                          <div className="h-6 w-6 bg-amber-100 rounded-full flex items-center justify-center text-xs font-bold text-amber-700">2</div>
                          <span className="text-sm">Relance SMS après 3 jours</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-700">3</div>
                          <span className="text-sm">Contact LinkedIn automatique</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                          <div className="h-6 w-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">4</div>
                          <span className="text-sm">Appel programmé au bon moment</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Automation</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Séquences intelligentes qui convertissent 24.7%
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Créez des parcours de prospection qui s'adaptent automatiquement aux comportements 
                    de vos prospects. Notre IA optimise continuellement vos campagnes.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-purple-600" />
                      <span className="text-slate-700">Email personnalisé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-purple-600" />
                      <span className="text-slate-700">SMS de relance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="text-slate-700">LinkedIn automatisé</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bot className="h-5 w-5 text-purple-600" />
                      <span className="text-slate-700">IA d'optimisation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Analytics</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Prédictions IA pour optimiser votre ROI
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Tableau de bord exécutif avec prédictions de chiffre d'affaires, identification des prospects 
                    les plus prometteurs et recommandations d'actions prioritaires.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">ROI en temps réel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Prédictions CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Benchmark secteur</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <span className="text-slate-700">Alertes opportunités</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-white border border-slate-200 shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Métriques clés en temps réel :</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Taux de conversion</span>
                        <span className="font-bold text-emerald-600">24.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">ROI campagne</span>
                        <span className="font-bold text-emerald-600">+347%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Prospects actifs</span>
                        <span className="font-bold text-blue-600">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">CA prédit 30j</span>
                        <span className="font-bold text-amber-600">47 300€</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités supplémentaires */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Et bien plus encore...
                </h2>
                <p className="text-xl text-slate-600">
                  Une plateforme complète pour tous vos besoins commerciaux
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">100% RGPD</CardTitle>
                    <CardDescription>
                      Conformité native et hébergement français
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Hébergement en France</li>
                      <li>• Gestion des consentements</li>
                      <li>• Audit de sécurité trimestriel</li>
                      <li>• Support juridique inclus</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Intégrations natives</CardTitle>
                    <CardDescription>
                      Connectez vos outils existants
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• CRM (HubSpot, Pipedrive)</li>
                      <li>• Calendriers (Google, Outlook)</li>
                      <li>• LinkedIn Sales Navigator</li>
                      <li>• API personnalisées</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">Support français</CardTitle>
                    <CardDescription>
                      Accompagnement personnalisé
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Formation personnalisée</li>
                      <li>• Support chat en direct</li>
                      <li>• Account manager dédié</li>
                      <li>• Réponse sous 2h garantie</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à tester toutes ces fonctionnalités ?
              </h2>
              <p className="text-xl text-slate-300">
                Obtenez une démonstration personnalisée et découvrez comment ProspectPro 
                peut transformer votre prospection.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4"
                >
                  Demander une démonstration
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-400 text-white hover:bg-slate-800 px-8 py-4"
                >
                  Essai gratuit 14 jours
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}