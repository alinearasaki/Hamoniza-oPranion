import React from 'react';
import { Calendar, Cpu, ShieldCheck, FileCheck, Clock, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <Calendar className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <FileCheck className="w-5 h-5" />
  ];

  return (
    <section id="como-funciona" className="w-full bg-[#faf9f5] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Passo a Passo Transparente
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title">
            Como funciona o atendimento?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light">
            Uma experiência organizada em quatro etapas com total clareza.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {stepItem.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                </div>

                <h3 className="text-xl font-light text-stone-900 mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <p className="text-xs text-stone-500 font-light flex items-start gap-1.5">
                  <span className="text-emerald-700 font-normal">Observação:</span>
                  <span>{stepItem.note}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Duration disclaimer banner */}
        <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 flex items-center gap-3 text-xs sm:text-sm text-stone-600 font-light">
          <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            O tempo de realização pode variar conforme o pacote e os procedimentos previstos. A duração e o prazo de entrega serão informados previamente no momento do agendamento.
          </span>
        </div>

      </div>
    </section>
  );
};
