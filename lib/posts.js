import Link from "next/link";
import ReadingProgress from "./ReadingProgress";
import ShareButton from "./ShareButton";
import ArticleCard from "./ArticleCard";
import { fmtDate, author, posts } from "@/lib/posts";

// Converte [^n] em referência numerada com link para a nota de rodapé.
const withNotes = (text) =>
  text.split(/(\[\^\d+\])/).map((part, i) => {
    const m = part.match(/\[\^(\d+)\]/);
    return m ? (
      <sup key={i}>
        <a id={`ref-${m[1]}`} href={`#nota-${m[1]}`} className="px-0.5 text-accent no-underline">{m[1]}</a>
      </sup>
    ) : (
      part
    );
  });

function Block({ b }) {
  switch (b.t) {
    case "h2":
      return <h2>{b.v}</h2>;
    case "h3":
      return <h3>{b.v}</h3>;
    case "quote":
      return (
        <blockquote className="pull">
          {b.v}
          {b.cite && (
            <footer className="mt-3 font-sans text-xs not-italic uppercase tracking-[0.18em] text-muted">
              — {b.cite}
            </footer>
          )}
        </blockquote>
      );
    case "list":
      return b.ordered ? (
        <ol className="mb-8 space-y-5">
          {b.v.map((it, i) => (
            <li key={i} className="relative pl-10 before:hidden">
              <span className="absolute left-0 top-0 font-display text-2xl leading-none text-accent">{i + 1}.</span>
              <strong className="font-semibold">{it.title}</strong> {it.text}
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {b.v.map((li, i) => (
            <li key={i}>{typeof li === "string" ? li : `${li.title} ${li.text}`}</li>
          ))}
        </ul>
      );
    default:
      return <p>{withNotes(b.v)}</p>;
  }
}

export default function PostView({ post }) {
  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <article className="px-6 pt-16">
        <header className="mx-auto max-w-prose text-center">
          <Link href={`/?cat=${encodeURIComponent(post.category)}#ensaios`} className="eyebrow">{post.category}</Link>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] md:text-6xl">{post.title}</h1>
          <p className="mt-5 font-body text-xl italic text-muted">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted">
            {author.name} · {fmtDate(post.date)} · {post.readTime} min de leitura
          </p>
        </header>

        <div className="cover mx-auto mt-12 grid aspect-[21/9] max-w-wide place-items-center rounded-sm border border-line">
          <span className="font-display text-8xl text-accent/40">Φ</span>
        </div>

        <div className="prose-pp mx-auto mt-14 max-w-prose">
          {post.content.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>

        {post.notes.length > 0 && (
          <aside className="mx-auto mt-12 max-w-prose border-t border-line pt-6 text-sm text-muted" aria-label="Notas">
            <ol className="list-decimal space-y-2 pl-5">
              {post.notes.map((n, i) => (
                <li key={i} id={`nota-${i + 1}`}>
                  {n}{" "}
                  <a href={`#ref-${i + 1}`} className="text-accent" aria-label="Voltar ao texto">↩</a>
                </li>
              ))}
            </ol>
          </aside>
        )}

        <div className="mx-auto mt-14 flex max-w-prose flex-wrap items-center justify-between gap-6 border-y border-line py-8">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-accent font-display text-2xl text-accent">
              {author.name[0]}
            </span>
            <div>
              <p className="font-display text-xl">{author.name}</p>
              <p className="text-sm leading-snug text-muted">{author.role ?? author.bio}</p>
            </div>
          </div>
          <ShareButton title={post.title} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-wide px-6">
          <h2 className="mb-10 border-b border-line pb-4 font-display text-3xl">Leituras relacionadas</h2>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
