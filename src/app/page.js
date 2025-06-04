'use client';
import PostCard from "./components/PostCard.js";
import { posts } from "./data/posts.js";
import Sidebar from "./components/Sidebar.js";
import Pagination from "./components/Pagination.js";
import { useState } from "react";



export default function Home() {
  const POSTS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  ); 

  return (

        <div className="">
          

          <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6">
                  {paginatedPosts.map((post) => (
                    <PostCard key={post.id}
                    post={post}
                    />
                  ))}
                </div>
            </div>
            
            <div className="h-svh hidden md:block md:w-64 mt-4 mr-14 p-4 ml-8 ">
              <Sidebar />
            </div>
                
            <div className="md:hidden m-6 items-center">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />  
            </div>     

              <div className="block md:hidden mt-8 mb-4 text-xl">
                <Sidebar />
              </div>
              

          </div>

          {/*paginação */}
          <div className="m-6 hidden md:block items-center">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />  
          </div>        

         

        </div>

      
  );
}
