import { Link } from 'react-router-dom';

const Register = () => {

 
    // Массив полей
    const inputs = [
        { name: 'email', type: 'email', placeholder: 'Enter email' },
        { name: 'username', type: 'text', placeholder: 'Enter username' },
        { name: 'pass', type: 'password', placeholder: 'Enter pass' },
        { name: 'repass', type: 'password', placeholder: 'Confirm pass' },
    ]
    return (
        <section id="sign">
            <div className="container">
                <div className="sign__content">
                    <div className="sign__title">
                        <h1>Sign Up</h1>
                    </div>
                  
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map((input, i) => (
                            <input
                                key={i}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder} />
                        ))}
                        <button >Sign up</button>
                    </form>
                    <div className="sign__other">
                        <Link to="/login">I have an account</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const PassPop = () => {
    return (
        <div className="sign__status error">
            <p>Passwords must be the same!</p>
        </div>
    )
}

const SuccessPop = () => {
    return (
        <div className="sign__status success">
            <p>You have successfully registered!</p>
            <p>Login here <Link to={'/login'}>Login</Link></p>
        </div>
    )
}

const AvialablePop = ({ already }) => {
    return (
        <div className="sign__status error">
            <p>{already}</p>
        </div>
    )
}

export default Register;