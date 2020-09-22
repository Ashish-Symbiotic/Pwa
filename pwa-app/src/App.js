import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/Home" >Home</Link></Nav.Link>
      <Nav.Link><Link to="/Users">Users</Link></Nav.Link>
      <Nav.Link><Link to="/About">About</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  <Switch>
  <Route component ={About} path ="/About"></Route>
  <Route component ={Users} path ="/Users"></Route>
  <Route component ={Home} path ="/"></Route>
  </Switch>
  </Router>
     
    </div>
  );
}

export default App;
