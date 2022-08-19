import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormValidator, useLocalStorage, useSessionStorage } from '../../hooks';


const Login = () => {

    const [form, setForm] = useState({}),
        [wrongPassStatus, setWrongStatusPass] = useState(false),
        { loginControlLocalStorage } = useLocalStorage(),
        { setSessionStorage } = useSessionStorage(),
        { formValidation, emptyValidate, inputsRef } = useFormValidator(),
        history = useHistory();


    const handleChange = (e) => {
        const input = e.target;

        setForm({ ...form, [input.name]: input.value })

        formValidation(input)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const statusEmpty = emptyValidate(inputsRef);

        if (!statusEmpty) {
            const statusPass = loginControlLocalStorage('users', form);

            if (statusPass) {
                setSessionStorage('current', form.username)
                history.push('/');
            } else {
                setWrongStatusPass(true)
            }
        };

    }

    // Массив полей
    const inputs = [
        { name: 'username', type: 'text', placeholder: 'Enter username' },
        { name: 'pass', type: 'password', placeholder: 'Enter pass' }
    ]

    const wrongPassContent = wrongPassStatus ? <ErrorPop /> : null;
    return (
        <section id="sign">
            <div className="container">
                <div className="sign__content">
                    <div className="sign__title">
                        <h1>sign in</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {wrongPassContent}
                        {inputs.map((input, i) => (
                            <input
                                ref={e => inputsRef.current[i] = e}
                                key={i}
                                onChange={(e) => handleChange(e)}
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