'use client';
import { AiOutlineArrowUp } from "react-icons/ai";


export default function TopPageButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={handleClick}
            className="fixed bottom-6 right-6 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg  hover:cursor-pointer transition">
                <AiOutlineArrowUp className="text-xl font-bold"/>
            </button>
    );
}