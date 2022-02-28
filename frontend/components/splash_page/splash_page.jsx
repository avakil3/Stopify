import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header'

const SplashPage = ({currentUser, logout}) => {
    return (
          <div className="splash-container">
            <div className="splash-header">
              <div className="splash-logo-container">
                <Link to="/" className="header-link">
                  <img id="logo" src="/assets/spotify_logo" alt="logo" />
                </Link>
              </div>
              <ul className="splash-nav-bar">
                <li className="links"><a href='https://github.com/avakil3' target="_blank" >GitHub</a></li>
                <li className="links"> <a href='https://www.linkedin.com/in/aagamvakil/' target="_blank" >LinkedIn</a> </li>
                <li className="hidden">|</li>
                <li>
                  <Link to={ "/signup" } className="links">Sign Up</Link>
                </li>
                <li><Link to={ "/login" } className="links">Log In</Link></li>
              </ul>
            </div>
            {/* <div className="splash-content">
              <p id="splash-content-left">Listening is</p>
              <p id="splash-content-right">everything</p>
              <p id="splash-content-center">Handfulls of songs. No credit card needed.</p>
              <div >
                <input 
                  type="button"
                  value="GET EARSHOT FREE"
                  className="splash-get-btn"
                  /> 
              </div>
            </div> */}
            {/* <footer className="splash-footer">
              <div className="splash-logo-container">
                <i class="fa-solid fa-ear-listen fa-xl"></i>
                <h1>Earshot</h1>
              </div>
              <ul className="splash-nav">
                <li></li>
                <li></li>
                <li></li>
                <li className="disable">|</li>
                <li className="f-links">
                  <button onClick={() => openLink("https://github.com/Bill-the-dev/Earshot", true)}>
                    <i class="fa-brands fa-github fa-xl"></i>
                  </button>
                </li>
                <li className="f-link">
                  <button onClick={() => openLink("https://www.linkedin.com/in/bill-camarco/", true)}>
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                  </button>
                </li>
              </ul>
            </footer> */}
          </div>
      )
    }
    
    export default SplashPage;