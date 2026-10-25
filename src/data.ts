import { PlanDetails } from './types';

export const WHATSAPP_NUMBER = '5511988777061';
export const WHATSAPP_DISPLAY = '(11) 98877-7061';
export const FB_PIXEL_ID = '2199931540919649';
export const YOUTUBE_SHORT_ID = '-bhBA9ozraQ';

export const PLANS: Record<string, PlanDetails> = {
  completo: {
    id: 'completo',
    title: 'PACOTE COMPLETO DE HARMONIZAÇÃO',
    subtitle: 'Para quem deseja explorar um conjunto ampliado de práticas energéticas.',
    badge: 'Popular & Abrangente',
    description: 'Além das práticas fundamentais, esta modalidade acrescenta procedimentos voltados a objetivos pessoais e à experiência familiar.',
    originalPrice: 'R$ 275,00',
    promotionalPrice: 'R$ 165,00',
    installmentText: 'em até 3x de R$ 55,00 sem juros no cartão ou via PIX à vista',
    cashPrice: 'R$ 165,00',
    ctaText: 'QUERO CONHECER O PACOTE COMPLETO',
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
      },
      {
        title: 'Harmonização Astrológica Quântica',
        description: 'Trabalho com dez arquétipos planetários, conforme a metodologia Pranion, para explorar simbolicamente temas como intelecto, autoridade, escolhas e objetivos pessoais.'
      },
      {
        title: 'Direcionamento de Objetivos',
        description: 'Prática de alinhamento energético simbólico relacionada às metas que você deseja trabalhar.'
      },
      {
        title: 'Expansão de Frequência Familiar',
        description: 'Prática energética direcionada simbolicamente à dinâmica do ambiente familiar e das relações de convívio, conforme o escopo contratado.'
      }
    ],
    extraIncluded: 'Você também recebe: os itens de limpeza, selamento e devolutiva previstos na oferta.',
    disclaimer: 'As práticas são complementares e não garantem mudanças na vida familiar, na prosperidade ou na realização de objetivos.'
  },
  vip_master: {
    id: 'vip_master',
    title: 'PACOTE MASTER DE HARMONIZAÇÃO',
    subtitle: 'Uma experiência ampliada para quem deseja conhecer o conjunto mais abrangente da Pranion.',
    badge: 'Mais Completo & Aprofundado',
    description: 'O pacote Master reúne os procedimentos dos níveis anteriores e acrescenta práticas relacionadas à vida afetiva, à intenção pessoal e ao autoconhecimento espiritual.',
    originalPrice: 'R$ 385,00',
    promotionalPrice: 'R$ 230,00',
    installmentText: 'em até 3x de R$ 76,67 sem juros no cartão ou via PIX à vista',
    cashPrice: 'R$ 230,00',
    ctaText: 'QUERO CONHECER O PACOTE MASTER',
    includes: [
      {
        title: 'Práticas completas dos níveis anteriores',
        description: 'Varredura, análise de chakras e aura, apometria radiestésica, blindagem com 6 gráficos e harmonização do campo pessoal e ambiental.'
      },
      {
        title: 'Desbloqueio de Caminhos e Ativação da Chama Trina',
        description: 'Prática simbólica que trabalha os conceitos arquetípicos de poder, sabedoria e amor incondicional.'
      },
      {
        title: 'Harmonização Astrológica Quântica Ampliada',
        description: 'Exploração minuciosa dos dez arquétipos planetários utilizados pela metodologia Pranion.'
      },
      {
        title: 'Sintonia de Relações — Soulmate Matching',
        description: 'Prática simbólica que utiliza a frequência de 639 Hz, associada à proposta de harmonização de relações e conexões afetivas.'
      },
      {
        title: 'Ajuste do Código da Vida e Healing Universal',
        description: 'Prática integrativa orientada por temas como merecimento, coragem, autoconhecimento e paz interior.'
      }
    ],
    extraIncluded: 'Você também recebe: os itens de limpeza, selamento e devolutiva previstos no pacote.',
    disclaimer: 'Esta modalidade não garante a atração de um parceiro, a reconciliação de relacionamentos, a prosperidade financeira ou mudanças específicas na vida pessoal.'
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
    description: 'Os pacotes incluem as práticas de limpeza e selamento do campo energético previstas na proposta de atendimento.',
    note: 'O conjunto de técnicas varia conforme o pacote escolhido.'
  },
  {
    step: 'ETAPA 4',
    title: 'RELATÓRIO DE DEVOLUTIVA',
    description: 'Após o atendimento, você recebe um relatório com a devolutiva do processo e orientações simples para integrar a experiência à sua rotina.',
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
    answer: 'Compare os itens das duas modalidades: o Pacote Completo reúne o conjunto ampliado de práticas voltadas a objetivos pessoais e à dimensão familiar; já o Pacote Master é o mais abrangente e aprofundado, incluindo também procedimentos dedicados à dimensão afetiva (Sintonia de Relações 639 Hz), intenção pessoal e autoconhecimento espiritual.'
  },
  {
    question: 'Receberei algum material após o atendimento?',
    answer: 'Sim. Os pacotes descritos incluem um relatório de devolutiva, conforme a modalidade contratada, com informações sobre as práticas realizadas e orientações de integração.'
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
    answer: 'O pagamento pode ser parcelado em até 3x no cartão de crédito ou à vista no PIX.'
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Você pode entrar em contato conosco pelo WhatsApp oficial (55 11 98877-7061) em caso de qualquer dúvida ou desconforto.'
  }
];
