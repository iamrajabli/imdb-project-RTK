import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWishlist } from "./MoviesSlice";
import useSessionStorage from '../../hooks/ss.hook';
import useLocalStorage from '../../hooks/ls.hook';
import { Link } from "react-router-dom";

const Movies = () => {

    const { wishlist } = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const { getSessionStorage } = useSessionStorage();
    const { getWishlistLocalStorage } = useLocalStorage();

    useEffect(() => {
        getWishlistLocalStorage('users', getSessionStorage('current'))
            .forEach(wishlist => dispatch(setWishlist(wishlist)))
    }, [])

    


    return (
        <section id="movies">
            <div className="container">
                {wishlist ? wishlist.map(({ id, image, title }) => (
                    <div key={id} className="movies__wrapper">
                        <div className="movies__item">
                            <a href="#">
                                <img src={image} />
                            </a>
                            <div className="movies__content">
                                <h2>{title}</h2>
                                <div className="movies_rating">
                                    <i className="fa-solid fa-star"></i>
                                    <p>8.43</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-heart" onClick={() => deleteFromWishlist(id)}></i>

                            <Link to={`/movie/${id}`}>
                                <div className="movies__wishlist">
                                </div>
                            </Link>
                        </div>
                    </div>
                )) : ''}


            </div>
        </section>
    )
}

export default Movies;