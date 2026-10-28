import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Play, ShieldCheck, Heart } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import heroImage from '../assets/images/aline_meditando.png';

interface HeroSectionProps {
  onOpenCheckout: (plan?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#0a1411] text-stone-100 overflow-hidden pt-10 pb-18 md:pt-16 md:pb-24 border-b border-stone-800/80">
      {/* Subtle organic ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-950/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs tracking-wider uppercase font-light">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>PRANION • HARMONIZAÇÃO ENERGÉTICA INTEGRATIVA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Copy & High Conversion Triggers */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-stone-50 leading-[1.2] tracking-tight font-serif-title">
              Um momento para cuidar da sua energia, reconectar-se consigo e cultivar mais equilíbrio.
            </h1>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-stone-300/90 font-light leading-relaxed">
                Conheça a <strong className="font-normal text-stone-100">harmonização energética integrativa da Pranion</strong>: um atendimento individual, realizado a distância, com práticas personalizadas de radiestesia, radiônica e harmonização do campo energético.
              </p>

              <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                Uma experiência pensada para quem deseja desacelerar, dedicar atenção ao próprio bem-estar e explorar práticas energéticas de acordo com seu momento e suas necessidades.
              </p>
            </div>

            {/* Direct Conversion CTA Box */}
            <div className="pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111f1a] to-[#0c1613] border border-emerald-500/30 shadow-2xl max-w-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-800/80">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-400 block font-normal">
                      Atendimento Personalizado
                    </span>
                    <span className="text-sm font-light text-stone-200">
                      Disponibilidade sob consulta na agenda
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-stone-400 line-through block">De R$ 275,00</span>
                    <span className="text-xl sm:text-2xl font-light text-emerald-300">
                      A partir de R$ 182,88
                    </span>
                    <span className="text-[11px] text-stone-400 block font-light">
                      ou em até 3x de R$ 64,17
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    id="hero-whatsapp-cta"
                    onClick={() => openWhatsApp()}
                    className="cursor-pointer group flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-950/60 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-stone-950" />
                    <span>AGENDAR PELO WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => scrollTo('pacotes')}
                    className="cursor-pointer flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 text-xs font-light border border-stone-700/80 transition-colors"
                  >
                    <span>Ver Pacotes</span>
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Atendimento seguro & confidencial
                  </span>
                  <span>3x no cartão ou PIX (5% off)</span>
                </div>
              </div>
            </div>

            {/* Official Copy Trust Tagline */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-emerald-400/90 font-light tracking-wide">
              <span>Atendimento online</span>
              <span className="text-stone-600">•</span>
              <span>Individual</span>
              <span className="text-stone-600">•</span>
              <span>Realizado a distância</span>
            </div>

          </div>

          {/* Right Column: Visual Imagery & Video Teaser */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-800/90 bg-[#101b18] group">
              <img
                src={heroImage}
                alt="Aline Augusta Arasaki meditando em serenidade - Pranion Harmonização Energética"
                className="w-full h-[440px] sm:h-[460px] object-cover object-top group-hover:scale-103 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#09120f] via-transparent to-transparent opacity-80" />

              {/* Bottom floating teaser pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#09120f]/90 backdrop-blur-md border border-stone-800 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-medium text-emerald-400 block">
                    Vídeo com a Criadora
                  </span>
                  <span className="text-[11px] text-stone-300 font-light">
                    Entenda a proposta em 60 segundos
                  </span>
                </div>

                <button
                  onClick={() => scrollTo('video')}
                  className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-medium transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-stone-950" />
                  <span>Assistir</span>
                </button>
              </div>
            </div>

            {/* Micro quote below card */}
            <p className="mt-3 text-center text-xs text-stone-400 font-light italic max-w-sm">
              "Abra espaço para olhar para si com mais atenção, sem pressa e no seu próprio ritmo."
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
