'use client';
import { categories } from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import { motion } from "framer-motion";

export default function Categorias() {
  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-20"
      initial="hidden" 
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { delay: 0.4 }
        }
      }}
    >
      <article className="max-w-3xl mx-auto p-4 w-full">
        <h1 className="text-4xl font-bold mb-10">Categorias</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-20">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="group relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Efeito de fundo vermelho que cresce */}
                <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 z-0"></div>
                
                {/* Container do CategoryCard */}
                <div className="relative z-10 h-full">
                  <CategoryCard 
                    category={cat}
                    className="group-hover:text-white"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </article>
    </motion.div>        
  );
}