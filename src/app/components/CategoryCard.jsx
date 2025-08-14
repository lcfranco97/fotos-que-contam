'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";




//CARDS DA PÁGINA DE CATEGORIAS

const CategoryCard = ({ category }) => {
    if (!category) return null;

    return (

        
        <div className="group relative bg-white dark:bg-black border-1 border-gray-300 dark:border-black rounded-lg flex flex-row w-full h-[200px] overflow-hidden hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
            {/* Efeito de fundo vermelho que cresce */}
            <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 z-0"></div>
            
            {/* Container da imagem com efeito de zoom */}
            <div className="relative z-10 w-1/3 h-full overflow-hidden">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                >
                        <Link href={`/categories/${category.slug}`}>
                            <Image 
                            src={category.image}
                            alt={category.name}
                            width={600}
                            height={400}
                            priority
                            className="w-full h-full object-cover hover:cursor-pointer"
                        />
                        </Link>
                        
                    
                </motion.div>
            </div>

            {/* Conteúdo textual */}
            <div className="relative z-10 w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-white transition-colors duration-300">
                        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 group-hover:text-white transition-colors duration-300 line-clamp-3">
                        {category.summary}
                    </p>
                </div>
                
                <div className="mt-4">
                     
                    <Link href={`/categories/${category.slug}`} className="inline-block text-black dark:text-white hover:underline text-sm lg:text-base group-hover:text-white group-hover:no-underline transition-colors duration-300 px-3 ">     
                       
                        Leia mais →
                    </Link>
                </div>
            </div>
        </div>
        
        
    );
};

export default CategoryCard;