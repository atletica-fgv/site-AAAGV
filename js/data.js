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

  // ACERVO — materiais impressos que a atlética publicou.
  //   tipo      : Jornal / Grade de treinos / Cartaz / Convite / Ata...
  //   titulo    : nome do material
  //   referencia: gestão, ano ou "sem data" (livre)
  //   descricao : contexto — aparece no zoom
  //   imagem    : scan em images/museu/acervo/
  //   formato   : 'retrato' (jornal alto) | 'paisagem' (grade/cartaz deitado) | 'quadrado'
  acervo: [
    { tipo: 'Jornal', titulo: 'Informativo dos calouros', referencia: 'Gestão 16', descricao: 'Distribuído no primeiro dia de aula. Trazia a grade de treinos da semana de todas as modalidades e a agenda de eventos do semestre.', imagem: 'images/museu/acervo/jornal-calouros.jpg', formato: 'retrato' },
    { tipo: 'Grade de treinos', titulo: 'Semana de treinos', referencia: 'Gestão 19', descricao: 'Quadro fixado no mural do CA com dia, horário e local de cada equipe.', imagem: 'images/museu/acervo/grade-treinos.jpg', formato: 'paisagem' },
    { tipo: 'Cartaz', titulo: 'Convocação para a seletiva', referencia: 'Gestão 21', descricao: 'Divulgação da seletiva anual das modalidades, colada pelos corredores da FGV.', imagem: 'images/museu/acervo/cartaz-seletiva.jpg', formato: 'retrato' },
    { tipo: 'Jornal', titulo: 'Edição de aniversário', referencia: 'Gestão 23', descricao: 'Número especial com a história da atlética, os títulos do ano e entrevistas com ex-atletas.', imagem: 'images/museu/acervo/jornal-aniversario.jpg', formato: 'retrato' },
    { tipo: 'Cartaz', titulo: 'Chamada para a torcida', referencia: 'Gestão 18', descricao: 'Cartaz de mobilização para a final do campeonato universitário — ponto de encontro, horário e ônibus da torcida.', imagem: 'images/museu/acervo/cartaz-torcida.jpg', formato: 'retrato' },
    { tipo: 'Grade de treinos', titulo: 'Tabela de horários — 2º semestre', referencia: 'Gestão 20', descricao: 'Versão revisada da grade, com os treinos da natação e do atletismo remanejados para o período da manhã.', imagem: 'images/museu/acervo/grade-2sem.jpg', formato: 'paisagem' },
    { tipo: 'Convite', titulo: 'Convite do jantar de encerramento', referencia: 'Gestão 17', descricao: 'Convite impresso do jantar de fim de ano da atlética, entregue em mãos para atletas e ex-gestões.', imagem: 'images/museu/acervo/convite-jantar.jpg', formato: 'quadrado' },
    { tipo: 'Jornal', titulo: 'Especial de calouros — 2ª edição', referencia: 'Gestão 22', descricao: 'Segunda tiragem do informativo, com entrevistas dos capitães de cada modalidade e o calendário de amistosos.', imagem: 'images/museu/acervo/jornal-calouros-2.jpg', formato: 'retrato' },
    { tipo: 'Cartaz', titulo: 'Seletiva de vôlei e basquete', referencia: 'Gestão 24', descricao: 'Cartaz específico das seletivas de quadra, com data, local e o que levar.', imagem: 'images/museu/acervo/cartaz-quadra.jpg', formato: 'retrato' },
    { tipo: 'Ata', titulo: 'Ata de fundação (cópia)', referencia: '1987', descricao: 'Cópia digitalizada do documento de fundação da AAAGV, com as assinaturas da primeira diretoria.', imagem: 'images/museu/acervo/ata-fundacao.jpg', formato: 'retrato' },
    { tipo: 'Grade de treinos', titulo: 'Primeira grade organizada', referencia: 'Gestão 14', descricao: 'A grade de treinos mais antiga que a atlética conseguiu recuperar — feita à mão e depois datilografada.', imagem: 'images/museu/acervo/grade-antiga.jpg', formato: 'paisagem' },
    { tipo: 'Cartaz', titulo: 'Festa de aniversário da AAAGV', referencia: 'Gestão 23', descricao: 'Cartaz de divulgação da festa de aniversário, com line-up e ponto de venda de ingressos.', imagem: 'images/museu/acervo/cartaz-festa.jpg', formato: 'retrato' }
  ],

  // GESTÕES — uma pasta por gestão (G11 a G25).
  //   id      : "G25" etc.
  //   periodo : ano/intervalo (opcional; ex.: "2025")
  //   capa    : miniatura da pasta (opcional)
  //   qtd     : nº de espaços ilustrativos ENQUANTO não há fotos reais.
  //             Quando tiver as fotos, troque por:  fotos: [{ src, legenda }, ...]
  gestoes: [
    { id: 'G25', periodo: '', capa: '', qtd: 20 },
    { id: 'G24', periodo: '', capa: '', qtd: 18 },
    { id: 'G23', periodo: '', capa: '', qtd: 16 },
    { id: 'G22', periodo: '', capa: '', qtd: 15 },
    { id: 'G21', periodo: '', capa: '', qtd: 13 },
    { id: 'G20', periodo: '', capa: '', qtd: 12 },
    { id: 'G19', periodo: '', capa: '', qtd: 11 },
    { id: 'G18', periodo: '', capa: '', qtd: 10 },
    { id: 'G17', periodo: '', capa: '', qtd: 9 },
    { id: 'G16', periodo: '', capa: '', qtd: 8 },
    { id: 'G15', periodo: '', capa: '', qtd: 7 },
    { id: 'G14', periodo: '', capa: '', qtd: 6 },
    { id: 'G13', periodo: '', capa: '', qtd: 6 },
    { id: 'G12', periodo: '', capa: '', qtd: 5 },
    { id: 'G11', periodo: '', capa: '', qtd: 4 }
  ],

  // TODO: colar o texto definitivo de cada área (aba Governança da planilha EAP)
  areasDescricao: [
    { area: 'Diretoria de Esportes', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Esportes]' },
    { area: 'Diretoria de Marketing', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Marketing]' },
    { area: 'Diretoria de Eventos', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Eventos]' },
    { area: 'Diretoria de Produtos', texto: '[Colar aqui o texto da aba Governança da planilha EAP — Diretoria de Produtos]' },
    { area: 'Diretoria de Parcerias / Captação de Recursos', texto: 'A área de Captação de Recursos e Parcerias tem como principal objetivo buscar, desenvolver e proporcionar novas parcerias para a AAAGV, contribuindo diretamente para o desenvolvimento dos nossos atletas e para o fortalecimento da entidade.\n\nAs parcerias podem assumir diferentes formatos, desde apoio financeiro e patrocínios até o fornecimento de produtos, serviços, descontos, benefícios e outras formas de colaboração. As possibilidades são amplas e podem ser adaptadas de acordo com os interesses e objetivos tanto da AAAGV quanto de cada parceiro.' },
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
