'use client';
import PostCard from "./components/PostCard.js";
import { posts } from "./data/posts.js";
import Sidebar from "./components/Sidebar.js";
import Pagination from "./components/Pagination.js";
import AllCategories from "./components/AllCategories.jsx";
import { useState } from "react";
import Image from "next/image.js";
import Link from "next/link.js";





export default function Home() {
  const POSTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  ); 

  // Adicione esta verificação para pegar o primeiro post ou um post específico
  const featuredPost = posts[0];
  const firstFourPosts = posts.slice(0, 4); //Pega do índice 0 ao 3 (4 itens)

  return (

        <div className="">
          
          <div className="group bg-black w-full sm:w-full md:max-w-6xl mx-auto flex flex-col md:flex-row sm:rounded-xl md:rounded-xl sm:mt-24 md:mt-24 overflow-hidden hover:shadow-lg transition-all duration-300">

            {/* Container da imagem com efeito de zoom */}
            <div className="w-full md:w-1/2 overflow-hidden">
              <Image 
                src={"/historia.png"}
                alt="Historia-imagem"
                width={550}
                height={300}
                className="rounded-t-xl md:rounded-l-xl w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />  
            </div>

            {/* Container do conteúdo com efeito de preenchimento vermelho */}
            <div className="relative text-white flex flex-col w-full md:w-1/2 px-3 py-12 hover:cursor-pointer overflow-hidden">
              {/* Efeito de fundo vermelho que cresce */}
              <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100"></div>
              
              {/* Conteúdo (fica acima do efeito de fundo) */}
              <div className="relative z-10">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div>
                      {featuredPost?.categorySlug && (
                        <Link href={`/categories/${featuredPost.categorySlug}`}>
                          <p className="text-xl font-medium text-white dark:text-black mb-2 mt-2 capitalize bg-gray-600 dark:bg-white p-2 px-6 rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black">
                            {featuredPost.categorySlug}
                          </p>
                        </Link>
                      )}
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">08 de Agosto</p>
                    </div>
                  </div>

                  <h1 className="pt-4 text-4xl font-bold group-hover:text-white transition-colors duration-300">
                    EDITORIAL: Em meio a barbárie, forjar o futuro!
                  </h1>

                  <p className="pt-4 font-medium group-hover:text-white transition-colors duration-300">
                    A terefa é contrapor a isso um projeto da classe trabalhadora para a educação, a Universidade Popular. Essa é uma tarefa muito díficil do que simplesmente demonstrar os problemas do projeto burguês.
                  </p>
                </div>
              </div>
            </div>
</div>
          
          <div className="h-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post) => (
                    <PostCard key={post.id}
                    post={post}
                    />
                  ))}
                </div>
            </div>
            
            
                
               

              

          </div>

              


          <div className="block  mt-8 mb-4 text-xl">
              <Sidebar posts={posts} />
          </div>

          <div className="block  mt-8 mb-4 text-xl">
              <AllCategories />
          </div>    

         

        </div>

      
  );
}
