import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
  <div className="container-fluid main_menu">
      <div className="row">
          <div className="col-md-10 col-12 mx-auto">
              <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/"> <i className="far fa-snowflake"></i> KrishnWeather <i className="far fa-snowflake"></i></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item active">
                              <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/weather" className="nav-link">Weather</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/about" className="nav-link">About</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
    </div>
  );
};
