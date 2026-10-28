import { PlanTier } from '../types';
import { WHATSAPP_NUMBER } from '../data';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispatches Meta (Facebook) Pixel events safely if Pixel is installed
 */
export function trackMetaPixel(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, params);
    } catch (e) {
      console.warn('Meta Pixel tracking error:', e);
    }
  }
}

/**
 * Generates WhatsApp click-to-chat URL with pre-filled message
 */
export function getWhatsAppLink(plan?: PlanTier, customMessage?: string): string {
  let message = '';

  if (customMessage) {
    message = customMessage;
  } else if (plan === 'vip_master') {
    message = 'Olá Aline! Gostaria de agendar o Pacote MASTER de Harmonização Energética (R$ 256,30 à vista com 5% de desconto ou 3x de R$ 89,67) da Pranion e consultar as datas disponíveis na agenda.';
  } else if (plan === 'essencial') {
    message = 'Olá Aline! Gostaria de agendar o Pacote ESSENCIAL de Harmonização Energética (R$ 182,88 à vista com 5% de desconto ou 3x de R$ 64,17) da Pranion e consultar as datas disponíveis na agenda.';
  } else {
    message = 'Olá Aline! Conheci a Pranion e gostaria de tirar dúvidas sobre os pacotes de Harmonização Energética Integrativa e saber as datas disponíveis.';
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Centralized function to redirect user to WhatsApp with pixel tracking
 */
export function openWhatsApp(plan?: PlanTier, customMessage?: string) {
  const isMaster = plan === 'vip_master';
  const isEssencial = plan === 'essencial';

  trackMetaPixel('Contact', {
    content_name: isMaster
      ? 'Pacote Master de Harmonização'
      : isEssencial
      ? 'Pacote Essencial de Harmonização'
      : 'Atendimento Geral Pranion',
    content_category: 'Harmonizacao Energetica Integrativa',
    value: isMaster ? 256.30 : isEssencial ? 182.88 : 0.0,
    currency: 'BRL',
  });

  const url = getWhatsAppLink(plan, customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}
