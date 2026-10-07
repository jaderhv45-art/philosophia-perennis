import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { posts, categories, fmtDate, author } from "@/lib/posts";

export default function Home({ searchParams }) {
  const cat = searchParams?.cat;
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const feed = posts.filter((p) => p.slug !== featured.slug && (!cat || p.category === cat));

  return (
    <>
      <section className="mx-auto max-w-wide px-6 pt-14">
        <Link href={`/posts/${featured.slug}`} className="group grid items-center gap-10 md:grid-cols-2">
          <div className="cover grid aspect-[4/3] place-items-center overflow-hidden rounded-sm border border-line">
            <span className="font-display text-9xl text-accent/40 transition-transform duration-700 group-hover:scale-110">Φ</span>
          </div>
          <div>
            <p className="eyebrow mb-4">Em destaque · {featured.category}</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] transition-colors group-hover:text-accent md:text-6xl">{featured.title}</h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-muted">{featured.excerpt}</p>
            <p className="mt-6 text-sm text-muted">{author.name} · {fmtDate(featured.date)} · {featured.readTime} min de leitura</p>
          </div>
        </Link>
      </section>

      <section id="ensaios" className="mx-auto max-w-wide scroll-mt-20 px-6 pt-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-4">
          <h2 className="font-display text-3xl">{cat ?? "Ensaios recentes"}</h2>
          <div className="flex flex-wrap gap-4 text-xs text-muted">
            <Link href="/#ensaios" className={!cat ? "text-accent" : "hover:text-accent"}>Todos</Link>
            {categories.map((c) => <Link key={c} href={`/?cat=${encodeURIComponent(c)}#ensaios`} className={cat === c ? "text-accent" : "hover:text-accent"}>{c}</Link>)}
          </div>
        </div>
        {feed.length ? (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{feed.map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
        ) : <p className="text-muted">Nenhum ensaio nesta categoria ainda.</p>}
      </section>

      <section id="sobre" className="mx-auto max-w-prose scroll-mt-20 px-6 py-28 text-center">
        <p className="eyebrow mb-4">Manifesto</p>
        <h2 className="font-display text-4xl">Sobre a Philosophia Perennis</h2>
        <p className="mt-6 font-body text-lg leading-[1.75] text-muted">Philosophia perennis é a ideia de que certas verdades sobre o ser, o bem e o sentido reaparecem, com vestes diferentes, em Atenas, Alexandria, Paris e Kyoto. Este espaço reúne ensaios que escutam essa conversa antiga e a trazem, com rigor e sem pressa, ao presente.</p>
      </section>

      <div id="newsletter" className="scroll-mt-16"><Newsletter /></div>
    </>
  );
}
