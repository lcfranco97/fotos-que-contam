"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./theme-switcher";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black dark:bg-black fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/fqc-logo-white.png"
                alt="FQC Logo"
                width={70}
                height={50}
                priority
                className="object-contain h-[50px] w-auto"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-2 hover:cursor-pointer">
            <Link
              href="/"
              className="text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="/topicos"
              className="text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            >
              Categorias
            </Link>
            
            <ThemeToggle />
          </div>

          {/* Menu Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-black dark:bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-2" : "max-h-0 py-0"
        }`}
      >
        <div className="px-4 flex flex-col items-center space-y-3">
          <Link
            href="/"
            className="w-full text-center text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="w-full text-center text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/topicos"
            className="w-full text-center text-white dark:text-gray-100 font-medium hover:bg-white hover:dark:bg-gray-700 hover:text-black hover:dark:text-white rounded-lg px-3 py-2 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Categorias
          </Link>

          <div className="flex flex-row gap-2 mb-4">
             <FaInstagram size={28} className="text-white"/>
             <AiFillFacebook size={28} className="text-white"/>
          </div>

        </div>
      </div>
    </nav>
  );
}