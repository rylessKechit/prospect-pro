import React from 'react';

export default function StatsSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">2.1M+</div>
              <div className="text-sm text-slate-600">Entreprises françaises en base</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">453</div>
              <div className="text-sm text-slate-600">Clients actifs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">87%</div>
              <div className="text-sm text-slate-600">Taux d'enrichissement</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">24.7%</div>
              <div className="text-sm text-slate-600">Conversion email → RDV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}