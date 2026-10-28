export type PlanTier = 'essencial' | 'vip_master';

export interface PlanFeature {
  title: string;
  description: string;
}

export interface PlanDetails {
  id: PlanTier;
  title: string;
  subtitle: string;
  badge?: string;
  originalPrice: string;
  promotionalPrice: string;
  installmentText: string;
  cashPrice?: string;
  ctaText: string;
  description: string;
  includes: PlanFeature[];
  extraIncluded?: string;
  disclaimer: string;
}

export interface ConsultationFormData {
  name: string;
  whatsapp: string;
  email?: string;
  mainFocus?: string;
  selectedPlan: PlanTier;
  notes?: string;
}
