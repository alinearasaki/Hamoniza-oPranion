import React from 'react';
import { Check, Star, Sparkles, ArrowRight, ShieldAlert, CreditCard } from 'lucide-react';
import { PLANS } from '../data';
import { PlanTier } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface PackagesSectionProps {
  onOpenCheckout: (plan: PlanTier) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCheckout }) => {
  const completo = PLANS.completo;
  const master = PLANS.vip_master;

  return (
    <section id="pacotes" className="w-full bg-[#07100e] text-stone-100 py-20 md:py-28 border-b border-stone-800 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-light bg-emerald-950/90 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Valores & Ofertas Promocionais
          </span>

          <h2 className="text-3xl sm:text-5xl font-light text-stone-50 tracking-tight font-serif-title">
            Conheça os pacotes de harmonização
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Escolha a experiência que mais combina com o tipo de atendimento que você deseja conhecer.
          </p>
          
          <div className="inline-flex items-center gap-2 text-xs text-emerald-400/90 bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-900/60 mt-2">
            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pagamento parcelado em até 3x no cartão ou à vista no PIX</span>
          </div>
        </div>

        {/* 2 Main Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* Card 1: PACOTE COMPLETO DE HARMONIZAÇÃO */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0d1815] border border-stone-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-light">
                  Experiência Ampliada
                </span>
                <span className="text-xs font-light text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {completo.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-stone-100 mb-2 font-serif-title">
                {completo.title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-400/90 font-light mb-3">
                {completo.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-300/80 font-light leading-relaxed mb-6">
                {completo.description}
              </p>

              {/* Price Box */}
              <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800/90 mb-7">
                <span className="text-xs text-stone-400 line-through block">
                  De {completo.originalPrice}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-stone-400 font-light">por</span>
                  <span className="text-3xl sm:text-4xl font-light text-emerald-400">
                    {completo.promotionalPrice}
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-light block mt-1">
                  ou em até 3x de R$ 55,00 no cartão ou via PIX
                </span>
              </div>

              {/* Includes List */}
              <div className="space-y-4 mb-7">
                <h4 className="text-xs font-medium uppercase tracking-wider text-stone-300 border-b border-stone-800 pb-2">
                  O que está incluído:
                </h4>

                <div className="space-y-3.5">
                  {completo.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-normal text-stone-200">
                          {inc.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-stone-400 font-light leading-relaxed">
                          {inc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Included */}
              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800/80 mb-6 text-xs text-stone-300 font-light flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{completo.extraIncluded}</span>
              </div>

            </div>

            {/* CTA & Disclaimer */}
            <div className="pt-4 border-t border-stone-800">
              <button
                id="cta-pacote-completo"
                onClick={() => openWhatsApp('completo')}
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-100 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-md active:scale-98"
              >
                <span>{completo.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-stone-400 font-light mt-3 leading-relaxed">
                {completo.disclaimer}
              </p>
            </div>
          </div>

          {/* Card 2: PACOTE MASTER DE HARMONIZAÇÃO */}
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#12231e] via-[#0f1d19] to-[#0a1412] border-2 border-emerald-500/50 flex flex-col justify-between hover:border-emerald-400 transition-all shadow-2xl relative">
            
            {/* Top Recommended Badge */}
            <div className="absolute -top-3.5 right-6 sm:right-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500 text-stone-950 text-xs font-semibold uppercase tracking-wider shadow-md">
                <Star className="w-3.5 h-3.5 fill-stone-950" />
                {master.badge}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-light">
                  Mais Completo & Aprofundado
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2 font-serif-title">
                {master.title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-300 font-light mb-3">
                {master.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-300/90 font-light leading-relaxed mb-6">
                {master.description}
              </p>

              {/* Price Box */}
              <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 mb-7">
                <span className="text-xs text-stone-400 line-through block">
                  De {master.originalPrice}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-stone-300 font-light">por</span>
                  <span className="text-3xl sm:text-4xl font-light text-emerald-300">
                    {master.promotionalPrice}
                  </span>
                </div>
                <span className="text-xs text-emerald-400/90 font-light block mt-1">
                  ou em até 3x de R$ 76,67 no cartão ou via PIX
                </span>
              </div>

              {/* Includes List */}
              <div className="space-y-4 mb-7">
                <h4 className="text-xs font-medium uppercase tracking-wider text-emerald-300 border-b border-emerald-900/60 pb-2">
                  O que está incluído:
                </h4>

                <div className="space-y-3.5">
                  {master.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-normal text-white">
                          {inc.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-stone-300 font-light leading-relaxed">
                          {inc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Included */}
              <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/30 mb-6 text-xs text-emerald-200 font-light flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{master.extraIncluded}</span>
              </div>

            </div>

            {/* CTA & Disclaimer */}
            <div className="pt-4 border-t border-emerald-900/60">
              <button
                id="cta-pacote-master"
                onClick={() => openWhatsApp('vip_master')}
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-emerald-950/60 active:scale-98"
              >
                <span>{master.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-stone-400 font-light mt-3 leading-relaxed">
                {master.disclaimer}
              </p>
            </div>
          </div>

        </div>

        {/* Footnote reassurance */}
        <div className="text-center text-xs text-stone-400 font-light">
          Envie uma mensagem no WhatsApp para nós que enviaremos o link de pagamento seguro e combinaremos a data do seu atendimento.
        </div>

      </div>
    </section>
  );
};
