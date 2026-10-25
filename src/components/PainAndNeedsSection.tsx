import React from 'react';
import { Sparkles, Check, ArrowRight, Heart } from 'lucide-react';
import { SITUATION_ITEMS } from '../data';
import { openWhatsApp } from '../utils/whatsapp';

export const PainAndNeedsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#faf9f5] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-emerald-700" />
            Autocuidado & Consciência
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title leading-snug">
            Você sente que precisa de um momento para si?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            A rotina pode ocupar tanto espaço que acabamos deixando nosso próprio bem-estar em segundo plano.
          </p>
        </div>

        {/* Situations Grid */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
              Talvez você se identifique com alguma destas situações:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {SITUATION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <p className="text-sm sm:text-base text-stone-700 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Empathy Box & Invitation */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-stone-50 border border-emerald-200/70 shadow-sm text-center space-y-5">
          <p className="text-lg sm:text-xl text-stone-800 font-light italic font-serif-title leading-relaxed">
            "Às vezes, o que desejamos é simplesmente abrir espaço para olhar para nós mesmos com mais atenção."
          </p>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Você não precisa esperar por um momento perfeito para começar a cuidar do seu bem-estar. A <strong className="font-normal text-stone-900">Pranion</strong> oferece uma experiência individual de harmonização energética para quem deseja incluir esse cuidado em sua jornada pessoal.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openWhatsApp(undefined, 'Olá Aline! Li a página da Pranion e sinto que preciso de um momento para cuidar da minha energia. Como podemos agendar?')}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md active:scale-95"
            >
              <span>Conversar com a Pranion no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
