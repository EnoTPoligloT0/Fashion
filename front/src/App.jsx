import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Brands from "./components/brands/Brands.jsx";
import Arrivals from "./components/arrivals/Arrivals.jsx";
import Sale from "./components/Sale/Sale.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";
import MobileApp from "./components/MobileApp/MobileApp.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <Promo/>
            <Brands/>
            <Arrivals/>
            <Sale/>
            <Favorite/>
            <MobileApp/>
            <Newsletter/>
            <Footer/>
        </>)
}

export default App
