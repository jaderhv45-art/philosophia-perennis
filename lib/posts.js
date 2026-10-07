export const categories = ["Estoicismo", "Aristotelianismo", "Metafísica", "Ensaios Contemporâneos"];

export const author = {
  name: "Martinho Fleck",
  role: "56 anos de experiência empresarial & 14 anos de estudos em Filosofia",
  bio: "56 anos de experiência empresarial & 14 anos de estudos em Filosofia",
};

// Blocos: p | h2 | h3 | quote (com cite opcional) | list (simples ou numerada).
// Notas de rodapé: marque [^1] no texto e preencha o array "notes".
export const posts = [
  {
    slug: "a-coragem-na-adversidade-seneca-empreendedor",
    title: "A Coragem na Adversidade: O Que Sêneca Ensina ao Empreendedor Brasileiro",
    category: "Ensaios Contemporâneos",
    date: "2026-10-07",
    readTime: 6, // número: os componentes acrescentam "min de leitura"
    excerpt:
      "Um manifesto sobre a preservação da lucidez e da força geradora de valor diante dos cercos institucionais e econômicos.",
    featured: true,
    content: [
      {
        t: "quote",
        v: "A pressão da adversidade não afeta a mente de um homem corajoso; pois a mente de um homem corajoso mantém seu equilíbrio e lança sua própria perspectiva sobre tudo o que acontece, porque é mais poderosa do que quaisquer circunstâncias externas.",
        cite: "Sêneca, Cartas a Lucílio",
      },
      {
        t: "p",
        v: "Quando o filósofo estoico Sêneca escreveu estas palavras, há quase dois milênios, ele refletia sobre a capacidade da alma humana de permanecer soberana em tempos de tirania e instabilidade. Ele falava sobre a importância vital de não permitir que o caos externo destrua a ordem interna. Ao aplicarmos essa sabedoria ao Brasil contemporâneo, a frase ganha o peso de um manifesto de sobrevivência para quem produz e constrói neste país.",
      },
      {
        t: "p",
        v: "O ecossistema produtivo brasileiro — composto pelo pequeno e médio empresário em aliança diária com o trabalhador — vive sob constante estado de cerco. De um lado, a força de trabalho enfrenta a perda contínua do poder de compra e a limitação de oportunidades. Do outro, o empreendedor batalha diariamente para manter as portas abertas enquanto digere a complexidade do chamado “Custo Brasil”: burocracia sufocante, insegurança jurídica crônica e uma máquina fiscal que arrecada em níveis de primeiro mundo, mas devolve serviços de péssima qualidade.",
      },
      {
        t: "p",
        v: "Nesse cenário hostil, é tentador ser capturado pela indignação passiva ou pelo desespero. O verdadeiro risco, contudo, não reside apenas no impacto financeiro das regras abusivas ou da ganância estatal; o risco maior é o da contaminação mental. Quando o sistema viciado nos convence de que o esforço honesto é inútil, ele ganha a batalha cultural e psicológica.",
      },

      { t: "h2", v: "O cerne do problema: o confisco do valor criado" },
      {
        t: "p",
        v: "O trabalhador e o pequeno e médio empresário não ocupam lados opostos na economia real; eles compartilham a mesma trincheira. É a união entre a capacidade de gestão do empreendedor e a força executora do trabalhador que gera a verdadeira riqueza da nação.",
      },
      {
        t: "p",
        v: "No entanto, o Estado opera frequentemente como um sócio oculto e predatório. Ele exige fatias expressivas da riqueza gerada antes mesmo que a empresa aufira lucro ou que o trabalhador leve o pão para casa. Essa engrenagem suga a energia vital do setor produtivo para sustentar privilégios, ineficiências e estruturas hipertrofiadas, enfraquecendo a base que sustenta o país.",
      },

      { t: "h2", v: "A resposta estoica: preservar a mente e a ação" },
      {
        t: "p",
        v: "É aqui que a lição de Sêneca se torna um alerta urgente. O “homem corajoso” de que fala o filósofo não é aquele que ignora a realidade, mas aquele que recusa ser moldado por ela. Para o empresário e para o trabalhador, manter o equilíbrio e lançar uma perspectiva própria significa exercer três atitudes fundamentais:",
      },
      {
        t: "list",
        ordered: true,
        v: [
          {
            title: "Recusar o Cinismo:",
            text: "O sistema viciado ganha força quando a sociedade aceita a corrupção e a ineficiência como normais. Manter a integridade ética, a transparência e o compromisso com a excelência é o primeiro ato de resistência.",
          },
          {
            title: "Focar na Sobrevivência Estratégica:",
            text: "A mente clara busca eficiência, inovação e rigor operacional. As circunstâncias externas podem limitar margens de lucro, mas não podem tolher a capacidade humana de adaptação, cooperação e criação de valor.",
          },
          {
            title: "Fortalecer a Consciência de Valor:",
            text: "É preciso lembrar constantemente que o Estado não gera riqueza; ele apenas a redistribui ou absorve. Quem gera valor é a iniciativa privada, o trabalho diário, a ideia colocada em prática. Compreender essa dinâmica é essencial para combater narrativas que tentam vilanizar quem produz.",
          },
        ],
      },

      { t: "h2", v: "O alerta: não deixe o sistema definir quem você é" },
      {
        t: "p",
        v: "A maior vitória do ambiente hostil não é o tributo recolhido, mas a apatia instalada. Quando o empresário desiste de inovar ou o trabalhador desiste de se aprimorar por desacreditarem do futuro, a derrota se completa.",
      },
      {
        t: "p",
        v: "Sêneca nos lembra que a mente virtuosa é “mais poderosa do que quaisquer circunstâncias externas”. O momento exige coragem moral e lucidez intelectual. É preciso olhar para o ambiente de negócios no Brasil não com resignação, mas com a determinação de quem sabe que a riqueza gerada pelo trabalho e pelo empreendedorismo é a única força capaz de transformar uma sociedade.",
      },
      {
        t: "p",
        v: "O sistema pode ser viciado, mas a mente de quem constrói o país não precisa — e não deve — ser contaminada por ele.[^1]",
      },
    ],
    notes: [
      "Este artigo integra uma série de reflexões sobre a aplicação da Filosofia Estoica na gestão, liderança e resiliência empresarial frente aos cenários econômicos e institucionais do Brasil.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const fmtDate = (d) =>
  new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
