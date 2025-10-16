import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-slate-800/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge professionnel */}
          <Badge className="bg-slate-700 text-slate-200 border-slate-600 px-6 py-2 text-sm font-medium hover:bg-slate-600 transition-colors">
            <Award className="h-4 w-4 mr-2" />
            Approuvé par +450 dirigeants français
          </Badge>
          
          {/* Headline professionnel mais impactant */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Automatisez votre prospection,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                multipliez vos ventes
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              ProspectPro transforme votre approche commerciale avec une solution d'automatisation 
              pensée pour les <strong className="text-white">dirigeants de TPE et PME françaises</strong>.
            </p>
          </div>

          {/* Métriques business discrètes */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-amber-400">+347%</div>
                <div className="text-sm text-slate-400">ROI moyen clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-amber-400">2.1M</div>
                <div className="text-sm text-slate-400">Entreprises françaises</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-amber-400">15h</div>
                <div className="text-sm text-slate-400">Temps économisé/semaine</div>
              </div>
            </div>
          </div>

          {/* CTAs équilibrés */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg shadow-lg transition-all duration-200"
            >
              Demander une démonstration
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-400 text-white hover:bg-slate-700 px-8 py-4 text-lg transition-colors"
            >
              <Play className="h-5 w-5 mr-2" />
              Voir la présentation (3min)
            </Button>
          </div>

          {/* Reassurance discrète */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 pt-4">
            <span>• Configuration en 5 minutes</span>
            <span>• Sans engagement</span>
            <span>• Support français inclus</span>
          </div>
        </div>
      </div>
    </section>
  );
}