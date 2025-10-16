import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  CheckCircle, 
  ArrowRight, 
  X, 
  Star,
  Users,
  Building2,
  Rocket,
  Shield,
  Phone,
  Mail,
  Clock,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge className="bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
                Tarification transparente
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Des tarifs adaptés à{' '}
                <span className="text-amber-500">votre croissance</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choisissez le plan qui correspond à vos besoins. Changez ou annulez à tout moment, 
                sans frais cachés. 14 jours d'essai gratuit sur tous les plans.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>14 jours gratuits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Support français inclus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans de tarification */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Plan Starter */}
                <Card className="border-2 border-slate-200 hover:border-slate-300 transition-colors relative">
                  <CardHeader className="text-center pb-8">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">Starter</CardTitle>
                    <CardDescription className="text-slate-600">Parfait pour débuter</CardDescription>
                    <div className="mt-6">
                      <div className="text-5xl font-bold text-slate-900">89€</div>
                      <div className="text-slate-600 mt-1">par mois</div>
                      <div className="text-sm text-slate-500 mt-2">200 prospects inclus</div>
                      <div className="text-xs text-slate-400">+ 0,40€ par prospect supplémentaire</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800" size="lg">
                      Commencer gratuitement
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    <div className="space-y-4">
                      <div className="font-semibold text-slate-900">Inclus :</div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Base 500K entreprises françaises</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">CRM et pipeline basique</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Séquences emails illimitées</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Templates sectoriels (5)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Support email</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Business - Populaire */}
                <Card className="border-2 border-amber-500 relative overflow-hidden shadow-lg scale-105">
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-3 text-sm font-semibold">
                    ⭐ Le plus populaire
                  </div>
                  <CardHeader className="text-center pb-8 pt-16">
                    <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">Business</CardTitle>
                    <CardDescription className="text-slate-600">Pour les équipes qui grandissent</CardDescription>
                    <div className="mt-6">
                      <div className="text-5xl font-bold text-slate-900">189€</div>
                      <div className="text-slate-600 mt-1">par mois</div>
                      <div className="text-sm text-slate-500 mt-2">500 prospects inclus</div>
                      <div className="text-xs text-slate-400">+ 0,35€ par prospect supplémentaire</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" size="lg">
                      Commencer gratuitement
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    <div className="space-y-4">
                      <div className="font-semibold text-slate-900">Tout du plan Starter +</div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Base complète 2.1M entreprises</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Enrichissement automatique</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">SMS + Extension LinkedIn</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Analytics avancés + prédictions IA</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Support prioritaire (chat + téléphone)</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Premium */}
                <Card className="border-2 border-slate-200 hover:border-purple-300 transition-colors relative">
                  <CardHeader className="text-center pb-8">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">Premium</CardTitle>
                    <CardDescription className="text-slate-600">Pour les équipes expertes</CardDescription>
                    <div className="mt-6">
                      <div className="text-5xl font-bold text-slate-900">349€</div>
                      <div className="text-slate-600 mt-1">par mois</div>
                      <div className="text-sm text-slate-500 mt-2">1000 prospects inclus</div>
                      <div className="text-xs text-slate-400">+ 0,25€ par prospect supplémentaire</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button variant="outline" className="w-full border-purple-300 hover:bg-purple-50" size="lg">
                      Commencer gratuitement
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    <div className="space-y-4">
                      <div className="font-semibold text-slate-900">Tout du plan Business +</div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">API et intégrations avancées</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">IA prédictive avancée</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Multi-utilisateurs (jusqu'à 10)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Formation personnalisée</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Account manager dédié</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Informations complémentaires */}
              <div className="text-center mt-12">
                <p className="text-slate-600 mb-4">
                  Tous les plans incluent un essai gratuit de 14 jours • Sans engagement • Annulation en 1 clic
                </p>
                <Button variant="outline" className="text-amber-600 border-amber-300 hover:bg-amber-50">
                  Comparer tous les plans en détail
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau comparatif */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Comparaison détaillée des fonctionnalités
                </h2>
                <p className="text-xl text-slate-600">
                  Trouvez le plan qui correspond parfaitement à vos besoins
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-slate-900">Fonctionnalités</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Starter</th>
                      <th className="text-center p-4 font-semibold text-amber-600 bg-amber-50">Business</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Base de données</td>
                      <td className="p-4 text-center">500K entreprises</td>
                      <td className="p-4 text-center bg-amber-50">2.1M entreprises</td>
                      <td className="p-4 text-center">2.1M entreprises</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Prospects inclus/mois</td>
                      <td className="p-4 text-center">200</td>
                      <td className="p-4 text-center bg-amber-50">500</td>
                      <td className="p-4 text-center">1000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Séquences emails</td>
                      <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                      <td className="p-4 text-center bg-amber-50"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">SMS automatisés</td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                      <td className="p-4 text-center bg-amber-50"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Extension LinkedIn</td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                      <td className="p-4 text-center bg-amber-50"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                      <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Analytics IA</td>
                      <td className="p-4 text-center">Basique</td>
                      <td className="p-4 text-center bg-amber-50">Avancé</td>
                      <td className="p-4 text-center">Prédictif</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">API & Intégrations</td>
                      <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                      <td className="p-4 text-center bg-amber-50">Standard</td>
                      <td className="p-4 text-center">Avancées</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Support</td>
                      <td className="p-4 text-center">Email</td>
                      <td className="p-4 text-center bg-amber-50">Chat + Téléphone</td>
                      <td className="p-4 text-center">Account Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Questions fréquentes
                </h2>
                <p className="text-xl text-slate-600">
                  Tout ce que vous devez savoir sur nos tarifs
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    Puis-je changer de plan à tout moment ?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. 
                    Les changements prennent effet immédiatement et la facturation est ajustée au prorata.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    Que se passe-t-il si je dépasse mon quota de prospects ?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Chaque prospect supplémentaire est facturé selon le tarif de votre plan. 
                    Vous recevez une notification à 80% de votre quota pour éviter les surprises.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    L'essai gratuit nécessite-t-il une carte bancaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Non, aucune carte bancaire n'est requise pour commencer votre essai de 14 jours. 
                    Vous n'êtes facturé qu'après avoir choisi un plan payant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    Proposez-vous des remises pour les paiements annuels ?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Oui, nous offrons 2 mois gratuits (soit 17% de réduction) pour tout paiement annuel. 
                    Cette option est disponible sur tous nos plans.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">
                    Vos données sont-elles RGPD compliant ?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Absolument. Toutes nos données sont hébergées en France, nous gérons automatiquement 
                    les consentements et respectons scrupuleusement le RGPD. Un audit de conformité est 
                    réalisé chaque trimestre.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à choisir votre plan ?
              </h2>
              <p className="text-xl text-slate-300">
                Commencez votre essai gratuit de 14 jours dès maintenant. 
                Aucune carte bancaire requise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4"
                >
                  Commencer l'essai gratuit
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-400 text-white hover:bg-slate-800 px-8 py-4"
                >
                  Parler à un expert
                  <Phone className="h-5 w-5 ml-2" />
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Configuration en 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Support français inclus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Annulation en 1 clic</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}