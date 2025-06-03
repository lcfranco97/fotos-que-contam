'use client';
import { categories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

export default function Categorias() {
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
                <h1 className="text-4xl font-bold mb-20">Categorias</h1>
                
                <div className="grid grid-cols-1 gap-6">
                  {categories.map((cat) => (
                    <CategoryCard key={cat.id}
                    category={cat}
                    />
                  ))}
                </div>
               

            

            </article>

            

            <div className="h-svh hidden md:block md:w-64 mt-10 mr-14 p-4 ml-8 mb-8">
                <Sidebar />
            </div>

                
            <div className="block md:hidden mt-8 mb-4">
                <Sidebar />
              </div>
 

       </motion.div>        
       
    
  )
      

  
}
