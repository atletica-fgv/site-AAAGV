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
    modalidades: 13,
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
  // MUSEU (museu.html) — NÃO é uma linha do tempo (isso já existe no
  // "Sobre"). Aqui a atlética escolhe o que quer lembrar. Três partes:
  //
  //   1) museu   — MOMENTOS: um instante marcante + o depoimento de quem
  //                viveu. Ordem livre, por tema — nunca por ano.
  //   2) acervo  — PAPÉIS: jornais, grades de treino, cartazes que a
  //                atlética imprimiu. Recortes de arquivo; clique amplia.
  //   3) gestoes — ÁLBUNS: uma "pasta" por gestão (G11...G25). Ao clicar,
  //                abre a grade de fotos daquela gestão.
  //
  // MOMENTOS — campos:
  //   momento    : rótulo curto do instante (ex.: "A virada"); vira a
  //                marca-d'água atrás do bloco
  //   titulo     : frase que resume o momento
  //   depoimento : fala completa de quem viveu
  //   autor/cargo: quem falou e o papel dele na época
  //   fotoAutor  : retrato (opcional; sem isso usa as iniciais)
  //   fotos      : 2 a 6 por momento; "legenda" aparece embaixo e no zoom
  //   Arquivos em images/museu/ com os nomes abaixo.
  // ===================================================================
  museu: [
    {
      momento: 'A virada',
      titulo: 'O jogo que ninguém dava pela gente',
      depoimento: 'Estávamos perdendo o jogo inteiro. Nos últimos dois minutos a arquibancada levantou e a equipe virou. Ninguém que estava naquele ginásio esqueceu — e muita gente que entrou na atlética depois entrou por causa daquela noite.',
      autor: 'Nome Sobrenome',
      cargo: 'Capitã de basquete',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/momento-1-a.jpg', legenda: 'A arquibancada da AAAGV na final' },
        { src: 'images/museu/momento-1-b.jpg', legenda: 'O time comemorando a virada' },
        { src: 'images/museu/momento-1-c.jpg', legenda: 'Volta olímpica com a torcida' }
      ]
    },
    {
      momento: 'A travessia',
      titulo: 'Da seletiva ao pódio no mesmo ano',
      depoimento: 'Entrei numa seletiva sem nunca ter competido. No fim do ano estava subindo no pódio universitário. A atlética não pergunta de onde você vem — te dá o time, o treino e a camisa, e o resto é com você.',
      autor: 'Nome Sobrenome',
      cargo: 'Atleta de atletismo',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/momento-2-a.jpg', legenda: 'Primeiro treino da seletiva' },
        { src: 'images/museu/momento-2-b.jpg', legenda: 'Delegação da AAAGV na competição' }
      ]
    },
    {
      momento: 'A casa cheia',
      titulo: 'O CA lotado numa quarta qualquer',
      depoimento: 'Não era jogo, não era festa. Era um treino aberto numa quarta à noite, e o CA estava cheio. É isso que a gente tenta preservar: o lugar onde as pessoas simplesmente querem estar.',
      autor: 'Nome Sobrenome',
      cargo: 'Diretoria de Esportes',
      fotoAutor: '',
      fotos: [
        { src: 'images/museu/momento-3-a.jpg', legenda: 'Treino aberto no CA' },
        { src: 'images/museu/momento-3-b.jpg', legenda: 'Bastidores antes do treino' },
        { src: 'images/museu/momento-3-c.jpg', legenda: 'Confraternização depois' }
      ]
    }
  ],

  // GALERIA — fotos soltas de gestões passadas (museu.html).
  // Mesma estrutura da tira que se arrasta para o lado: fotos de vários
  // formatos, algumas com legenda embaixo, outras só a foto. Sem separar
  // por gestão. As primeiras entram na tira (até GALERIA_STRIP_MAX, hoje 15,
  // em js/museu.js); o resto abre no botão "Ver mais fotos".
  //   src     : caminho da foto em images/museu/galeria/  (vazio = placeholder)
  //   formato : 'retrato' | 'paisagem' | 'quadrado'  (largura do card na tira)
  //   legenda : identificação do momento (OPCIONAL). Sem legenda = só a foto.
  galeria: [
    { src: 'images/museu/galeria/01.jpg', formato: 'paisagem', legenda: 'Título do universitário de vôlei' },
    { src: 'images/museu/galeria/02.jpg', formato: 'retrato' },
    { src: 'images/museu/galeria/03.jpg', formato: 'paisagem', legenda: 'Recepção dos calouros no CA' },
    { src: 'images/museu/galeria/04.jpg', formato: 'quadrado' },
    { src: 'images/museu/galeria/05.jpg', formato: 'retrato', legenda: 'Delegação da AAAGV em viagem' },
    { src: 'images/museu/galeria/06.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/07.jpg', formato: 'retrato' },
    { src: 'images/museu/galeria/08.jpg', formato: 'quadrado', legenda: 'Treino aberto de basquete' },
    { src: 'images/museu/galeria/09.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/10.jpg', formato: 'retrato', legenda: 'Festa de aniversário da atlética' },
    { src: 'images/museu/galeria/11.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/12.jpg', formato: 'quadrado' },
    { src: 'images/museu/galeria/13.jpg', formato: 'paisagem', legenda: 'Final do campeonato universitário' },
    { src: 'images/museu/galeria/14.jpg', formato: 'retrato' },
    { src: 'images/museu/galeria/15.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/16.jpg', formato: 'retrato', legenda: 'Confraternização de fim de ano' },
    { src: 'images/museu/galeria/17.jpg', formato: 'quadrado' },
    { src: 'images/museu/galeria/18.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/19.jpg', formato: 'retrato', legenda: 'Seletiva das modalidades de quadra' },
    { src: 'images/museu/galeria/20.jpg', formato: 'paisagem' },
    { src: 'images/museu/galeria/21.jpg', formato: 'quadrado' },
    { src: 'images/museu/galeria/22.jpg', formato: 'paisagem', legenda: 'Torcida da AAAGV na arquibancada' },
    { src: 'images/museu/galeria/23.jpg', formato: 'retrato' },
    { src: 'images/museu/galeria/24.jpg', formato: 'paisagem' }
  ],

  // Texto de cada área (parágrafos separados por \n — o site quebra em <p>).
  areasDescricao: [
    { area: 'Diretoria de Esportes', texto: 'A Diretoria de Esportes tem como principal objetivo fomentar e fortalecer o esporte universitário, desenvolvendo projetos e atividades tanto dentro quanto fora da faculdade. Atuamos no suporte aos atletas para que possam participar de forma efetiva de campeonatos e competições, por meio do planejamento e organização das modalidades, gestão de quadras, contratação de técnicos e demais necessidades relacionadas à prática esportiva.\n\nAlém disso, promovemos iniciativas que valorizam e fortalecem a presença do esporte no ambiente universitário, incentivando a integração entre os alunos e, muitas vezes, criando oportunidades de interação e competição com outras instituições de ensino.' },
    { area: 'Diretoria Financeira', texto: 'A Diretoria Financeira tem como principal objetivo garantir a saúde e a sustentabilidade financeira da AAAGV, planejando e viabilizando os recursos necessários para o dia a dia e o crescimento da entidade. Atuamos diretamente na gestão do orçamento, no controle de fluxo de caixa e na viabilização dos investimentos essenciais para as modalidades esportivas, desde a compra de materiais e locação de espaços até a gestão de contratos de técnicos e prestadores de serviço.\n\nAlém disso, somos responsáveis pelo planejamento financeiro e operacional de grandes projetos e megaeventos, como a GVJADA e o Economíadas. Nosso trabalho conecta a estratégia à execução, negociando diretamente com fornecedores e parceiros para otimizar custos, fechar bons acordos e assegurar que a atlética tenha toda a estrutura necessária para competir em alto nível e integrar a comunidade universitária.' },
    { area: 'Diretoria de Marketing', texto: 'A área de Marketing tem como principal objetivo fortalecer a imagem e a identidade da AAAGV, aproximando a Atlética da comunidade estudantil. Somos responsáveis por planejar e produzir conteúdos que divulguem eventos, campeonatos, produtos, parcerias e todos os demais projetos desenvolvidos pela entidade. Por meio das redes sociais, buscamos dar visibilidade ao trabalho das diferentes áreas, valorizar nossos atletas e estimular a participação dos alunos. Assim, contribuímos para ampliar o alcance da AAAGV e consolidar sua imagem dentro e fora da FGV.' },
    { area: 'Diretoria de Eventos', texto: 'A área de Eventos tem como propósito criar experiências que aproximem os alunos e fortaleçam a vida universitária. Somos responsáveis pelo planejamento e execução de eventos, festas e ações da Atlética, como a GVJADA, acompanhando todas as etapas necessárias para a realização de cada projeto. Dessa forma, buscamos promover integração, conexão e experiências marcantes que façam parte da trajetória dos alunos na FGV.' },
    { area: 'Diretoria de Produtos', texto: 'A área de Produtos tem como propósito desenvolver e comercializar produtos que traduzam a identidade e a essência da Atlética. Atuamos em todo o processo, desde o desenvolvimento do design até a produção e comercialização, buscando fortalecer a presença da marca no dia a dia dos alunos. Dessa forma, a área contribui para aproximar a comunidade da AAAGV e para viabilizar novos projetos, iniciativas e experiências.' },
    { area: 'Diretoria de Parcerias / Captação de Recursos', texto: 'A área de Captação de Recursos e Parcerias tem como principal objetivo buscar, desenvolver e proporcionar novas parcerias para a AAAGV, contribuindo diretamente para o desenvolvimento dos nossos atletas e para o fortalecimento da entidade.\n\nAs parcerias podem assumir diferentes formatos, desde apoio financeiro e patrocínios até o fornecimento de produtos, serviços, descontos, benefícios e outras formas de colaboração. As possibilidades são amplas e podem ser adaptadas de acordo com os interesses e objetivos tanto da AAAGV quanto de cada parceiro.' },
    { area: 'Diretoria de Projetos Sociais', texto: 'A área de Responsabilidade Social tem como propósito promover iniciativas que gerem impacto positivo tanto dentro quanto fora da Atlética. Buscamos desenvolver projetos que fomentem o senso de comunidade, solidariedade e participação com a comunidade estudantil, além de estabelecer e ampliar parcerias com instituições externas. Dessa forma, procuramos utilizar o alcance da Atlética como instrumento para incentivar o engajamento social e contribuir, de maneira concreta, para a sociedade.' }
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
  // "autor" aparece no fim da matéria como "Escrito por: Nome Sobrenome".
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
      ],
      autor: 'Nome Sobrenome'
    },
    {
      id: 2,
      categoria: 'Eventos',
      titulo: 'Recepção dos calouros reúne mais de 300 estudantes no CA',
      data: '2026-08-28',
      imagem: '',
      resumo: 'A recepção da AAAGV apresentou as modalidades, abriu as inscrições para as seletivas e marcou a chegada da nova turma à atlética.',
      corpo: [
        'A AAAGV recebeu a nova turma de calouros em uma tarde no Centro Acadêmico, com apresentação de todas as modalidades, contato direto com capitães e atletas e a abertura oficial das inscrições para as seletivas do semestre.',
        'Além da parte esportiva, houve espaço para integração entre veteranos e calouros, distribuição do informativo com a grade de treinos e a agenda de eventos até o fim do ano.',
        'As seletivas começam na próxima semana. Quem não conseguiu se inscrever no dia pode procurar a Diretoria de Esportes pelas redes da atlética.'
      ],
      autor: 'Nome Sobrenome'
    },
    {
      id: 3,
      categoria: 'Parcerias',
      titulo: 'AAAGV firma nova parceria para o transporte das equipes',
      data: '2026-09-01',
      imagem: '',
      resumo: 'O acordo garante o deslocamento das equipes para jogos e competições fora de São Paulo durante toda a temporada.',
      corpo: [
        'A AAAGV anunciou uma nova parceria que passa a cobrir o transporte das equipes para jogos e competições universitárias fora da capital — uma das principais demandas dos atletas nos últimos anos.',
        'Com o acordo, a atlética reduz o custo que antes era dividido entre os próprios estudantes e ganha previsibilidade para montar o calendário da temporada.',
        'A Diretoria de Captação segue em conversas com outras marcas interessadas em apoiar o esporte universitário na FGV. Empresas que queiram conhecer as possibilidades podem falar com a área de parcerias.'
      ],
      autor: 'Nome Sobrenome'
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
      nome: 'José Eduardo',
      cargo: 'Diretor de Captação de Recursos',
      email: 'captacao@aaagv.com.br',
      whatsapp: '5511987666852'
    }
  },

  institucional: {
    email: 'atleticafgv@gmail.com',
    endereco: 'Rua Itapeva, 432 - Bela Vista, São Paulo - SP',
    instagram: 'https://www.instagram.com/jacarefgv/',
    tiktok: 'https://www.tiktok.com/@jacarefgv'
  }
};
