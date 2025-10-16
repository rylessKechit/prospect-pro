import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Target, 
  Users, 
  Globe, 
  ArrowRight,
  Award,
  Building2,
  TrendingUp,
  Shield,
  Heart,
  Lightbulb,
  Rocket,
  Coffee,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge className="bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
                Notre histoire
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Notre mission : démocratiser la{' '}
                <span className="text-amber-500">prospection commerciale</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                ProspectPro est né d'un constat simple : les TPE et PME françaises méritent les mêmes outils 
                de prospection que les grandes entreprises, mais adaptés à leurs besoins et budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Comment tout a commencé</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      En 2024, nous avons rencontré des centaines de dirigeants de TPE et PME qui nous ont tous dit la même chose : 
                      <strong className="text-slate-900"> "La prospection, c'est notre point faible"</strong>. 
                      Ils passaient des heures sur LinkedIn, achetaient des fichiers Excel douteux et envoyaient des emails sans savoir s'ils arrivaient à destination.
                    </p>
                    <p>
                      Les solutions existantes étaient soit trop complexes, soit trop chères, soit pensées pour les grandes entreprises 
                      avec des équipes dédiées. Il manquait un outil simple, abordable et efficace pour les vrais entrepreneurs français.
                    </p>
                    <p>
                      C'est ainsi qu'est né ProspectPro : <strong className="text-slate-900">la première solution de prospection pensée 
                      exclusivement pour les TPE et PME françaises</strong>, avec leur pragmatisme et leurs contraintes en tête.
                    </p>
                  </div>
                </div>

                <Card className="bg-white border border-slate-200 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">En chiffres depuis 2024</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-500 mb-1">453</div>
                        <div className="text-sm text-slate-600">Clients actifs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-1">2.1M</div>
                        <div className="text-sm text-slate-600">Entreprises en base</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-500 mb-1">+347%</div>
                        <div className="text-sm text-slate-600">ROI moyen clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-500 mb-1">24.7%</div>
                        <div className="text-sm text-slate-600">Taux conversion</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Nos valeurs
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Ce qui guide chacune de nos décisions depuis le premier jour
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Simplicité avant tout</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Nous croyons que les outils puissants doivent rester simples. 
                      Chaque fonctionnalité est pensée pour être intuitive, même pour un dirigeant débordé.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Transparence totale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Pas de frais cachés, pas de clauses piège. Nos tarifs sont clairs, 
                      nos données sont conformes RGPD et notre support est honnête.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">Résultats concrets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Nous ne vendons pas du rêve, nous vendons des résultats mesurables. 
                      Chaque fonctionnalité a un impact direct sur votre chiffre d'affaires.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  L'équipe qui rend tout possible
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Des entrepreneurs et technologues passionnés, unis par une vision commune
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Membre 1 */}
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-blue-100 text-blue-700 font-bold">AC</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Antoine Charrier</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">CEO & Co-fondateur</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Ex-directeur commercial chez Salesforce. 12 ans d'expérience en prospection B2B. 
                      Passionné par l'entrepreneuriat français.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Paris</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Linkedin className="h-3 w-3" />
                        <span>@acharrier</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Membre 2 */}
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-emerald-100 text-emerald-700 font-bold">ML</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Marine Leclerc</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">CTO & Co-fondatrice</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Ex-lead engineer chez Datadog. Experte en IA et machine learning. 
                      Diplômée Polytechnique et passionnée de données.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Lyon</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Linkedin className="h-3 w-3" />
                        <span>@mleclerc</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Membre 3 */}
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-purple-100 text-purple-700 font-bold">TD</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Thomas Dubois</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">Head of Product</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Ex-product manager chez Klarna. Designer UX passionné qui s'assure que chaque 
                      fonctionnalité est intuitive et utile au quotidien.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Nantes</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Linkedin className="h-3 w-3" />
                        <span>@tdubois</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Membre 4 */}
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-red-100 text-red-700 font-bold">CM</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Clara Martin</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">Head of Customer Success</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Ex-customer success chez Intercom. Elle s'assure que chaque client 
                      réussisse avec ProspectPro et atteigne ses objectifs commerciaux.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Bordeaux</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Linkedin className="h-3 w-3" />
                        <span>@cmartin</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Membre 5 */}
                <Card className="border border-slate-200 text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-indigo-100 text-indigo-700 font-bold">JR</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Julien Rousseau</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">Head of Data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Ex-data scientist chez BlaBlaCar. Il s'occupe de l'enrichissement et de la qualité 
                      de notre base de 2.1M entreprises françaises.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>Toulouse</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Linkedin className="h-3 w-3" />
                        <span>@jrousseau</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rejoindre l'équipe */}
                <Card className="border-2 border-dashed border-slate-300 text-center hover:border-amber-400 transition-colors">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full space-y-4">
                    <div className="h-24 w-24 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900 mb-2">Et vous ?</div>
                      <p className="text-sm text-slate-600 mb-4">
                        Nous recherchons des talents passionnés pour révolutionner la prospection française.
                      </p>
                      <Button variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50">
                        Voir nos offres
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Notre vision */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Notre vision pour 2025
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Équiper <strong className="text-slate-900">10 000 TPE et PME françaises</strong> avec les outils de prospection 
                qui leur permettront de doubler leur chiffre d'affaires.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nous croyons que chaque entrepreneur français mérite d'avoir accès aux mêmes technologies que les grandes entreprises. 
                Notre mission est de démocratiser la prospection professionnelle et de contribuer à la croissance économique française.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Nos engagements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-500 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Hébergé en France</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-500 mb-2">RGPD</div>
                    <div className="text-sm text-slate-600">Conformité native</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">24/7</div>
                    <div className="text-sm text-slate-600">Support français</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à rejoindre l'aventure ?
              </h2>
              <p className="text-xl text-slate-300">
                Découvrez comment ProspectPro peut transformer votre prospection 
                avec une démonstration personnalisée.
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
                  <Mail className="h-5 w-5 mr-2" />
                  Nous contacter
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