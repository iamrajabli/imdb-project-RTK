import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/ls.hook';
import useSessionStorage from '../../hooks/ss.hook';


const Login = () => {
    const { loginControlLocalStorage } = useLocalStorage();
    const { setSessionStorage } = useSessionStorage();


    const [form, setForm] = useState({});
    const [wrongPassStatus, setWrongStatusPass] = useState(false);
    const inputsRef = useRef([]);
    const history = useHistory();


    const handleChange = (e) => {
        const input = e.target;

        setForm({ ...form, [input.name]: input.value })

        formValidation(input)
    }

    // yazdigi anda validate
    const formValidation = (input) => {
        if (input.value === '') {
            builderInputStatus(true, input)
        } else {
            builderInputStatus(false, input)
        }
    }

    // builder status
    const builderInputStatus = (status, input) => {
        if (status) { // error
            input.classList.remove('successBorder')
            input.classList.add('errorBorder')
        } else { // success
            input.classList.add('successBorder')
            input.classList.remove('errorBorder')
        }

        return status
    }

    // submit edilende empty validate
    const emptyValidate = (inputsRef) => {
        let status;

        for (let input of inputsRef.current) {
            if (input.value !== '') {
                status = builderInputStatus(false, input);
            } else {
                status = builderInputStatus(true, input);
            }
        }

        return status;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const statusPass = loginControlLocalStorage('users', form);
        const statusEmpty = emptyValidate(inputsRef);

        if (statusEmpty) return;

        if (statusPass) {
            setSessionStorage('current', form.username)
            history.push('/');
        } else {
            setWrongStatusPass(true)
        }
    }

    // Массив полей
    const inputs = [
        { name: 'username', type: 'text', placeholder: 'Enter username' },
        { name: 'pass', type: 'password', placeholder: 'Enter pass' },
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
                                value={form.name}
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