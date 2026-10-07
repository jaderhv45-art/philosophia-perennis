import { notFound } from "next/navigation";
import PostView from "@/components/PostView";
import { posts, getPost } from "@/lib/posts";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <PostView post={post} />;
}
