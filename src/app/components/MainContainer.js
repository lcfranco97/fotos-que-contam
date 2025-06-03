import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainCotainer({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};