import React from 'react';
import { Check, Star, ArrowRight, HelpCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const PackageComparisonSection: React.FC = () => {
  const tiers = [
    {
      name: 'Pacote Essencial',
      badge: 'Harmonização Fundamental',
      price: 'R$ 182,88',
      installments: '3x de R$ 64,17',
      focus: 'Para quem deseja vivenciar as práticas fundamentais de investigação radiestésica, apometria, blindagem e desbloqueio pessoal.',
      features: [
        'Protocolo de Varredura e Desobstrução',
        'Mapeamento dos 7 Chakras e Leitura da Aura',
        'Tratamento Multidimensional — Apometria Radiestésica',
        'Radiestesia Gráfica de Blindagem (6 gráficos de proteção)',
        'Harmonização do Campo pessoal e ambiental',
        'Desbloqueio de Caminhos e Ativação da Chama Trina',
        'Limpeza, Selamento, Alinhamento e Harmonização',
        'Relatório de Devolutiva individual'
      ],
      actionText: 'Escolher Pacote Essencial',
      planId: 'essencial' as const,
      isPopular: false
    },
    {
      name: 'Pacote Master',
      badge: 'Mais Completo & Aprofundado',
      price: 'R$ 256,30',
      installments: '3x de R$ 89,67',
      focus: 'Para quem deseja conhecer o conjunto mais abrangente da Pranion, incluindo procedimentos dedicados à harmonia das relações e do ambiente familiar.',
      features: [
        'Tudo incluso no Pacote Essencial',
        'Desbloqueio de Caminhos e Chama Trina Aprofundada',
        'Harmonização Astrológica Quântica (10 arquétipos)',
        'Expansão de Frequência Familiar (convivência e dinâmica)',
        'Sintonia de Relações (Frequência de 639 Hz para todas as relações)',
        'Ajuste do Código da Vida e Healing Universal',
        'Limpeza profunda, Selamento, Alinhamento e Relatório Completo'
      ],
      actionText: 'Escolher Pacote Master',
      planId: 'vip_master' as const,
      isPopular: true
    }
  ];

  return (
    <section id="comparativo" className="w-full bg-[#ffffff] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            Guia de Escolha Comparativo
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title">
            Qual pacote combina com você?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Compare o que cada modalidade inclui e escolha com liberdade a experiência ideal para o seu momento.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-7 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-emerald-50/70 via-white to-white border-emerald-500/70 shadow-xl relative'
                  : 'bg-stone-50/90 border-stone-200 shadow-md hover:border-emerald-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    tier.isPopular
                      ? 'bg-emerald-600 text-white flex items-center gap-1'
                      : 'bg-stone-200 text-stone-800'
                  }`}>
                    {tier.isPopular && <Star className="w-3 h-3 fill-white" />}
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-stone-900 mb-1 font-serif-title">
                  {tier.name}
                </h3>

                <div className="mb-4 pt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-normal text-emerald-800">{tier.price}</span>
                    <span className="text-xs text-stone-500 font-light">à vista (PIX 5% off)</span>
                  </div>
                  <span className="text-xs text-stone-500 block mt-0.5">ou em até {tier.installments} no cartão</span>
                </div>

                <div className="pt-3 border-t border-stone-200/80 space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide block mb-1">
                      Finalidade Principal:
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {tier.focus}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide block mb-2">
                      Principais Práticas:
                    </span>
                    <ul className="space-y-2">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-stone-600 font-light">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => openWhatsApp(tier.planId)}
                  className={`w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-98 ${
                    tier.isPopular
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <span>{tier.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation text */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Leia a descrição completa de cada pacote, confira o investimento e escolha a modalidade que faz sentido para você.
          </p>

          <button
            onClick={() => openWhatsApp()}
            className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium transition-all shadow-md active:scale-95"
          >
            <span>ESCOLHA SEU PACOTE VIA WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
