
import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <div className="nav-wrapper">
          <div className="nav-links-wrapper">
          <a href='https://github.com/avakil3' target="_blank" >GitHub</a>
          <a href='https://www.linkedin.com/in/aagamvakil/' target="_blank" >LinkedIn</a>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;