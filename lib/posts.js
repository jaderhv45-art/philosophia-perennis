export const categories = ["Estoicismo", "Aristotelianismo", "Metafísica", "Ensaios Contemporâneos"];

export const author = {
  name: "Helena Albuquerque",
  bio: "Filósofa e ensaísta. Escreve sobre as tradições que atravessam os séculos sem envelhecer.",
};

// Blocos: p | h2 | h3 | quote | list. Notas de rodapé via [^n] no texto + campo notes.
export const posts = [
  {
    slug: "a-serenidade-como-exercicio",
    title: "A serenidade como exercício, não como estado",
    category: "Estoicismo",
    date: "2026-09-28",
    readTime: 9,
    excerpt: "Os estoicos não prometiam paz: propunham uma disciplina diária de atenção, juízo e desejo.",
    featured: true,
    content: [
      { t: "p", v: "Quando Epicteto falava de tranquilidade, não descrevia um temperamento, mas uma prática.[^1] A serenidade, para ele, era o resultado de um trabalho paciente sobre os próprios juízos." },
      { t: "h2", v: "O que depende de nós" },
      { t: "p", v: "A distinção fundamental do Manual é simples e radical: algumas coisas dependem de nós, outras não. Quase toda angústia nasce de confundir as duas." },
      { t: "quote", v: "Não são as coisas que perturbam os homens, mas os juízos que fazem sobre elas." },
      { t: "h3", v: "Três disciplinas" },
      { t: "list", v: ["Disciplina do desejo: querer apenas o que está ao nosso alcance.", "Disciplina da ação: agir com justiça e senso de comunidade.", "Disciplina do assentimento: examinar cada impressão antes de aceitá-la."] },
      { t: "p", v: "Praticadas à noite, em revisão honesta do dia, essas disciplinas formam o que Marco Aurélio chamou de cidadela interior.[^2]" },
    ],
    notes: ["Epicteto, Encheiridion, §5.", "Marco Aurélio, Meditações, VIII.48."],
  },
  {
    slug: "ato-e-potencia-no-cotidiano",
    title: "Ato e potência no cotidiano",
    category: "Aristotelianismo",
    date: "2026-09-14",
    readTime: 7,
    excerpt: "Uma categoria técnica de Aristóteles que explica por que mudamos e o que significa realizar-se.",
    content: [
      { t: "p", v: "Aristóteles resolveu o antigo problema da mudança com um par de conceitos: potência e ato. A semente é árvore em potência; a árvore é a semente realizada." },
      { t: "h2", v: "Realizar-se" },
      { t: "p", v: "Aplicada à vida humana, a distinção dá sentido à ideia de excelência: tornar-se, pelo hábito, aquilo que já se podia ser." },
      { t: "quote", v: "Somos o que repetidamente fazemos; a excelência é, então, um hábito." },
    ],
    notes: [],
  },
  {
    slug: "o-uno-e-o-multiplo",
    title: "O Uno e o múltiplo: uma metafísica da unidade",
    category: "Metafísica",
    date: "2026-08-30",
    readTime: 12,
    excerpt: "De Plotino a Tomás de Aquino, a intuição de que o ser é, em algum nível, um só.",
    content: [
      { t: "p", v: "A tradição perene sustenta que, sob a diversidade do mundo, há uma unidade de princípio. Plotino a chamou de Uno; os escolásticos, de Ser subsistente." },
      { t: "h2", v: "Emanação e participação" },
      { t: "p", v: "O múltiplo não é ilusão, mas participação: cada coisa é na medida em que partilha de um ser que a excede." },
      { t: "quote", v: "Tudo o que é, é uno na medida em que é." },
    ],
    notes: [],
  },
  {
    slug: "atencao-na-era-da-distracao",
    title: "Atenção na era da distração",
    category: "Ensaios Contemporâneos",
    date: "2026-08-12",
    readTime: 6,
    excerpt: "Por que as antigas técnicas contemplativas voltam a ser urgentes diante das telas.",
    content: [
      { t: "p", v: "Simone Weil escreveu que a atenção é a forma mais rara e pura de generosidade. Num mundo de notificações, essa frase soa quase como um programa político." },
      { t: "h2", v: "Recuperar o foco como virtude" },
      { t: "p", v: "Atenção não é apenas uma capacidade cognitiva: é uma postura moral diante do real. Cultivá-la é uma maneira de amar o que existe." },
    ],
    notes: [],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const fmtDate = (d) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
