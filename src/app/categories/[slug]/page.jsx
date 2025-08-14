import Category from "@/app/components/Category";
import { categories } from "@/app/data/categories.js";
import AllCategories from "@/app/components/AllCategories";


export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }))
};

export default async function CategoryPage({ params }) {
    const { slug } = await params;

    const category = categories.find(cat => cat.slug === slug);

    if (!category) return <div>Cateogria não encontrada</div>

    return (
             
        <>
            {/* Renderiza a categoria atual */}
            <Category {...category} />
            
            
        </>
    );
}