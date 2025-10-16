import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Database, Zap, BarChart3, Shield } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <Badge className="bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium mb-6">
              Solution complète
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une plateforme intégrée qui remplace 6 outils différents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Base de données */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Base de données certifiée</CardTitle>
                    <CardDescription className="text-slate-600">2.1M entreprises françaises</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Accédez aux informations de contact vérifiées de tous les décideurs français. 
                  Mise à jour quotidienne via l'INSEE et nos partenaires certifiés.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Emails vérifiés (98.7%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Téléphones directs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Données financières</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Signaux d'affaires</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automation */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Automation intelligente</CardTitle>
                    <CardDescription className="text-slate-600">Séquences multi-canal</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Créez des parcours de prospection qui s'adaptent automatiquement aux comportements 
                  de vos prospects. Email, SMS, LinkedIn et relances optimisées.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Templates sectoriels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>A/B testing automatique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Personnalisation IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Scoring engagement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <BarChart3 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Analytics avancés</CardTitle>
                    <CardDescription className="text-slate-600">Prédictions IA</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Tableau de bord exécutif avec prédictions de chiffre d'affaires, 
                  identification des prospects les plus prometteurs et recommandations d'actions.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>ROI en temps réel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Prédictions CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Benchmark sectoriel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Alertes opportunités</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RGPD */}
            <Card className="group hover:shadow-lg transition-all duration-300 border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Conformité RGPD</CardTitle>
                    <CardDescription className="text-slate-600">100% sécurisé</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Toutes vos données sont hébergées en France avec une conformité RGPD native. 
                  Gestion automatique des consentements et audit de sécurité trimestriel.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Hébergement France</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Conformité native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Audit de sécurité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Support juridique</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Substitution des outils */}
          <div className="mt-16 bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-6">
              Remplace vos outils actuels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm text-slate-600">
              <div className="space-y-1">
                <div className="font-medium">CRM</div>
                <div className="text-xs">Pipedrive, HubSpot</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Email Marketing</div>
                <div className="text-xs">Mailchimp, Sendinblue</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Enrichissement</div>
                <div className="text-xs">Hunter.io, Clearbit</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Automation</div>
                <div className="text-xs">Zapier, Make</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Analytics</div>
                <div className="text-xs">Google Analytics</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">LinkedIn</div>
                <div className="text-xs">Sales Navigator</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Badge className="bg-emerald-100 text-emerald-800">
                Économie moyenne : 2 340€/mois
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}