import { useState , useEffect} from "react"
import { NavLink , Link} from "react-router-dom"

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [isOpen , setIsOpen] = useState(false);
    const [hideOrShow , setHideOrShow] = useState("");
    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
          } else {
            setNavbar(false)
          }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
      
        return () =>
          window.removeEventListener('scroll', scrollHeader);
    }, []);
    const toggleMenu = (event) => {
        setIsOpen((prev) => !prev);
        if(isOpen){
            setHideOrShow(() => {
                return ""
            })
        }
        else if(isOpen === false && window.innerWidth < 991.98){
            setHideOrShow(() => {
                return "show-menu"
            })
        }
    }
    return(
        <>
            <header className={navbar ? "header bg-header" : "header"} id="header">
                <nav className="nav container">
                    <Link to={"/"}  className="nav__logo">
                        <i className="ri-steering-line"></i>
                        Elecar
                    </Link>
                    <div className={`nav__menu ${hideOrShow}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink to="/" className="nav__link" onClick={toggleMenu}>Home</NavLink>
                            </li>
                            <li className="nav__item" >
                                <NavLink to="/about" className="nav__link" onClick={toggleMenu}>About</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/popular" className="nav__link" onClick={toggleMenu}>Popular</NavLink> 
                            </li>
                            <li className="nav__item">
                                <NavLink to="/futured" className="nav__link" onClick={toggleMenu}>Featured</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/cars" className="nav__link" onClick={toggleMenu}>Cars</NavLink>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <i className="ri-close-line"></i>
                        </div>
                    </div>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export { Header }