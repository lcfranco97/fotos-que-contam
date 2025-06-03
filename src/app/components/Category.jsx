'use client';
import Image from "next/image";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { categories } from "../data/categories";
import CategoryCard from "./CategoryCard";
import Link from "next/link";


export default function Category({ name, slug, image, summary, posts = [] }) {
     
    return (

        <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-4" initial="hidden" animate="visible"
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
                <p className="text-gray-700 mb-6">{summary}</p>

                <div className="mb-6">
                  <Image
                    src={image}
                    alt={name}
                    width={800}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>

                <h2 className="text-2xl font-semibold mb-4">Fotos históricas</h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <motion.div key={post.id}
                     whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                     }}
                     className="bg-white shadow-md rounded-lg overflow-hidden">
                     <Link key={post.id} href={`/categories/${slug}/${post.slug}`}>
                         <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                     </Link>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.summary}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            </article>

            

            <div className="h-svh hidden md:block md:w-64 mt-10 mr-14 p-4 ml-8">
                <Sidebar />
            </div>

                
            <div className="block md:hidden mt-8 mb-4">
                <Sidebar />
              </div>
 

       </motion.div>        
       
  );
};

