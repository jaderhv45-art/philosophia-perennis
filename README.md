# Philosophia Perennis

Next.js 14 (App Router) + Tailwind CSS + Lucide.

## Rodar
    npm install
    npm run dev      # http://localhost:3000

## Deploy
- **Vercel:** suba para o GitHub → vercel.com/new → Import → Deploy (zero config).
- **Netlify:** Add new site → Import from Git → build `npm run build` (plugin Next.js é automático).

## Onde editar
- `lib/posts.js` — artigos, categorias e autor (blocos: p, h2, h3, quote, list; notas via `[^1]`).
- `app/globals.css` — paleta dark/light (variáveis CSS) e estilo da prosa.
- `tailwind.config.js` — tokens de cor, fontes e largura de leitura (`max-w-prose` = 680px).
- `components/Newsletter.jsx` — conectar a um provedor de e-mail.

## Próximos passos para produção
Trocar `lib/posts.js` por MDX/CMS (Contentlayer, Sanity), adicionar imagens de capa com `next/image`, `sitemap.ts`, RSS e analytics.
