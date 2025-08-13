'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data/categories.js";
import Image from "next/image.js";





const Sidebar = ({ posts = [] }) => {
    
    const firstFourPosts = categories.slice(0, 3);

    //Função para filtrar posts por categoria
    const getPostsByCategory = (categorySlug) => {
        return posts.filter(post => post.categorySlug === categorySlug).slice(0, 7); //Pega no máximo 6 posts por categoria 
    }

    return (
        <motion.div className="w-full h-fit mt-4 p-4">
            <h2 className="text-3xl font-semibold mb-4">Categorias</h2>
            <ul className="space-y-2 ">
                {firstFourPosts.map((cat) => {
                    const categoryPosts = getPostsByCategory(cat.slug);

                    return (
                        <motion.div key={cat.slug}>
                        
                        <section className="">

                            

                           {categoryPosts.length > 0 ? (
                            <div className="flex flex-col mt-4 mb-12 gap-4 bg-white dark:bg-black py-8 px-4 rounded-2xl w-full">

                                <div className="flex items center justify-between">
                                    <Link href={`/categories/${cat.slug}`} className="font-medium text-sm text-gray-700 dark:text-gray-300">{cat.name}</Link>
                                    <Link href={`/categories/${cat.slug}`} className="font-medium text-sm text-red-800">Ver todas</Link>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {categoryPosts.map((post => (
                                    <div key={`${cat.slug} ${post.slug}-${post.id}`}
                                    className="bg-white hover:bg-gray-50 dark:bg-black dark:border-0   border-1 border-gray-300 rounded-lg flex flex-row w-full h-[200px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 items-center px-2">

                                        <Link href={`/posts/${post.slug}`} className="flex flex-row w-full">

                                            <motion.div whileHover={{
                                                scale: 1.02,
                                                transition: {duration: .4}
                                            }} className="w-1/3 min-w-[100px]">
                                                <Image src={post.image}
                                                alt={post.title}
                                                width={400}
                                                height={200}
                                                className="w-full h-40 p-2 rounded-2xl object-cover mt-4"
                                            /> 
                                            </motion.div>
                                               

                                            <div className="w-2/3 p-3 flex flex-col justify-center">
                                                <h3 className="text-2xl font-medium mb-2 line-clamp-2">{post.title}</h3>
                                        
                                                <p className="text-xs font-medium text-gray-800 dark:text-white mt-1">{post.date}</p>
                                            </div>

                                        </Link>

                                    </div>
                                )))}
                                </div>
                                
                            </div>
                           ): (
                            <p className="text-sm text-gray-500 dark:text-white p-2">
                                Nenhum artigo nesta categoria.
                            </p>
                           )}

                        </section>
                        
                    </motion.div>
                    )
                    
                })}
            </ul>
        </motion.div>
    );
};

export default Sidebar;