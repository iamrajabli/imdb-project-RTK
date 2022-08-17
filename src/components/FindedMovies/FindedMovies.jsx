import { Link } from "react-router-dom";

const FindedMovies = ({ movies }) => {
    return (
        movies.results.map(({ id, image, title }) => (
            <div key={id} className="search__item">
                <Link to={`/movie/${id}`}><img src={image}
                    alt="movies" /></Link>

                <div className="search__item-content">
                    <h2>{title}</h2>
                    <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. </p>
                </div>

                <div className="search__item-control">
                    <i className={`fa-solid fa-heart `}></i>
                    <Link to={`/movie/${id}`}>Read more</Link>
                </div>
            </div>
        )))
}

export default FindedMovies;