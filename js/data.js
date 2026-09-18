/* =====================================================================
   AAAGV — dados do site (sem banco de dados por enquanto)
   Tudo aqui é conteúdo de exemplo. Procure por "TODO" para saber
   exatamente o que precisa ser substituído por informação real
   (fotos, nomes, números, contatos, resultados).
   ===================================================================== */

const SITE_DATA = {

  fundacao: 1987,

  stats: {
    modalidades: 15,
    atletas: 450,
    economiadas: 2
  },

  timeline: [
    { ano: '1987', titulo: 'O começo', texto: 'Antes da atlética, o esporte na FGV era descentralizado e, a partir de 1987, com o Eduardo Quilici, essa história mudou. A AAAGV foi fundada e os atletas da FGV passaram a ter um nome próprio para vestir e defender. Os primeiros anos foram os mais duros: montar times, desenhar uniformes e correr atrás de dinheiro para conseguir competir. É onde a maioria das histórias como essa morre. A nossa não morreu.' },
    { ano: '1989', titulo: 'AAAGV prova do que é capaz', texto: 'A atlética tinha dois anos e estava quebrada. Um aluno de 19 anos assumiu as finanças, colocou tudo em ordem e a AAAGV seguiu para enfrentar a FEA-USP: três dias de disputa, 27 modalidades, organização inteiramente feita por alunos. No mesmo ano, encaramos o Mackenzie e o Jacaré ganhou vida, com as cores que se tornaram nossas: preto e amarelo.' },
    { ano: '1991', titulo: 'O nascimento das Economíadas', texto: 'Duas faculdades já não bastavam mais. Em 1991, a AAAGV se juntou com o Mackenzie e a FEA USP dando início à primeira edição das Economíadas, em Bauru: uma semana inteira de jogos e festas. Uma ideia que surgiu entre atleticanos virou o maior evento universitário do estado, que até hoje é organizado pelas atléticas.' },
    { ano: 'Anos 90', titulo: 'Na raça', texto: 'Foram nove edições, em nove cidades do interior. Apesar das dificuldades com a falta de infraestrutura e logística, nenhum ano faltou. Foi assim, no esforço de geração em geração, que o Econo virou tradição.' },
    { ano: 'Anos 2000', titulo: 'O início de uma nova era', texto: 'Criamos festas que entraram para a história das economíadas. Sem dúvida, a Jacatenda, a Cervejada e a Giabólica marcaram uma época. Simultaneamente, o esportivo da AAAGV vinha crescendo e se estruturando cada vez mais, dando início a uma nova era…' },
    { ano: '2016', titulo: 'A um passo da glória', texto: 'AAAGV já tinha nome, estrutura e o evento. Só faltava a taça. A atlética que fundou as Economíadas seguia à espera do título, e não foi por falta de tentativa. Em 2016, terminamos a quatro pontos da vitória inédita. Nas palavras de um atleta da época: “Eu não aceitava que a GV não tivesse nenhum Economíadas, e foi por isso que entrei para competir e para organizar.”' },
    { ano: '2017', titulo: 'O primeiro título', campeao: true, texto: 'Faltando 1 mês para o evento, veio uma notícia inesperada. A então cidade-sede não estaria mais disponível para a realização dos jogos. Foi preciso escolher São Carlos e refazer tudo do zero em tempo recorde. E foi ali que, depois de quase 30 anos de espera, a Bela Vista entrou em festa. Nunca foi sorte; sempre foi garra e determinação. Desde o primeiro momento em que a atlética acreditou, os atletas se entregaram e a torcida e a bateria abraçaram, não tinha quem tirasse aquela taça da GV, reafirmando o lema do ano: “Respeita a nossa história”.' },
    { ano: '2022-2023', titulo: 'A reconstrução', texto: 'O pós-pandemia não foi fácil. Era preciso reconstruir a atlética com uma geração que nunca tinha ido aos jogos e restaurar o sentimento de paixão pelas cores preto e amarelo. Remontar time por time, treinos e o sentimento que estava adormecido. A AAAGV já tinha passado por momentos nos quais foi colocada à prova. A diferença é que agora havia uma taça no armário, e ninguém aceitava que ela fosse a única. Não foi a estrutura que voltou. Foi a gente.' },
    { ano: '2025', titulo: 'Segundo título', campeao: true, texto: 'Oito anos depois, a taça voltou para a Bela Vista. A FGV foi a campeã geral das Economíadas 2025, e o título não saiu apenas de uma modalidade. Veio de todos os times que, chegando ou não à final, honraram o manto preto e amarelo. Também veio de fora das quadras: a FGV levou a maior torcida dos Jogos, passando nomes tradicionais, como Fecap e ESPM, com mais de 1500 gvnianos. Em 2017, provamos que era possível. Em 2025, provamos que não foi sorte, com diversos veteranos voltando a São Carlos para honrar a história da nossa faculdade.' }
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
    { area: 'Diretoria de Captação de Recursos', texto: 'A área de Captação de Recursos e Parcerias tem como principal objetivo buscar, desenvolver e proporcionar novas parcerias para a AAAGV, contribuindo diretamente para o desenvolvimento dos nossos atletas e para o fortalecimento da entidade.\n\nAs parcerias podem assumir diferentes formatos, desde apoio financeiro e patrocínios até o fornecimento de produtos, serviços, descontos, benefícios e outras formas de colaboração. As possibilidades são amplas e podem ser adaptadas de acordo com os interesses e objetivos tanto da AAAGV quanto de cada parceiro.' },
    { area: 'Diretoria de Projetos Sociais', texto: 'A área de Responsabilidade Social tem como propósito promover iniciativas que gerem impacto positivo tanto dentro quanto fora da Atlética. Buscamos desenvolver projetos que fomentem o senso de comunidade, solidariedade e participação com a comunidade estudantil, além de estabelecer e ampliar parcerias com instituições externas. Dessa forma, procuramos utilizar o alcance da Atlética como instrumento para incentivar o engajamento social e contribuir, de maneira concreta, para a sociedade.' }
  ],

  // Estrutura da Gestão 2026 vigente. Ainda sem fotos — os avatares usam
  // o mesmo fallback de iniciais já usado no resto do site (preencha
  // "foto" com o caminho da imagem quando estiver disponível).
  organograma: {
    nivel1: [
      { cargo: 'VPE', cargoCompleto: 'Vice-presidente Esportivo', pessoas: [{ nome: 'Enzo Fredi Araujo', curso: 'Administração de Empresas, 6° semestre', foto: '' }], filhos: 'vpe' },
      { cargo: 'SG', cargoCompleto: 'Secretário Geral', pessoas: [{ nome: 'Arthur Passos', curso: 'Administração de Empresas, 5° semestre', foto: '' }] },
      { cargo: 'Presidente', cargoCompleto: 'Presidente', pessoas: [{ nome: 'Matheus Papa', curso: 'Administração de Empresas, 5° semestre', foto: '' }] },
      { cargo: 'Financeiro', cargoCompleto: 'Financeiro', pessoas: [{ nome: 'Gustavo Teles', curso: 'Administração de Empresas, 6° semestre', foto: '' }] },
      { cargo: 'VPA', cargoCompleto: 'Vice-presidente Administrativa', pessoas: [{ nome: 'Marina Correa', curso: 'Administração de Empresas, 4° semestre', foto: '' }], filhos: 'vpa' }
    ],
    vpe: [
      { cargo: 'DGE', cargoCompleto: 'Diretor Geral de Esportes', pessoas: [{ nome: 'Aisha Francisco', cargo: 'Diretora Geral de Esportes', curso: 'Administração de Empresas, 4° semestre', foto: '' }, { nome: 'Patrick Girard', curso: 'Administração de Empresas, 4° semestre', foto: '' }] }
    ],
    vpa: [
      { cargo: 'Captação', cargoCompleto: 'Diretor de Captação', pessoas: [{ nome: 'José Eduardo Sanz', curso: 'Administração de Empresas, 5° semestre', foto: '' }] },
      { cargo: 'Marketing', cargoCompleto: 'Diretora de Marketing', pessoas: [{ nome: 'Nayure Lin', curso: 'Administração de Empresas, 4° semestre', foto: '' }] },
      { cargo: 'Social', cargoCompleto: 'Diretora Social', pessoas: [{ nome: 'Aisha Francisco', curso: 'Administração de Empresas, 4° semestre', foto: '' }] },
      { cargo: 'Produtos & Eventos', cargoCompleto: 'Diretora de Produtos e Eventos', pessoas: [{ nome: 'Giovana Lois', curso: 'Administração de Empresas, 4° semestre', foto: '' }] }
    ]
  },

  // TODO: conferir a lista completa e real de modalidades da AAAGV
  modalidades: [
    { slug: 'atletismo', nome: 'Atletismo', generos: ['Misto'], foto: 'images/modalidades/atletismo.png', instagram: 'https://www.instagram.com/atletismofgv/' },
    { slug: 'basquete', nome: 'Basquete', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/basquete.png', instagram: { Masculino: 'https://www.instagram.com/bm.fgv/', Feminino: 'https://www.instagram.com/basqfemfgv/' } },
    { slug: 'futebol-de-campo', nome: 'Futebol de Campo', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futebol-de-campo.png', instagram: 'https://www.instagram.com/futcampofgv/' },
    { slug: 'futsal', nome: 'Futsal', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/futsal.png', instagram: { Masculino: 'https://www.instagram.com/futsalafgv/', Feminino: 'https://www.instagram.com/futfamous/' } },
    { slug: 'handebol', nome: 'Handebol', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/handebol.png', instagram: { Masculino: 'https://www.instagram.com/handmasc/', Feminino: 'https://www.instagram.com/handfem/' } },
    { slug: 'jiu-jitsu', nome: 'Jiu-Jitsu', generos: ['Masculino'], foto: 'images/modalidades/jiu-jitsu.png', instagram: 'https://www.instagram.com/bjj.fgv/' },
    { slug: 'judo', nome: 'Judô', generos: ['Masculino'], foto: 'images/modalidades/judo.png', instagram: 'https://www.instagram.com/judofgv/' },
    { slug: 'natacao', nome: 'Natação', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/natacao.png', instagram: 'https://www.instagram.com/natafgv/' },
    { slug: 'rugby', nome: 'Rugby', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/rugby.png', instagram: 'https://www.instagram.com/rugbyfgv/' },
    { slug: 'tenis-de-campo', nome: 'Tênis de Campo', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/tenis-de-campo.png', instagram: 'https://www.instagram.com/tenisfgv/' },
    { slug: 'tenis-de-mesa', nome: 'Tênis de Mesa', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/tenis-de-mesa.png', instagram: 'https://www.instagram.com/tenisdemesa_fgv/' },
    { slug: 'volei', nome: 'Vôlei', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei.png', instagram: { Masculino: 'https://www.instagram.com/voleimascfgv/', Feminino: 'https://www.instagram.com/voleifemfgv/' } },
    { slug: 'xadrez', nome: 'Xadrez', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/xadrez.png' }
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
      resumo: 'AAAGV vence e garante vaga na final.'
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
      resumo: 'Futsal feminino vence a USP por 2 a 0 em casa.'
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
      resumo: 'Equipe feminina de vôlei vence por 2 sets a 0.'
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
      categoria: 'Eventos',
      titulo: 'GVJADA: Hoje tem…',
      data: '2026-08-15',
      imagem: 'images/gvjada-26-2.jpg',
      resumo: 'A festa GVJADA reuniu mais de 4000 universitários em sua edição "Hoje tem…", com Japa NK, Keynan e Kel, pagode e DJ\'s residentes.',
      corpo: [
        'A famosa festa GVJADA, da AAAGV e DAGV, ocorreu dia 15 de agosto, em sua edição: "Hoje tem…". O evento contou com artistas como Japa NK, Keynan e Kel, grupo de pagode e DJ\'s residentes.',
        'Conhecida por reunir estudantes em um dos principais eventos do calendário universitário, a festa contou com mais de 4000 universitários dispostos a curtir uma noite animada e inesquecível.',
        'E, mais uma vez, a GVJADA se destacou pela dimensão e pela atmosfera de celebração que já fazem parte da identidade da festa.'
      ],
      autor: 'Mateus Cinelli'
    },
    {
      id: 2,
      categoria: 'Parcerias',
      titulo: 'Réveillon Araxás',
      data: '2026-09-14',
      imagem: '',
      resumo: 'AAAGV firma parceria com o Réveillon Araxás e garante 5% de desconto para alunos da FGV na compra de ingressos.',
      corpo: [
        'A Atlética da Fundação Getulio Vargas firmou parceria com o Réveillon Araxás, festa que acontece do dia 27 de dezembro ao dia 2 de janeiro, no Litoral Norte. O Réveillon Araxás foi nosso patrocinador oficial nesse ano. Como parte desse apoio, a marca esteve presente nos abadás e sacochilas produzidos para as Economíadas.',
        'Além da parceria, os alunos da FGV que acessam o link da AAAGV, têm 5% de desconto na compra de ingressos para o evento.',
        'Para garantir o benefício, basta acessar o link abaixo.',
        'https://cart.ingresse.com/f95a273a-5c4c-4591-abe5-9444b196ac6a/tickets?coupon=AAAGV'
      ],
      autor: 'José Eduardo Sanz'
    }
  ],

  // TODO: substituir por logos e contato reais da diretoria de parcerias
  parceiros: {
    logos: [
      { nome: 'Rockafe', logo: 'images/Logo Rockafe 2.png', semFundo: true },
      { nome: 'XP', logo: 'images/Logo XP.png', semFundo: true },
      { nome: 'Araxás', logo: 'images/Logo Araxás.png', semFundo: true },
      { nome: 'Tatu Bola', logo: 'images/LOGO TATU BOLA.png', semFundo: true }
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
    endereco: 'Edifício John F. Kennedy - Av. Nove de Julho, 2029 - Bela Vista, São Paulo - SP, 01313-902',
    instagram: 'https://www.instagram.com/jacarefgv/',
    tiktok: 'https://www.tiktok.com/@jacarefgv'
  }
};
