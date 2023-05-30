import { NavLink, useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return ( 
        <>
            <section className="notfound section">
                <h1 className="notfound__title">404</h1>
                <p className="notfound__sub-title">Page Not Found</p>
                <NavLink  className={"notfound__button"} onClick={goBack}>Back</NavLink>
            </section>
        </>
     );
}
 
export { Error404 };