import { LazyImage } from "../components/LazyImage";

const Feautured = () => {
    return ( 
        <>
            <section className="features section">
                <h2 className="section__title">
                    More Features
                </h2>

                <div className="features__container container grid">
                    <div className="features__group">
                        
                        <div className="features__img">
                            <LazyImage image={require("../assets/img/features.png")} />
                        </div>
                       
                        <div className="features__card features__card-1">
                            <h3 className="features__card-title">800v</h3>
                            <p className="features__card-description">Turbo <br/> Chargin</p>
                        </div>

                        <div className="features__card features__card-2">
                            <h3 className="features__card-title">350</h3>
                            <p className="features__card-description">Km <br/> Range</p>
                        </div>

                        <div className="features__card features__card-3">
                            <h3 className="features__card-title">480</h3>
                            <p className="features__card-description">Km <br/> Travel</p>
                        </div>
                    </div>
                </div>
                
                <div className="features__map"> 
                    <LazyImage image={require("../assets/img/map.png")} />
                </div>
            </section>
            <section className="offer section">
                <div className="offer__container container grid">
                    <div className="offer__bg">
                        <LazyImage image={require("../assets/img/offer-bg.png")} />
                    </div>
                    <div className="offer__data">
                        <h2 className="section__title offer__title">
                            Do You Want To Receive <br/> Special Offers?
                        </h2>

                        <p className="offer__description">
                            Be the first to receive all the information about our 
                            products and new cars by email by subscribing to our 
                            mailing list.
                        </p>

                        <a href="#" className="button">
                            Subscribe Now
                        </a>
                    </div>
                    <div className="offer__img">
                        <LazyImage image={require("../assets/img/offer.png")} />
                    </div>
                    
                </div>
            </section>
            <section className="logos section">
                <div className="logos__container container grid">
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo1.png")} />
                        </div>
                    </div>
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo2.png")} />
                        </div>
                    </div>
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo3.png")} />
                        </div>
                    </div>
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo4.png")} />
                        </div>
                    </div>
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo5.png")} />
                        </div>
                    </div>
                    <div className="logos__content">
                        <div className="logos__img">
                            <LazyImage image={require("../assets/img/logo6.png")} />
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export  {Feautured};  