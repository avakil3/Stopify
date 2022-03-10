import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faBookOpen,faHeart,faAdd} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
    render(){
        if (!this.props.currentUser) return null;
        // if(Object.values(this.props.playlists).length === 0 && this.props.currentUser.username === "Demo") return null;
        const playlists = Object.values(this.props.playlists);
      return (
        <div className='sidebar'>
            <Link to="/home/us">
                <img className='sidebar-logo' src={window.whiteLogoURL} alt="Stopify" />
            </Link>
    
            <div className='sidebar-options'>
            <Link to={'/home/us'}>
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
            <div className='create-playlist' onClick={()=> console.log('hi')}>
                <FontAwesomeIcon icon={faAdd} />
                <span>Create Playlist</span>
            </div>

            <Link to={'/likedsongs'}>
            <FontAwesomeIcon icon={faHeart} />
                <span>Liked Songs</span>
            </Link>
            </div>
            <hr className='sidebar-divider'/>
            <div className='sidebar-playlists'>
                {playlists.map(playlist=> (<Link to={`/home/playlists/${playlist.id}`} key={playlist.id} ><p>{playlist.playlist_name}</p></Link>))}
            </div>
        </div>
      )
    }
}

export default Sidebar