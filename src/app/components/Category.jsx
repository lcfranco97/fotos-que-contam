'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Pagination from "./Pagination";
import { categories } from "../data/categories";
import AllCategories from "./AllCategories";


//PÁGINA DINAMICA DAS CATEGORIAS SELECIONADAS

export default function Category({ name, slug, image, date, summary, posts = [] }) {

    const POSTS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(categories.length / POSTS_PER_PAGE);

    const paginatedPosts = posts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );


    return (

        <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-20 mb-20" initial="hidden" animate="visible"
        variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            }
        }} >
            <article className="max-w-3xl mx-auto p-4">
                 <h1 className="text-4xl font-bold mb-4">{name}</h1>
                <p className="text-gray-700 dark:text-white mb-6">{summary}</p>

                

                <h2 className="text-2xl font-semibold mb-4">Fotos históricas</h2>
                <motion.div className="grid grid-cols-1 gap-6 hover:cursor-pointer">
                  {paginatedPosts.map((post) => (
                    <motion.div key={`${post.slug}-${post.id}`}
                     className="flex flex-col sm:flex-row md:flex-row items-center justify-between bg-white dark:bg-black border-1 border-gray-200 dark:border-black py-6 rounded-lg overflow-hidden p-4 relative group transition-all duration-300">

                      {/* Efeito de fundo vermelho que cresce */}
                      <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 z-0"></div>
                     
                      <motion.div whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="sm:w-1/3 md:w-1/3 lg:w-1/3 h-full relative z-10 overflow-hidden">
                          <Link key={post.id} href={`/categories/${slug}/${post.slug}`}>
                            <Image
                            src={post.image}
                            alt={post.title}
                            width={500}
                            height={300}
                            className="sm:w-full sm:h-full md:w-full md:h-full object-cover rounded-md"
                            />
                          </Link>
                      </motion.div>

                      <div className="px-4 sm:w-2/3 md:w-2/3 lg:w-2/3 h-full relative z-10">
                        <p className="mt-2 text-xs font-medium text-gray-800 dark:text-white group-hover:text-white"> {post.date}</p>
                        <Link key={post.id} href={`/categories/${slug}/${post.slug}`}>
                          <h3 className="text-xl md:text-2xl font-medium mb-2 mt-2 group-hover:text-white">{post.title}</h3>
                        </Link>
                        <p className="text-gray-800 dark:text-white text-sm group-hover:text-white">{post.summary}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>




                <div className="m-18 items-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)} 
                  />
                </div>  

               <div className="">
                {/* Adiciona o novo componente no final */}
                <AllCategories currentCategorySlug={slug} />
               </div>


            </article>

 

       </motion.div>        
       
  );
};