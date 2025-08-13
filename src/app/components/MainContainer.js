import Navbar from "./Navbar";
import Footer from "./Footer";
import TopPageButton from "./TopPageButton";

//COMPONENTE QUE CRIA NAVBAR, LAYOUT E FOOTER DAS PÁGINAS DINAMICAS

export default function MainCotainer({ children }) {
    return (
        <>
            <Navbar />
            <div className="w-full max-w-screen-xl mx-auto  sm:px-6 md:px-6 lg:px-8 overflow-x-hidden">
                {children}
                <TopPageButton />
            </div>
            <Footer />
        </>
    );
};