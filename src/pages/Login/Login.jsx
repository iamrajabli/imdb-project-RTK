import { Link } from 'react-router-dom';

const Login = () => {

   
    // Массив полей
    const inputs = [
        { name: 'username', type: 'text', placeholder: 'Enter username' },
        { name: 'pass', type: 'password', placeholder: 'Enter pass' },
    ]



    return (
        <section id="sign">
            <div className="container">
                <div className="sign__content">
                    <div className="sign__title">
                        <h1>sign in</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map((input, i) => (
                            <input
                                key={i}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder} />
                        ))}
                        <button>Sign in</button>
                    </form>
                    <div className="sign__other">
                        <Link to="/register">I don't have an account</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ErrorPop = () => {
    return (
        <div className="sign__status error">
            <p>Username or password is incorrect!</p>
        </div>
    )
}

export default Login;