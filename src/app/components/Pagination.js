import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Pagination = ({currentPage, totalPages, onPageChange}) => {
    
    const pages = [];

    const maxVisible = 3;

    const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));

    const endPage = Math.min(totalPages, startPage + maxVisible -1);

    for(let i = startPage; i <= endPage; i++) {
        pages.push(i)
    };

    return (
        //Botão primeira página
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="px-2 py-1 border rounded hover:bg-black hover:text-white hover:cursor-pointer disabled:opacity-40 font-semibold"
            >Primeira</button>

            <button onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 border rounded hover:bg-black hover:text-white hover:cursor-pointer"
            ><AiOutlineArrowLeft /></button>

            {pages.map((page) => (
                <button key={page} onClick={() => onPageChange(page)}
                    className={`px-3 border rounded hover:bg-black hover:text-white ${page === currentPage ? "bg-black text-white" : "bg-white text-black"}
                    `} >{page}</button>     
            ))}

            <button onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 border rounded  hover:bg-black hover:text-white hover:cursor-pointer"
            ><AiOutlineArrowRight /></button>

            <button onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 border rounded fo hover:bg-black hover:text-white hover:cursor-pointer disabled:opacity-40 font-semibold"
            >Última</button>

           

        </div>
        
    
    );
};

export default Pagination;