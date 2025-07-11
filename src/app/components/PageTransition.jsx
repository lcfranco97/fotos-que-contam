'use client';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div 
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.4 }}
               
                className="w-full max-w-full overflow-x-hidden"
                >
                    {children}
                </motion.div>
        </AnimatePresence>
    );
}