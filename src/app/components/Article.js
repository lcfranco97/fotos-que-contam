'use client';
import Image from "next/image";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Article({ title, date, slug, image, content, content2 }) {
     
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
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-sm text-gray-500 mb-4">{date}</p>

                {image && (
                    <Image 
                        src={image}
                        alt={title}
                        width={800}
                        height={500}
                        priority
                        style={{ height: 'auto' }}
                        className="rounded mb-6 shadow"
                        
                        />
                )}

                <div className="prose prose-lg max-w-none text-justify mt-8 mb-8"
                >{content}</div>

                {image && (
                    <Image 
                        src={image}
                        alt={title}
                        width={800}
                        height={500}
                        priority
                        style={{ height: 'auto' }}
                        className="rounded mb-6 shadow"
                        />
                )}

                <div className="prose prose-lg max-w-none text-justify"
                >{content2}</div>

                <div className="mt-16">
                {/* Conteúdo do post */}
                <hr />
                <CommentForm slug={slug} />
                <CommentsList slug={slug} />
                </div> 

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