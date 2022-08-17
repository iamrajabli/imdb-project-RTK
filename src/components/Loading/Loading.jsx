import spinner from '../../resources/img/spinner.gif';
const Loading = () => {
    return (
        <div className="loading">
            <img src={spinner} alt="loading" />
        </div>
    )
}

export default Loading;