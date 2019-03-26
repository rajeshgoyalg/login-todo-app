import React, { Component } from 'react';

class Navbar extends Component {

  render() {

    return (
      <div className="navbar">
        <header className="header">
          <button onClick={() => this.props.clickNav("logout")}>Log Out</button>
        </header>
      </div>
    );

  }

}

export default Navbar;
