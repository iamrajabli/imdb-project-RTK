import { useState } from "react";
import { useGetFindedMoviesQuery } from "../../api/apiSlice"
import { Link } from "react-router-dom";
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';
import { FindedMovies } from '../../components/FindedMovies';
import { NotFindedMovies } from '../../components/NotFindedMovies';

const Home = () => {

    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const title = Object.fromEntries(new FormData(e.target))
        setTitle(title.name)
    }

    const content = title ? <Result title={title} /> : null;

    return (
        <section id="search">

            <div className="container">
                <div className="search__title">
                    <h1>Search for Movie</h1>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="search__container">
                        <input
                            name="name"
                            type="text"
                            placeholder="Search for Movie" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>
                <div className="search__result">
                    {content}
                </div>

            </div>
        </section>

    )
}

const Result = ({ title }) => {

    const {
        data: movies,
        isFetching,
        isError
    } = useGetFindedMoviesQuery(title);


    if (isFetching) {
        return <Loading />
    } else if (isError || movies.errorMessage) {
        return <Error />
    }

    return !movies.results.length ? <NotFindedMovies /> : <FindedMovies movies={movies} />

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

const ErrorPop = ({ hide }) => {

    return (
        <section onClick={hide} className="popup">
            <p> This movie has been selected
                <i className="fa-solid fa-xmark"></i>
            </p>
        </section>
    )
}


export default Home;