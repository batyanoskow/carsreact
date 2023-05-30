import AboutImg from "../assets/img/about.png"
import { LazyImage } from "../components/LazyImage"

const About = () => {
    
    return(
        <>
             <section className="about section">
                <div className="about__container container grid">
                    <div className="about__group">
                        <div className="about__img">
                            <LazyImage image={AboutImg} />
                        </div>
                        <div className="about__card">
                            <h3 className="about__card-title">2.500+</h3>
                            <p className="about__card-description">
                                Supercharges placed along popular routes
                            </p>
                        </div>
                    </div>

                    <div className="about__data">
                        <h2 className="section__title about__title">
                            Machines With <br/> Future Technology
                        </h2>

                        <p className="about__description">
                            See the future with high-performance electric cars produced by 
                            renowned brands. They feature futuristic builds and designs with 
                            new and innovative platforms that last a long time.
                        </p>

                        {/* <a href="#" className="button">Know more</a> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export { About }