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
    atletas: 400,
    economiadas: 2
  },

  timeline: [
    { ano: '1987', titulo: 'O começo', texto: 'Antes da atlética, o esporte na FGV era descentralizado e, a partir de 1987, com o Eduardo Quilici, essa história mudou. A AAAGV foi fundada e os atletas da FGV passaram a ter um nome próprio para vestir e defender. Os primeiros anos foram os mais duros: montar times, desenhar uniformes e correr atrás de dinheiro para conseguir competir. É onde a maioria das histórias como essa morre. A nossa não morreu.' },
    { ano: '1989', titulo: 'AAAGV prova do que é capaz', texto: 'A atlética tinha dois anos e estava quebrada, até que um aluno de 19 anos assumiu as finanças, colocou tudo em ordem e a AAAGV seguiu para enfrentar a FEA-USP: três dias de disputa, organização inteiramente feita por alunos. No mesmo ano, encaramos o Mackenzie e o Jacaré ganhou vida, com as cores que se tornaram nossas: preto e amarelo.' },
    { ano: '1991', titulo: 'O nascimento das Economíadas', texto: 'Duas faculdades já não bastavam mais. Em 1991, a AAAGV se juntou com o Mackenzie e a FEA USP dando início à primeira edição das Economíadas, em Bauru: uma semana inteira de jogos e festas. Uma ideia que surgiu entre atleticanos virou o maior evento universitário do estado, sendo organizado pelas atléticas até os dias de hoje.' },
    { ano: 'Anos 90', titulo: 'Na raça', texto: 'Foram nove edições, em nove cidades do interior. Apesar das dificuldades com a falta de infraestrutura e logística, nenhum ano faltou. Foi assim, no esforço de geração em geração, que o Econo virou tradição.' },
    { ano: 'Anos 2000', titulo: 'O início de uma nova era', texto: 'Criamos festas que entraram para a história das economíadas. Sem dúvida, a Jacatenda, a Cervejada e a Giabólica marcaram uma época. Simultaneamente, o esportivo da AAAGV vinha crescendo e se estruturando cada vez mais, dando início a uma nova era…' },
    { ano: '2016', titulo: 'A um passo da glória', texto: 'AAAGV já tinha nome, estrutura e o evento. Só faltava a taça. A atlética que fundou as Economíadas seguia à espera do título, e não foi por falta de tentativa. Em 2016, terminamos a quatro pontos da vitória inédita. Nas palavras de um atleta da época: “Eu não aceitava que a GV não tivesse nenhum Economíadas, e foi por isso que entrei para competir e para organizar.”' },
    { ano: '2017', titulo: 'O primeiro título', campeao: true, texto: 'Faltando 1 mês para o evento, veio uma notícia inesperada. A então cidade-sede não estaria mais disponível para a realização dos jogos. Foi preciso escolher São Carlos e refazer tudo do zero em tempo recorde. E foi ali que, depois de quase 30 anos de espera, a Bela Vista entrou em festa. Nunca foi sorte, sempre foi garra e determinação. Desde o primeiro momento em que a atlética acreditou, os atletas se entregaram e a torcida e a bateria abraçaram, não tinha quem tirasse aquela taça da GV, reafirmando o lema do ano: “Respeita a nossa história”.' },
    { ano: '2022-2023', titulo: 'A reconstrução', texto: 'O pós-pandemia não foi fácil. Era preciso reconstruir a atlética com uma geração que nunca tinha ido aos jogos e restaurar o sentimento de paixão pelas cores preto e amarelo. Remontar time por time, treinos e o sentimento que estava adormecido. A AAAGV já tinha passado por momentos nos quais foi colocada à prova. A diferença é que agora havia uma taça no armário, e ninguém aceitava que ela fosse a única. Definitivamente, nós estávamos de volta.' },
    { ano: '2025', titulo: 'Segundo título', campeao: true, texto: 'Oito anos depois, a taça voltou para a Bela Vista. A FGV foi a campeã geral das Economíadas 2025, e o título não saiu apenas de uma modalidade. Veio de todos os times que, chegando ou não à final, honraram o manto preto e amarelo. Também veio de fora das quadras: a FGV levou a maior torcida dos Jogos, passando nomes tradicionais, como Mackenzie e ESPM, com mais de 1500 gvnianos. Em 2017, provamos que era possível. Em 2025, provamos que não foi sorte, com diversos veteranos voltando a São Carlos para honrar a história da nossa faculdade.' }
  ],

  // ===================================================================
  // MUSEU (museu.html) — NÃO é uma linha do tempo (isso já existe no
  // "Sobre"). Aqui a atlética escolhe o que quer lembrar. Duas partes:
  //
  //   1) museu   — MOMENTOS: os três momentos marcantes em destaque,
  //                cada um com um texto sobre o momento e 3 fotos.
  //   2) galeria — fotos soltas das gestões passadas (mais abaixo).
  //
  // MOMENTOS — campos:
  //   momento : rótulo curto em amarelo acima do título
  //   titulo  : nome do momento
  //   texto   : texto sobre o momento (parágrafos separados por linha em branco: \n\n)
  //   fotos   : 3 por momento; "legenda" aparece embaixo e no zoom.
  //             Foto que ainda não existe aparece como "Foto em breve".
  // ===================================================================
  museu: [
    {
      momento: 'A maior festa da GV',
      titulo: 'GVJADA',
      texto: 'A GVJADA, festa da AAAGV em parceria com o DAGV, é um dos eventos mais esperados do ano na FGV. Na edição "Hoje tem…", reuniu mais de 4000 universitários, com Japa NK, Keynan e Kel, grupo de pagode e DJs residentes.\n\nAno após ano, a GVJADA se destaca pela dimensão e pela atmosfera de celebração que já fazem parte da identidade da festa.',
      fotos: [
        { src: 'images/museu/galeria/gvjada-23.jpg', legenda: 'GVJADA 23' },
        { src: 'images/museu/galeria/gvjada-25.jpg', legenda: 'GVJADA 25' },
        { src: 'images/museu/galeria/gvjada-26.jpg', legenda: 'GVJADA 26' }
      ]
    },
    {
      momento: 'Segundo título',
      titulo: 'Economíadas 2025',
      texto: 'Oito anos depois, a taça voltou para a Bela Vista. A FGV foi a campeã geral das Economíadas 2025, e o título não saiu apenas de uma modalidade. Veio de todos os times que, chegando ou não à final, honraram o manto preto e amarelo.\n\nTambém veio de fora das quadras: a FGV levou a maior torcida dos Jogos, passando nomes tradicionais, como Mackenzie e ESPM, com mais de 1500 gvnianos. Em 2017, provamos que era possível. Em 2025, provamos que não foi sorte.',
      fotos: [
        { src: 'images/museu/galeria/econo-25.jpg', legenda: 'Econo 25' },
        { src: 'images/museu/galeria/festa-do-titulo-25.jpg', legenda: 'Festa do Título 25' },
        { src: 'images/museu/galeria/festa-do-titulo-25-2.jpg', legenda: 'Festa do Título 25' }
      ]
    },
    {
      momento: 'O primeiro título',
      titulo: 'Economíadas 2017',
      texto: 'Faltando 1 mês para o evento, veio uma notícia inesperada: a cidade-sede não estaria mais disponível para os jogos. Foi preciso escolher São Carlos e refazer tudo do zero em tempo recorde. E foi ali que, depois de quase 30 anos de espera, a Bela Vista entrou em festa.\n\nNunca foi sorte, sempre foi garra e determinação. Os atletas se entregaram, a torcida e a bateria abraçaram, e não tinha quem tirasse aquela taça da GV, reafirmando o lema do ano: “Respeita a nossa história”.',
      // TODO: fotos das Economíadas 2017 (colocar em images/museu/ com estes nomes)
      fotos: [
        { src: 'images/museu/econo-2017-1.jpg', legenda: 'Economíadas 2017' },
        { src: 'images/museu/econo-2017-2.jpg', legenda: 'Economíadas 2017' },
        { src: 'images/museu/econo-2017-3.jpg', legenda: 'Economíadas 2017' }
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
    { src: 'images/museu/galeria/g12.jpg', formato: 'quadrado', legenda: 'G12' },
    { src: 'images/museu/galeria/g12-2.jpg', formato: 'quadrado', legenda: 'G12' },
    { src: 'images/museu/galeria/integras-aaagv-12.jpg', formato: 'paisagem', legenda: 'Integras AAAGV 12' },
    { src: 'images/museu/galeria/g13.jpg', formato: 'paisagem', legenda: 'G13' },
    { src: 'images/museu/galeria/g14.jpg', formato: 'paisagem', legenda: 'G14' },
    { src: 'images/museu/galeria/g14-g15.jpg', formato: 'quadrado', legenda: 'G14 + G15' },
    { src: 'images/museu/galeria/g15.jpg', formato: 'paisagem', legenda: 'G15' },
    { src: 'images/museu/galeria/g15-g16.jpg', formato: 'paisagem', legenda: 'G15 + G16' },
    { src: 'images/museu/galeria/g16.jpg', formato: 'paisagem', legenda: 'G16' },
    { src: 'images/museu/galeria/g16-g17.jpg', formato: 'paisagem', legenda: 'G16 + G17' },
    { src: 'images/museu/galeria/g17.jpg', formato: 'retrato', legenda: 'G17' },
    { src: 'images/museu/galeria/g17-2.jpg', formato: 'paisagem', legenda: 'G17' },
    { src: 'images/museu/galeria/g17-3.jpg', formato: 'paisagem', legenda: 'G17' },
    { src: 'images/museu/galeria/g17-g18.jpg', formato: 'paisagem', legenda: 'G17 + G18' },
    { src: 'images/museu/galeria/g18.jpg', formato: 'retrato', legenda: 'G18' },
    { src: 'images/museu/galeria/g18-2.jpg', formato: 'paisagem', legenda: 'G18' },
    { src: 'images/museu/galeria/g18-3.jpg', formato: 'paisagem', legenda: 'G18' },
    { src: 'images/museu/galeria/g19.jpg', formato: 'paisagem', legenda: 'G19' },
    { src: 'images/museu/galeria/g19-g20.jpg', formato: 'paisagem', legenda: 'G19 + G20' },
    { src: 'images/museu/galeria/intercalouros-19.jpg', formato: 'paisagem', legenda: 'Intercalouros 19' },
    { src: 'images/museu/galeria/g20.jpg', formato: 'paisagem', legenda: 'G20' },
    { src: 'images/museu/galeria/g20-2.jpg', formato: 'retrato', legenda: 'G20' },
    { src: 'images/museu/galeria/g22.jpg', formato: 'paisagem', legenda: 'G22' },
    { src: 'images/museu/galeria/integras-aaagv-22.jpg', formato: 'paisagem', legenda: 'Integras AAAGV 22' },
    { src: 'images/museu/galeria/g23.jpg', formato: 'paisagem', legenda: 'G23' },
    { src: 'images/museu/galeria/g23-2.jpg', formato: 'paisagem', legenda: 'G23' },
    { src: 'images/museu/galeria/g23-g24.jpg', formato: 'quadrado', legenda: 'G23 + G24' },
    { src: 'images/museu/galeria/g23-zeze.jpg', formato: 'paisagem', legenda: 'G23 + zezé' },
    { src: 'images/museu/galeria/gvjada-23.jpg', formato: 'paisagem', legenda: 'GVJADA 23' },
    { src: 'images/museu/galeria/g24.jpg', formato: 'paisagem', legenda: 'G24' },
    { src: 'images/museu/galeria/g25.jpg', formato: 'paisagem', legenda: 'G25' },
    { src: 'images/museu/galeria/g25-g26.jpg', formato: 'retrato', legenda: 'G25 + G26' },
    { src: 'images/museu/galeria/econo-25.jpg', formato: 'paisagem', legenda: 'Econo 25' },
    { src: 'images/museu/galeria/festa-do-titulo-25.jpg', formato: 'paisagem', legenda: 'Festa do Título 25' },
    { src: 'images/museu/galeria/festa-do-titulo-25-2.jpg', formato: 'paisagem', legenda: 'Festa do Título 25' },
    { src: 'images/museu/galeria/gvjada-25.jpg', formato: 'paisagem', legenda: 'GVJADA 25' },
    { src: 'images/museu/galeria/g26.jpg', formato: 'retrato', legenda: 'G26' },
    { src: 'images/museu/galeria/gvjada-26.jpg', formato: 'retrato', legenda: 'GVJADA 26' },
    { src: 'images/museu/galeria/integras-dos-atletas-26.jpg', formato: 'paisagem', legenda: 'Integras dos atletas 26' }
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

  // Estrutura da Gestão 2026 vigente. Fotos em images/FOTOS INDIVIDUAIS/G26/
  // (quadradas, 600px, com a cor ajustada). Quem estiver com "foto" vazio
  // aparece com as iniciais, o mesmo fallback do resto do site.
  organograma: {
    nivel1: [
      { cargo: 'VPE', cargoCompleto: 'Vice-presidente Esportivo', pessoas: [{ nome: 'Enzo Fredi Araujo', curso: 'Administração de Empresas, 6° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/enzo-fredi.jpg' }], filhos: 'vpe' },
      { cargo: 'SG', cargoCompleto: 'Secretário Geral', pessoas: [{ nome: 'Arthur Passos', curso: 'Administração de Empresas, 5° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/arthur-passos.jpg' }] },
      { cargo: 'Presidente', cargoCompleto: 'Presidente', pessoas: [{ nome: 'Matheus Papa', curso: 'Administração de Empresas, 5° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/matheus-papa.jpg' }] },
      { cargo: 'Financeiro', cargoCompleto: 'Financeiro', pessoas: [{ nome: 'Gustavo Teles', curso: 'Administração de Empresas, 6° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/gustavo-teles.jpg' }] },
      { cargo: 'VPA', cargoCompleto: 'Vice-presidente Administrativa', pessoas: [{ nome: 'Marina Correa', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/marina-correa.jpg' }], filhos: 'vpa' }
    ],
    vpe: [
      { cargo: 'DGE', cargoCompleto: 'Diretor Geral de Esportes', pessoas: [{ nome: 'Aisha Francisco', cargo: 'Diretora Geral de Esportes', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/aisha-francisco.jpg' }, { nome: 'Patrick Girard', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/patrick-girard.jpg' }] }
    ],
    vpa: [
      { cargo: 'Captação', cargoCompleto: 'Diretor de Captação', pessoas: [{ nome: 'José Eduardo Sanz', curso: 'Administração de Empresas, 5° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/jose-eduardo-sanz.jpg' }] },
      { cargo: 'Marketing', cargoCompleto: 'Diretora de Marketing', pessoas: [{ nome: 'Nayure Lin', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/nayure-lin.jpg' }] },
      { cargo: 'Social', cargoCompleto: 'Diretora Social', pessoas: [{ nome: 'Aisha Francisco', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/aisha-francisco.jpg' }] },
      { cargo: 'Produtos & Eventos', cargoCompleto: 'Diretora de Produtos e Eventos', pessoas: [{ nome: 'Giovana Lois', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/giovana-lois.jpg' }] }
    ]
  },

  // TODO: conferir a lista completa e real de modalidades da AAAGV
  modalidades: [
    { slug: 'atletismo', nome: 'Atletismo', generos: ['Misto'], foto: 'images/modalidades/atletismo.png', instagram: 'https://www.instagram.com/atletismofgv/' },
    { slug: 'basquete', nome: 'Basquete', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/basquete.png', instagram: { Masculino: 'https://www.instagram.com/bm.fgv/', Feminino: 'https://www.instagram.com/basqfemfgv/' } },
    { slug: 'futebol-de-campo', nome: 'Futebol de Campo', generos: ['Masculino'], foto: 'images/modalidades/futebol-de-campo.png', instagram: 'https://www.instagram.com/futcampofgv/' },
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
        { nome: 'Manu Abrão', foto: 'images/FOTOS INDIVIDUAIS/ATLETAS/manu-abrao.jpg' }
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

  // "autor" aparece no fim da matéria como "Escrito por: Nome Sobrenome".
  // "id" tem que ser o MESMO id da linha na planilha (coluna ID) — é por ele que
  // a foto ("imagem") daqui é associada à notícia certa quando a coluna IMAGEM
  // da planilha vier vazia (ver js/sheets.js).
  noticias: [
    {
      id: 3,
      categoria: 'Eventos',
      titulo: 'GVJADA: Hoje tem…',
      data: '2026-09-14',
      imagem: 'images/FOTOS NOTÍCIAS/N-ID3.jpg',
      resumo: 'A festa GVJADA reuniu mais de 4000 universitários em sua edição "Hoje tem…", com Japa NK, Keynan e Kel, pagode e DJ\'s residentes.',
      corpo: [
        'A famosa festa GVJADA, da AAAGV e DAGV, ocorreu dia 15 de agosto, em sua edição: "Hoje tem…". O evento contou com artistas como Japa NK, Keynan e Kel, grupo de pagode e DJ\'s residentes.',
        'Conhecida por reunir estudantes em um dos principais eventos do calendário universitário, a festa contou com mais de 4000 universitários dispostos a curtir uma noite animada e inesquecível.',
        'E, mais uma vez, a GVJADA se destacou pela dimensão e pela atmosfera de celebração que já fazem parte da identidade da festa.'
      ],
      autor: 'Mateus Cinelli'
    },
    {
      id: 4,
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
    },
    {
      id: 2,
      categoria: 'Esportes',
      titulo: 'FutFamous campeão da SuperLiga Universitária!',
      data: '2026-09-18',
      imagem: 'images/FOTOS NOTÍCIAS/Superliga ff.jpg',
      imagemPosicao: 'center 82%',
      resumo: 'O nosso time de Futsal Feminino conquistou mais um título em cima da ECA USP na SuperLiga Universitária, organizada pela Gruppo em parceria com a Drinkiss.',
      corpo: [
        'O nosso time de Futsal Feminino acaba de conquistar mais um título em cima da ECA USP no campeonato da SuperLiga Universitária, organizada pela Gruppo em parceria com a Drinkiss! A atlética, torcida e bateria marcaram presença, dando ainda mais emoção nesta final.',
        'No primeiro tempo, houveram algumas dificuldades, mas no segundo o Fut Fem voou! Com gols de Alice Schalka e Luiza Ferreira, a GV ganha de 2x0 e garante mais uma vitória!'
      ],
      autor: 'João Henrique Viana'
    },
    {
      id: 4,
      categoria: 'Esportes',
      titulo: 'É CAMPEÃO! FGV vira sobre o Insper e conquista o título do NDU no Handebol Masculino',
      data: '2026-09-18',
      imagem: '',
      resumo: 'O Handebol Masculino da FGV venceu o Insper por 28 a 25, buscando uma virada no segundo tempo, e conquistou o título da Série A do NDU.',
      corpo: [
        'O Handebol Masculino da FGV escreveu mais um capítulo inesquecível de sua história. Em uma final marcada por intensidade, rivalidade e uma virada emocionante, a GV derrotou o Insper por 28 a 25 e conquistou o título da Série A do NDU.',
        'A decisão começou complicada para os gvianos. O Insper conseguiu impor seu ritmo durante a primeira etapa e foi para o intervalo com dois gols de vantagem, deixando a FGV diante da necessidade de buscar uma reação justamente nos minutos mais importantes do campeonato. E ela veio.',
        'No segundo tempo, a história mudou. Com uma atuação de entrega, concentração e muita intensidade, a FGV buscou a diferença, tomou a frente do placar e não permitiu que o adversário recuperasse o controle da partida. Quando o cronômetro zerou, o placar de 28 a 25 confirmou aquilo que parecia distante no intervalo: a FGV era campeã do NDU.',
        'Mas a conquista ganhou um significado ainda maior pelo adversário que estava do outro lado da quadra, já que meses antes, nas Economíadas, a caminhada da FGV havia começado justamente com uma derrota para o Insper. Desta vez, porém, o reencontro aconteceu em outro palco e valendo uma taça.',
        'Do primeiro jogo das Economíadas à final do NDU, a derrota virou aprendizado, a desvantagem no intervalo virou reação, e o adversário que um dia venceu a GV viu, desta vez, os gvianos levantarem o troféu.'
      ],
      autor: 'João Guilherme Prata'
    },
    {
      id: 5,
      categoria: 'Esportes',
      titulo: 'O IMPOSSÍVEL CAIU! FGV vira sobre a UNIP e escreve uma noite histórica no Vôlei Feminino',
      data: '2026-09-18',
      imagem: '',
      resumo: 'O Vôlei Feminino da FGV buscou uma virada histórica diante da UNIP e venceu por 3 sets a 2, revertendo a desvantagem de 2 sets a 1.',
      corpo: [
        'Existem vitórias, existem viradas, e existem jogos que ficam para sempre. O Vôlei Feminino da FGV protagonizou uma dessas noites. Diante da UNIP, equipe que para muitos parecia simplesmente imbatível, as gvianas fizeram o que poucos acreditavam ser possível: buscaram uma virada espetacular e venceram por 3 sets a 2, e nada veio fácil.',
        'A UNIP mostrou dentro de quadra porque carregava tamanho favoritismo. Depois dos três primeiros sets, abriu 2 a 1 e colocou a FGV contra a parede. A partir dali, não havia mais espaço para erro. Cada ponto poderia ser o último e significar o fim, mas a GV se recusou a aceitar o roteiro que parecia escrito.',
        'No quarto set, quando era vencer ou perder, veio a reação. A FGV sobreviveu, buscou o empate e levou a decisão para o tie-break. De repente, aquela equipe considerada inalcançável estava a apenas um set de ser derrotada, e foi ali que a história mudou de mãos.',
        'No set decisivo, já não importava quem era favorito antes de a bola subir. Não importava quem parecia imbatível, importava quem conseguiria suportar a pressão até o último ponto. E a FGV suportou. Quando a última bola caiu, caiu junto uma certeza que existia antes daquela partida: a UNIP podia, sim, ser vencida.',
        'O placar registrará 3 sets a 2, mas ele jamais contou sozinho tudo o que aconteceu naquela quadra. Não contou a desvantagem, a pressão, a reação e a coragem de um time que precisou estar à beira da derrota para construir uma de suas maiores vitórias. De 2 a 1 para elas, para 3 a 2 para a GV.',
        'Contra um time que diziam ser imbatível, a FGV respondeu da única maneira que realmente importava: dentro de quadra.'
      ],
      autor: 'João Guilherme Prata'
    }
  ],

  // TODO: substituir por logos e contato reais da diretoria de parcerias
  parceiros: {
    logos: [
      { nome: 'Rockafe', logo: 'images/LOGOS/Logo Rockafe 2.png', semFundo: true },
      { nome: 'XP', logo: 'images/LOGOS/Logo XP.png', semFundo: true },
      { nome: 'Araxás', logo: 'images/LOGOS/Logo Araxás.png', semFundo: true },
      { nome: 'Tatu Bola', logo: 'images/LOGOS/Logo Tatu Bola.png', semFundo: true }
    ],
    contato: {
      nome: 'José Eduardo',
      cargo: 'Diretor de Captação de Recursos',
      email: 'captaaagv@gmail.com',
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
