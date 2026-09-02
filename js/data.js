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
    modalidades: 15,
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

  // ===================================================================
  // MUSEU — memória viva da AAAGV (página museu.html)
  // Cada item é um "bloco de memória": um depoimento de alguém que
  // marcou a atlética + um conjunto de fotos de grupo. Na página os
  // blocos se alternam: depoimento de um lado, fotos do outro, depois
  // o inverso, e assim por diante. A ordem NÃO precisa ser cronológica —
  // pode ser por tema, por marco, por pessoa. É só a ordem desta lista.
  //
  // TODO (conteúdo real):
  //   - era        : rótulo curto do bloco (um tema ou um marco; 1–3 palavras)
  //   - titulo     : frase que resume aquela memória
  //   - depoimento : texto na íntegra da pessoa homenageada
  //   - autor/cargo: quem falou e em que gestão
  //   - fotoAutor  : caminho para um retrato (opcional; sem isso usa as iniciais)
  //   - fotos      : 2 ou 3 por bloco. "legenda" é a descrição que aparece
  //                  embaixo da foto e no zoom (clique na foto para ampliar).
  //   Coloque os arquivos em images/museu/ com os nomes usados abaixo.
  // ===================================================================
  museu: [
    {
      era: 'A origem',
      titulo: 'Quando tudo começou',
      depoimento: 'Quando a gente começou, não existia estrutura nenhuma. Era um grupo de estudantes que queria representar a FGV nas quadras e topou construir algo que durasse. A AAAGV nasceu dessa teimosia — e da certeza de que o esporte une gente que a sala de aula separa.',
      autor: 'Nome Sobrenome',
      cargo: 'Presidência — gestão de fundação',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/origem-1.jpg', legenda: 'Primeira diretoria da AAAGV' },
        { src: 'images/museu/origem-2.jpg', legenda: 'Time que estreou representando a FGV' },
        { src: 'images/museu/origem-3.jpg', legenda: 'Confraternização dos fundadores' }
      ]
    },
    {
      era: 'A consolidação',
      titulo: 'De time de amigos a instituição',
      depoimento: 'Foi nessa época que a atlética deixou de ser só um time de amigos e virou instituição. Criamos processo seletivo, calendário de treinos, uniforme de verdade. A convivência continuou sendo o coração de tudo, mas passamos a ganhar tanto dentro quanto fora de quadra.',
      autor: 'Nome Sobrenome',
      cargo: 'Diretoria de Esportes',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/consolidacao-1.jpg', legenda: 'Diretoria reunida na FGV' },
        { src: 'images/museu/consolidacao-2.jpg', legenda: 'Aniversário da atlética' },
        { src: 'images/museu/consolidacao-3.jpg', legenda: 'Bastidores de uma competição universitária' }
      ]
    },
    {
      era: 'Dentro e fora de quadra',
      titulo: 'As conquistas que viraram história',
      depoimento: 'Ninguém esquece a final que a gente virou nos últimos dois minutos, com a arquibancada toda de preto e amarelo. Mas o que fica mesmo são as pessoas: caloura que virou capitã, capitão que virou presidente. A AAAGV forma gente.',
      autor: 'Nome Sobrenome',
      cargo: 'Presidência',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/conquistas-1.jpg', legenda: 'Torcida da AAAGV em final universitária' },
        { src: 'images/museu/conquistas-2.jpg', legenda: 'Elenco reunido após o título' },
        { src: 'images/museu/conquistas-3.jpg', legenda: 'Comemoração com a comunidade GV' }
      ]
    },
    {
      era: 'O legado hoje',
      titulo: 'Entregar melhor do que recebemos',
      depoimento: 'Recebemos a atlética de mão em mão, com quase quarenta anos de história nas costas. Nosso trabalho é entregar para a próxima gestão algo melhor do que recebemos — e manter viva a memória de todo mundo que chegou aqui antes da gente.',
      autor: 'Nome Sobrenome',
      cargo: 'Presidência — gestão atual',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/hoje-1.jpg', legenda: 'A diretoria atual da AAAGV' },
        { src: 'images/museu/hoje-2.jpg', legenda: 'Atletas das modalidades de hoje' }
      ]
    }
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
    { slug: 'atletismo', nome: 'Atletismo', generos: ['Misto'], foto: 'images/modalidades/atletismo.jpg' },
    { slug: 'basquete', nome: 'Basquete', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/basquete.jpg' },
    { slug: 'beach-tennis', nome: 'Beach Tennis', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/beach-tennis.jpg' },
    { slug: 'futebol-de-campo', nome: 'Futebol de Campo', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futebol-de-campo.jpg' },
    { slug: 'futsal', nome: 'Futsal', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futsal.jpg' },
    { slug: 'handebol', nome: 'Handebol', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/handebol.jpg' },
    { slug: 'jiu-jitsu', nome: 'Jiu-Jitsu', generos: ['Masculino'], foto: 'images/modalidades/jiu-jitsu.jpg' },
    { slug: 'judo', nome: 'Judô', generos: ['Masculino'], foto: 'images/modalidades/judo.jpg' },
    { slug: 'natacao', nome: 'Natação', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/natacao.jpg' },
    { slug: 'rugby', nome: 'Rugby', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/rugby.jpg' },
    { slug: 'tenis-de-campo', nome: 'Tênis de Campo', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/tenis-de-campo.jpg' },
    { slug: 'tenis-de-mesa', nome: 'Tênis de Mesa', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/tenis-de-mesa.jpg' },
    { slug: 'volei', nome: 'Vôlei', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei.jpg' },
    { slug: 'volei-de-praia', nome: 'Vôlei de Praia', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei-praia.jpg' },
    { slug: 'xadrez', nome: 'Xadrez', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/xadrez.jpg' }
  ],

  // TODO: preencher com o elenco real de cada modalidade/gênero. Enquanto uma
  // combinação modalidade+gênero não estiver aqui, o site mostra atletas de exemplo.
  atletas: {
    basquete: {
      Feminino: [
        { nome: 'Manu Abrão', foto: 'images/manu-abrao.jpg' }
      ]
    }
  },

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
