import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Nav } from '../Nav';
import { Movies } from '../../pages/Movies';
import { Home } from '../../pages/Home';
import { Footer } from '../Footer';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Account } from '../../pages/Account';
import { Movie } from '../../pages/Movie';
const App = () => {


    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/register' render={() => <Register />} />
                    <Route exact path='/wishlist' render={() => <Movies />} />
                    <Route exact path='/account' render={() => <Account />} />
                    <Route exact path='/movie/:id' render={() => <Movie />} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;