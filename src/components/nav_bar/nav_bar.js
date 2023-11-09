import React from "react";
import "./nav_bar.css";
import { FaBars, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";

const Nav_bar = () => {
  return (
    <nav className="pageContent-nav-bar">
      <button id="siderbar-ToggleTop" className="ToggleTop-btn">
        <FaBars className="Fa-bar" />
      </button>
      <form className="search-bar">
        <div className="input-search">
          <input
            type="text"
            className="form-controll"
            placeholder="Search for..."
          ></input>
          <div className="input-group-append">
            <button type="button" className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </form>
      <ul className="pageContent-navbar">
        {/* <li className="pageContent-navItem">
          <a className="nav-link" href="#">
            <FaSearch className="search-icon1" />
          </a>
        </li> */}
        <li className="pageContent-navItem">
          <a className="nav-link" href="#">
            <FaBell className="bell-icon" />
            <span className="bage-count">3+</span>
          </a>
        </li>
        <li className="pageContent-navItem">
          <a className="nav-link" href="#">
            <FaEnvelope className="bell-icon" />
            <span className="bage-count">7</span>
          </a>
        </li>
        <div className="topbar-divider"></div>
        <li className="pageContent-navItem">
          <a className="nav-link" href="#">
            <span className="profile-text">Douglas McGee</span>
            <img
              className="img-profile"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
              alt="profileimage"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav_bar;
