import { Link } from "react-router-dom";
import useSessionStorage from '../../hooks/ss.hook';
import useLocalStorage from '../../hooks/ls.hook';
import { useHistory } from 'react-router-dom';

const FindedMovies = ({ movies }) => {
    const { getSessionStorage } = useSessionStorage();
    const { setWishlistLocalStorage } = useLocalStorage();
    const history = useHistory();


    const addToWishlist = (movie) => {
        const currentUser = getSessionStorage('current')

        if (currentUser) {
            setWishlistLocalStorage('users', currentUser, movie)
        } else {
            history.push('/login')
        }
    }

    return (
        movies.results.map((movie) => (
            <div key={movie.id} className="search__item">
                <Link to={`/movie/${movie.id}`}><img src={movie.image}
                    alt="movies" /></Link>

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

export default FindedMovies;