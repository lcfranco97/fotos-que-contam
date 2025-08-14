'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AllCategories from "./AllCategories";

export default function Article({ 
  // Campos básicos
  title, summary, date, slug, 
  // Imagens e conteúdos - pode ser único ou múltiplo
  image, 
  images = [], // Array para múltiplas imagens
  content,
  contents = [], // Array para múltiplos conteúdos
  imgTexts = [], // Array para textos das imagens
  // Outros campos
  fonts = []
}) {
  // Determina o tipo de artigo (simples ou complexo)
  const isComplexArticle = images.length > 0 || contents.length > 0;

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-26"
      initial="hidden" 
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } }
      }}
    >
      <article className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {summary && <h3 className="text-md mb-4 dark:text-gray-300">{summary}</h3>}
        {date && <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{date}</p>}

        {/* Renderização para artigo simples */}
        {!isComplexArticle && (
          <>
            {image && (
              <Image 
                src={image}
                alt={title}
                width={800}
                height={500}
                priority
                className="rounded mb-6 shadow w-full h-auto"
              />
            )}
            {content && (
              <div className="prose prose-lg max-w-none text-justify mt-8 mb-8">
                {content}
              </div>
            )}
          </>
        )}

        {/* Renderização para artigo complexo */}
        {isComplexArticle && contents.map((content, index) => (
          <div key={index}>
            {images[index] && (
              <>
                <Image
                  src={images[index]}
                  alt={`${title} - Imagem ${index + 1}`}
                  width={800}
                  height={500}
                  priority
                  className="rounded mb-4 shadow w-full h-auto"
                />
                {imgTexts[index] && (
                  <div className="flex justify-center">
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                      {imgTexts[index]}
                    </p>
                  </div>
                )}
              </>
            )}
            {content && (
              <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-medium text-lg">
                {content}
              </div>
            )}
          </div>
        ))}

        {/* Fontes (para artigos complexos) */}
        {fonts.length > 0 && (
          <>
            <hr />
            <div className="prose prose-lg max-w-none text-justify mt-6 mb-8">
              <h3 className="text-xl font-semibold mb-2">Fontes usadas:</h3>
              {fonts.map((font, index) => (
                <Link key={index} href={font}>
                  <p className="hover:underline text-blue-600">{font}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        

      </article>

      
    </motion.div>
  );
}