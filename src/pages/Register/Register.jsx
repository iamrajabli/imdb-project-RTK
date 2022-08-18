import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../hooks/ls.hook';
import { v4 as uuid } from 'uuid';

const Register = () => {

    const [form, setForm] = useState({});
    const { setLocalStorage, registerControlLocalStorage } = useLocalStorage();


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, wishlist: [] });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const status = registerControlLocalStorage('users', form);

        if (status) {
            setLocalStorage('users', { ...form, id: uuid() });
        }else {
            console.log('error');
        }
    }

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
                                onChange={(e) => handleChange(e)}
                                key={i}
                                value={form.name}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder} />
                        ))}
                        <button>Sign up</button>
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