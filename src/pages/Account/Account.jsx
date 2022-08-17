import { Link } from "react-router-dom"
const Account = () => {

    // Массив полей
    const inputs = [
        { name: 'pass', type: 'password', placeholder: 'Enter pass' },
        { name: 'repass', type: 'password', placeholder: 'Confirm pass' },
    ]

    return (
        <section id="sign">
            <div className="container">
                <div className="sign__content">
                    <div className="sign__title">
                        <h1>Settings</h1>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="email"
                            className='bg-white'
                            readOnly />
                        <input
                            type="text"
                            className='bg-white'
                            readOnly />
                        {inputs.map((input, i) => (
                            <input
                                key={i}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder} />
                        ))}
                        <button>Update</button>
                    </form>
                    <div className="sign__other">
                        <Link to="/wishlist">Wishlit</Link>
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
            <p>Your password has been changed</p>
        </div>
    )
}

const AvialablePop = () => {
    return (
        <div className="sign__status error">
            <p>Already same password</p>
        </div>
    )
}

export default Account;