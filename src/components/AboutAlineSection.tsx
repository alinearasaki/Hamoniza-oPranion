import React from 'react';
import { Award, BookOpen, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import alinePhoto from '../assets/images/aline_augusta_arasaki.png';

export const AboutAlineSection: React.FC = () => {
  const credentials = [
    'Operadora de mesas radiônicas e radiestesia integrativa',
    'Reiki Master e terapeuta de energias sutis',
    'Pós-graduanda em Psicologia Transpessoal',
    'Graduada em Administração de Empresas'
  ];

  return (
    <section id="sobre" className="w-full bg-[#f6f5f0] text-stone-900 py-18 md:py-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 bg-white group">
              <img
                src={alinePhoto}
                alt="Aline Augusta Arasaki - Criadora e Terapeuta da Pranion"
                className="w-full h-[460px] sm:h-[490px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-light block">
                  Criadora & Terapeuta Integrativa
                </span>
                <h3 className="text-xl font-light font-serif-title">
                  Aline Augusta Arasaki
                </h3>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-medium bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Quem está por trás da Pranion?
              </span>

              <h2 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight font-serif-title">
                Uma proposta que une sensibilidade, estudo e práticas energéticas.
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 font-light text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="font-normal text-stone-900">Pranion</strong> nasce da união entre sensibilidade, consciência e o estudo constante das energias sutis.
              </p>

              <p>
                Sua abordagem é voltada a pessoas que desejam explorar práticas integrativas de cuidado e dedicar mais atenção e acolhimento ao próprio bem-estar.
              </p>

              <p>
                Cada atendimento é organizado conforme o pacote escolhido, respeitando com profunda seriedade a individualidade de cada cliente e os limites éticos da proposta.
              </p>
            </div>

            {/* Qualifications Box */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                Formação & Qualificações:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manifesto Quote */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-xs sm:text-sm text-emerald-950 font-light italic leading-relaxed">
              "Acreditamos que o cuidado deve caminhar junto com a liberdade de escolha, a transparência e o respeito à individualidade."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
