import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import { openWhatsApp } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#faf9f6] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            Tire Suas Dúvidas
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Respostas claras para você escolher com tranquilidade e transparência total.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-sm overflow-hidden transition-all hover:border-emerald-500/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-normal text-stone-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center space-y-3 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Ainda tem alguma dúvida específica sobre o seu momento ou sobre a agenda?
          </p>
          <button
            onClick={() => openWhatsApp(undefined, 'Olá Aline! Tenho uma dúvida que não encontrei no FAQ da página.')}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar Conosco no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
