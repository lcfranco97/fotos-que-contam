import Navbar from "./Navbar";
import Footer from "./Footer";
import TopPageButton from "./TopPageButton";

export default function MainCotainer({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
                <TopPageButton />
            </div>
            <Footer />
        </>
    );
};