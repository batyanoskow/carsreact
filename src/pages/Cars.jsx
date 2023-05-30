import { useRef } from "react";
import { LazyImage } from "../components/LazyImage";
import { useSearchParams } from "react-router-dom";
const Cars = () => {
    const cars= [
        { title : "tesla", model : "Model X" , price : "$98,900" , img : require("../assets/img/featured1.png") , id : 1},
        { title : "tesla", model : "Model 3" , price : "$45,900" , img : require("../assets/img/featured2.png"),id : 2,},
        { title : "audi",  model : "E-tron" , price : "$175,900" , img : require("../assets/img/featured3.png") , id : 3,},
        { title : "porshe",model : "Boxster 987" , price : "$126,900" , img : require("../assets/img/featured4.png"), id :4,},
        { title : "porshe",model : "Panamera" , price : "$126,900" , img : require("../assets/img/featured5.png") ,id:5}
    ]
    const [searchParams , setSearchParams] = useSearchParams();
    const auto = searchParams.get("model") || "";


    const filterClick = (e) => {
        const buttonFilter = e.target.getAttribute('data-filter');
        (buttonFilter === null ? setSearchParams({model : ""}) : setSearchParams({model : buttonFilter}))
    }
    
    
    return ( 
        <>
            <section className="featured section" id="featured">
                <h2 className="section__title">
                    Featured Luxury Cars
                </h2>
                <div className="featured__container container">
                    <ul className="featured__filters">
                        <li>
                            <button className="featured__item" onClick={filterClick}>
                                <span>All</span>
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" >
                                <LazyImage image={require("../assets/img/logo3.png")} onClick={filterClick} data-filter="tesla"/>
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" >
                            <LazyImage image={require("../assets/img/logo2.png")} onClick={filterClick} data-filter="audi"/>
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" >
                                <LazyImage image={require("../assets/img/logo1.png")} onClick={filterClick} data-filter="porshe"/>
                            </button>
                        </li>
                    </ul>

                    <div className="featured__content grid">
                        {
                            cars.filter(
                                car => car.title.includes(auto)
                            ).map((car , index) =>{
                                return(
                                <article className={`featured__card mix ${car.title.toLocaleLowerCase()}`} key={index}>
                                        <div className="shape shape__smaller"></div>
                                        <h1 className="featured__title">{car.title}</h1>
                                        <h3 className="featured__subtitle">{car.model}</h3>
                                        <div className="featured__img">
                                        <LazyImage image={car.img} /> 
                                        </div>
                                        <h3 className="featured__price">{car.price}</h3>
                                        <button className="button featured__button">
                                            <i className="ri-shopping-bag-2-line"></i>
                                        </button>
                                </article> 
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
     );
}
 
export { Cars };