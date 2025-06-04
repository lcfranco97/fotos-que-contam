'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data/categories.js";
import { AiOutlineDoubleRight } from "react-icons/ai";




const Sidebar = () => {
    
    return (
        <motion.div className="w-full md:w-64 shadow-md rounded-lg h-fit mt-4 p-4" whileHover={{
            scale: 1.1,
            transition: .2
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
        }}  >
            <h2 className="text-3xl font-semibold mb-4">Categorias</h2>
            <ul className="space-y-2 ">
                {categories.map((cat) => (
                    <li key={cat.slug}>
                        <Link href={`/categories/${cat.slug}`} className="hover:bg-black hover:text-white rounded-lg block p-2">▸ {cat.name}</Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Sidebar;