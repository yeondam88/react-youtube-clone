import React, { Component } from "react";
import logo from "../../images/youtube-logo.png";

class Header extends Component {
  state = {
    query: ""
  };

  onInputChange(query) {
    this.setState({
      query
    });
    this.props.onSearchTermChange(query);
  }

  render() {
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" href="../index.html">
              <img src={logo} alt="YouTube Search React App" />
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
                  value={this.state.query}
                  onChange={e => {
                    this.onInputChange(e.target.value);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
