'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


 const CategoryCard = ({ category }) => {
    if (!category) return null;

    return (
        <motion.div className="flex flex-col mb-16 mt-4" whileHover={{
            scale: 1.1,
            transition: {
                duration: .2
            }
        }} initial="hidden" animate="visible" variants={{
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

            <Link href={`/categories/${category.slug}`}>
                <Image src={category.image}
                alt={category.name}
                width={600}
                height={500}
                priority
                style={{ height: 'auto', width: 'auto' }}
                className="hover:cursor-pointer rounded" />
            </Link>


            <div className="p-4 flex flex-col justify-between shadow-md mt-6 hover:cursor-pointer rounded-lg">
                <motion.div>
                    <h2 className="text-3xl font-semibold hover:cursor-pointer hover:text-red-500"><Link href={`/categories/${category.slug}`}>{category.name}</Link></h2>
                    <p className="text-sm text-gray-600 mb-2 mt-2">{category.summary}</p>
                </motion.div>

                <div className="mt-10">
                    <Link href={`/categories/${category.slug}`} className="text-black hover:underline text-sm lg:text-base hover:bg-black rounded-lg hover:text-white p-2">Leia mais →</Link>
                </div>
            </div>




        </motion.div>
    );
};

export default CategoryCard;