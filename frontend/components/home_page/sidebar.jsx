import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faBookOpen,faHeart} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to="/home">
            <img className='sidebar-logo' src={window.whiteLogoURL} alt="Stopify" />
        </Link>

        <div className='sidebar-options'>
        <Link to={'/home'}>
        <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
        </Link>

        <Link to={'/search'}>
        <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
        </Link>

        <Link to={'/library'}>
        <FontAwesomeIcon icon={faBookOpen} />
            <span>Your Library</span>
        </Link>
        <br />
        <Link to={'/likedsongs'}>
        <FontAwesomeIcon icon={faHeart} />
            <span>Liked Songs</span>
        </Link>
        </div>
        <hr className='sidebar-divider'/>
        <p>Hip Hop</p>
        <p>Rock</p>
        <p>Electronic</p>
    </div>
  )
}

export default Sidebar