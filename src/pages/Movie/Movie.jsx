
import leftLoading from '../../resources/img/leftLoading.gif';
import rightLoading from '../../resources/img/rightLoading.gif';
import leftError from '../../resources/img/leftError.png';
import rightError from '../../resources/img/rightError.png';
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../api/apiSlice';

const Movie = () => {

    const { id } = useParams();

    const content = id ? <View id={id} /> : null

    return (
        <section id="movie">
            <div className="container">
                {content}
            </div>
        </section>
    )
}


const View = ({ id }) => {

    const {
        data: movie,
        isLoading,
        isError
    } = useGetMovieQuery(id)


    return (
        <>
            <div className="movie__left">
                {isLoading ? <img src={leftLoading} /> : null}
                {isError ? <img src={leftError} /> : null}
                {!(isLoading || isError) ?
                    <>
                        <img src={movie.results[0].image} alt="movies" />
                    </>
                    : null}
            </div>

            <div className="movie__right">

                {isLoading ? <img src={rightLoading} /> : null}
                {isError ? <img src={rightError} /> : null}
                {!(isLoading || isError) ?
                    <div className="movie__content">
                        <h2>{movie.results[0].title}</h2>
                        <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.</p>

                        <div className="movie_rating">
                            <i className="fa-solid fa-star"></i>
                            <p>8.43</p>
                        </div>
                    </div>
                    : null}

            </div>
        </>
    )
}

export default Movie;