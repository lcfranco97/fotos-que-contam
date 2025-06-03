import Article from "@/app/components/Article";
import { posts } from "@/app/data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(props) {
  const { slug } = await props.params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post não encontrado.</div>;

  return <Article {...post} />;
}