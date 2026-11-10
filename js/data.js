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
      fotos: [
        { src: 'images/museu/galeria/Economiadas 17-1.jpeg', legenda: 'Economíadas 2017' },
        { src: 'images/museu/galeria/Economiadas 17-2.jpeg', legenda: 'Economíadas 2017' },
        { src: 'images/museu/galeria/Economiadas 17-3.jpeg', legenda: 'Economíadas 2017' }
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
    { area: 'Diretoria de Esportes', texto: 'A Diretoria de Esportes fomenta e fortalece o esporte universitário, desenvolvendo projetos e atividades tanto dentro quanto fora da faculdade. Atuamos no suporte aos atletas para que possam participar de forma efetiva de campeonatos e competições, por meio do planejamento e organização das modalidades, gestão de quadras, contratação de técnicos e demais necessidades relacionadas à prática esportiva. Além disso, promovemos iniciativas que valorizam a presença do esporte no ambiente universitário, incentivando a integração entre os alunos e, muitas vezes, criando oportunidades de interação e competição com outras instituições de ensino.' },
    { area: 'Diretoria Financeira', texto: 'A Diretoria Financeira garante a saúde e a sustentabilidade financeira da AAAGV, planejando e viabilizando os recursos necessários para o dia a dia e o crescimento da entidade. Atuamos diretamente na gestão do orçamento, no controle de fluxo de caixa e na viabilização dos investimentos essenciais para as modalidades esportivas, desde a compra de materiais e locação de espaços até a gestão de contratos de técnicos e prestadores de serviço. Além disso, somos responsáveis pelo planejamento financeiro e operacional de grandes projetos e megaeventos, como a GVJADA e o Economíadas. Nosso trabalho conecta a estratégia à execução, negociando diretamente com fornecedores e parceiros para otimizar custos, fechar bons acordos e assegurar que a atlética tenha toda a estrutura necessária para competir em alto nível e integrar a comunidade universitária.' },
    { area: 'Diretoria de Marketing', texto: 'A área fortalece a imagem e a identidade da AAAGV, aproximando a Atlética da comunidade estudantil. Planejamos e produzimos conteúdos que divulgam eventos, campeonatos, produtos, parcerias e todos os demais projetos desenvolvidos pela entidade. Por meio das redes sociais, damos visibilidade ao trabalho das diferentes áreas, valorizamos nossos atletas e estimulamos a participação dos alunos. Assim, ampliamos o alcance da AAAGV e consolidamos sua imagem dentro e fora da FGV.' },
    { area: 'Diretoria de Eventos', texto: 'A área cria experiências que aproximam os alunos e fortalecem a vida universitária. Somos responsáveis pelo planejamento e execução de eventos, festas e ações da Atlética, como a GVJADA, acompanhando todas as etapas necessárias para a realização de cada projeto. Dessa forma, promovemos integração, conexão e experiências marcantes que fazem parte da trajetória dos alunos na FGV.' },
    { area: 'Diretoria de Produtos', texto: 'A área desenvolve e comercializa produtos que traduzem a identidade e a essência da Atlética. Cuidamos do design, da escolha e do contato com fornecedores parceiros, que produzem os itens, e da comercialização, buscando fortalecer a presença da marca no dia a dia dos alunos. Dessa forma, aproximamos a comunidade da AAAGV e viabilizamos novos projetos, iniciativas e experiências.' },
    { area: 'Diretoria de Captação de Recursos', texto: 'A área busca, desenvolve e proporciona novas parcerias para a AAAGV, contribuindo diretamente para o desenvolvimento dos nossos atletas e para o fortalecimento da entidade. As parcerias podem assumir diferentes formatos, desde apoio financeiro e patrocínios até o fornecimento de produtos, serviços, descontos, benefícios e outras formas de colaboração, sempre adaptadas aos interesses e objetivos tanto da AAAGV quanto de cada parceiro.' },
    { area: 'Diretoria de Projetos Sociais', texto: 'A área promove iniciativas que geram impacto positivo tanto dentro quanto fora da Atlética. Desenvolvemos projetos que fomentam o senso de comunidade, solidariedade e participação da comunidade estudantil, além de estabelecer e ampliar parcerias com instituições externas. Dessa forma, utilizamos o alcance da Atlética como instrumento para incentivar o engajamento social e contribuir, de maneira concreta, para a sociedade.' }
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
      { cargo: 'DGE', cargoCompleto: 'Diretor Geral de Esportes', pessoas: [{ nome: 'Aisha Francisco', cargo: 'Diretora Geral de Esportes', curso: 'Administração de Empresas, 4° semestre', foto: 'images/FOTOS INDIVIDUAIS/G26/aisha-francisco.jpg' }] }
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
    { slug: 'jiu-jitsu', nome: 'Jiu-Jitsu', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/jiu-jitsu.png', instagram: 'https://www.instagram.com/bjj.fgv/' },
    { slug: 'judo', nome: 'Judô', generos: ['Masculino'], foto: 'images/modalidades/judo.png', instagram: 'https://www.instagram.com/judofgv/' },
    { slug: 'natacao', nome: 'Natação', generos: ['Misto'], foto: 'images/modalidades/natacao.png', instagram: 'https://www.instagram.com/natafgv/' },
    { slug: 'rugby', nome: 'Rugby', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/rugby.png', instagram: 'https://www.instagram.com/rugbyfgv/' },
    { slug: 'tenis-de-campo', nome: 'Tênis de Campo', generos: ['Misto'], foto: 'images/modalidades/tenis-de-campo.png', instagram: 'https://www.instagram.com/tenisfgv/' },
    { slug: 'tenis-de-mesa', nome: 'Tênis de Mesa', generos: ['Misto'], foto: 'images/modalidades/tenis-de-mesa.png', instagram: 'https://www.instagram.com/tenisdemesa_fgv/' },
    { slug: 'volei', nome: 'Vôlei', generos: ['Masculino', 'Feminino'], foto: 'images/modalidades/volei.png', instagram: { Masculino: 'https://www.instagram.com/voleimascfgv/', Feminino: 'https://www.instagram.com/voleifemfgv/' } },
    { slug: 'xadrez', nome: 'Xadrez', generos: ['Masculino'], foto: 'images/modalidades/xadrez.png' }
  ],

  // Elenco de cada modalidade/gênero (nome e sobrenome). Se uma combinação
  // modalidade+gênero não estiver aqui, o site mostra atletas de exemplo.
  atletas: {
    atletismo: {
      Misto: [
        { nome: 'Adam Hassine' },
        { nome: 'Arthur Almeida', foto: 'images/atletas-rosto/atletismo/Masculino/Arthur Almeida.jpg' },
        { nome: 'Celina Chen', foto: 'images/atletas-rosto/atletismo/Feminino/Celina Chen.jpg' },
        { nome: 'Eduardo Simis' },
        { nome: 'Emily Yoshida' },
        { nome: 'Felipe Hsu', foto: 'images/atletas-rosto/atletismo/Masculino/Felipe Wang Hsu.jpg' },
        { nome: 'Fiona Berit', foto: 'images/atletas-rosto/atletismo/Feminino/Fiona Berit_.jpg' },
        { nome: 'Gabriel Carvalho' },
        { nome: 'Lais Arita', foto: 'images/atletas-rosto/atletismo/Feminino/Lais Arita.jpg' },
        { nome: 'Laura Kobayashi', foto: 'images/atletas-rosto/atletismo/Feminino/Laura Naomi Kobayashi.jpg' },
        { nome: 'Luis Felipe de Oliveira', foto: 'images/atletas-rosto/atletismo/Masculino/Luis Felipe de Oliveira_.jpg' },
        { nome: 'Luisa do Valle', foto: 'images/atletas-rosto/atletismo/Feminino/Luisa do Valle_.jpg' },
        { nome: 'Manuela Bahdur', foto: 'images/atletas-rosto/atletismo/Feminino/Manuela Bahdur_.jpg' },
        { nome: 'Maria Clara Toreto', foto: 'images/atletas-rosto/atletismo/Feminino/Maria Clara Toreto.jpg' },
        { nome: 'Maria Paula Demian', foto: 'images/atletas-rosto/atletismo/Feminino/Maria Paula Demian.jpg' },
        { nome: 'Mariana Landi', foto: 'images/atletas-rosto/atletismo/Feminino/Mariana Landi.jpg' },
        { nome: 'Nicolas Ayala', foto: 'images/atletas-rosto/atletismo/Masculino/Nicolas Navarro Ayala.jpg' },
        { nome: 'Otávio Henrique Marmo', foto: 'images/atletas-rosto/atletismo/Masculino/Otávio Henrique Marmo.jpg' },
        { nome: 'Sophia Helena Goya', foto: 'images/atletas-rosto/atletismo/Feminino/Sophia Helena Goya_.jpg' }
      ]
    },
    basquete: {
      Feminino: [
        { nome: 'Atleta', foto: 'images/atletas-rosto/basquete/Feminino/FGV-573.jpg' },
        { nome: 'Beatriz Alonso', foto: 'images/atletas-rosto/basquete/Feminino/Beatriz Alonso.jpg' },
        { nome: 'Beatriz Vicente' },
        { nome: 'Carolina Kise' },
        { nome: 'Daniella Alchorne' },
        { nome: 'Gabriela Ferraz', foto: 'images/atletas-rosto/basquete/Feminino/Gabriela Ferraz.jpg' },
        { nome: 'Gabriela Leal', foto: 'images/atletas-rosto/basquete/Feminino/Gabriela Leal.jpg' },
        { nome: 'Giovana De Bruijn', foto: 'images/atletas-rosto/basquete/Feminino/Giovana Brujin.jpg' },
        { nome: 'Giovana Lopez', foto: 'images/atletas-rosto/basquete/Feminino/Giovana Lopez.jpg' },
        { nome: 'Giovanna Camargo', foto: 'images/atletas-rosto/basquete/Feminino/Giovanna Camargo.jpg' },
        { nome: 'Giovanna Moscato' },
        { nome: 'Lara Salviano', foto: 'images/atletas-rosto/basquete/Feminino/Lara Salviano.jpg' },
        { nome: 'Luiza Pensa', foto: 'images/atletas-rosto/basquete/Feminino/Luiza Pensa.jpg' },
        { nome: 'Manuela Abrão', foto: 'images/atletas-rosto/basquete/Feminino/manu-abrao.jpg' },
        { nome: 'Marina Ribeiro', foto: 'images/atletas-rosto/basquete/Feminino/Marina Ribeiro.jpg' },
        { nome: 'Nayure Lin', foto: 'images/atletas-rosto/basquete/Feminino/Nayure Chen Lin.jpg' },
        { nome: 'Nina Neves', foto: 'images/atletas-rosto/basquete/Feminino/Nina Neves.jpg' },
        { nome: 'Roxana Aayan' }
      ],
      Masculino: [
        { nome: 'Andrei Gonçalves' },
        { nome: 'Eduardo Franchi' },
        { nome: 'Eduardo Pereira', foto: 'images/atletas-rosto/basquete/Masculino/Eduardo Pereira.jpg' },
        { nome: 'Felipe Alves' },
        { nome: 'Fernando Ribas' },
        { nome: 'Gustavo Leão', foto: 'images/atletas-rosto/basquete/Masculino/Gustavo Leão.jpg' },
        { nome: 'Henrique Brancher' },
        { nome: 'João Alvares' },
        { nome: 'Jonas Ermler' },
        { nome: 'Kasper Grönlund' },
        { nome: 'Leonardo Lamaita', foto: 'images/atletas-rosto/basquete/Masculino/Leonardo Lamaita_.jpg' },
        { nome: 'Lucas Bussab' },
        { nome: 'Lucas Miléo', foto: 'images/atletas-rosto/basquete/Masculino/Lucas Miléo.jpg' },
        { nome: 'Luiz Eduardo Lima' },
        { nome: 'Luiz Fernando Vilela', foto: 'images/atletas-rosto/basquete/Masculino/Luiz Fernando Vilela.jpg' },
        { nome: 'Manoel Carneiro' },
        { nome: 'Manoel de Souza', foto: 'images/atletas-rosto/basquete/Masculino/Manoel de Souza_.jpg' },
        { nome: 'Miguel Zhu' },
        { nome: 'Patrick Girard', foto: 'images/atletas-rosto/basquete/Masculino/Patrick Girard.jpg' },
        { nome: 'Pedro Campanella', foto: 'images/atletas-rosto/basquete/Masculino/Pedro Campanella.jpg' },
        { nome: 'Pedro Dantas' },
        { nome: 'Pedro Pedote' },
        { nome: 'Pedro Sá' },
        { nome: 'Vitor Sheldon', foto: 'images/atletas-rosto/basquete/Masculino/Victor Sheldon.jpg' }
      ]
    },
    'futebol-de-campo': {
      Masculino: [
        { nome: 'Artur Moral' },
        { nome: 'Bernardo Matias' },
        { nome: 'Bruno Schmoller' },
        { nome: 'Caio Santos' },
        { nome: 'Cauã Loutfi' },
        { nome: 'Daniel Hun' },
        { nome: 'Davi Gelman' },
        { nome: 'Davi Lima', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Davi Lima.jpg' },
        { nome: 'Diego Diniz' },
        { nome: 'Eduardo Gomiero', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Eduardo Gomiero.jpg' },
        { nome: 'Eduardo Lancellotti', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Eduardo Lancellotti.jpg' },
        { nome: 'Eduardo Makdissi', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Eduardo Makdissi.jpg' },
        { nome: 'Eduardo Wehba' },
        { nome: 'Enrico Barbarini' },
        { nome: 'Enzo Santos' },
        { nome: 'Enzo Thó', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Enzo Thó.jpg' },
        { nome: 'Eric Blinder' },
        { nome: 'Felipe Frias' },
        { nome: 'Felipe Ramos' },
        { nome: 'Francisco Junqueira', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Francisco Junqueira.jpg' },
        { nome: 'Francisco Margarido', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Francisco Margarido.jpg' },
        { nome: 'Frederico Cavalcanti' },
        { nome: 'Giovanni Quinze' },
        { nome: 'Guilherme Pereira' },
        { nome: 'Gustavo De Iasi' },
        { nome: 'Henrique Linge', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Henrique Linge.jpg' },
        { nome: 'Henrique Rossi' },
        { nome: 'João Mencarini' },
        { nome: 'João Panariello', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/João Panariello.jpg' },
        { nome: 'João Paulo Bicudo' },
        { nome: 'João Pedro Coghi' },
        { nome: 'João Pedro Lima' },
        { nome: 'João Victor Mazza', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/João Victor Mazza.jpg' },
        { nome: 'Kadu Yuji', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Kadu Yuji_.jpg' },
        { nome: 'Kaiky Fujimoto', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Kaiky Fujimoto.jpg' },
        { nome: 'Léo Ripper' },
        { nome: 'Leonardo Chiarizzi' },
        { nome: 'Leonardo Escobar' },
        { nome: 'Lorenzo Fuchs' },
        { nome: 'Lucas Fernandes' },
        { nome: 'Lucas Jeff', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Lucas Jeff.jpg' },
        { nome: 'Lucas Prado', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Lucas Prado_.jpg' },
        { nome: 'Lucas Zanetti' },
        { nome: 'Luis Henrique Flaquer' },
        { nome: 'Luiz Antonio Mendonça Neto' },
        { nome: 'Luka Jens' },
        { nome: 'Marcos Faria' },
        { nome: 'Matheus Gonçalves' },
        { nome: 'Matheus Quay' },
        { nome: 'Matteo Conrado', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Matteo Conrado.jpg' },
        { nome: 'Michel Sassoun' },
        { nome: 'Nickolas Moran' },
        { nome: 'Nicolas Klemperer' },
        { nome: 'Nikolas Gomes' },
        { nome: 'Otavio Luiz' },
        { nome: 'Pedro Albuquerque' },
        { nome: 'Pedro Consani' },
        { nome: 'Pedro Henrique Barbosa' },
        { nome: 'Pedro Kerbauy' },
        { nome: 'Pedro Nogueira', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Pedro Nogueira.jpg' },
        { nome: 'Pedro Toniolo' },
        { nome: 'Pedro Vasconcelos' },
        { nome: 'Rafael Siqueira' },
        { nome: 'Raí Akio', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Raí Akio.jpg' },
        { nome: 'Raphael Storino', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Raphael Storino.jpg' },
        { nome: 'Rodrigo Barros' },
        { nome: 'Rodrigo Berezin', foto: 'images/atletas-rosto/futebol-de-campo/Masculino/Rodrigo Berezin.jpg' },
        { nome: 'Thiago Giacomo' },
        { nome: 'Thiago Santos' },
        { nome: 'Valter Pereira' },
        { nome: 'Vitor Di Sessa' },
        { nome: 'Vitor Rossa' }
      ]
    },
    futsal: {
      Feminino: [
        { nome: 'Alice Baracui' },
        { nome: 'Alice Marinho', foto: 'images/atletas-rosto/futsal/Feminino/Alice Marinho.jpg' },
        { nome: 'Alice Schalka', foto: 'images/atletas-rosto/futsal/Feminino/Alice Schalka.jpg' },
        { nome: 'Amanda Decoussau' },
        { nome: 'Ana Carolina Schramm', foto: 'images/atletas-rosto/futsal/Feminino/Ana Carolina Schramm.jpg' },
        { nome: 'Ana Nassar', foto: 'images/atletas-rosto/futsal/Feminino/Ana Nassar.jpg' },
        { nome: 'Beatriz Lallo' },
        { nome: 'Carolina Sudano' },
        { nome: 'Christina Sodré', foto: 'images/atletas-rosto/futsal/Feminino/Christina Sodré.jpg' },
        { nome: 'Clara Junqueira', foto: 'images/atletas-rosto/futsal/Feminino/Clara Junqueira.jpg' },
        { nome: 'Elisa Chadad' },
        { nome: 'Elisa Moreira', foto: 'images/atletas-rosto/futsal/Feminino/Elisa Moreira.jpg' },
        { nome: 'Gabriela Angelotti', foto: 'images/atletas-rosto/futsal/Feminino/Gabriela Angelotti.jpg' },
        { nome: 'Gabriela Baptista' },
        { nome: 'Helena Vinholis', foto: 'images/atletas-rosto/futsal/Feminino/Helena Vinholis_.jpg' },
        { nome: 'Júlia Simão' },
        { nome: 'Juliana Moreira' },
        { nome: 'Karina Arazi', foto: 'images/atletas-rosto/futsal/Feminino/Karina Arazi.jpg' },
        { nome: 'Larissa Monteiro', foto: 'images/atletas-rosto/futsal/Feminino/Larissa Monteiro.jpg' },
        { nome: 'Luiza Ferreira', foto: 'images/atletas-rosto/futsal/Feminino/Luiza Ferreira.jpg' },
        { nome: 'Maike Lasser' },
        { nome: 'Maria Fragoso' },
        { nome: 'Maria Julia Centim', foto: 'images/atletas-rosto/futsal/Feminino/Maria Julia Centim.jpg' },
        { nome: 'Maria Mercadante' },
        { nome: 'Mariana Clerici', foto: 'images/atletas-rosto/futsal/Feminino/Mariana Clerici.jpg' },
        { nome: 'Mariana Pimentel', foto: 'images/atletas-rosto/futsal/Feminino/Mariana Pimentel.jpg' },
        { nome: 'Nicole Linhares', foto: 'images/atletas-rosto/futsal/Feminino/Nicole Linhares.jpg' },
        { nome: 'Thamires Louverde', foto: 'images/atletas-rosto/futsal/Feminino/Thamires Louverde.jpg' }
      ],
      Masculino: [
        { nome: 'Beny Tcherniakovsky' },
        { nome: 'Bruno Schmoller' },
        { nome: 'Caio Do Val' },
        { nome: 'Caio Iasaka' },
        { nome: 'Caio Santos' },
        { nome: 'Cauã Loutfi' },
        { nome: 'Daiki Chikaraishi' },
        { nome: 'Diego Diniz' },
        { nome: 'Diego Fernandes' },
        { nome: 'Enrico Anacleto' },
        { nome: 'Felipe Tonalezi', foto: 'images/atletas-rosto/futsal/Masculino/Felipe Tonalezi.jpg' },
        { nome: 'Francisco Paes Leme' },
        { nome: 'Gustavo Garone', foto: 'images/atletas-rosto/futsal/Masculino/Gustavo Garone.jpg' },
        { nome: 'João Mencarini' },
        { nome: 'Kadu Nagamine' },
        { nome: 'Léo Ripper' },
        { nome: 'Leonardo Escobar' },
        { nome: 'Mateus Decimoni' },
        { nome: 'Pedro Baptista' },
        { nome: 'Pedro Henrique Dias' },
        { nome: 'Pedro Henrique Lizarzaburu' },
        { nome: 'Pedro Henrique Queiroz' },
        { nome: 'Pedro Kerbauy' },
        { nome: 'Raí Nagamine' }
      ]
    },
    handebol: {
      Feminino: [
        { nome: 'Ayla Yilmaz', foto: 'images/atletas-rosto/handebol/Feminino/Ayla Yilmaz_.jpg' },
        { nome: 'Bettina Kalassa', foto: 'images/atletas-rosto/handebol/Feminino/Bettina Kalassa.jpg' },
        { nome: 'Bianca Mathias', foto: 'images/atletas-rosto/handebol/Feminino/Bianca Mathias_.jpg' },
        { nome: 'Camila Duarte', foto: 'images/atletas-rosto/handebol/Feminino/Camila Duarte_.jpg' },
        { nome: 'Camila Kishi' },
        { nome: 'Candice Schlesser', foto: 'images/atletas-rosto/handebol/Feminino/Candice Schlesser.jpg' },
        { nome: 'Carolina Bortot', foto: 'images/atletas-rosto/handebol/Feminino/Carolina Bortot.jpg' },
        { nome: 'Carolina Boulos', foto: 'images/atletas-rosto/handebol/Feminino/Carolina Boulos.jpg' },
        { nome: 'Carolina Fodor', foto: 'images/atletas-rosto/handebol/Feminino/Carolina Fodor.jpg' },
        { nome: 'Carolina Lima', foto: 'images/atletas-rosto/handebol/Feminino/Carolina Lima_.jpg' },
        { nome: 'Catarina Dos Santos', foto: 'images/atletas-rosto/handebol/Feminino/Catarina Dos Santos.jpg' },
        { nome: 'Elis Suzuki', foto: 'images/atletas-rosto/handebol/Feminino/Elis Suzuki.jpg' },
        { nome: 'Giovanna de Miranda', foto: 'images/atletas-rosto/handebol/Feminino/Giovanna de Miranda_.jpg' },
        { nome: 'Giulia Grotti', foto: 'images/atletas-rosto/handebol/Feminino/Giulia Crisi Grotti.jpg' },
        { nome: 'Helena Rodrigues', foto: 'images/atletas-rosto/handebol/Feminino/Helena Rodrigues_.jpg' },
        { nome: 'Isabela Pinho', foto: 'images/atletas-rosto/handebol/Feminino/Isabela Pinho.jpg' },
        { nome: 'Julia Bonfanti', foto: 'images/atletas-rosto/handebol/Feminino/Julia Bonfanti.jpg' },
        { nome: 'Julia Branco' },
        { nome: 'Julia Comar', foto: 'images/atletas-rosto/handebol/Feminino/Júlia Comar.jpg' },
        { nome: 'Júlia Saba' },
        { nome: 'Luana Sverzut', foto: 'images/atletas-rosto/handebol/Feminino/Luana Sverzut.jpg' },
        { nome: 'Luísa Pereira', foto: 'images/atletas-rosto/handebol/Feminino/Luísa Pereira_.jpg' },
        { nome: 'Luiza Paiva', foto: 'images/atletas-rosto/handebol/Feminino/Luiza Paiva_.jpg' },
        { nome: 'Malu Ernesto', foto: 'images/atletas-rosto/handebol/Feminino/Malu Ernesto_.jpg' },
        { nome: 'Manuela Chade', foto: 'images/atletas-rosto/handebol/Feminino/Manuela Chade.jpg' },
        { nome: 'Marcela Pereira', foto: 'images/atletas-rosto/handebol/Feminino/Marcela Pereira.jpg' },
        { nome: 'Maria Julia Trevisi', foto: 'images/atletas-rosto/handebol/Feminino/Maria Julia Trevisi.jpg' },
        { nome: 'Maria Laura Santos' },
        { nome: 'Maria Meraz', foto: 'images/atletas-rosto/handebol/Feminino/Maria Meraz.jpg' },
        { nome: 'Sara Leopoldo', foto: 'images/atletas-rosto/handebol/Feminino/Sara Leopoldo_.jpg' },
        { nome: 'Sofia Junqueira', foto: 'images/atletas-rosto/handebol/Feminino/Sofia Junqueira.jpg' },
        { nome: 'Sofia Tommasini', foto: 'images/atletas-rosto/handebol/Feminino/Sofia Tommasini_.jpg' },
        { nome: 'Vittoria Padula' }
      ],
      Masculino: [
        { nome: 'Antônio Fileti', foto: 'images/atletas-rosto/handebol/Masculino/Antônio Fileti.jpg' },
        { nome: 'Antonio Soban' },
        { nome: 'Breno Mello' },
        { nome: 'Bruno Gonzaga' },
        { nome: 'Daniel Frigini' },
        { nome: 'Diego Nunes' },
        { nome: 'Enrico Romariz', foto: 'images/atletas-rosto/handebol/Masculino/Enrico Romariz_.jpg' },
        { nome: 'Fernando Fischer', foto: 'images/atletas-rosto/handebol/Masculino/Fernando Fischer.jpg' },
        { nome: 'Gabriel Elyseu', foto: 'images/atletas-rosto/handebol/Masculino/Gabriel Elyseu.jpg' },
        { nome: 'Gabriel Lima' },
        { nome: 'Gian Carlo Evaso' },
        { nome: 'Giuliano Bove', foto: 'images/atletas-rosto/handebol/Masculino/Giuliano Bove.jpg' },
        { nome: 'Henrique Milani' },
        { nome: 'Henrique Souza' },
        { nome: 'João Guilherme Prata' },
        { nome: 'João Guilherme Santos' },
        { nome: 'João Mello' },
        { nome: 'João Pedro Lima', foto: 'images/atletas-rosto/handebol/Masculino/João Pedro Lima.jpg' },
        { nome: 'João Pedro Negreiros' },
        { nome: 'Leonardo Miyoshi' },
        { nome: 'Lorenzo Braguini', foto: 'images/atletas-rosto/handebol/Masculino/Lorenzo Braguini_.jpg' },
        { nome: 'Luca Giovanetti', foto: 'images/atletas-rosto/handebol/Masculino/Luca Giovanetti.jpg' },
        { nome: 'Luca Glorigiano', foto: 'images/atletas-rosto/handebol/Masculino/Luca Glorigiano_.jpg' },
        { nome: 'Lucas Porto' },
        { nome: 'Marcelo Blanco', foto: 'images/atletas-rosto/handebol/Masculino/Marcelo Blanco_.jpg' },
        { nome: 'Natan Katekaru' },
        { nome: 'Noah Graf' },
        { nome: 'Rodrigo Santos' },
        { nome: 'Teodoro Moraes' },
        { nome: 'Tomás Trinca' },
        { nome: 'Valentin Pavlovic' },
        { nome: 'Vito Cardone' }
      ]
    },
    'jiu-jitsu': {
      Feminino: [
        { nome: 'Ana Laura Penteado', foto: 'images/atletas-rosto/jiu-jitsu/Feminino/Ana Laura Penteado_.jpg' },
        { nome: 'Mayara Aline', foto: 'images/atletas-rosto/jiu-jitsu/Feminino/Mayara Aline_.jpg' }
      ],
      Masculino: [
        { nome: 'Bernardo Lorch', foto: 'images/atletas-rosto/jiu-jitsu/Masculino/Bernardo Lorch.jpg' },
        { nome: 'Enzo Fredi', foto: 'images/atletas-rosto/jiu-jitsu/Masculino/Enzo Fredi_.jpg' },
        { nome: 'Erich Dutzmann' },
        { nome: 'Felipe Whitaker', foto: 'images/atletas-rosto/jiu-jitsu/Masculino/Felipe Whitaker_.jpg' },
        { nome: 'João Pedro Serafim', foto: 'images/atletas-rosto/jiu-jitsu/Masculino/João Pedro Serafim_.jpg' },
        { nome: 'Tomas de Sá Costa', foto: 'images/atletas-rosto/jiu-jitsu/Masculino/Tomas de Sá Costa_.jpg' }
      ]
    },
    judo: {
      Masculino: [
        { nome: 'David Herszkowicz', foto: 'images/atletas-rosto/judo/Masculino/David Herszkowicz_.jpg' },
        { nome: 'Enzo Fredi', foto: 'images/atletas-rosto/judo/Masculino/Enzo Fredi_.jpg' },
        { nome: 'Felipe Whitaker', foto: 'images/atletas-rosto/judo/Masculino/Felipe Whitaker_.jpg' },
        { nome: 'Gabriel Cavasin', foto: 'images/atletas-rosto/judo/Masculino/Gabriel Cavasin.jpg' },
        { nome: 'Pedro Henrique Lima' }
      ]
    },
    natacao: {
      Misto: [
        { nome: 'Alice Centurion', foto: 'images/atletas-rosto/natacao/Feminino/Alice Centurion.jpg' },
        { nome: 'André Guedes', foto: 'images/atletas-rosto/natacao/Masculino/André Guedes.jpg' },
        { nome: 'Arthur Oliveira' },
        { nome: 'Artur Passos', foto: 'images/atletas-rosto/natacao/Masculino/Artur Passos.jpg' },
        { nome: 'Atleta', foto: 'images/atletas-rosto/natacao/Feminino/FGV-41.jpg' },
        { nome: 'Bruna Carvalho', foto: 'images/atletas-rosto/natacao/Feminino/Bruna Carvalho.jpg' },
        { nome: 'Carolina Ferraz', foto: 'images/atletas-rosto/natacao/Feminino/Carolina Ferraz.jpg' },
        { nome: 'Diogo Ascariz' },
        { nome: 'Elis Suzuki', foto: 'images/atletas-rosto/natacao/Feminino/Elis Suzuki.jpg' },
        { nome: 'Fernanda Coti' },
        { nome: 'Francisco Heck', foto: 'images/atletas-rosto/natacao/Masculino/Francisco Heck.jpg' },
        { nome: 'Gabriel Colpas' },
        { nome: 'Guilherme Carneiro', foto: 'images/atletas-rosto/natacao/Masculino/Guilherme Carneiro.jpg' },
        { nome: 'Gustavo Bodon' },
        { nome: 'Isabela Martins', foto: 'images/atletas-rosto/natacao/Feminino/Isabela Martins.jpg' },
        { nome: 'Isabella Barrera', foto: 'images/atletas-rosto/natacao/Feminino/Isabella Barrera.jpg' },
        { nome: 'José Eduardo Sanz' },
        { nome: 'Julia Dente', foto: 'images/atletas-rosto/natacao/Feminino/Julia Dente.jpg' },
        { nome: 'Julio Turolla' },
        { nome: 'Lara Moura', foto: 'images/atletas-rosto/natacao/Feminino/Lara Moura.jpg' },
        { nome: 'Laura Cervone' },
        { nome: 'Leonardo Cardoso' },
        { nome: 'Luísa de Freitas', foto: 'images/atletas-rosto/natacao/Feminino/Luísa de Freitas.jpg' },
        { nome: 'Luisa Simon' },
        { nome: 'Manuela Baptistella', foto: 'images/atletas-rosto/natacao/Feminino/Manuela Baptistella.jpg' },
        { nome: 'Matheus Chahin', foto: 'images/atletas-rosto/natacao/Masculino/Matheus Chahin.jpg' },
        { nome: 'Matheus Papa', foto: 'images/atletas-rosto/natacao/Masculino/Matheus Papa.jpg' },
        { nome: 'Pedro Davis' },
        { nome: 'Pedro Juliao', foto: 'images/atletas-rosto/natacao/Masculino/Pedro Julião_.jpg' },
        { nome: 'Rafael Ferreira' },
        { nome: 'Sara Ferreira' },
        { nome: 'Seiji Sakamoto', foto: 'images/atletas-rosto/natacao/Masculino/Seiji Sakamoto.jpg' },
        { nome: 'Thales', foto: 'images/atletas-rosto/natacao/Masculino/Thales.jpg' }
      ]
    },
    rugby: {
      Feminino: [
        { nome: 'Ana Karoline Santos', foto: 'images/atletas-rosto/rugby/Feminino/Ana Karoline Santos.jpg' },
        { nome: 'Ana Luíza Tabosa' },
        { nome: 'Beatriz Loncan' },
        { nome: 'Bruna Bento', foto: 'images/atletas-rosto/rugby/Feminino/Bruna Bento.jpg' },
        { nome: 'Bruna Kita', foto: 'images/atletas-rosto/rugby/Feminino/Bruna Kita.jpg' },
        { nome: 'Bruna Mattos', foto: 'images/atletas-rosto/rugby/Feminino/Bruna Mattos.jpg' },
        { nome: 'Carolina Vieira' },
        { nome: 'Celina Lebeis', foto: 'images/atletas-rosto/rugby/Feminino/Celina Lebeis.jpg' },
        { nome: 'Fernanda Soares', foto: 'images/atletas-rosto/rugby/Feminino/Fernanda Soares.jpg' },
        { nome: 'Giovanna Battaglia' },
        { nome: 'Giovanna Moreira' },
        { nome: 'Joana Guerra' },
        { nome: 'Julia Bernardes' },
        { nome: 'Júlia Ferreira', foto: 'images/atletas-rosto/rugby/Feminino/Júlia Ferreira.jpg' },
        { nome: 'Júlia Freitas', foto: 'images/atletas-rosto/rugby/Feminino/Júlia Freitas.jpg' },
        { nome: 'Júlia Oliveira' },
        { nome: 'Larissa Cardoso', foto: 'images/atletas-rosto/rugby/Feminino/Larissa Cardoso.jpg' },
        { nome: 'Laura Coronado' },
        { nome: 'Luiza Andrade', foto: 'images/atletas-rosto/rugby/Feminino/Luiza Andrade.jpg' },
        { nome: 'Luiza Loeb' },
        { nome: 'Maitê Paulino', foto: 'images/atletas-rosto/rugby/Feminino/Maitê Paulino.jpg' },
        { nome: 'Mariana Barbaric', foto: 'images/atletas-rosto/rugby/Feminino/Mariana Barbaric.jpg' },
        { nome: 'Mariana Cabral', foto: 'images/atletas-rosto/rugby/Feminino/Mariana Cabral.jpg' },
        { nome: 'Marina Nogueira', foto: 'images/atletas-rosto/rugby/Feminino/Marina Nogueira.jpg' },
        { nome: 'Nicole Kozlowski' },
        { nome: 'Sophia Carvalho', foto: 'images/atletas-rosto/rugby/Feminino/Sophia Carvalho.jpg' },
        { nome: 'Valentina Chaccur' },
        { nome: 'Victoria Ji Won', foto: 'images/atletas-rosto/rugby/Feminino/Victoria Ji Won.jpg' },
        { nome: 'Vitória Nassar' }
      ],
      Masculino: [
        { nome: 'Aariz Bapoo' },
        { nome: 'Ademir Santos Junior' },
        { nome: 'Alliaume Chouteau' },
        { nome: 'Andrew Phillips', foto: 'images/atletas-rosto/rugby/Masculino/Andrew Phillips_.jpg' },
        { nome: 'Augusto Rodrigues', foto: 'images/atletas-rosto/rugby/Masculino/Augusto Rodrigues.jpg' },
        { nome: 'Bernardo Pallerosi', foto: 'images/atletas-rosto/rugby/Masculino/Bernardo Pallerosi.jpg' },
        { nome: 'Breno Carvalho' },
        { nome: 'Carlos Gonzales' },
        { nome: 'Edson Gaidzinski III' },
        { nome: 'Enrique Santin', foto: 'images/atletas-rosto/rugby/Masculino/Enrique Santin.jpg' },
        { nome: 'Enzo Vanzan', foto: 'images/atletas-rosto/rugby/Masculino/Enzo Vanzan.jpg' },
        { nome: 'Eric Frenzei', foto: 'images/atletas-rosto/rugby/Masculino/Eric Frenzei.jpg' },
        { nome: 'Felipe Liu', foto: 'images/atletas-rosto/rugby/Masculino/Felipe Liu_.jpg' },
        { nome: 'Felipe Schneider' },
        { nome: 'Filipe Barbosa', foto: 'images/atletas-rosto/rugby/Masculino/Filipe Barbosa_.jpg' },
        { nome: 'Francisco Paschoal' },
        { nome: 'Gabriel Girard', foto: 'images/atletas-rosto/rugby/Masculino/Gabriel Girard.jpg' },
        { nome: 'Gabriel Santos' },
        { nome: 'Guilherme Vidal' },
        { nome: 'Gustavo Jen' },
        { nome: 'Gustavo Teles', foto: 'images/atletas-rosto/rugby/Masculino/Gustavo Teles_.jpg' },
        { nome: 'João Cury' },
        { nome: 'João Pedro Neves' },
        { nome: 'João Pedro Souza', foto: 'images/atletas-rosto/rugby/Masculino/João Pedro Souza.jpg' },
        { nome: 'João Pedro Vergolino', foto: 'images/atletas-rosto/rugby/Masculino/João Pedro Vergolino.jpg' },
        { nome: 'João Victor Barros', foto: 'images/atletas-rosto/rugby/Masculino/João Victor Barros.jpg' },
        { nome: 'João Vito Polla' },
        { nome: 'Leonardo Peloggia' },
        { nome: 'Lorenzo Paixão', foto: 'images/atletas-rosto/rugby/Masculino/Lorenzo Paixão.jpg' },
        { nome: 'Luís Henrique Valle' },
        { nome: 'Mateus Bicudo', foto: 'images/atletas-rosto/rugby/Masculino/Mateus Bicudo.jpg' },
        { nome: 'Matheus Elias', foto: 'images/atletas-rosto/rugby/Masculino/Matheus Elias.jpg' },
        { nome: 'Matthieu Fleury' },
        { nome: 'Miguel Luiz Silva', foto: 'images/atletas-rosto/rugby/Masculino/Miguel Luiz Silva.jpg' },
        { nome: 'Oliver Rath' },
        { nome: 'Paulo Carvalho', foto: 'images/atletas-rosto/rugby/Masculino/Paulo Eduardo Carvalho.jpg' },
        { nome: 'Pedro Henrique de Assis', foto: 'images/atletas-rosto/rugby/Masculino/Pedro Henrique de Assis.jpg' },
        { nome: 'Pedro Medeiros' },
        { nome: 'Pedro Morante' },
        { nome: 'Rafael Brito' },
        { nome: 'Rafael Orselli', foto: 'images/atletas-rosto/rugby/Masculino/Rafael Orselli.jpg' },
        { nome: 'Rafael Quintero' },
        { nome: 'Rafael Seo' },
        { nome: 'Tomás Feitosa', foto: 'images/atletas-rosto/rugby/Masculino/Tomás Feitosa.jpg' }
      ]
    },
    'tenis-de-campo': {
      Misto: [
        { nome: 'Alexandre Jubram', foto: 'images/atletas-rosto/tenis-de-campo/Masculino/Alexandre Jubram.jpg' },
        { nome: 'Cecília Frederico', foto: 'images/atletas-rosto/tenis-de-campo/Feminino/Cecília Frederico_.jpg' },
        { nome: 'Felipe Bueno' },
        { nome: 'Filippo Ralid' },
        { nome: 'Guilherme Caldeira' },
        { nome: 'Gustavo Schaeffer' },
        { nome: 'Juliana Amaral', foto: 'images/atletas-rosto/tenis-de-campo/Feminino/Juliana Amaral.jpg' },
        { nome: 'Juliana Munhoz' },
        { nome: 'Luisa Pinto' },
        { nome: 'Luiza Garmendia', foto: 'images/atletas-rosto/tenis-de-campo/Feminino/Luiza Garmendia.jpg' },
        { nome: 'Marina Andrade', foto: 'images/atletas-rosto/tenis-de-campo/Feminino/Marina Andrade_.jpg' }
      ]
    },
    'tenis-de-mesa': {
      Misto: [
        { nome: 'Bernardo Bressan' },
        { nome: 'Carolina Kise' },
        { nome: 'Isabela Sassatani', foto: 'images/atletas-rosto/tenis-de-mesa/Feminino/Isabela Sassatani.jpg' },
        { nome: 'João Pedro Bersi' },
        { nome: 'Mateus Coscelli', foto: 'images/atletas-rosto/tenis-de-mesa/Masculino/Mateus Coscelli.jpg' },
        { nome: 'Pedro Henrique de Almeida', foto: 'images/atletas-rosto/tenis-de-mesa/Masculino/Pedro Henrique de Almeida.jpg' },
        { nome: 'Sol Lee Min', foto: 'images/atletas-rosto/tenis-de-mesa/Feminino/Sol Lee Min.jpg' },
        { nome: 'Thiago Suenaga' }
      ]
    },
    volei: {
      Feminino: [
        { nome: 'Alice De Marco' },
        { nome: 'Alissa Guttmann' },
        { nome: 'Ana Clara Cardoso', foto: 'images/atletas-rosto/volei/Feminino/Ana Clara Cardoso.jpg' },
        { nome: 'Carolina Lima' },
        { nome: 'Fernanda Ishii' },
        { nome: 'Julia Comar' },
        { nome: 'Júlia Ferraro' },
        { nome: 'Juliana Chalita', foto: 'images/atletas-rosto/volei/Feminino/Júlia Chalita.jpg' },
        { nome: 'Laís Alvarez' },
        { nome: 'Lais Swioklo', foto: 'images/atletas-rosto/volei/Feminino/Laís Swioklo.jpg' },
        { nome: 'Letícia Oliveira', foto: 'images/atletas-rosto/volei/Feminino/Letícia Oliveira.jpg' },
        { nome: 'Ludmilla Bueno' },
        { nome: 'Maria Isabel Maciel' },
        { nome: 'Maria Luiza Brandina' },
        { nome: 'Mariana Kawabe' },
        { nome: 'Mariana Santos' },
        { nome: 'Marina Binetti' },
        { nome: 'Martina Cadier' },
        { nome: 'Nicole Herszkowicz' },
        { nome: 'Raquel Tedeschi' },
        { nome: 'Sofia Barros' },
        { nome: 'Sofia Coutinho' },
        { nome: 'Valentina Rosalba' }
      ],
      Masculino: [
        { nome: 'Arthur Marçal', foto: 'images/atletas-rosto/volei/Masculino/Arthur Marçal.jpg' },
        { nome: 'Diogo Ascariz' },
        { nome: 'Fernando Ferraz' },
        { nome: 'Gabriel Palulian', foto: 'images/atletas-rosto/volei/Masculino/Gabriel Palulian.jpg' },
        { nome: 'Gustavo Lamarca', foto: 'images/atletas-rosto/volei/Masculino/Gustavo Lamarca_.jpg' },
        { nome: 'Henrique Oda' },
        { nome: 'João Eduardo Simão', foto: 'images/atletas-rosto/volei/Masculino/João Eduardo Simão.jpg' },
        { nome: 'João Miguel Grossmann', foto: 'images/atletas-rosto/volei/Masculino/João Miguel Grossmann.jpg' },
        { nome: 'José Eduardo Antunes', foto: 'images/atletas-rosto/volei/Masculino/José Eduardo Antunes.jpg' },
        { nome: 'Lucas Rocca', foto: 'images/atletas-rosto/volei/Masculino/Lucas Rocca_.jpg' },
        { nome: 'Otávio de Melo', foto: 'images/atletas-rosto/volei/Masculino/Otávio de Melo_.jpg' },
        { nome: 'Pedro Aguado' },
        { nome: 'Pedro Faim', foto: 'images/atletas-rosto/volei/Masculino/Pedro Faim_.jpg' },
        { nome: 'Pedro Moraes' },
        { nome: 'Rafael Monteiro' },
        { nome: 'Teodoro Souza', foto: 'images/atletas-rosto/volei/Masculino/Teodoro Souza.jpg' },
        { nome: 'Thomás Tavares' },
        { nome: 'Vinicius Lopes' },
        { nome: 'Vinicius Pastana', foto: 'images/atletas-rosto/volei/Masculino/Vinicius Pastana.jpg' }
      ]
    },
    xadrez: {
      Masculino: [
        { nome: 'André Barros Filho' },
        { nome: 'Pedro Patriarca' },
        { nome: 'Rafael Chagas' }
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
      imagem: 'images/FOTOS NOTÍCIAS/araxas noticia.png.webp',
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
      id: 5,
      categoria: 'Esportes',
      titulo: 'É CAMPEÃO! FGV vira sobre o Insper e conquista o título do NDU no Handebol Masculino',
      data: '2026-09-18',
      imagem: 'images/FOTOS NOTÍCIAS/hm ndu 26.1.jpg',
      imagemPosicao: '25% center',
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
      id: 1,
      categoria: 'Esportes',
      titulo: 'O IMPOSSÍVEL CAIU! FGV vira sobre a UNIP e escreve uma noite histórica no Vôlei Feminino',
      data: '2026-09-18',
      imagem: 'images/FOTOS NOTÍCIAS/vf ndu 26.1.jpg',
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
    },
    {
      id: 6,
      categoria: 'Parcerias',
      titulo: 'Alpes Saúde Esportiva',
      data: '2026-09-14',
      imagem: 'images/FOTOS NOTÍCIAS/Alpes noticia.png',
      resumo: 'A AAAGV mantém parceria com a Alpes Saúde Esportiva, clínica de medicina esportiva, ortopedia, fisioterapia e nutrição, com desconto para alunos da FGV.',
      corpo: [
        'A Atlética Fundação Getulio Vargas mantém parceria com a Alpes Saúde Esportiva, clínica especializada em medicina esportiva, ortopedia, fisioterapia e nutrição. Todos os alunos da FGV têm acesso a desconto em sessões de fisioterapia, bastando apenas mostrar a carteirinha.',
        'Além do benefício oferecido aos alunos, a Alpes também atuou diretamente no suporte aos atletas da AAAGV durante as Economíadas. Ao longo da competição, os atletas podem chegar a disputar jogos em até três dias seguidos, e a recuperação é importante para manter o alto desempenho ao longo dos jogos. A parceria também conta com a nova área de nutrição, oferecendo ainda mais suporte aos atletas.',
        'Para conhecer mais sobre a Alpes, basta buscar no Instagram @alpes.saudeesportiva.'
      ],
      autor: 'José Eduardo Sanz'
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
