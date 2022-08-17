import { Link } from 'react-router-dom';
import logo from '../../resources/img/logo.png';
import { useState } from 'react';

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(menu => !menu);
    }
    return (
        <nav>
            <div className="container">
                <div className="nav__left">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="nav__right">
                    <ul className={menu ? 'd-flex' : null}>
                        <li><Link to="/" className="active">Home Page</Link></li>
                        <li><Link to="/account">My Account</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/">Sign Out</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    <i className={`fa-solid fa-bars-staggered ${menu ? 'rotate' : null}`}
                        onClick={() => toggleMenu()}>
                    </i>
                </div>
            </div>
        </nav>
    )
}

export default Nav;