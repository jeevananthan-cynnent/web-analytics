import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <h1>Logis</h1>
          </a>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
              <li>
                <Link to="/SerivesDetails">Services</Link>
              </li>
              <li>
                <Link to="./Pricing" class="active">
                  Pricing
                </Link>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span>{" "}
                  <i class="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="./Contact">Contact</Link>
              </li>
              <li>
                <Link class="get-a-quote" to="/Quotes">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
      {/* <!-- End Header --> */}
    </div>
  );
}
