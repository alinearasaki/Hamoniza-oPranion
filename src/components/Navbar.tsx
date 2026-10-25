import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  onOpenCheckout: (plan?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09120f]/90 backdrop-blur-md border-b border-emerald-950/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-800 to-emerald-600 p-0.5 flex items-center justify-center shadow-md shadow-emerald-950/40">
            <div className="w-full h-full rounded-full bg-[#0c1815] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-light tracking-widest text-stone-100 uppercase font-serif-title">
              PRANION
            </span>
            <span className="text-[10px] tracking-wider uppercase text-emerald-400/90 font-light">
              Harmonização Energética Integrativa
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-light text-stone-300">
          <button onClick={() => scrollTo('proposta')} className="hover:text-emerald-400 transition-colors cursor-pointer">
            A Proposta
          </button>
          <button onClick={() => scrollTo('como-funciona')} className="hover:text-emerald-400 transition-colors cursor-pointer">
            Como Funciona
          </button>
          <button onClick={() => scrollTo('pacotes')} className="hover:text-emerald-400 transition-colors cursor-pointer">
            Pacotes & Preços
          </button>
          <button onClick={() => scrollTo('video')} className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Vídeo Explicativo
          </button>
          <button onClick={() => scrollTo('sobre')} className="hover:text-emerald-400 transition-colors cursor-pointer">
            Sobre Aline
          </button>
          <button onClick={() => scrollTo('faq')} className="hover:text-emerald-400 transition-colors cursor-pointer">
            Dúvidas
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => openWhatsApp()}
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-medium tracking-wide transition-all shadow-md shadow-emerald-950/60 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => openWhatsApp()}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-stone-950 text-xs font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-stone-950" />
            <span>WhatsApp</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white rounded-lg"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09120f] border-b border-stone-800 px-6 py-5 space-y-4 text-sm font-light text-stone-300">
          <div className="flex flex-col space-y-3">
            <button onClick={() => scrollTo('proposta')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              A Proposta
            </button>
            <button onClick={() => scrollTo('como-funciona')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              Como Funciona
            </button>
            <button onClick={() => scrollTo('pacotes')} className="text-left py-1 text-emerald-400 font-medium">
              Pacotes & Valores
            </button>
            <button onClick={() => scrollTo('video')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              Vídeo de Apresentação
            </button>
            <button onClick={() => scrollTo('sobre')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              Quem está por trás da Pranion
            </button>
            <button onClick={() => scrollTo('faq')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              Perguntas Frequentes
            </button>
            <button onClick={() => scrollTo('suporte')} className="text-left py-1 text-stone-200 hover:text-emerald-400">
              Suporte & Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
