/* =====================================================================
   AAAGV — dados do site (sem banco de dados por enquanto)
   Tudo aqui é conteúdo de exemplo. Procure por "TODO" para saber
   exatamente o que precisa ser substituído por informação real
   (fotos, nomes, números, contatos, resultados).
   ===================================================================== */

const SITE_DATA = {

  fundacao: 1987,

  // TODO: atualizar com os números reais da AAAGV
  stats: {
    modalidades: 19,
    atletas: 500,
    titulos: 40,
    eventos: 35
  },

  // TODO: preencher a linha do tempo com marcos reais da história da AAAGV
  timeline: [
    { ano: 1987, texto: 'Fundação da AAAGV, para representar os estudantes da FGV através do esporte.' },
    { ano: 1990, texto: '[Adicionar marco histórico deste período]' },
    { ano: 2000, texto: '[Adicionar marco histórico deste período]' },
    { ano: 2017, texto: '[Adicionar marco histórico deste período]' },
    { ano: 2026, texto: '[Adicionar marco histórico deste período]' }
  ],

  // TODO: preencher com os nomes reais de cada gestão. Estrutura de exemplo,
  // uma entrada por ano — edite "pessoas" mantendo o mesmo formato.
  retrospectivaGestoes: [
    { ano: 2015, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2016, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2017, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2018, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2019, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2020, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2021, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2022, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2023, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2024, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2025, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] },
    { ano: 2026, pessoas: [{ nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' }, { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }] }
  ],

  // TODO: colar o texto definitivo de cada área (aba Governança da planilha EAP)
  areasDescricao: [
    { area: 'Diretoria de Esportes', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Esportes]' },
    { area: 'Diretoria de Marketing', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Marketing]' },
    { area: 'Diretoria de Eventos', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Eventos]' },
    { area: 'Diretoria de Produtos', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Produtos]' },
    { area: 'Diretoria de Parcerias / Captação de Recursos', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Parcerias / Captação de Recursos]' },
    { area: 'Diretoria de Projetos Sociais', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Projetos Sociais]' }
  ],

  // Estrutura da Gestão 2026 vigente. Ainda sem fotos — os avatares usam
  // o mesmo fallback de iniciais já usado no resto do site (preencha
  // "foto" com o caminho da imagem quando estiver disponível).
  // TODO: preencher "curso" de cada pessoa (curso na FGV) para aparecer no clique.
  organograma: {
    nivel1: [
      { cargo: 'VPE', pessoas: [{ nome: 'Fredi', curso: '[Curso]', foto: '' }], filhos: 'vpe' },
      { cargo: 'Presidente', pessoas: [{ nome: 'Papa', curso: '[Curso]', foto: '' }] },
      { cargo: 'Financeiro', pessoas: [{ nome: 'Teles', curso: '[Curso]', foto: '' }] },
      { cargo: 'VPA', pessoas: [{ nome: 'Marina', curso: '[Curso]', foto: '' }], filhos: 'vpa' }
    ],
    vpe: [
      { cargo: 'DGE', pessoas: [{ nome: 'Aisha', curso: '[Curso]', foto: '' }, { nome: 'Patrick', curso: '[Curso]', foto: '' }] }
    ],
    vpa: [
      { cargo: 'Captação', pessoas: [{ nome: 'Pistoninho', curso: '[Curso]', foto: '' }] },
      { cargo: 'Marketing', pessoas: [{ nome: 'Nay', curso: '[Curso]', foto: '' }] },
      { cargo: 'Social', pessoas: [{ nome: 'Aisha', curso: '[Curso]', foto: '' }] },
      { cargo: 'Produtos & Eventos', pessoas: [{ nome: 'Gi Lois', curso: '[Curso]', foto: '' }] }
    ]
  },

  // TODO: conferir a lista completa e real de modalidades da AAAGV
  modalidades: [
    { slug: 'futsal', nome: 'Futsal', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futsal.jpg' },
    { slug: 'basquete', nome: 'Basquete', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/basquete.jpg' },
    { slug: 'volei', nome: 'Vôlei', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei.jpg' },
    { slug: 'handebol', nome: 'Handebol', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/handebol.jpg' },
    { slug: 'futebol-society', nome: 'Futebol Society', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futebol-society.jpg' },
    { slug: 'volei-de-praia', nome: 'Vôlei de Praia', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei-praia.jpg' },
    { slug: 'handebol-de-areia', nome: 'Handebol de Areia', generos: ['Misto'], foto: 'images/modalidades/handebol-areia.jpg' },
    { slug: 'rugby', nome: 'Rugby', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/rugby.jpg' },
    { slug: 'judo', nome: 'Judô', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/judo.jpg' },
    { slug: 'muay-thai', nome: 'Muay Thai', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/muay-thai.jpg' },
    { slug: 'natacao', nome: 'Natação', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/natacao.jpg' },
    { slug: 'atletismo', nome: 'Atletismo', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/atletismo.jpg' },
    { slug: 'corrida-de-rua', nome: 'Corrida de Rua', generos: ['Misto'], foto: 'images/modalidades/corrida.jpg' },
    { slug: 'tenis-de-mesa', nome: 'Tênis de Mesa', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/tenis-mesa.jpg' },
    { slug: 'beach-tennis', nome: 'Beach Tennis', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/beach-tennis.jpg' },
    { slug: 'xadrez', nome: 'Xadrez', generos: ['Misto'], foto: 'images/modalidades/xadrez.jpg' },
    { slug: 'ginastica', nome: 'Ginástica', generos: ['Feminino'], foto: 'images/modalidades/ginastica.jpg' },
    { slug: 'e-sports', nome: 'E-Sports', generos: ['Misto'], foto: 'images/modalidades/esports.jpg' },
    { slug: 'squash', nome: 'Squash', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/squash.jpg' }
  ],

  // TODO: substituir pelos jogos e resultados reais do calendário da AAAGV
  // status: "agendado" ou "finalizado"
  jogos: [
    {
      id: 1,
      adversario: 'A confirmar',
      modalidade: 'Futsal',
      genero: 'Feminino',
      data: '2026-08-29T19:00:00',
      local: 'Ginásio do Pacaembu',
      status: 'agendado'
    },
    {
      id: 2,
      adversario: 'A confirmar',
      modalidade: 'Basquete',
      genero: 'Masculino',
      data: '2026-08-23T18:00:00',
      local: 'Ginásio Ibirapuera',
      status: 'finalizado',
      placarAAAGV: 68,
      placarAdversario: 62,
      competicao: 'Economíadas — Semifinal',
      resumo: 'AAAGV vence e garante vaga na final.',
      newsId: 1
    },
    {
      id: 3,
      adversario: 'USP',
      modalidade: 'Futsal',
      genero: 'Feminino',
      data: '2026-08-25T19:00:00',
      local: 'Ginásio do Pacaembu',
      status: 'finalizado',
      placarAAAGV: 2,
      placarAdversario: 0,
      competicao: 'Campeonato Universitário',
      resumo: 'Futsal feminino vence a USP por 2 a 0 em casa.',
      newsId: 2
    },
    {
      id: 4,
      adversario: 'A confirmar',
      modalidade: 'Vôlei',
      genero: 'Feminino',
      data: '2026-08-21T20:00:00',
      local: 'Ginásio FGV',
      status: 'finalizado',
      placarAAAGV: 2,
      placarAdversario: 0,
      competicao: 'Campeonato Universitário',
      resumo: 'Equipe feminina de vôlei vence por 2 sets a 0.',
      newsId: 3
    },
    {
      id: 5,
      adversario: 'A confirmar',
      modalidade: 'Handebol',
      genero: 'Masculino',
      data: '2026-09-02T19:30:00',
      local: 'Ginásio FGV',
      status: 'agendado'
    },
    {
      id: 6,
      adversario: 'A confirmar',
      modalidade: 'Rugby',
      genero: 'Masculino',
      data: '2026-09-06T15:00:00',
      local: 'Campo Universitário',
      status: 'agendado'
    }
  ],

  // TODO: substituir por notícias reais (institucional, esporte, parcerias, social...)
  noticias: [
    {
      id: 1,
      categoria: 'Esportes',
      titulo: 'AAAGV vence e garante vaga na final do basquete masculino',
      data: '2026-08-23',
      imagem: '',
      resumo: 'Em jogo decidido nos minutos finais, equipe masculina de basquete vence por 68 a 62 e avança para a final das Economíadas.',
      corpo: [
        'Em uma partida disputada ponto a ponto, a equipe masculina de basquete da AAAGV venceu por 68 a 62 na semifinal das Economíadas e garantiu vaga na grande final da competição.',
        'O time começou o jogo pressionando forte e abriu vantagem ainda no primeiro tempo, mas viu o adversário reagir no terceiro quarto. Nos minutos finais, a AAAGV manteve a frieza nos lances livres e fechou a conta a seu favor.',
        'A final acontece em breve — fique de olho no calendário completo para não perder o próximo jogo.'
      ]
    },
  ],

  // TODO: substituir por logos e contato reais da diretoria de parcerias
  parceiros: {
    logos: [
      { nome: 'Parceiro 1', logo: '' },
      { nome: 'Parceiro 2', logo: '' },
      { nome: 'Parceiro 3', logo: '' },
      { nome: 'Parceiro 4', logo: '' },
      { nome: 'Parceiro 5', logo: '' },
      { nome: 'Parceiro 6', logo: '' }
    ],
    beneficios: [
      { icone: 'eye', titulo: 'Visibilidade', desc: 'Sua marca presente nos canais e espaços da AAAGV.' },
      { icone: 'megaphone', titulo: 'Eventos', desc: 'Ativação e presença em eventos universitários.' },
      { icone: 'share', titulo: 'Redes Sociais', desc: 'Conteúdo e comunicação para a comunidade GV.' },
      { icone: 'trophy', titulo: 'Competições', desc: 'Presença junto às equipes e torcidas.' },
      { icone: 'users', titulo: 'Atletas', desc: 'Conexão direta com atletas e estudantes.' },
      { icone: 'graduation', titulo: 'Comunidade', desc: 'Acesso a uma das maiores comunidades universitárias de São Paulo.' }
    ],
    contato: {
      nome: 'Nome Sobrenome',
      cargo: 'Diretor(a) de Captação de Recursos',
      email: 'captacao@aaagv.com.br',
      whatsapp: '5579999608780'
    }
  },

  // TODO: confirmar dados institucionais de contato e endereço
  institucional: {
    email: 'contato@aaagv.com.br',
    endereco: '[Inserir endereço da sede / FGV São Paulo]',
    telefone: '[Inserir telefone institucional]',
    instagram: '#',
    linkedin: '#',
    tiktok: '#'
  }
};
