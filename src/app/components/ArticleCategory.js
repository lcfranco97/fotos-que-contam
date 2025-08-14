'use client';
import Image from "next/image";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import Link from "next/link";


//COMPONENTE DA LISTA CATEGORIES.JS (PÁGINA DE ARTIGOS DINAMICOS)

export default function ArticleCategory({ 
    title,
    image, image2, image3, image4, image5, image6, image7, image8, image9,image10,
    content, content2, content3, content4, content5, content6, content7, content8, content9, content10,
    imgText, imgText2, imgText3, imgText4, imgText5, imgText6, imgText7, imgText8, imgText9, imgText10,
    date, 
    slug,
    font, font2, font3, font4, font5, font6
}) {

    return (

        <motion.div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row mt-16 overflow-x-hidden" initial="hidden" animate="visible" variants={{
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

            <article className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 p-2 sm:p-4">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-sm text-gray-500 mb-4">{date}</p>

                {image ? (
                    <Image
                        src={image}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}
                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content}
                </div>

                {image ? (
                    <Image
                        src={image2}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText2}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content2}
                </div>


                   {image ? (
                    <Image
                        src={image3}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText3}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content3}
                </div>


                 {image ? (
                    <Image
                        src={image4}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText4}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content4}
                </div>



                {image ? (
                    <Image
                        src={image5}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText5}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content5}
                </div>


                 {image ? (
                    <Image
                        src={image6}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText6}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content6}
                </div>



                   {image ? (
                    <Image
                        src={image7}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText7}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content7}
                </div>



                  {image ? (
                    <Image
                        src={image8}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText8}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content8}
                </div>



                  {image ? (
                    <Image
                        src={image9}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText9}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content9}
                </div>



                {image ? (
                    <Image
                        src={image10}
                        alt={title || "Imagem do Artigo"}
                        width={800}
                        height={500}
                        priority
                        
                        className="rounded mb-4 shadow w-full h-auto max-w-full"
                        />
                ) : ( 
                    <div className="mb-8 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Sem imagem disponível</span>
                    </div>
                )}

                <div className="flex justify-center">
                    <p className="text-sm text-gray-700 mb-4" >
                        {imgText10}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-justify mt-6 mb-8 font-semibold">
                    {content10}
                </div>

                <hr />
                 <div className="prose prose-lg max-w-none text-justify mt-6 mb-8">
                    <h3 className="text-xl font-semibold mb-2">Fontes usadas:</h3>
                    <Link href={font2}><p className="italic">{font2}</p></Link>
                    <Link href={font}><p className="hover:underline text-blue-600">{font}</p></Link>
                    <Link href={font3}><p className="hover:underline text-blue-600">{font3}</p></Link>
                    <Link href={font4}><p className="hover:underline text-blue-600">{font4}</p></Link>
                    <Link href={font5}><p className="hover:underline text-blue-600">{font5}</p></Link>
                    <Link href={font6}><p className="hover:underline text-blue-600">{font6}</p></Link>
                   
                        
                    
                </div>
                <hr />





                <div className="mt-16">
                    
                    <CommentForm slug={slug}/>
                    <CommentsList slug={slug} />
                </div>

            </article>


            <div className="hidden md:block md:w-1/3 lg:w-1/4 xl:w-1/5 mt-10 p-2">
                <Sidebar />
            </div>

             {/* Sidebar categorias para telas menores */}   
            <div className="block md:hidden mt-8 mb-4">
                <Sidebar />
            </div>


        </motion.div>
    );

};