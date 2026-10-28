import { PlanDetails } from './types';

export const WHATSAPP_NUMBER = '5511988777061';
export const WHATSAPP_DISPLAY = '(11) 98877-7061';
export const FB_PIXEL_ID = '2199931540919649';
export const YOUTUBE_SHORT_ID = '-bhBA9ozraQ';

export const PLANS: Record<string, PlanDetails> = {
  essencial: {
    id: 'essencial',
    title: 'PACOTE ESSENCIAL DE HARMONIZAÇÃO',
    subtitle: 'Para quem deseja vivenciar as práticas fundamentais e personalizadas de harmonização energética.',
    badge: 'Essencial & Equilíbrio',
    description: 'Um cuidado profundo com práticas integrativas dedicadas ao alinhamento do campo pessoal, desbloqueio e proteção sutil.',
    originalPrice: 'R$ 275,00',
    promotionalPrice: 'R$ 182,88',
    installmentText: 'à vista no PIX (com 5% de desconto) ou em até 3x de R$ 64,17 no cartão',
    cashPrice: 'R$ 182,88',
    ctaText: 'QUERO O PACOTE ESSENCIAL',
    includes: [
      {
        title: 'Protocolo de Varredura e Desobstrução',
        description: 'Prática radiestésica voltada à investigação, dentro da metodologia adotada, de aspectos que a abordagem interpreta como interferências energéticas.'
      },
      {
        title: 'Análise da Anatomia Sutil',
        description: 'Mapeamento radiestésico dos sete chakras principais e leitura da aura conforme os critérios da metodologia.'
      },
      {
        title: 'Tratamento Multidimensional — Apometria Radiestésica',
        description: 'Aplicação das práticas previstas para trabalhar simbolicamente os corpos sutis e registros abordados pela metodologia.'
      },
      {
        title: 'Radiestesia Gráfica de Blindagem',
        description: 'Aplicação dos seis gráficos utilizados no protocolo: Tetragrammaton, Nove Círculos, SCAP, Desimpregnador, Anti-Magia e Escudo Protetor.'
      },
      {
        title: 'Harmonização do Campo',
        description: 'Práticas energéticas voltadas ao campo pessoal e à harmonização de ambientes residenciais ou profissionais, conforme o protocolo contratado.'
      },
      {
        title: 'Desbloqueio de Caminhos e Ativação da Chama Trina',
        description: 'Prática simbólica baseada nos conceitos de poder, sabedoria e amor incondicional.'
      }
    ],
    extraIncluded: 'Você também recebe: limpeza, selamento, alinhamento, harmonização e o relatório de devolutiva.',
    disclaimer: 'As práticas são complementares e não garantem diagnósticos médicos ou alterações em acontecimentos externos.'
  },
  vip_master: {
    id: 'vip_master',
    title: 'PACOTE MASTER DE HARMONIZAÇÃO',
    subtitle: 'Uma experiência ampliada para quem deseja conhecer o conjunto mais abrangente da Pranion.',
    badge: 'Mais Completo & Aprofundado',
    description: 'O pacote Master reúne todos os procedimentos do nível Essencial e acrescenta práticas exclusivas de astrologia quântica, dinâmica familiar, sintonia de relações e autoconhecimento.',
    originalPrice: 'R$ 385,00',
    promotionalPrice: 'R$ 256,30',
    installmentText: 'à vista no PIX (com 5% de desconto) ou em até 3x de R$ 89,67 no cartão',
    cashPrice: 'R$ 256,30',
    ctaText: 'QUERO O PACOTE MASTER',
    includes: [
      {
        title: 'Práticas completas do Pacote Essencial',
        description: 'Varredura, análise de chakras e aura, apometria radiestésica, blindagem com 6 gráficos e harmonização do campo pessoal e ambiental.'
      },
      {
        title: 'Desbloqueio de Caminhos e Ativação da Chama Trina',
        description: 'Prática simbólica que trabalha os conceitos arquetípicos de poder, sabedoria e amor incondicional.'
      },
      {
        title: 'Harmonização Astrológica Quântica',
        description: 'Trabalho detalhado com os dez arquétipos planetários para explorar simbolicamente temas como intelecto, autoridade, escolhas e metas pessoais.'
      },
      {
        title: 'Expansão de Frequência Familiar',
        description: 'Prática energética direcionada simbolicamente à dinâmica do ambiente familiar e à harmonia das relações de convívio.'
      },
      {
        title: 'Sintonia de Relações (Frequência de 639 Hz)',
        description: 'Prática integrativa associada à frequência de 639 Hz, voltada ao alinhamento harmônico de todas as relações interpessoais, afetivas e de convivência do cliente.'
      },
      {
        title: 'Ajuste do Código da Vida e Healing Universal',
        description: 'Prática integrativa orientada por temas como merecimento, coragem, autoconhecimento e paz interior.'
      }
    ],
    extraIncluded: 'Você também recebe: limpeza profunda, selamento, alinhamento, harmonização e o relatório de devolutiva completo.',
    disclaimer: 'Esta modalidade é uma prática integrativa complementar e não substitui acompanhamento médico, psicológico ou terapêutico.'
  }
};

