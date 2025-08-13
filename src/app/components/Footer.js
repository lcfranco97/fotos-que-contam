'use client'

import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">

            <div className="hidden w-full md:flex items-center justify-around bg-black py-40">

                <div className="px-10">
                    <Link href="/">
                        <h2 className="text-white text-5xl font-bold mb-4">FOTOS QUE CONTAM</h2>
                    </Link>
                    <div className="flex gap-4">
                        <FaInstagram size={50} className="text-white cursor-pointer"/>
                        <AiFillFacebook size={50} className="text-white cursor-pointer"/>
                    </div>
                </div>

                <div className="px-28 flex flex-col gap-2">
                    <Link href="/" className="text-white font-medium text-lg">Home</Link>
                    <Link href="/sobre" className="text-white font-medium text-lg">Sobre FQC</Link>
                    <Link href="/topicos" className="text-white font-medium text-lg">Categorias</Link>
                </div>

            </div>


            <div className="w-full h-16 bg-gray-700 flex items-center justify-center">
                <p className="text-white text-sm font-medium">FQC - Todos os direitos reservados &copy;2025
                </p>
            </div>

        </footer>
    );
};