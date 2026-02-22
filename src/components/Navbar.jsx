
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/functiondemo1">
                fundemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Employees">
              Employees
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
              formdemo1
             </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
              formdemo2
             </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
              formdemo3
             </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/formvalidation1">
              formvalidation1
             </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formvalidation2">
              formvalidation2
             </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/formvalidation3">
              formvalidation3
             </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/apidemo2">
                apidemo2
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/apidemo3">
                apidemo3
                </Link>
              </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
