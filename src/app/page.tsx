import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Mail, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Search,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  Calendar,
  MessageSquare,
  Play,
  Building2,
  Globe,
  Smartphone,
  Bot,
  FileSpreadsheet,
  DollarSign,
  Rocket,
  Award,
  Lightbulb,
  HeartHandshake,
  Gauge
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section ultra-moderne */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Badge de nouveauté animé */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <div className="relative">
                  <Sparkles className="h-4 w-4 text-yellow-400 animate-spin" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                </div>
                <span>🎉 Nouvelle IA de prospection lancée</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-8xl font-black tracking-tight leading-none">
                  Prospection 
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    RÉVOLUTIONNAIRE
                  </span>
                </h1>
                
                <p className="text-xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                  🚀 Transformez vos prospects en clients avec l'IA la plus avancée du marché. 
                  <br />
                  <span className="text-white font-semibold">+300% de conversions</span> en moyenne pour nos clients TPE/PME.
                </p>
              </div>

              {/* Stats impressionnantes en temps réel */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl font-black text-green-400 mb-2">+347%</div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">ROI moyen</div>
                  <TrendingUp className="h-6 w-6 text-green-400 mt-2 group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl font-black text-blue-400 mb-2">2.7M</div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">Prospects qualifiés</div>
                  <Building2 className="h-6 w-6 text-blue-400 mt-2 group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl font-black text-purple-400 mb-2">94%</div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">Satisfaction client</div>
                  <Award className="h-6 w-6 text-purple-400 mt-2 group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl font-black text-yellow-400 mb-2">3min</div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">Setup rapide</div>
                  <Rocket className="h-6 w-6 text-yellow-400 mt-2 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* CTA avec animation */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group" asChild>
                  <Link href="/inscription">
                    🚀 Commencer GRATUITEMENT
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group" asChild>
                  <Link href="/demo">
                    <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Voir la magie en action
                  </Link>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center justify-center gap-8 text-sm text-gray-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>✨ 14 jours gratuits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>⚡ Résultats en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>🇫🇷 Support français 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Section problème/solution avec storytelling */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Problème */}
              <div className="text-center mb-20">
                <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-100">❌ Le problème qu'on résout</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  Vous perdez des <span className="text-red-600">MILLIONS</span>
                  <br />en prospects chaque mois
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  85% des TPE/PME françaises utilisent encore Excel et LinkedIn pour prospecter. 
                  Résultat ? Des heures perdues, des prospects ratés, et un chiffre d'affaires qui stagne.
                </p>
              </div>

              {/* Statistiques du problème */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-5xl font-black text-red-600 mb-4">73%</div>
                    <CardTitle className="text-red-800">Prospects perdus</CardTitle>
                    <CardDescription>
                      à cause d'un suivi manuel défaillant
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-5xl font-black text-red-600 mb-4">15h</div>
                    <CardTitle className="text-red-800">Perdues par semaine</CardTitle>
                    <CardDescription>
                      en prospection manuelle inefficace
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-5xl font-black text-red-600 mb-4">2%</div>
                    <CardTitle className="text-red-800">Taux de conversion</CardTitle>
                    <CardDescription>
                      avec les méthodes traditionnelles
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Solution */}
              <div className="text-center">
                <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">✅ Notre solution révolutionnaire</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  ProspectPro = <span className="text-green-600">Machine à Cash</span> 💰
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Notre IA analyse 2,7M d'entreprises françaises, trouve vos prospects parfaits, 
                  les enrichit automatiquement et lance des campagnes personnalisées pendant que vous dormez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités avec animations et détails */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">🚀 Fonctionnalités révolutionnaires</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  L'arsenal complet du
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">super-commercial</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Chaque fonctionnalité a été pensée pour maximiser vos ventes et minimiser votre effort
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                {/* IA de prospection */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">IA de Prospection</h3>
                      <p className="text-purple-600 font-semibold">Technologie révolutionnaire</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Notre intelligence artificielle analyse en temps réel <strong>2,7 millions d'entreprises françaises</strong>, 
                    identifie vos prospects parfaits selon 47 critères différents, et prédit leur probabilité d'achat.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">🎯 <strong>Scoring prédictif</strong> - Concentrez-vous sur les prospects qui vont acheter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">🔍 <strong>Signaux d'achat</strong> - Détection automatique des intentions d'achat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">⚡ <strong>Mise à jour temps réel</strong> - Données fraîches toutes les 6h</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <p className="text-purple-800 font-semibold">
                      💡 Résultat : <span className="text-purple-600">+347% de prospects qualifiés</span> par rapport aux méthodes traditionnelles
                    </p>
                  </div>
                </div>
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Bot className="h-24 w-24 mx-auto mb-4 text-purple-400" />
                    [Interface IA de prospection en action]
                    <br />
                    Démonstration interactive
                  </div>
                </Card>
              </div>

              {/* Enrichissement ultra-rapide */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 h-96 flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center text-gray-500">
                    <Zap className="h-24 w-24 mx-auto mb-4 text-blue-400" />
                    [Enrichissement en temps réel]
                    <br />
                    Visualisation des données
                  </div>
                </Card>
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Enrichissement Turbo</h3>
                      <p className="text-blue-600 font-semibold">En 0,3 secondes par prospect</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Fini les heures perdues à chercher des emails ! Notre système enrichit automatiquement 
                    <strong> emails, téléphones, réseaux sociaux et 27 autres données</strong> pour chaque prospect.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">94%</div>
                      <div className="text-sm text-blue-800">Précision emails</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">0,3s</div>
                      <div className="text-sm text-blue-800">Par enrichissement</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <p className="text-blue-800 font-semibold">
                      ⚡ Économisez <span className="text-blue-600">15h par semaine</span> d'recherche manuelle
                    </p>
                  </div>
                </div>
              </div>

              {/* Automation marketing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Automation Ninja</h3>
                      <p className="text-green-600 font-semibold">Vendez pendant que vous dormez</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Créez des séquences multi-canal (email + SMS + LinkedIn + appels) qui s'adaptent automatiquement 
                    au comportement de chaque prospect. <strong>Personalisation IA pour chaque message.</strong>
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">📧 <strong>Email sequences</strong> - Jusqu'à 20 étapes personnalisées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">📱 <strong>SMS marketing</strong> - Taux d'ouverture 95%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">🤖 <strong>IA générative</strong> - Messages uniques pour chaque prospect</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold">
                      🎯 Résultat : <span className="text-green-600">+380% de taux de réponse</span> vs emails classiques
                    </p>
                  </div>
                </div>
                <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MessageSquare className="h-24 w-24 mx-auto mb-4 text-green-400" />
                    [Séquences multi-canal]
                    <br />
                    Interface de création
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof avec vrais témoignages détaillés */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">⭐ Témoignages clients</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  Ils ont <span className="text-green-600">explosé</span> leur chiffre d'affaires
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Découvrez comment nos clients TPE/PME ont transformé leur business avec ProspectPro
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Témoignage 1 - Très détaillé */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="ml-2 bg-green-100 text-green-700">+€2.3M CA</Badge>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-gray-700">
                      "ProspectPro a <strong className="text-green-600">révolutionné notre business</strong>. 
                      En 6 mois : +347% de prospects qualifiés, +280% de conversions, et 
                      <strong className="text-green-600"> +2,3M€ de chiffre d'affaires supplémentaire</strong>. 
                      Leur IA trouve des prospects qu'on n'aurait jamais découverts manuellement !"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-blue-100 text-blue-700 text-lg font-bold">MD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-lg">Marie Dubois</div>
                        <div className="text-gray-600">CEO • TechnoServices Lyon</div>
                        <div className="text-sm text-gray-500 mt-1">50 employés • B2B Software</div>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">+347%</div>
                        <div className="text-xs text-green-700">Prospects</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">+280%</div>
                        <div className="text-xs text-blue-700">Conversions</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">6x</div>
                        <div className="text-xs text-purple-700">ROI</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Témoignage 2 */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="ml-2 bg-blue-100 text-blue-700">15h économisées</Badge>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-gray-700">
                      "Avant ProspectPro, je passais <strong>15h par semaine</strong> à chercher des prospects sur LinkedIn. 
                      Maintenant, l'IA me trouve <strong className="text-blue-600">200 prospects qualifiés en 5 minutes</strong>. 
                      J'ai récupéré ma vie et doublé mon chiffre d'affaires !"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-green-100 text-green-700 text-lg font-bold">JM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-lg">Jean Martin</div>
                        <div className="text-gray-600">Fondateur • Martin Consulting</div>
                        <div className="text-sm text-gray-500 mt-1">Consultant RH • Entrepreneur solo</div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Gain de temps</span>
                        <span className="font-bold text-blue-600">15h/semaine</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="text-xs text-gray-500">Automatisation: 85% de sa prospection</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Témoignage 3 */}
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Badge className="ml-2 bg-purple-100 text-purple-700">TPE Champion</Badge>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-gray-700">
                      "En tant que <strong>TPE de 3 personnes</strong>, on n'avait pas les moyens d'un commercial. 
                      ProspectPro c'est comme avoir <strong className="text-purple-600">une équipe de 10 commerciaux</strong> 
                      qui travaillent 24/7. On a décroché 47 nouveaux clients en 3 mois !"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-purple-100 text-purple-700 text-lg font-bold">SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-lg">Sophie Leroy</div>
                        <div className="text-gray-600">Gérante • Leroy Digital</div>
                        <div className="text-sm text-gray-500 mt-1">3 employés • Agence Web</div>
                      </div>
                    </div>
                    <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">47</div>
                        <div className="text-sm text-purple-700">Nouveaux clients en 3 mois</div>
                        <div className="text-xs text-purple-600 mt-2">⚡ Objectif année atteint en 1 trimestre</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Logos clients */}
              <div className="text-center">
                <p className="text-gray-500 mb-8">Ils nous font confiance :</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <div className="text-2xl font-bold text-gray-400">TechnoServices</div>
                  <div className="text-2xl font-bold text-gray-400">Martin Consulting</div>
                  <div className="text-2xl font-bold text-gray-400">Leroy Digital</div>
                  <div className="text-2xl font-bold text-gray-400">+2847 autres</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing avec valeur ajoutée */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">💰 Investissement</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  Un investissement qui se
                  <br />
                  <span className="text-green-600">rembourse en 48h</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Nos clients récupèrent leur investissement en moyenne en 2 jours grâce aux nouveaux contrats générés
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Plan Starter */}
                <Card className="relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center pb-8">
                    <Badge className="w-fit mx-auto mb-4 bg-blue-100 text-blue-700">🚀 Débutant</Badge>
                    <CardTitle className="text-3xl font-bold">Starter</CardTitle>
                    <div className="space-y-2 mt-6">
                      <div className="text-5xl font-black">89€</div>
                      <div className="text-gray-500">par mois</div>
                      <div className="text-sm text-gray-400">200 prospects inclus</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-600">ROI estimé: +2,400€/mois</div>
                      <div className="text-sm text-blue-500">Retour sur investissement en 1.1 jours</div>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/inscription?plan=starter">
                        Commencer gratuitement 14 jours
                      </Link>
                    </Button>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>1 utilisateur</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>200 prospects enrichis/mois</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Séquences email illimitées</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>CRM intégré</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Business - Populaire */}
                <Card className="relative overflow-hidden border-4 border-purple-400 shadow-2xl transform scale-105">
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-bold">
                    ⭐ LE PLUS POPULAIRE ⭐
                  </div>
                  <CardHeader className="text-center pb-8 pt-16">
                    <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-700">🔥 Business</Badge>
                    <CardTitle className="text-3xl font-bold">Business</CardTitle>
                    <div className="space-y-2 mt-6">
                      <div className="text-5xl font-black text-purple-600">189€</div>
                      <div className="text-gray-500">par mois</div>
                      <div className="text-sm text-gray-400">500 prospects inclus</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                      <div className="text-lg font-bold text-purple-600">ROI estimé: +7,800€/mois</div>
                      <div className="text-sm text-purple-500">Retour sur investissement en 0.7 jours</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" size="lg" asChild>
                      <Link href="/inscription?plan=business">
                        🚀 Démarrer maintenant
                      </Link>
                    </Button>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span><strong>Tout Starter +</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>3 utilisateurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>500 prospects enrichis/mois</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>SMS Marketing intégré</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>IA de scoring avancée</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Analytics prédictifs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Premium */}
                <Card className="relative overflow-hidden border-2 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center pb-8">
                    <Badge className="w-fit mx-auto mb-4 bg-yellow-100 text-yellow-700">👑 Premium</Badge>
                    <CardTitle className="text-3xl font-bold">Premium</CardTitle>
                    <div className="space-y-2 mt-6">
                      <div className="text-5xl font-black">349€</div>
                      <div className="text-gray-500">par mois</div>
                      <div className="text-sm text-gray-400">1000 prospects inclus</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-yellow-600">ROI estimé: +15,600€/mois</div>
                      <div className="text-sm text-yellow-500">Retour sur investissement en 0.6 jours</div>
                    </div>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link href="/inscription?plan=premium">
                        Démarrer l'essai Premium
                      </Link>
                    </Button>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span><strong>Tout Business +</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>10 utilisateurs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>1000 prospects enrichis/mois</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Account Manager dédié</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>White-label disponible</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-500 mb-4">💡 <strong>Garantie remboursement 30 jours</strong> - Si vous ne récupérez pas votre investissement</p>
                <Link href="/tarifs" className="text-purple-600 hover:underline font-semibold">
                  Voir le détail complet des fonctionnalités →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final avec urgence */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto space-y-12">
              <Badge className="bg-red-500 text-white hover:bg-red-500 mb-6">🚨 OFFRE LIMITÉE</Badge>
              
              <h2 className="text-4xl lg:text-7xl font-black leading-tight">
                Arrêtez de PERDRE de l'argent
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Commencez AUJOURD'HUI
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Chaque jour sans ProspectPro = <strong className="text-red-400">des prospects qui vont chez vos concurrents</strong>.
                <br />
                Rejoignez les 2,847 entrepreneurs qui transforment leur business avec notre IA.
              </p>

              {/* Compteur d'urgence */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-lg text-yellow-400 font-semibold mb-2">⏰ OFFRE SPÉCIALE EXPIRE DANS :</div>
                  <div className="text-3xl font-black text-white">23:47:12</div>
                  <div className="text-sm text-gray-400">Heures : Minutes : Secondes</div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>✨ 14 jours gratuits (valeur 189€)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>🎁 Setup personnalisé offert (valeur 497€)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>📚 Formation VIP incluse (valeur 297€)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="text-xl px-16 py-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 group" asChild>
                  <Link href="/inscription">
                    🔥 DÉMARRER MAINTENANT
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="text-center">
                  <div className="text-sm text-gray-400">⚡ Activation immédiate</div>
                  <div className="text-sm text-gray-400">💳 Sans engagement</div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                🔒 Paiement sécurisé • 💯 Garantie 30 jours • 🇫🇷 Support français 24/7
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}