import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Target, Euro, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header élégant */}
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Analyse comparative
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Votre prospection actuelle vous coûte{' '}
              <span className="text-red-600">89 200€ par an</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Étude menée sur 247 dirigeants de TPE/PME révélant l'impact financier réel 
              de la prospection manuelle vs automatisée
            </p>
          </div>

          {/* Comparaison en grille */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Côté AVANT */}
            <div className="relative">
              <div className="absolute -top-3 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Situation actuelle
              </div>
              <Card className="pt-8 border-2 border-red-100 bg-gradient-to-b from-red-50/50 to-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Temps consacré</div>
                          <div className="text-sm text-slate-600">par semaine</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">16.3h</div>
                        <div className="text-xs text-slate-500">recherche + relances</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Taux de conversion</div>
                          <div className="text-sm text-slate-600">email → RDV</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">3.2%</div>
                        <div className="text-xs text-slate-500">prospection manuelle</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Euro className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Coût d'opportunité</div>
                          <div className="text-sm text-slate-600">manque à gagner</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">73 600€</div>
                        <div className="text-xs text-slate-500">par an</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white text-center">
                    <div className="text-lg font-semibold mb-1">Impact financier total</div>
                    <div className="text-3xl font-bold">-89 200€/an</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Côté APRÈS */}
            <div className="relative">
              <div className="absolute -top-3 left-6 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Avec ProspectPro
              </div>
              <Card className="pt-8 border-2 border-emerald-100 bg-gradient-to-b from-emerald-50/50 to-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Temps consacré</div>
                          <div className="text-sm text-slate-600">par semaine</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">2.1h</div>
                        <div className="text-xs text-slate-500">supervision + closing</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Taux de conversion</div>
                          <div className="text-sm text-slate-600">email → RDV</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">24.7%</div>
                        <div className="text-xs text-slate-500">IA + personnalisation</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Euro className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">CA supplémentaire</div>
                          <div className="text-sm text-slate-600">nouveaux clients</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">+284 000€</div>
                        <div className="text-xs text-slate-500">par an</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white text-center">
                    <div className="text-lg font-semibold mb-1">Bénéfice total généré</div>
                    <div className="text-3xl font-bold">+347 000€/an</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Insight central */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white border-2 border-amber-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-4 mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
                <div className="text-left">
                  <div className="text-sm text-slate-600">Différentiel de performance</div>
                  <div className="text-3xl font-bold text-slate-900">+436 200€</div>
                </div>
              </div>
              <p className="text-slate-600 max-w-md">
                C'est l'écart moyen constaté entre la prospection manuelle 
                et ProspectPro sur une année complète
              </p>
            </div>
          </div>

          {/* Métriques de transformation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <Card className="text-center border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">87%</div>
                <div className="text-sm text-slate-600 mb-2">de temps économisé</div>
                <div className="text-xs text-slate-500">14.2h récupérées par semaine</div>
              </CardContent>
            </Card>

            <Card className="text-center border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">×7.7</div>
                <div className="text-sm text-slate-600 mb-2">amélioration conversion</div>
                <div className="text-xs text-slate-500">de 3.2% à 24.7% de réussite</div>
              </CardContent>
            </Card>

            <Card className="text-center border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">72h</div>
                <div className="text-sm text-slate-600 mb-2">premier contrat signé</div>
                <div className="text-xs text-slate-500">temps moyen constaté</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA finale équilibrée */}
          <div className="bg-slate-900 rounded-2xl p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Chaque semaine de retard vous coûte 1 723€
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Découvrez comment 453 dirigeants ont transformé leur prospection en avantage concurrentiel. 
              Analyse personnalisée gratuite en 30 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 shadow-lg"
              >
                Obtenir mon analyse gratuite
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <div className="text-slate-400 text-sm">
                <div className="font-medium mb-1">Prochains créneaux disponibles :</div>
                <div>Aujourd'hui 14h • Demain 10h • Jeudi 16h</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-slate-400 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Analyse personnalisée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Estimation ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}