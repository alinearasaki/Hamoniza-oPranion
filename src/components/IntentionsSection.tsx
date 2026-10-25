import React from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';
import { EXPERIENCE_INTENTIONS } from '../data';

export const IntentionsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0c1815] text-stone-100 py-18 md:py-24 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-light bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Intenção & Espaço Pessoal
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-50 tracking-tight font-serif-title">
            O que você pode buscar nessa experiência?
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Cada pessoa vivencia as práticas integrativas de maneira individual. A experiência pode ser um convite para:
          </p>
        </div>

        {/* 7 Intentions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {EXPERIENCE_INTENTIONS.map((intention, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-[#11231d] border border-emerald-900/40 shadow-sm hover:border-emerald-500/40 transition-all flex items-start gap-3.5 ${
                idx === EXPERIENCE_INTENTIONS.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                {intention}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent ethical footnote */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#09120f] border border-stone-800/90 text-center flex items-center justify-center gap-3">
          <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            O objetivo é oferecer um espaço complementar de cuidado, sem garantir resultados específicos ou atribuir às práticas efeitos médicos comprovados.
          </p>
        </div>

      </div>
    </section>
  );
};
