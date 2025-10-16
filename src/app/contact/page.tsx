import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Une question ? 
                <span className="text-primary"> Parlons-en !</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Notre équipe française est là pour vous accompagner dans votre transformation commerciale. Contactez-nous par le canal qui vous convient le mieux.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              
              {/* Email */}
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>
                    Pour toutes vos questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@prospectpro.fr" className="text-primary hover:underline font-medium">
                    contact@prospectpro.fr
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Téléphone</CardTitle>
                  <CardDescription>
                    Lun-Ven, 9h-18h
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+33123456789" className="text-primary hover:underline font-medium">
                    01 23 45 67 89
                  </a>
                </CardContent>
              </Card>

              {/* Chat */}
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Chat en direct</CardTitle>
                  <CardDescription>
                    Réponse immédiate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-primary hover:underline font-medium">
                    Démarrer une conversation
                  </button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Support client</CardTitle>
                  <CardDescription>
                    Clients existants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:support@prospectpro.fr" className="text-primary hover:underline font-medium">
                    support@prospectpro.fr
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Office */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise *</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Demande de démo</SelectItem>
                          <SelectItem value="pricing">Questions sur les tarifs</SelectItem>
                          <SelectItem value="technical">Question technique</SelectItem>
                          <SelectItem value="partnership">Partenariat</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Décrivez votre projet et vos besoins..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Office Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Nos bureaux</h2>
                  <p className="text-muted-foreground">
                    Venez nous rencontrer dans nos bureaux parisiens ou contactez-nous à distance.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires d'ouverture</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 9h00 - 18h00<br />
                        Weekend : Fermé
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Numéro principal</h3>
                      <p className="text-muted-foreground">
                        +33 (0)1 23 45 67 89
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <Card>
                  <CardContent className="p-8 h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      [Carte Google Maps intégrée]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Peut-être que votre réponse se trouve ici
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Combien de temps faut-il pour configurer ProspectPro ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La configuration initiale prend moins de 5 minutes. Vous pouvez commencer à prospecter immédiatement après votre inscription.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous une formation à l'utilisation ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Oui, nous proposons des sessions de formation personnalisées pour tous nos clients Business et Premium. L'onboarding est inclus dans votre abonnement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vos données sont-elles conformes RGPD ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolument. Toutes nos données sont hébergées en France et nous respectons strictement la réglementation RGPD. Vous disposez d'outils automatiques pour gérer les consentements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quel est votre délai de réponse moyen ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous répondons généralement dans les 2 heures ouvrées par email et immédiatement par chat. Pour les clients Premium, le support téléphonique est disponible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}