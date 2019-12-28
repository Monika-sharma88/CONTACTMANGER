import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    //<div>
    //<h1 style={headingstyle}> {branding}</h1>
    //</div>
    //);
    //};
    <nav className="navbar navbar-expands-sm navbar-clark bg-danger mb-3 py--0">
      <div className="Container">
        <Link to="\" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact/Add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};
//const headingstyle = {
//color: "red",
//fontSize: "100px"
//};
export default Header;
