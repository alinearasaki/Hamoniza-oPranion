import React from 'react';
import { Compass, Sparkles, Shield, WifiOff, FileText, CheckCircle2, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ProposalSection: React.FC = () => {
  return (
    <section id="proposta" className="w-full bg-[#0f1f1a] text-stone-100 py-18 md:py-24 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-light bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Metodologia Integrativa
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-50 tracking-tight font-serif-title">
            Conheça a proposta da Pranion
          </h2>

          <p className="text-base sm:text-lg text-emerald-300/90 font-light">
            Um cuidado individualizado, respeitando seu momento e sua individualidade.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-7 rounded-3xl bg-[#142620] border border-emerald-900/40 shadow-lg hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-stone-100">
                Radiestesia & Radiônica
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                A Pranion reúne práticas de radiestesia, radiônica, geometria sagrada e outras técnicas energéticas em uma abordagem sutil e integrativa.
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-light mt-4 pt-4 border-t border-emerald-900/40">
              Metodologia estruturada
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-[#142620] border border-emerald-900/40 shadow-lg hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-stone-100">
                100% a Distância e Offline
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Tudo acontece a distância, sem a necessidade de você permanecer conectado(a) ou interromper suas atividades durante o procedimento.
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-light mt-4 pt-4 border-t border-emerald-900/40">
              Praticidade e conforto total
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-[#142620] border border-emerald-900/40 shadow-lg hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-stone-100">
                Limpeza, Selamento & Devolutiva
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                O processo inclui análise radiestésica, aplicação das práticas, selamento do campo e um relatório completo com orientações de integração.
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-light mt-4 pt-4 border-t border-emerald-900/40">
              Relatório individualizado
            </span>
          </div>

        </div>

        {/* Ethical Transparency Box & CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0d1a16] via-[#10221c] to-[#0d1a16] border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-normal text-stone-100">
                Compromisso com o cuidado ético e consciente
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                A proposta é oferecer uma experiência de cuidado complementar, sem criar dependência, prometer soluções instantâneas ou substituir os cuidados profissionais de que você possa precisar.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp(undefined, 'Olá! Gostaria de agendar o meu atendimento na Pranion via WhatsApp.')}
            className="cursor-pointer shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg shadow-emerald-950/50 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Agende agora: WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
