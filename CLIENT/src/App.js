import './App.css';
import Navbar from './components/Navbar'
import Bg from './components/Bg'

import Home from './views/Home'
import Shop from './views/Shop'
import Login from './views/Login'
import Details from './views/Details'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
   <div>
    <Router>
    <Bg />
    <Navbar />
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/shop/:id" component={Details} />
    </Switch>

    </Router>
   </div>
  );
}

export default App;
