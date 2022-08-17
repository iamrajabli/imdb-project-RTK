

const Movies = () => {


    return (
        <section id="movies">
            <div className="container">
                {/* {movies ? movies.map(movie => (
                    <div key={movie.id} className="movies__wrapper">
                        <div className="movies__item">
                            <a href="#">
                                <img src={movie.img} />
                            </a>
                            <div className="movies__content">
                                <h2>{movie.title}</h2>
                                <div className="movies_rating">
                                    <i className="fa-solid fa-star"></i>
                                    <p>8.43</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-heart" onClick={() => deleteFromWishlist(movie.id)}></i>

                            <Link to={`/movie/${movie.id}`}>
                                <div className="movies__wishlist">
                                </div>
                            </Link>
                        </div>
                    </div>
                )) : ''} */}


            </div>
        </section>
    )
}

export default Movies;