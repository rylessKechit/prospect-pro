import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp,
  Shield,
  Phone
} from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-slate-800/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header section */}
          <div className="text-center mb-12">
            <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-6 py-2 text-sm font-medium mb-6">
              Rejoignez 453 dirigeants français
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Prêt à automatiser votre prospection ?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Obtenez une démonstration personnalisée avec analyse de votre secteur 
              et estimation de ROI en 30 minutes.
            </p>
          </div>

          {/* Options CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Démonstration personnalisée */}
            <Card className="bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Démonstration personnalisée</h3>
                      <p className="text-slate-400">Recommandé pour les dirigeants</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Analyse de votre secteur d'activité</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Estimation ROI personnalisée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Configuration sur mesure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Q&A avec expert commercial</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-4 text-lg"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Réserver ma démonstration
                  </Button>
                  
                  <div className="text-center text-sm text-slate-400">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Prochains créneaux : Demain 14h • Jeudi 10h
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Essai direct */}
            <Card className="bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Essai immédiat</h3>
                      <p className="text-slate-400">Pour les décideurs autonomes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Accès immédiat à la plateforme</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">100 prospects offerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Templates sectoriels prêts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">Support chat en direct</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold py-4 text-lg"
                  >
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Commencer l'essai gratuit
                  </Button>
                  
                  <div className="text-center text-sm text-slate-400">
                    14 jours gratuits • Sans carte bancaire
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Garanties et reassurance */}
          <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              Nos engagements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">100% RGPD</div>
                  <div className="text-sm text-slate-400">Hébergement France • Conformité garantie</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Support français</div>
                  <div className="text-sm text-slate-400">Équipe basée à Paris • Réponse sous 2h</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 w-12 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">ROI garanti</div>
                  <div className="text-sm text-slate-400">Remboursé si pas de résultats en 90 jours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer de contact */}
          <div className="text-center mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-400 mb-4">
              Une question ? Nos experts sont disponibles du lundi au vendredi, 9h-18h
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="tel:+33123456789" className="text-amber-400 hover:text-amber-300 transition-colors">
                📞 01 23 45 67 89
              </a>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <a href="mailto:contact@prospectpro.fr" className="text-amber-400 hover:text-amber-300 transition-colors">
                ✉️ contact@prospectpro.fr
              </a>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400">
                💬 Chat en direct disponible
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}