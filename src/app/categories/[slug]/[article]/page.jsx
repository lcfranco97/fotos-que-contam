'use client'

import AllCategories from "@/app/components/AllCategories";
import Article from "@/app/components/ArticleTeste";
import { categories } from "@/app/data/categories.js";
import ShareButtons from "@/app/components/ShareButtons";
import { use } from "react";

export default function ArticlePage({ params }) {
   // Desempacota os params
  const { slug, article } = use(params);
  
   // Encontra a categoria atual
  const category = categories.find(cat => cat.slug === slug);
  if (!category) return <div>Categoria não encontrada</div>;

  // Encontra o artigo atual
  const post = category.posts?.find(p => p.slug === article);
  if (!post) return <div>Artigo não encontrado</div>;

  // Transforma o post complexo em estrutura compatível
  const articleData = {
    ...post,
    images: [
      post.image, post.image2, post.image3, post.image4, post.image5,
      post.image6, post.image7, post.image8, post.image9, post.image10
    ].filter(Boolean), // Remove valores falsy
    contents: [
      post.content, post.content2, post.content3, post.content4, post.content5,
      post.content6, post.content7, post.content8, post.content9, post.content10
    ].filter(Boolean),
    imgTexts: [
      post.imgText, post.imgText2, post.imgText3, post.imgText4, post.imgText5,
      post.imgText6, post.imgText7, post.imgText8, post.imgText9, post.imgText10
    ].filter(Boolean),
    fonts: [
      post.font, post.font2, post.font3, post.font4, post.font5, post.font6
    ].filter(Boolean)
  };

   // URL completa para compartilhamento
  const shareUrl = `https://fotos-que-contam.vercel.app/categories/${slug}/${article}`;

  return (
     <div className="max-w-6xl mx-auto space-y-8">
      <Article {...articleData} />
      
      {/* Adicione o componente ShareButtons aqui */}
      <div className="">
        <ShareButtons 
          url={shareUrl}
          title={post.title}
          description={post.content?.substring(0, 100)} // Pega os primeiros 100 caracteres do conteúdo
          imageUrl={post.image}
        />
      </div>
      
      <div className="">
        <AllCategories currentCategorySlug={slug} />
      </div>
    </div>
  );
}