export const SITUATION_ITEMS = [
  'Sente-se emocionalmente sobrecarregado(a) pela rotina.',
  'Tem dificuldade para desacelerar os pensamentos e relaxar.',
  'Percebe que está vivendo no automático, distante de si.',
  'Deseja dedicar mais atenção à sua vida interior.',
  'Busca um momento de acolhimento, equilíbrio e reconexão.',
  'Tem interesse em práticas integrativas voltadas ao campo energético.'
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'ETAPA 1',
    title: 'AGENDAMENTO',
    description: 'Entre em contato para escolher seu pacote e combinar o melhor dia para o atendimento, conforme a disponibilidade da agenda.',
    note: 'Você não precisa ficar online durante a realização do procedimento.'
  },
  {
    step: 'ETAPA 2',
    title: 'ANÁLISE E PRÁTICAS ENERGÉTICAS',
    description: 'O atendimento utiliza radiestesia para a análise proposta e radiônica para a aplicação das práticas de harmonização previstas no pacote.',
    note: 'Conforme a modalidade escolhida, podem ser utilizadas mesas radiônicas, gráficos, geometria sagrada e outras ferramentas da metodologia Pranion.'
  },
  {
    step: 'ETAPA 3',
    title: 'LIMPEZA E SELAMENTO',
    description: 'Os pacotes incluem as práticas de limpeza, selamento, alinhamento e harmonização do campo energético previstas na proposta de atendimento.',
    note: 'O conjunto de técnicas varia conforme o pacote escolhido.'
  },
  {
    step: 'ETAPA 4',
    title: 'RELATÓRIO DE DEVOLUTIVA',
    description: 'Após o atendimento, você recebe um relatório completo de sua situação energética com orientações de integração para sua rotina.',
    note: 'Caso seja pertinente à abordagem utilizada, o relatório poderá indicar a possibilidade de um novo atendimento, sem obrigação de continuidade.'
  }
];

export const EXPERIENCE_INTENTIONS = [
  'Reservar um momento de atenção a si mesmo(a).',
  'Cultivar uma rotina com mais pausas e autocuidado.',
  'Explorar práticas de relaxamento e reconexão interior.',
  'Desenvolver uma percepção mais atenta das próprias necessidades.',
  'Conhecer uma abordagem energética integrativa.',
  'Receber uma devolutiva individual sobre as práticas realizadas.',
  'Incluir o cuidado com ambientes e o campo energético na experiência, conforme o pacote escolhido.'
];

export const DIFFERENTIALS = [
  {
    title: 'Atendimento individual',
    description: 'A experiência é organizada de acordo com o pacote escolhido e a metodologia utilizada.'
  },
  {
    title: 'Realização a distância',
    description: 'Você agenda o atendimento sem precisar acompanhar o procedimento em tempo real.'
  },
  {
    title: 'Diferentes níveis de atendimento',
    description: 'Há opções com conjuntos distintos de práticas, permitindo comparar o escopo e escolher conforme suas preferências e possibilidades.'
  },
  {
    title: 'Relatório de devolutiva',
    description: 'Você recebe um registro do atendimento e orientações de integração previstas na proposta.'
  },
  {
    title: 'Liberdade de escolha',
    description: 'Você pode conhecer as opções disponíveis antes de decidir, sem precisar contratar todos os níveis ou assumir uma continuidade automática.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Preciso estar online durante o atendimento?',
    answer: 'Não. O atendimento é realizado a distância e de forma offline. Você combina o dia com antecedência e não precisa permanecer conectado(a) durante a realização.'
  },
  {
    question: 'Como faço para agendar?',
    answer: 'Entre em contato pelo WhatsApp oficial indicado na página, escolha o pacote desejado e consulte a disponibilidade de agenda.'
  },
  {
    question: 'Quanto tempo dura o atendimento?',
    answer: 'O tempo de realização pode variar conforme a modalidade e os procedimentos incluídos. Consulte a previsão para o pacote escolhido antes de agendar.'
  },
  {
    question: 'Como sei qual pacote escolher?',
    answer: 'Compare os itens das duas modalidades: o Pacote Essencial reúne as práticas fundamentais de varredura, mapeamento dos chakras, apometria radiestésica, blindagem gráfica e harmonização de campo; já o Pacote Master é o mais abrangente e aprofundado, incluindo também a harmonização astrológica, a expansão familiar, a sintonia de relações (639 Hz) e o ajuste do código da vida.'
  },
  {
    question: 'Receberei algum material após o atendimento?',
    answer: 'Sim. Os pacotes descritos incluem um relatório completo de sua situação energética com orientações de integração para sua rotina, conforme a modalidade contratada.'
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'Não existe um número universal de sessões. A necessidade de um novo atendimento não pode ser determinada por uma medida energética como diagnóstico médico. Se desejar continuar, você poderá avaliar a proposta de um novo atendimento de maneira independente e voluntária.'
  },
  {
    question: 'A harmonização energética substitui terapia ou tratamento médico?',
    answer: 'Não. As práticas são complementares e não substituem acompanhamento médico, psicológico ou outros cuidados profissionais indicados. Não interrompa tratamentos ou medicamentos por causa de um atendimento energético.'
  },
  {
    question: 'O atendimento garante prosperidade, relacionamentos ou abertura de caminhos?',
    answer: 'Não. As práticas relacionadas a esses temas fazem parte da abordagem integrativa da Pranion, mas não garantem acontecimentos externos ou resultados específicos.'
  },
  {
    question: 'Posso escolher o pacote de acordo com meu orçamento?',
    answer: 'Sim. A proposta é permitir que você compare as opções e escolha conforme suas preferências e possibilidades financeiras, sem obrigação de contratar o nível mais abrangente.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'O pagamento pode ser feito à vista no PIX com 5% de desconto promocional ou parcelado em até 3x no cartão de crédito.'
  }
];
