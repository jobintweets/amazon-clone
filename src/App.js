  
import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Canvas from './Canvas';
import Login from './Login';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className = "app">
        <Switch>
          <Route path="/checkout">
             {/* COMPONENTS */}
            <Header />
          <Checkout/>
          </Route>

          <Route path="/canvas">
              <Header />
            <Canvas/>
          </Route>

          <Route path="/login">
           
            <Login/>
          </Route>

          {/* Default route should be always placed at the bottom */}
          <Route path="/">
             {/* COMPONENTS */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
</Router>
  );
}

export default App;
