import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { CheckCircle, ArrowRight, X, Star } from 'lucide-react'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Des tarifs adaptés à 
                <span className="text-primary"> votre croissance</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choisissez le plan qui correspond à vos besoins. Changez ou annulez à tout moment, sans frais cachés.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>14 jours d'essai gratuit</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Support français inclus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Starter Plan */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <CardDescription>Parfait pour débuter</CardDescription>
                  
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-bold">89€</div>
                    <div className="text-muted-foreground">par mois</div>
                    <div className="text-sm text-muted-foreground">200 prospects enrichis inclus</div>
                    <div className="text-sm text-muted-foreground">+ 0,40€ par prospect supplémentaire</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/inscription?plan=starter">
                      Commencer gratuitement
                    </Link>
                  </Button>

                  <div className="space-y-4">
                    <div className="font-semibold">Inclus :</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1 utilisateur</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">200 prospects enrichis/mois</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">2 séquences emails actives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">CRM basique</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Base prospects française</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Support email</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Business Plan - Popular */}
              <Card className="border-primary relative h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-black hover:bg-yellow-400 flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Le plus populaire
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">Business</CardTitle>
                  <CardDescription>Pour les équipes qui grandissent</CardDescription>
                  
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-bold">189€</div>
                    <div className="text-muted-foreground">par mois</div>
                    <div className="text-sm text-muted-foreground">500 prospects enrichis inclus</div>
                    <div className="text-sm text-muted-foreground">+ 0,35€ par prospect supplémentaire</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/inscription?plan=business">
                      Commencer gratuitement
                    </Link>
                  </Button>

                  <div className="space-y-4">
                    <div className="font-semibold">Tout Starter, plus :</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">3 utilisateurs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">500 prospects enrichis/mois</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Séquences illimitées</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Multi-canal (LinkedIn + SMS)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Analytics avancés</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">A/B testing automatique</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Support prioritaire</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <CardDescription>Pour les entreprises ambitieuses</CardDescription>
                  
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-bold">349€</div>
                    <div className="text-muted-foreground">par mois</div>
                    <div className="text-sm text-muted-foreground">1000 prospects enrichis inclus</div>
                    <div className="text-sm text-muted-foreground">+ 0,30€ par prospect supplémentaire</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/inscription?plan=premium">
                      Commencer gratuitement
                    </Link>
                  </Button>

                  <div className="space-y-4">
                    <div className="font-semibold">Tout Business, plus :</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">10 utilisateurs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1000 prospects enrichis/mois</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">IA de scoring avancée</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Intégrations CRM externes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">White-label disponible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Account manager dédié</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Support téléphonique</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Questions fréquentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Puis-je changer de plan à tout moment ?</AccordionTrigger>
                  <AccordionContent>
                    Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et la facturation est ajustée au prorata.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Que se passe-t-il si je dépasse mon quota de prospects ?</AccordionTrigger>
                  <AccordionContent>
                    Vous serez facturé automatiquement pour les prospects supplémentaires selon le tarif de votre plan. Vous recevrez une notification avant d'atteindre 80% de votre quota.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>L'essai gratuit nécessite-t-il une carte bancaire ?</AccordionTrigger>
                  <AccordionContent>
                    Oui, une carte bancaire est requise pour l'essai gratuit, mais vous ne serez pas débité pendant les 14 premiers jours. Vous pouvez annuler à tout moment sans frais.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Proposez-vous des remises pour les paiements annuels ?</AccordionTrigger>
                  <AccordionContent>
                    Oui, bénéficiez de 2 mois gratuits en choisissant la facturation annuelle sur tous nos plans. Contactez-nous pour plus de détails.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Vos données sont-elles conformes RGPD ?</AccordionTrigger>
                  <AccordionContent>
                    Absolument. ProspectPro est 100% conforme au RGPD. Toutes nos données sont hébergées en France et nous respectons strictement la réglementation sur la protection des données.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à commencer votre transformation commerciale ?
              </h2>
              <p className="text-xl opacity-90">
                Rejoignez les centaines d'entreprises qui utilisent ProspectPro pour développer leur business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                  <Link href="/inscription">
                    Essai gratuit 14 jours
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact">
                    Parler à un expert
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