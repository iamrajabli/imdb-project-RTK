import { useState } from "react";
import { useSessionStorage, useLocalStorage } from '../../hooks';
import { useHistory, Link } from 'react-router-dom';

const FindedMovies = ({ movies }) => {
    const { getSessionStorage } = useSessionStorage(),
        { setWishlistLocalStorage, wishlistControlLocalStorage } = useLocalStorage(),
        [alreadyMovieStatus, setAlreadyMovieStatus] = useState(''),
        history = useHistory();


    const addToWishlist = (movie) => {
        const currentUser = getSessionStorage('current')
        const alreadyMovie = wishlistControlLocalStorage('users', currentUser, movie.id);

        if (currentUser) {
            if (!alreadyMovie) {
                setWishlistLocalStorage('users', currentUser, movie);
                setAlreadyMovieStatus('success')
            } else {
                setAlreadyMovieStatus('error')

            }
        } else {
            history.push('/login')
        }
    }

    const hidePop = () => {
        setAlreadyMovieStatus('')
    }

    const successContent = alreadyMovieStatus === 'success' ? <Success hidePop={hidePop} /> : null;
    const errorContent = alreadyMovieStatus === 'error' ? <ErrorPop hidePop={hidePop} /> : null;

    return (
        movies.results.map((movie) => (
            <div key={movie.id} className="search__item">
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.image} alt="movies" />
                </Link>
                {successContent}
                {errorContent}
                <div className="search__item-content">
                    <h2>{movie.title}</h2>
                    <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. </p>
                </div>

                <div className="search__item-control">
                    <i onClick={() => addToWishlist(movie)} className={`fa-solid fa-heart`}></i>
                    <Link to={`/movie/${movie.id}`}>Read more</Link>
                </div>
            </div>
        )))
}


const Success = ({ hidePop }) => {

    return (
        <section onClick={hidePop} className="popup">
            <p>Added to <Link to="/wishlist">Wishlist</Link>
                <i className="fa-solid fa-check"></i>
            </p>
        </section>
    )
}

const ErrorPop = ({ hidePop }) => {

    return (
        <section onClick={hidePop} className="popup">
            <p> This movie has been selected
                <i className="fa-solid fa-xmark"></i>
            </p>
        </section>
    )
}


export default FindedMovies;