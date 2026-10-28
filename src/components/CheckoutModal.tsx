import React, { useState } from 'react';
import { X, Check, MessageCircle, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { PlanTier } from '../types';
import { PLANS } from '../data';
import { openWhatsApp } from '../utils/whatsapp';

interface CheckoutModalProps {
  initialPlan?: PlanTier;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ initialPlan = 'essencial', onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>(initialPlan);
  const [clientName, setClientName] = useState('');
  const [notes, setNotes] = useState('');

  const currentPlan = PLANS[selectedPlan] || PLANS.essencial;

  const handleProceedToWhatsApp = () => {
    let msg = `Olá Aline! Gostaria de agendar o ${currentPlan.title} (${currentPlan.promotionalPrice}).`;
    if (clientName.trim()) {
      msg += ` Meu nome é ${clientName.trim()}.`;
    }
    if (notes.trim()) {
      msg += ` Gostaria de priorizar no atendimento: ${notes.trim()}.`;
    }
    msg += ` Poderia me informar as próximas datas disponíveis na agenda e o link de pagamento seguro?`;

    openWhatsApp(selectedPlan, msg);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1815] border border-emerald-500/40 text-stone-100 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-900/80 text-stone-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-light">
            Agendamento Consciente
          </span>
          <h3 className="text-2xl font-light font-serif-title text-stone-50">
            Confirmar Atendimento
          </h3>
          <p className="text-xs text-stone-400 font-light">
            Selecione a modalidade desejada para conversar diretamente com a Aline no WhatsApp:
          </p>
        </div>

        {/* Plan Selector Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setSelectedPlan('essencial')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              selectedPlan === 'essencial'
                ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <span className="text-[10px] uppercase tracking-wider block text-emerald-400 font-medium">
              Essencial
            </span>
            <span className="text-sm font-normal block text-stone-100 mt-1">
              R$ 182,88
            </span>
            <span className="text-[11px] text-stone-400 font-light block">
              3x de R$ 64,17
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan('vip_master')}
            className={`p-4 rounded-2xl border text-left transition-all ${
              selectedPlan === 'vip_master'
                ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <span className="text-[10px] uppercase tracking-wider block text-emerald-300 font-medium">
              Master (Mais Completo)
            </span>
            <span className="text-sm font-normal block text-stone-100 mt-1">
              R$ 256,30
            </span>
            <span className="text-[11px] text-stone-400 font-light block">
              3x de R$ 89,67
            </span>
          </button>
        </div>

        {/* Selected Plan Details Recap */}
        <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800/90 mb-5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400">Modalidade:</span>
            <span className="text-stone-100 font-normal">{currentPlan.title}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400">Investimento promocional:</span>
            <span className="text-emerald-400 font-medium text-base">{currentPlan.promotionalPrice}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400">Condições:</span>
            <span className="text-stone-300">5% off no PIX ou em até 3x no cartão</span>
          </div>
        </div>

        {/* Optional Form Inputs */}
        <div className="space-y-3 mb-6">
          <div>
            <label className="block text-xs text-stone-300 font-light mb-1">
              Seu Nome (opcional):
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Ex: Mariana Silva"
              className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-stone-300 font-light mb-1">
              Algum foco ou intenção que gostaria de trabalhar? (opcional):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Desacelerar pensamentos, harmonização familiar, clareza..."
              className="w-full px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <button
            onClick={handleProceedToWhatsApp}
            className="cursor-pointer w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-emerald-950/60 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>CONTINUAR NO WHATSAPP COM A ALINE</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Garantia de 7 dias e atendimento individualizado.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
