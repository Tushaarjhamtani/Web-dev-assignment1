import React from 'react';

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bigg Boizz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Music Inventory
              </a>
              <a className="nav-link" href="#">
                Sports Inventory
              </a>
              <a className="nav-link" href="#">Tech Inventory</a>
              <a className="nav-link" href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
