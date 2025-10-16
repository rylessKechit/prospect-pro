import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  ArrowRight,
  Calendar,
  Users,
  Building2,
  Target,
  CheckCircle,
  Headphones,
  BookOpen,
  Video
} from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge className="bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
                Nous sommes là pour vous aider
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Contactez notre équipe{' '}
                <span className="text-amber-500">d'experts</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Une question sur ProspectPro ? Besoin d'une démonstration personnalisée ? 
                Notre équipe française est là pour vous accompagner dans votre réussite commerciale.
              </p>
            </div>
          </div>
        </section>

        {/* Options de contact */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                
                {/* Démonstration */}
                <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Video className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">Démonstration personnalisée</CardTitle>
                    <CardDescription>
                      30 minutes avec un expert pour découvrir ProspectPro
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Analyse de votre secteur</li>
                      <li>• Estimation ROI personnalisée</li>
                      <li>• Configuration sur mesure</li>
                      <li>• Q&A avec expert commercial</li>
                    </ul>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Réserver un créneau
                    </Button>
                    <div className="text-xs text-slate-500">
                      Prochains créneaux : Aujourd'hui 14h • Demain 10h
                    </div>
                  </CardContent>
                </Card>

                {/* Support technique */}
                <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Headphones className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Support technique</CardTitle>
                    <CardDescription>
                      Aide rapide pour nos clients existants
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Chat en direct (9h-18h)</li>
                      <li>• Réponse sous 2h garantie</li>
                      <li>• Base de connaissances</li>
                      <li>• Guides vidéo détaillés</li>
                    </ul>
                    <Button variant="outline" className="w-full border-blue-300 hover:bg-blue-50">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Ouvrir le chat
                    </Button>
                    <div className="text-xs text-slate-500">
                      Ou appelez le 01 23 45 67 89
                    </div>
                  </CardContent>
                </Card>

                {/* Questions commerciales */}
                <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Questions commerciales</CardTitle>
                    <CardDescription>
                      Tarifs, fonctionnalités et partenariats
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Devis personnalisé</li>
                      <li>• Tarifs entreprise</li>
                      <li>• Partenariats</li>
                      <li>• Formations équipe</li>
                    </ul>
                    <Button variant="outline" className="w-full border-emerald-300 hover:bg-emerald-50">
                      <Mail className="h-4 w-4 mr-2" />
                      commercial@prospectpro.fr
                    </Button>
                    <div className="text-xs text-slate-500">
                      Réponse sous 4h ouvrées
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Formulaire de contact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Formulaire */}
                <Card className="border border-slate-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">Envoyez-nous un message</CardTitle>
                    <CardDescription>
                      Remplissez ce formulaire et nous vous recontacterons sous 24h
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Prénom *</label>
                        <Input placeholder="Jean" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nom *</label>
                        <Input placeholder="Dupont" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email professionnel *</label>
                      <Input type="email" placeholder="jean.dupont@entreprise.fr" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Téléphone</label>
                      <Input type="tel" placeholder="01 23 45 67 89" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Entreprise *</label>
                      <Input placeholder="Nom de votre entreprise" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Secteur d'activité</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conseil">Conseil & Services</SelectItem>
                            <SelectItem value="tech">Tech & Software</SelectItem>
                            <SelectItem value="industrie">Industrie</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                            <SelectItem value="sante">Santé</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Taille de l'entreprise</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 employés</SelectItem>
                            <SelectItem value="6-20">6-20 employés</SelectItem>
                            <SelectItem value="21-50">21-50 employés</SelectItem>
                            <SelectItem value="51-100">51-100 employés</SelectItem>
                            <SelectItem value="100+">100+ employés</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Sujet de votre demande</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Demande de démonstration</SelectItem>
                          <SelectItem value="tarifs">Questions sur les tarifs</SelectItem>
                          <SelectItem value="support">Support technique</SelectItem>
                          <SelectItem value="partenariat">Partenariat</SelectItem>
                          <SelectItem value="formation">Formation équipe</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Votre message</label>
                      <Textarea 
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-xs text-slate-600">
                        J'accepte d'être contacté par ProspectPro concernant ma demande. 
                        Mes données seront traitées conformément à la politique de confidentialité.
                      </span>
                    </div>

                    <Button className="w-full bg-slate-900 hover:bg-slate-800" size="lg">
                      Envoyer ma demande
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    <div className="text-center text-xs text-slate-500">
                      Réponse garantie sous 24h • Support français
                    </div>
                  </CardContent>
                </Card>

                {/* Informations de contact */}
                <div className="space-y-8">
                  
                  {/* Contact direct */}
                  <Card className="border border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Contact direct</CardTitle>
                      <CardDescription>
                        Parlez directement avec notre équipe française
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">01 23 45 67 89</div>
                          <div className="text-sm text-slate-600">Lun-Ven 9h-18h</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">contact@prospectpro.fr</div>
                          <div className="text-sm text-slate-600">Réponse sous 2h</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">15 Rue de la Paix</div>
                          <div className="text-sm text-slate-600">75002 Paris, France</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Horaires d'ouverture */}
                  <Card className="border border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Horaires de support</CardTitle>
                      <CardDescription>
                        Notre équipe est disponible pour vous aider
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Lundi - Vendredi</span>
                        <span className="font-medium text-slate-900">9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Samedi</span>
                        <span className="font-medium text-slate-900">10h00 - 16h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Dimanche</span>
                        <span className="text-slate-500">Fermé</span>
                      </div>
                      <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-emerald-600">
                          <Clock className="h-4 w-4" />
                          <span>Chat en direct disponible maintenant</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ressources utiles */}
                  <Card className="border border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl">Ressources utiles</CardTitle>
                      <CardDescription>
                        Trouvez rapidement les réponses à vos questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <a href="/aide" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                        <BookOpen className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
                        <div>
                          <div className="font-medium text-slate-900">Centre d'aide</div>
                          <div className="text-sm text-slate-600">Guides et tutoriels</div>
                        </div>
                      </a>

                      <a href="/status" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                        <Target className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
                        <div>
                          <div className="font-medium text-slate-900">Statut des services</div>
                          <div className="text-sm text-slate-600">Disponibilité en temps réel</div>
                        </div>
                      </a>

                      <a href="/api" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                        <Building2 className="h-5 w-5 text-slate-600 group-hover:text-slate-900" />
                        <div>
                          <div className="font-medium text-slate-900">Documentation API</div>
                          <div className="text-sm text-slate-600">Pour les développeurs</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Questions fréquentes
                </h2>
                <p className="text-xl text-slate-600">
                  Les réponses aux questions les plus courantes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Combien de temps prend la configuration ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      La configuration initiale prend moins de 5 minutes. Notre équipe peut aussi vous accompagner 
                      pour une configuration personnalisée selon vos besoins spécifiques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Vos données sont-elles sécurisées ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Oui, toutes nos données sont hébergées en France et nous sommes 100% conformes RGPD. 
                      Nous effectuons des audits de sécurité trimestriels.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Proposez-vous une formation ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Oui, nous proposons une formation personnalisée incluse avec le plan Premium, 
                      et disponible en option pour les autres plans.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Puis-je intégrer ProspectPro à mon CRM ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Absolument ! Nous proposons des intégrations natives avec HubSpot, Pipedrive, 
                      et d'autres CRM populaires. Des API sont aussi disponibles.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-600 mb-4">
                  Vous ne trouvez pas la réponse à votre question ?
                </p>
                <Button variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50">
                  Voir toutes les FAQ
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Prêt à transformer votre prospection ?
              </h2>
              <p className="text-xl text-slate-300">
                Notre équipe d'experts est là pour vous accompagner dans votre réussite commerciale. 
                Contactez-nous dès aujourd'hui !
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Réserver une démonstration
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-400 text-white hover:bg-slate-800 px-8 py-4"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Ouvrir le chat
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Réponse sous 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Support français</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Sans engagement</span>
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