import ArticleCategory from "@/app/components/ArticleCategory";
import { categories } from "@/app/data/categories";

export default async function ArticlePage({ params }) {
    const { slug, article } = params;

    const category = categories.find((cat) => cat.slug === slug);
    if (!category) return <p>Categoria não encontrada!</p>;

    const post = category.posts?.find((p) => p.slug === article);
    if (!post) return <p>Artigo não encontrado!</p>;

    
    return (
        <ArticleCategory {...post} />
    );
}