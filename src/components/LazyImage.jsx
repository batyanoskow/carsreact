import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyImage = ({ image , ...props }) => {
    return(
        <>
            <LazyLoadImage alt='#' src={image}  threshold={300} effect='blur' {...props} />
        </>
    )
}
    


export { LazyImage };