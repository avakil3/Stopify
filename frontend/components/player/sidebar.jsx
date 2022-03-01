import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faBookOpen} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to="/">
            <img className='sidebar-logo' src={window.whiteLogoURL} alt="Stopify" />
        </Link>

        <div className='sidebar-options'>
        <Link to={'/'} className="nav-icon">
        <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
        </Link>

        <Link to={'/search'} className="nav-icon">
        <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
        </Link>

        <Link to={'/library'} className="nav-icon">
        <FontAwesomeIcon icon={faBookOpen} />
            <span>Your Library</span>
        </Link>
        </div>
    </div>
  )
}

export default Sidebar