import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";



function Header({currentUser,logout}) {

  if(!currentUser) return null;
  const [click,setClick] = useState(true);
  const handleClick = () => setClick(!click);
  
  return (
    <div className='header'>
        <div className="header-dropdown" onClick={handleClick}>
          <div className='header-user-info'>
            <FontAwesomeIcon icon={faUserCircle} id="avatar" />
              <h4>{currentUser.username}</h4>
            <FontAwesomeIcon icon={faAngleDown} id="dropdown" />
          </div>
        <ul className={click ? "dropdown clicked" : "dropdown"}>
            <li>
                <Link className="logout" to={'/'} onClick={()=> logout()}>Log out</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Header;