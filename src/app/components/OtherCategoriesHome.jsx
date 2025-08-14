'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data/categories.js";





const OthersCategoriesHome = () => {
    
    const catego = categories.slice(3);

    return (
        <motion.div className="w-full h-fit mt-4 mb-20 p-4"
      initial="hidden" animate="visible" variants={{
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
        }}  >
            <h2 className="text-2xl dark:text-gray-400 font-semibold mb-6">Explore outras categorias</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                
                {catego.map((cat) => (
                    <motion.div key={cat.slug} 
                    className=""
                    >
                        
                        <Link href={`/categories/${cat.slug}`} className="bg-white dark:bg-black dark:text-white dark:border-0 hover:bg-gray-50 rounded-lg border-1 border-gray-300 flex p-4 transition duration-300 w-full justify-center items-center font-medium text-md text-gray-700">{cat.name}</Link>
                        
                    </motion.div>
                ))}
            
            </div>
            
        </motion.div>
    );
};

export default OthersCategoriesHome;