import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import { LazyImage } from "../components/LazyImage";
import 'swiper/css';
import "swiper/css/pagination";
const Popular = () => {
    return (
        <>
            <section className="popular section">
                <h2 className="section__title">
                    Choose Your Electric Car <br/> Of The Porsche Brand
                </h2>
                <Swiper
                    modules={[Pagination]} 
                    className={"popular__container container"}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          
                        },
                        576: {
                          slidesPerView: 2,
                          
                        },
                        1040: {
                          slidesPerView: 3,
                          
                        },
                    }}    
                    pagination={{
                        dynamicBullets : true,
                        clickable : true
                    }}
                >
                    <SwiperSlide className={"popular__card"}>
                        <div className="shape shape__smaller"></div>
                        <h1 className="popular__title">Porsche</h1>
                        <h3 className="popular__subtitle">Turbo S</h3>
                        <div className="popular__img">
                            <LazyImage image={require("../assets/img/popular1.png")} />
                        </div>
                        <div className="popular__data">
                            <div className="popular__data-group">
                                <i className="ri-dashboard-3-line"></i> 3.7 Sec
                            </div>
                            <div className="popular__data-group">
                                <i className="ri-funds-box-line"></i> 356 Km/h
                            </div>
                            <div className="popular__data-group">
                                <i className="ri-charging-pile-2-line"></i> Electric
                            </div>
                        </div>

                        <h3 className="popular__price">$175,900</h3>

                        <button className="button popular__button">
                            <i className="ri-shopping-bag-2-line"></i>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide className={"popular__card"}>
                    <div className="shape shape__smaller"></div>
                            
                            <h1 className="popular__title">Porsche</h1>
                            <h3 className="popular__subtitle">Taycan</h3>

                            <div className="popular__img">
                                <LazyImage image={require("../assets/img/popular2.png")} />
                            </div>

                            <div className="popular__data">
                                <div className="popular__data-group">
                                    <i className="ri-dashboard-3-line"></i> 3.7 Sec
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-funds-box-line"></i> 356 Km/h
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-charging-pile-2-line"></i> Electric
                                </div>
                            </div>

                            <h3 className="popular__price">$114,900</h3>

                            <button className="button popular__button">
                                <i className="ri-shopping-bag-2-line"></i>
                            </button>
                    </SwiperSlide>
                    <SwiperSlide className={"popular__card"}>
                    <div className="shape shape__smaller"></div>
                            
                            <h1 className="popular__title">Porsche</h1>
                            <h3 className="popular__subtitle">Turbo S Cross</h3>

                            <div className="popular__img">
                                <LazyImage image={require("../assets/img/popular3.png")} />
                            </div>

                            <div className="popular__data">
                                <div className="popular__data-group">
                                    <i className="ri-dashboard-3-line"></i> 3.7 Sec
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-funds-box-line"></i> 356 Km/h
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-charging-pile-2-line"></i> Electric
                                </div>
                            </div>

                            <h3 className="popular__price">$150,900</h3>

                            <button className="button popular__button">
                                <i className="ri-shopping-bag-2-line"></i>
                            </button>
                    </SwiperSlide>
                    <SwiperSlide className={"popular__card"}>
                    <div className="shape shape__smaller"></div>
                            
                            <h1 className="popular__title">Porsche</h1>
                            <h3 className="popular__subtitle">Boxster 718</h3>

                            <div className="popular__img">
                                <LazyImage image={require("../assets/img/popular4.png")} />
                            </div>

                            <div className="popular__data">
                                <div className="popular__data-group">
                                    <i className="ri-dashboard-3-line"></i> 3.7 Sec
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-funds-box-line"></i> 356 Km/h
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-charging-pile-2-line"></i> Electric
                                </div>
                            </div>

                            <h3 className="popular__price">$125,900</h3>

                            <button className="button popular__button">
                                <i className="ri-shopping-bag-2-line"></i>
                            </button>
                    </SwiperSlide>
                    <SwiperSlide className={"popular__card"}>
                    <div className="shape shape__smaller"></div>
                            
                            <h1 className="popular__title">Porsche</h1>
                            <h3 className="popular__subtitle">Cayman</h3>

                            <div className="popular__img">
                                <LazyImage image={require("../assets/img/popular5.png")} />
                            </div>

                            <div className="popular__data">
                                <div className="popular__data-group">
                                    <i className="ri-dashboard-3-line"></i> 3.7 Sec
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-funds-box-line"></i> 356 Km/h
                                </div>
                                <div className="popular__data-group">
                                    <i className="ri-charging-pile-2-line"></i> Electric
                                </div>
                            </div>

                            <h3 className="popular__price">$128,900</h3>

                            <button className="button popular__button">
                                <i className="ri-shopping-bag-2-line"></i>
                            </button>
                    </SwiperSlide>
                </Swiper>
               
            </section>
        </>
    )
}
export {Popular}