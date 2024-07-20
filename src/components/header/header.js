import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header m-0 p-0">
      <nav className="navbar navbar-expand-lg fixed   ">
        <div className="container-fluid  ">
          <button className="navbar-toggler btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse   justify-content-center " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/people">Characters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehicles">vehicles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/starships">Starships</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planets">Planets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/species">Species</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films">Films</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
