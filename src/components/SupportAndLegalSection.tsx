import React from 'react';
import { MessageCircle, ShieldCheck, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const SupportAndLegalSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="suporte" className="w-full bg-[#08100e] text-stone-300 py-16 md:py-20 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Row: Acessibilidade + Garantia Incondicional de 7 Dias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Acessibilidade e Compatibilidade */}
          <div className="p-7 rounded-3xl bg-[#0e1c17] border border-emerald-900/40 space-y-4">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-light block">
              Acessibilidade & Formato
            </span>
            <h3 className="text-xl font-light text-stone-100 font-serif-title">
              Condições do Atendimento
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              A harmonização energética da Pranion é realizada a distância, com agendamento prévio. Para contratar, você precisa apenas ter acesso ao WhatsApp para receber o seu relatório de devolutiva.
            </p>

            <ul className="space-y-2 text-xs text-stone-400 font-light pt-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Formato:</strong> atendimento individual e offline.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Agendamento:</strong> conforme disponibilidade da agenda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Participação durante a sessão:</strong> não é necessária.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Entrega da devolutiva:</strong> conforme o prazo informado no agendamento.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Prazo de acesso:</strong> não se aplica como acesso a curso ou plataforma.</span>
              </li>
            </ul>

            <p className="text-[11px] text-stone-500 font-light pt-2">
              Antes de confirmar, verifique as condições específicas do pacote escolhido.
            </p>
          </div>

          {/* Garantia Incondicional de 7 Dias (Substituindo o quadro de suporte) */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-[#11241e] via-[#0e1c17] to-[#0a1512] border-2 border-emerald-500/40 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-light block">
                    Segurança & Risco Zero
                  </span>
                  <h3 className="text-xl font-light text-stone-100 font-serif-title">
                    Garantia Incondicional de 7 Dias
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                A sua tranquilidade e confiança vêm em primeiro lugar. Se por qualquer motivo você se arrepender da contratação no prazo de até <strong>7 dias</strong> a contar da confirmação do pagamento, basta nos enviar uma mensagem no WhatsApp.
              </p>

              <div className="p-4 rounded-2xl bg-stone-950/80 border border-emerald-900/60 text-xs text-stone-300 font-light space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-normal">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Devolução de 100% do seu investimento</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Sem burocracias, justificativas ou constrangimentos. O reembolso é realizado de forma simples e transparente.
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp(undefined, 'Olá Aline! Gostaria de tirar dúvidas sobre o atendimento da Pranion.')}
              className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-medium transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950" />
              <span>Conversar com a Aline no WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Aviso Importante (Disclaimer Legal & Ético) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1512] border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-stone-300 text-xs font-medium uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Aviso Importante</span>
          </div>

          <p className="text-xs text-stone-400 font-light leading-relaxed">
            A harmonização energética apresentada é uma prática integrativa complementar. Termos como chakras, aura, frequência, radiestesia, radiônica e anatomia sutil pertencem à abordagem utilizada pela metodologia e não devem ser interpretados como diagnósticos médicos ou medições clínicas validadas.
          </p>

          <p className="text-xs text-stone-400 font-light leading-relaxed">
            As experiências individuais podem variar. Não há garantia de efeitos específicos sobre saúde física ou mental, prosperidade, relacionamentos ou acontecimentos externos.
          </p>

          <p className="text-xs text-stone-300 font-light">
            A Pranion não substitui acompanhamento médico, psicológico ou terapêutico convencional.
          </p>
        </div>

        {/* Rodapé Oficial */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-base font-light text-stone-100 tracking-wider font-serif-title uppercase">
                PRANION — Harmonização Energética Integrativa
              </span>
            </div>
            <p className="text-xs text-stone-500 font-light">
              Um espaço para conhecer práticas energéticas, cultivar o autocuidado e dedicar atenção à sua jornada pessoal.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-light">
            <span>© {currentYear} Pranion. Todos os direitos reservados.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
