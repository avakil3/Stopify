import React from 'react';
import { Link } from 'react-router-dom';
// import Background from '../../../app/assets/images/splash_page_background.png';

const SplashPage = ({currentUser, logout}) => {
    return (
          <div className="splash-container">
            <div className="splash-header">
              <div className="splash-logo-container">
                <Link to="/" className="header-link">
                  <img id="logo" src={window.spotifyLogoURL} alt="logo" />
                </Link>
              </div>
              <ul className="splash-nav-bar">
                <li className="links"><a className="links" href='https://github.com/avakil3' target="_blank" >GitHub</a></li>
                <li className="links"> <a className="links" href='https://www.linkedin.com/in/aagamvakil/' target="_blank" >LinkedIn</a> </li>
                <li className="hidden">|</li>
                <li>
                  <Link to={ "/signup" } className="links">Sign Up</Link>
                </li>
                <li><Link to={ "/login" } className="links">Log In</Link></li>
              </ul>
            </div>
            <div className="main-splash-text">
              <p id="content-listening-is">Listening is</p>
              <p id="content-everything">everything</p>
              <div >
              <p id="splash-centered_content">Millions of songs and podcasts. No credit card needed.</p>
              <Link to={ "/signup" } className="splash-btn">
                  GET STOPIFY FREE
              </Link>
                {/* <input 
                  type="button"
                  value="GET STOPIFY FREE"
                  className="splash-btn"
                  />  */}
              </div>
            </div>
 
          </div>
      )
    }
    
    export default SplashPage;