import React from "react";

const Header = props => {
  return (
    <nav className="nav has-shadow" id="top">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item" href="../index.html">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Description"
            />
          </a>
        </div>
        <span className="nav-toggle">
          <span />
          <span />
          <span />
        </span>
        <div className="nav-right nav-menu">
          <div className="nav-item">
            <p className="control has-addons searchbox">
              <input
                className="input"
                type="text"
                placeholder="Search videotube..."
              />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
