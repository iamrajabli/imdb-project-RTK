
import leftLoading from '../../resources/img/leftLoading.gif';
import rightLoading from '../../resources/img/rightLoading.gif';
import leftError from '../../resources/img/leftError.png';
import rightError from '../../resources/img/rightError.png';

const Movie = () => {

    const loadingMovie = true;
    const errorMovie = true;
    return (
        <section id="movie">
            <div className="container">
                <div className="movie__left">
                    {loadingMovie ? <img src={leftLoading} /> : null}
                    {errorMovie ? <img src={leftError} /> : null}
                    {!(loadingMovie || errorMovie) ?
                        <>
                            <img src={findedMovie[0].img} alt="movies" />
                        </>
                        : null}
                    {/* <img src='https://3.bp.blogspot.com/-NazU2wzto78/Tu4cIwwByoI/AAAAAAAABKw/jPF0_DYnrpA/s1600/kurtlar-vadisi-resimleri%25282%2529.jpg' alt="movies"/> */}
                </div>

                <div className="movie__right">

                    {loadingMovie ? <img src={rightLoading} /> : null}
                    {errorMovie ? <img src={rightError} /> : null}
                    {!(loadingMovie || errorMovie) ?
                        <div className="movie__content">
                            <h2>{findedMovie.title}</h2>
                            <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.</p>

                            <div className="movie_rating">
                                <i className="fa-solid fa-star"></i>
                                <p>8.43</p>
                            </div>
                        </div>
                        : null}

                </div>
            </div>
        </section>
    )
}


export default Movie;