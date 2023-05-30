import { Header } from "./components/Header";
import { Routes , Route, useLocation} from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Popular } from "./pages/Popular";
import { Feautured } from "./pages/Feautred";
import { Cars } from "./pages/Cars";
import { Error404 } from "./pages/Error";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./assets/css/styles.css";
const App = () =>  {
    const currentLocation = useLocation();
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 400,
        reset: true
    }) 
    useEffect(() => {
            sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
            sr.reveal(`.home__subtitle`,{delay: 500})
            sr.reveal(`.home__elec`, {delay: 600})
            sr.reveal(`.home__img`, {delay: 800})
            sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
            sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
            sr.reveal(`.about__group, .offer__data`,{origin: 'left'})
            sr.reveal(`.about__data, .offer__img`,{origin: 'right'})
            sr.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
            sr.reveal(`.features__card`,{interval: 300})
            sr.reveal(`.featured__card, .logos__content, .footer__content`,{interval: 100})
    } , [currentLocation])
      
   
    return (
     <>
        <div className="wrapper">
            <Header />
            <div className="main">
           
                <Routes> 
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/futured" element={<Feautured />} />
                    <Route path="/cars" element={<Cars />}/>
                    <Route path="*" element={<Error404 />}/>
                </Routes>
           
            </div>
            <Footer />  
        </div>
     </>
    );
  }
  
  export {App};