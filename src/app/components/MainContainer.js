import Navbar from "./Navbar";
import Footer from "./Footer";
import TopPageButton from "./TopPageButton";

export default function MainCotainer({ children }) {
    return (
        <>
            <Navbar />
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                {children}
                <TopPageButton />
            </div>
            <Footer />
        </>
    );
};