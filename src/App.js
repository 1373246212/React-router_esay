import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Caidan from './components/Caidan';
import NotFound from './components/NotFound'
import Product from './components/Product';
class App extends Component {
  render() {
    return (

      <div className="container">
       
        <Router>
          <div>
            <Caidan/>
            <hr/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/product" component={Product}/>
                <Route exact path="/" component={Home}/>

                <Redirect from="/guanyu" to="/about"/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
