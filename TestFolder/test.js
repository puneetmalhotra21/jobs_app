import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li  className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li  className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
          </ul>

    
    <nav className="navbar navbar-expand-sm bg-dark " style={{height:30}}>
        <a className="navbar-brand" href="#" style={{fontSize:13,color:"white"}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav" style={{fontSize:13}}>
                <li className="nav-item">
                    <Link className="nav-link" href="#" style={{color:"white"}} to="/">Govt Jobs</Link> 
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <Link className="nav-link" href="#" style={{color:"white"}} to="/about">Admit Cards</Link> 
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <Link className="nav-link" href="#" style={{color:"white"}}  to="/users">Exam Materials</Link> 
                </li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                 <Link className="nav-link" href="#" style={{color:"white"}}  to="/contact">Coupons</Link> 
                </li>    
            </ul>
        </div>  
    </nav>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
           
            <div className="container">  
                <div className="row flex">  
                    <Switch>
                        <Route path="/" exact>
                            <div className="row">
                                <div className="col-sm-4">
                                        Home
                                </div>
                            </div>
                        </Route>
                        <Route path="/about">
                            <div className="col-sm-4">
                            About
                            </div>
                        </Route>
                        <Route path="/users">
                            <div className="col-sm-4">
                            users
                            </div>
                        </Route>
                        <Route path="/*">
                            <div className="col-sm-4">
                            Default
                            </div>
                        </Route>
                    </Switch>
                </div>    
            </div>
    </div>

    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}