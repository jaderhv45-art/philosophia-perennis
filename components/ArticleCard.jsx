import Link from "next/link";
import { fmtDate, author } from "@/lib/posts";

export default function ArticleCard({ post }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/posts/${post.slug}`} className="cover mb-5 block aspect-[16/10] overflow-hidden rounded-sm border border-line" aria-label={post.title}>
        <span className="grid h-full w-full place-items-center font-display text-6xl text-accent/40 transition-transform duration-700 group-hover:scale-110">Φ</span>
      </Link>
      <div className="mb-3 flex items-center gap-3"><span className="eyebrow">{post.category}</span><span className="text-xs text-muted">{fmtDate(post.date)}</span></div>
      <h3 className="font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-accent">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-4 text-xs text-muted">{author.name} · {post.readTime} min de leitura</p>
    </article>
  );
}
