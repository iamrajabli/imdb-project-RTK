const Home = () => {

    return (
        <section id="search">
          
            <div className="container">
                <div className="search__title">
                    <h1>Search for Movie</h1>
                </div>
                <div className="search__container">
                    <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="Search for Movie" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search__finded">
                </div>

            </div>
        </section>

    )
}

const Success = ({ hide }) => {

    return (
        <section onClick={hide} className="popup">
            <p>Added to <Link to="/wishlist">Wishlist</Link>
                <i className="fa-solid fa-check"></i>
            </p>
        </section>
    )
}

const Error = ({ hide }) => {

    return (
        <section onClick={hide} className="popup">
            <p> This movie has been selected
                <i className="fa-solid fa-xmark"></i>
            </p>
        </section>
    )
}

const FindedMovies = ({ movies, crud }) => {
    return (
        movies.map(movie => {


            return (
                <div key={movie.id} className="search__item">
                    <Link to={`/movie/${movie.id}`}><img src={movie.img}
                        alt="movies" /></Link>

                    <div className="search__item-content">
                        <h2>{movie.title}</h2>
                        <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. </p>
                    </div>

                    <div className="search__item-control">
                        <i onClick={(e) => crud(e, movie.id)}
                            className={`fa-solid fa-heart `}></i>
                        <Link to={`/movie/${movie.id}`}>Read more</Link>
                    </div>
                </div>
            )
        })
    )
}

const NotFindedMovies = () => {
    return (
        <div className="search__notfound">
            <h2>Movie not found</h2>
        </div>
    )
}

export default Home;