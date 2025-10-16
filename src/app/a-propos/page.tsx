import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { Target, Users, Globe, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Notre mission : démocratiser la 
                <span className="text-primary"> prospection commerciale</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ProspectPro est né d'un constat simple : les TPE et PME françaises méritent les mêmes outils de prospection que les grandes entreprises, mais adaptés à leurs besoins et budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Notre histoire</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      En 2024, nous avons rencontré des centaines de dirigeants de TPE et PME qui nous ont tous dit la même chose : "La prospection, c'est notre point faible". Ils passaient des heures sur LinkedIn, achetaient des fichiers Excel douteux et envoyaient des emails sans savoir s'ils arrivaient à destination.
                    </p>
                    <p>
                      Les solutions existantes étaient soit trop complexes, soit trop chères, soit pensées pour les grandes entreprises avec des équipes dédiées. Il manquait un outil simple, abordable et efficace pour les vrais entrepreneurs français.
                    </p>
                    <p>
                      C'est ainsi qu'est né ProspectPro : la première solution de prospection pensée exclusivement pour les TPE et PME françaises, avec leur pragmatisme et leurs contraintes en tête.
                    </p>
                  </div>
                </div>
                <Card className="h-64 flex items-center justify-center">
                  <CardContent>
                    <div className="text-center text-muted-foreground">
                      [Photo équipe fondatrice]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Nos valeurs
              </h2>
              <p className="text-xl text-muted-foreground">
                Ce qui guide chacune de nos décisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Simplicité</CardTitle>
                  <CardDescription>
                    Nous croyons que les outils efficaces doivent être simples. Pas de formations de 3 jours, pas de manuels de 200 pages. Juste de la productivité immédiate.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Proximité</CardTitle>
                  <CardDescription>
                    Nous sommes une équipe française qui comprend les défis des entrepreneurs français. Support en français, données françaises, approche française.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Transparence</CardTitle>
                  <CardDescription>
                    Tarifs clairs, pas de frais cachés, conformité RGPD totale. Vous savez toujours ce que vous payez et pourquoi.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                L'équipe ProspectPro
              </h2>
              <p className="text-xl text-muted-foreground">
                Des entrepreneurs pour les entrepreneurs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center h-full">
                <CardHeader>
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarFallback className="text-2xl">TD</AvatarFallback>
                  </Avatar>
                  <CardTitle>Thomas Dubois</CardTitle>
                  <CardDescription className="text-primary font-medium">CEO & Co-fondateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ex-directeur commercial en PME, Thomas a vécu les frustrations de la prospection traditionnelle avant de créer ProspectPro.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarFallback className="text-2xl">ML</AvatarFallback>
                  </Avatar>
                  <CardTitle>Marie Laurent</CardTitle>
                  <CardDescription className="text-primary font-medium">CTO & Co-fondatrice</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ingénieure en IA avec 10 ans d'expérience, Marie rend la technologie accessible aux PME françaises.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarFallback className="text-2xl">PM</AvatarFallback>
                  </Avatar>
                  <CardTitle>Pierre Martin</CardTitle>
                  <CardDescription className="text-primary font-medium">Head of Product</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Designer UX passionné, Pierre s'assure que chaque fonctionnalité est intuitive et utile au quotidien.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ProspectPro en chiffres
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">2M+</div>
                <div className="text-primary-foreground/80">Entreprises françaises en base</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">450+</div>
                <div className="text-primary-foreground/80">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">85%</div>
                <div className="text-primary-foreground/80">Taux de réussite enrichissement</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">3x</div>
                <div className="text-primary-foreground/80">Amélioration conversion moyenne</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Notre mission pour 2025
              </h2>
              <p className="text-xl text-muted-foreground">
                Équiper 10 000 TPE et PME françaises avec les outils de prospection qui leur permettront de doubler leur chiffre d'affaires.
              </p>
              <p className="text-muted-foreground">
                Nous croyons que chaque entrepreneur français mérite d'avoir accès aux mêmes technologies que les grandes entreprises. Notre objectif est de démocratiser la prospection intelligente et de contribuer à la croissance économique française.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Rejoignez l'aventure ProspectPro
              </h2>
              <p className="text-xl text-muted-foreground">
                Faites partie des entrepreneurs qui transforment leur prospection avec ProspectPro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/inscription">
                    Essai gratuit 14 jours
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/contact">
                    Contactez l'équipe
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