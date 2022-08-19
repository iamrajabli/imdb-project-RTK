import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useFormValidator, useLocalStorage } from '../../hooks';

const Register = () => {

    const [form, setForm] = useState({}),
        [alreadyStatus, setAlreadyStatus] = useState({}),
        [registerStatus, setRegisterStatus] = useState(false),
        { setLocalStorage, registerControlLocalStorage } = useLocalStorage(),
        { formValidation, emptyValidate, inputsRef } = useFormValidator();

    const handleChange = (e) => {
        const input = e.target;
        setForm({ ...form, [input.name]: input.value, wishlist: [] });

        formValidation(input)

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const statusEmpty = emptyValidate(inputsRef);

        if (!statusEmpty) {
            const statusAlready = registerControlLocalStorage('users', form);

            if (!statusAlready.status) {
                setLocalStorage('users', { ...form, id: uuid() });
                setRegisterStatus(true)
            } else {
                setRegisterStatus(false)
            }

            setAlreadyStatus(statusAlready)
        }

    }

    // Массив полей
    const inputs = [
        { name: 'email', type: 'email', placeholder: 'Enter email' },
        { name: 'username', type: 'text', placeholder: 'Enter username' },
        { name: 'pass', type: 'password', placeholder: 'Enter pass' }
    ]



    const alreadyContent = alreadyStatus.status ? <AvialablePop already={alreadyStatus.mes} /> : null;
    const registerContent = registerStatus ? <SuccessPop /> : null;

    return (
        <section id="sign">
            <div className="container">
                <div className="sign__content">
                    <div className="sign__title">
                        <h1>Sign Up</h1>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        {alreadyContent}
                        {registerContent}
                        {inputs.map((input, i) => (
                            <input
                                ref={e => inputsRef.current[i] = e}
                                key={i}
                                onChange={(e) => handleChange(e)}
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