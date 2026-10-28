import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainAndNeedsSection } from './components/PainAndNeedsSection';
import { ProposalSection } from './components/ProposalSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { IntentionsSection } from './components/IntentionsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { PackagesSection } from './components/PackagesSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { AboutAlineSection } from './components/AboutAlineSection';
import { PackageComparisonSection } from './components/PackageComparisonSection';
import { InvitationAndChoiceSection } from './components/InvitationAndChoiceSection';
import { FaqSection } from './components/FaqSection';
import { SupportAndLegalSection } from './components/SupportAndLegalSection';
import { StickyFloatingBar } from './components/StickyFloatingBar';
import { CheckoutModal } from './components/CheckoutModal';
import { PlanTier } from './types';

export function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<PlanTier>('essencial');

  const handleOpenCheckout = (plan: PlanTier = 'essencial') => {
    setSelectedPlanForModal(plan);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a1411] text-stone-100 flex flex-col selection:bg-emerald-500 selection:text-stone-950">
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      <main className="flex-1 flex flex-col">
        {/* Dobra 1: Fundo Escuro Nobre */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* Bloco 2: Fundo Claro Acolhedor (Alto Contraste) */}
        <PainAndNeedsSection />

        {/* Bloco 3: Fundo Verde Floresta Profundo (Metodologia e os 4 pilares) */}
        <ProposalSection />

        {/* Bloco 4: Fundo Claro Pérola (As 4 Etapas) */}
        <HowItWorksSection />

        {/* Bloco 5: Fundo Místico Esmeralda (O que buscar na experiência) */}
        <IntentionsSection />

        {/* Bloco 6: Fundo Areia / Linho Claro (Diferenciais Pranion) */}
        <DifferentialsSection />

        {/* Bloco 7: Fundo Escuro de Alta Conversão com os Pacotes (Essencial & Master) */}
        <PackagesSection onOpenCheckout={handleOpenCheckout} />

        {/* Bloco 8: Fundo Slate Emerald com o Vídeo da Apresentação da Criadora */}
        <VideoShowcaseSection />

        {/* Bloco 9: Fundo Linho Acolhedor Sobre a Aline Augusta Arasaki */}
        <AboutAlineSection />

        {/* Bloco 10: Fundo Branco com a Matriz de Comparação (Separado do Bloco 7, refrescando a decisão) */}
        <PackageComparisonSection />

        {/* Bloco 11: Convite Consciente, Liberdade de Escolha & Sem Pressa */}
        <InvitationAndChoiceSection />

        {/* Bloco 12: Fundo Claro com Perguntas Frequentes */}
        <FaqSection />

        {/* Bloco 13: Garantia Incondicional de 7 Dias, Acessibilidade e Rodapé */}
        <SupportAndLegalSection />
      </main>

      {/* Floating Sticky Conversion Bar */}
      <StickyFloatingBar onOpenCheckout={handleOpenCheckout} />

      {/* Interactive Quick Checkout Modal */}
      {checkoutModalOpen && (
        <CheckoutModal
          initialPlan={selectedPlanForModal}
          onClose={() => setCheckoutModalOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
