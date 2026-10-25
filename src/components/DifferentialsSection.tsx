import React from 'react';
import { UserCheck, Globe, Layers, FileSpreadsheet, Smile, MessageCircle } from 'lucide-react';
import { DIFFERENTIALS } from '../data';
import { openWhatsApp } from '../utils/whatsapp';

export const DifferentialsSection: React.FC = () => {
  const icons = [
    <UserCheck className="w-5 h-5 text-emerald-800" />,
    <Globe className="w-5 h-5 text-emerald-800" />,
    <Layers className="w-5 h-5 text-emerald-800" />,
    <FileSpreadsheet className="w-5 h-5 text-emerald-800" />,
    <Smile className="w-5 h-5 text-emerald-800" />
  ];

  return (
    <section className="w-full bg-[#faf8f5] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60">
            Diferenciais Pranion
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title">
            O que diferencia a Pranion?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Não é apenas escolher uma sessão. É conhecer a proposta e encontrar a modalidade que faz sentido para você.
          </p>
        </div>

        {/* 5 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-4">
                  {icons[index]}
                </div>

                <h3 className="text-lg font-normal text-stone-900 mb-2">
                  {diff.title}
                </h3>

                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-emerald-800 font-medium tracking-wide uppercase">
                Garantia de Respeito & Clareza
              </div>
            </div>
          ))}
        </div>

        {/* Conversion CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => openWhatsApp(undefined, 'Olá! Gostaria de conversar no WhatsApp para conhecer os diferenciais da Pranion.')}
            className="cursor-pointer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com a Pranion no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
