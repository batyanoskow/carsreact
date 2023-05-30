import { LazyImage } from "../components/LazyImage"
const Home = () => {
    
    return (
        <section className="home section">
    
                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Choose The Best Car
                        </h1>

                        <h2 className="home__subtitle">
                            Porsche Mission E
                        </h2>

                        <h3 className="home__elec">
                            <i className="ri-flashlight-fill"></i> Electric car
                        </h3>
                    </div>
                    <div className="home__img">
                        <LazyImage image={require("../assets/img/home.png")}/>
                    </div>
                    <div className="home__car">
                        <div className="home__car-data">
                            <div className="home__car-icon">
                                <i className="ri-temp-cold-line"></i>
                            </div>
                            <h2 className="home__car-number">24°</h2>
                            <h3 className="home__car-name">TEMPERATURE</h3>
                        </div>

                        <div className="home__car-data">
                            <div className="home__car-icon">
                                <i className="ri-dashboard-3-line"></i>
                            </div>
                            <h2 className="home__car-number">873</h2>
                            <h3 className="home__car-name">MILEAGE</h3>
                        </div>

                        <div className="home__car-data">
                            <div className="home__car-icon">
                                <i className="ri-flashlight-fill"></i>
                            </div>
                            <h2 className="home__car-number">94%</h2>
                            <h3 className="home__car-name">BATTERY</h3>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export { Home }