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

  // TODO: substituir por nomes, fotos e cargos reais da gestão vigente
  diretoriaExecutiva: [
    { nome: 'Nome Sobrenome', cargo: 'Presidente', foto: '' },
    { nome: 'Nome Sobrenome', cargo: 'Vice-Presidente', foto: '' }
  ],

  diretorias: [
    { area: 'Diretoria de Esportes', pessoas: ['Nome Sobrenome', 'Nome Sobrenome'] },
    { area: 'Diretoria de Marketing', pessoas: ['Nome Sobrenome'] },
    { area: 'Diretoria de Captação de Recursos', pessoas: ['Nome Sobrenome'] },
    { area: 'Diretoria de Projetos Sociais', pessoas: ['Nome Sobrenome'] }
  ],

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
    {
      id: 2,
      categoria: 'Esportes',
      titulo: 'Futsal feminino vence a USP por 2 a 0',
      data: '2026-08-25',
      imagem: '',
      resumo: 'Equipe feminina de futsal venceu a USP por 2 a 0 diante da torcida no Pacaembu.',
      corpo: [
        'A equipe feminina de futsal da AAAGV venceu a USP por 2 a 0 em partida disputada no Ginásio do Pacaembu, com boa presença de torcida.',
        'O resultado mantém a equipe na briga pelas primeiras posições do campeonato universitário.'
      ]
    },
    {
      id: 3,
      categoria: 'Esportes',
      titulo: 'Vôlei feminino vence por 2 sets a 0',
      data: '2026-08-21',
      imagem: '',
      resumo: 'Equipe feminina de vôlei venceu com tranquilidade no Ginásio FGV.',
      corpo: [
        'Jogando em casa, a equipe feminina de vôlei da AAAGV venceu por 2 sets a 0, com atuação sólida em quadra.'
      ]
    },
    {
      id: 4,
      categoria: 'Institucional',
      titulo: 'AAAGV apresenta a gestão 2026',
      data: '2026-02-10',
      imagem: '',
      resumo: 'Nova diretoria assume com o compromisso de fortalecer esporte, eventos e projetos sociais na FGV.',
      corpo: [
        'A AAAGV apresentou oficialmente a diretoria que conduz a atlética ao longo de 2026, reunindo as áreas de Esportes, Marketing, Eventos, Produtos, Parcerias e Projetos Sociais.',
        'O novo time reforça o compromisso de manter viva a tradição de quase quatro décadas da entidade, ampliando a integração entre os cursos da FGV São Paulo.'
      ]
    },
    {
      id: 5,
      categoria: 'Parcerias',
      titulo: 'AAAGV anuncia novos parceiros para a temporada',
      data: '2026-03-15',
      imagem: '',
      resumo: 'Novas marcas se juntam à comunidade GV através do esporte e dos eventos da atlética.',
      corpo: [
        'A AAAGV fechou novas parcerias para a temporada, ampliando a presença de marcas junto à comunidade acadêmica em eventos, competições e redes sociais.',
        'Quer ser um parceiro? Fale com a diretoria de Captação de Recursos pela página inicial do site.'
      ]
    },
    {
      id: 6,
      categoria: 'Social',
      titulo: 'Projeto social da AAAGV leva esporte a alunos da rede pública',
      data: '2026-04-20',
      imagem: '',
      resumo: 'Ação de projetos sociais aproxima estudantes da FGV de crianças e jovens da comunidade.',
      corpo: [
        'A diretoria de Projetos Sociais da AAAGV realizou mais uma edição de sua ação com escolas da rede pública, levando atividades esportivas e voluntários da comunidade GV.'
      ]
    },
    {
      id: 7,
      categoria: 'Eventos',
      titulo: 'Maior evento do calendário da AAAGV bate recorde de público',
      data: '2026-05-30',
      imagem: '',
      resumo: 'Edição deste ano reuniu milhares de estudantes em celebração à tradição preto e amarela.',
      corpo: [
        'O principal evento do calendário da AAAGV reuniu milhares de estudantes da FGV e de outras instituições, celebrando quase quatro décadas de história.'
      ]
    },
    {
      id: 8,
      categoria: 'Conquistas',
      titulo: 'AAAGV conquista título em competição universitária',
      data: '2026-06-12',
      imagem: '',
      resumo: 'Mais um título é somado à história da atlética.',
      corpo: [
        'Mais uma equipe da AAAGV subiu ao lugar mais alto do pódio em competição universitária, reforçando a tradição vencedora da entidade.'
      ]
    },
    {
      id: 9,
      categoria: 'Social',
      titulo: 'AAAGV leva autodefesa feminina para dentro da FGV com atletas de MMA',
      data: '2026-08-20',
      imagem: '',
      resumo: 'Ação da diretoria de Projetos Sociais reúne lutadoras e lutadores para ensinar noções de autodefesa às meninas da comunidade GV.',
      corpo: [
        'A AAAGV promoveu mais uma edição do seu projeto de autodefesa feminina, dessa vez com a presença de atletas de MMA que vieram compartilhar técnicas básicas de defesa pessoal com as meninas da comunidade GV.',
        'Durante a atividade, as participantes aprenderam movimentos simples de esquiva e escape, além de trocarem experiências com os atletas convidados sobre disciplina, confiança e segurança no dia a dia.',
        'A ação faz parte da agenda contínua da diretoria de Projetos Sociais da AAAGV, que busca levar iniciativas de impacto para dentro e fora da FGV.'
      ]
    }
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
