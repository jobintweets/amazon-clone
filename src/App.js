  
import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
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
           <h1>This is the check out page </h1>
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
