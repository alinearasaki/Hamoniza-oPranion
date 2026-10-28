import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const InvitationAndChoiceSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#0a1412] text-stone-100 py-18 md:py-24 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Invitation Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#12221c] via-[#0e1a16] to-[#0a1411] border border-emerald-500/40 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-light bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Decisão Serena & Consciente
            </span>

            <h2 className="text-3xl sm:text-4xl font-light text-stone-50 tracking-tight font-serif-title">
              Está pronto(a) para conhecer sua opção?
            </h2>

            <p className="text-base sm:text-lg text-emerald-300/90 font-light leading-relaxed">
              Seu momento de cuidado pode começar com uma escolha consciente.
            </p>

            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Conheça os pacotes, compare as práticas incluídas e escolha a experiência que melhor corresponde às suas preferências e possibilidades.
            </p>
          </div>

          {/* 3 Pillars of Trust (13. Sua tranquilidade + 15. Convite sem pressa) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">
            <div className="p-6 rounded-2xl bg-[#142620]/80 border border-emerald-900/50 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-normal">
                <ShieldCheck className="w-4 h-4" />
                <span>Sua tranquilidade também importa</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Acreditamos que a confiança começa com informações claras. Antes de contratar, você poderá conhecer o conteúdo de cada pacote, as condições de pagamento e a garantia incondicional de 7 dias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#142620]/80 border border-emerald-900/50 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-normal">
                <HeartHandshake className="w-4 h-4" />
                <span>Um convite sem prazos artificiais</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Não é necessário decidir por impulso. Você pode conhecer a proposta, assistir ao vídeo, comparar os pacotes e escolher quando se sentir verdadeiramente confortável.
              </p>
            </div>
          </div>

          {/* CTA Box (16. Escolha sua experiência Pranion) */}
          <div className="pt-4 max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-light text-stone-100 font-serif-title">
              Escolha sua experiência Pranion
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Seu próximo passo começa com informação e liberdade de escolha. Explore as opções disponíveis e descubra qual pacote corresponde ao tipo de experiência que você deseja conhecer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                id="cta-invite-whatsapp"
                onClick={() => openWhatsApp(undefined, 'Olá Aline! Gostaria de escolher meu pacote de harmonização energética na Pranion.')}
                className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg shadow-emerald-950/60 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>QUERO ESCOLHER MEU PACOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('pacotes')}
                className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs sm:text-sm font-light border border-stone-700/80 transition-colors"
              >
                <span>Rever Tabela de Pacotes</span>
              </button>
            </div>

            <p className="text-xs text-stone-400 font-light pt-2">
              Envie um WhatsApp para nós que enviaremos o link de pagamento seguro e confirmaremos a data na agenda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
