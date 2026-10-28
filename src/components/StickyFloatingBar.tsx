import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { PlanTier } from '../types';

interface StickyFloatingBarProps {
  onOpenCheckout: (plan?: PlanTier) => void;
}

export const StickyFloatingBar: React.FC<StickyFloatingBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Acesso rápido para agendamento" className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#08120f]/95 backdrop-blur-md border-t border-emerald-900/60 shadow-2xl transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        <div className="hidden sm:flex items-center gap-2 text-stone-200 text-xs font-light">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Harmonização Energética a Distância • Pacotes a partir de 3x R$ 64,17 ou R$ 182,88 à vista</span>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <span className="sm:hidden text-xs text-stone-300 font-light truncate">
            Pranion Harmonização
          </span>
          
          <button
            id="sticky-whatsapp-btn"
            onClick={() => openWhatsApp()}
            className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs sm:text-sm font-medium transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>AGENDAR NO WHATSAPP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
