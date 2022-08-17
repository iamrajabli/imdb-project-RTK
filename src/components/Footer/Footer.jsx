import logo from '../../resources/img/logo2.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__left">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer__right">
                    <p>Made by
                        <a href="https://github.com/iamrajabli/imdb-react"
                            target='_blank'>Hikmat Rajabli</a></p>
                </div>
            </div>
        </footer >
    )
}

export default Footer;