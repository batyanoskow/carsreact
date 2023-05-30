const Footer = () => {
    return (  
        <>
                <footer className="footer section">
    

                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="ri-steering-line"></i> Elecar
                        </a>
                        <p className="footer__description">
                            We offer the best electric cars of <br/> 
                            the most recognized brands in <br/> 
                            the world.
                        </p>
                    </div>

                    {/* <div className="footer__content">
                        <h3 className="footer__title">
                            Company
                        </h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">About</a>    
                            </li>
                            <li>
                                <a href="#" className="footer__link">Cars</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">History</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Shop</a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="footer__content">
                        <h3 className="footer__title">
                            Information
                        </h3>

                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Request a quote</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Find a dealer</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Contact us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">
                            Follow us
                        </h3>

                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-line"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export  {Footer};