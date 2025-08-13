'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PostCard = ({ post }) => {
    if(!post) return null;

    return (
        <motion.div 
            className="flex flex-col mb-16 mt-4 bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            initial="hidden" 
            animate="visible" 
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
            }}
            whileHover={{
                backgroundColor: "#991b1b" // bg-red-800
            }}
        >
            <motion.div 
                className="overflow-hidden"
                whileHover={{
                    scale: 1.01,
                    transition: {
                        duration: .4
                    }
                }}
            >
                <Link href={`/posts/${post.slug}`}>
                    <Image 
                        src={post.image} 
                        alt={post.title}
                        width={700}
                        height={400}
                        priority
                        className="w-full h-auto p-4 rounded-3xl group-hover:scale-105 transition-transform duration-500 ease-in-out"  
                    />
                </Link>
            </motion.div>
           
            <div className="p-4 flex flex-col justify-between mt-6 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                <div className="flex items-center justify-between">
                    <Link href={`/categories/${post.categorySlug}`}>
                        <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2 mt-2 capitalize group-hover:text-white group-hover:border group-hover:border-white group-hover:px-2 group-hover:py-1 group-hover:rounded-2xl transition-all duration-300">
                        {post.categorySlug}
                    </p>
                    </Link>
                    
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 mt-2 group-hover:text-white transition-colors duration-300">
                        {post.date}
                    </p>
                </div>
                
                <h2 className="text-3xl font-semibold dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-800 dark:text-white text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                    {post.summary}
                </p>

                <div className="mt-8">
                    <Link 
                        href={`/posts/${post.slug}`} 
                        className="text-black dark:text-white hover:underline text-sm lg:text-base rounded-lg p-2 group-hover:text-white group-hover:no-underline transition-colors duration-300"
                    >
                        Leia mais →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PostCard;