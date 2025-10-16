import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, TrendingUp, Users, Building2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-medium mb-6">
              Témoignages clients
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              La confiance de 453 dirigeants français
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez comment ProspectPro transforme concrètement les résultats commerciaux
            </p>
          </div>

          {/* Étude de cas principale */}
          <Card className="mb-12 border-2 border-emerald-200 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">TechnoServices : +284 000€ de CA en 6 mois</h3>
                  <p className="text-emerald-100">Conseil IT • 15 employés • Région Parisienne</p>
                </div>
                <Badge className="bg-white text-emerald-600 px-4 py-2 font-bold text-lg">
                  ROI +847%
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Témoignage */}
                <div className="space-y-6">
                  <Quote className="h-8 w-8 text-emerald-600" />
                  <blockquote className="text-lg text-slate-700 leading-relaxed">
                    "Avant ProspectPro, je passais mes week-ends à chercher des prospects sur LinkedIn. 
                    Mes commerciaux perdaient 60% de leur temps en prospection manuelle. 
                    <br /><br />
                    Aujourd'hui, notre pipeline est constamment alimenté avec des prospects qualifiés. 
                    Mon équipe peut se concentrer sur la vente pure. Résultat : on a doublé notre effectif 
                    et on ouvre une seconde agence à Lyon."
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-lg">MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Marie Cartier</div>
                      <div className="text-slate-600">CEO & Fondatrice</div>
                      <div className="text-sm text-slate-500">Cliente depuis Mars 2024</div>
                    </div>
                  </div>
                </div>

                {/* Métriques */}
                <div className="space-y-6">
                  <h4 className="font-bold text-lg text-slate-900">Résultats mesurés :</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">Temps prospection/semaine</span>
                        <div className="text-right">
                          <div className="text-sm text-slate-500 line-through">20h avant</div>
                          <div className="text-emerald-600 font-bold">2h maintenant</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">Taux de conversion</span>
                        <div className="text-right">
                          <div className="text-sm text-slate-500 line-through">2.8% avant</div>
                          <div className="text-emerald-600 font-bold">26.3% maintenant</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">CA mensuel</span>
                        <div className="text-right">
                          <div className="text-sm text-slate-500 line-through">45 000€ avant</div>
                          <div className="text-emerald-600 font-bold">92 300€ maintenant</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg border-2 border-emerald-200">
                    <div className="text-center">
                      <div className="text-emerald-900 font-bold text-xl">+284 000€</div>
                      <div className="text-emerald-700 text-sm">de CA supplémentaire en 6 mois</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Autres témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="border border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "ROI de +420% dès les 6 premiers mois. L'investissement s'est amorti en 3 semaines. 
                  Mes commerciaux sont enfin efficaces."
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">Jean Moreau</div>
                    <div className="text-sm text-slate-600">CEO, Solutions IT</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      28 employés
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "Fini les fichiers Excel et la prospection à l'aveugle. Mon pipeline de 2.3M€ 
                  est maintenant constamment alimenté."
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-purple-100 text-purple-700 font-semibold">AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">Anne Leclerc</div>
                    <div className="text-sm text-slate-600">DG, Conseil RH</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      12 employés
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "Interface pensée pour les dirigeants, pas pour les techniciens. 
                  45 nouveaux clients en 4 mois avec un investissement minimal."
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">PD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">Pierre Dubois</div>
                    <div className="text-sm text-slate-600">Fondateur, Menuiserie</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      8 employés
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats de satisfaction */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">4.9/5</div>
                <div className="text-sm text-slate-600">Note moyenne</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">97%</div>
                <div className="text-sm text-slate-600">Clients satisfaits</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">89%</div>
                <div className="text-sm text-slate-600">Recommandent</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">6 mois</div>
                <div className="text-sm text-slate-600">Durée moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}