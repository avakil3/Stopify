import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faInfo,faHeart,faAdd} from "@fortawesome/free-solid-svg-icons";
import CreatePlaylistModalContainer from '../playlists/create_playlist_modal/create_playlist_modal_container';
import AboutMeModal from '../about_me_modal/about_me_modal';
import { PortalWithState } from 'react-portal';

class Sidebar extends React.Component {
    render(){
        if (!this.props.currentUser) return null;
        const playlists = Object.values(this.props.playlists);
        const likedSongsPlaylist = playlists.find(playlist=> playlist.playlist_name==='Liked Songs');

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
    
            <Link to={'/home/us'}>
            <FontAwesomeIcon icon={faSearch} />
                <span>Search</span>
            </Link>
    
            
            
            <PortalWithState closeOnOutsideClick closeOnEsc>
                 {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>                     
                        <div onClick={openPortal} className='about-me-btn'>
                            <FontAwesomeIcon icon={faInfo} />
                            <span>About Me</span>
                        </div>
                    {portal(
                      <AboutMeModal closeModal={closePortal} />
                    )}
                  </React.Fragment>
                  )}
                </PortalWithState>
            
            <br />

            <PortalWithState closeOnOutsideClick closeOnEsc>
                 {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>                     
                    <div onClick={openPortal}>
                        <FontAwesomeIcon icon={faAdd} />
                        <span>Create Playlist</span>
                    </div>
                    {portal(
                      <CreatePlaylistModalContainer closeModal={closePortal} />
                    )}
                  </React.Fragment>
                  )}
                </PortalWithState>


            <Link to={`/home/playlists/${likedSongsPlaylist ? likedSongsPlaylist.id : ""}`}>
            <FontAwesomeIcon icon={faHeart} />
                <span>Liked Songs</span>
            </Link>
            </div>
            <hr className='sidebar-divider'/>
            <div className='sidebar-playlists'>
                {playlists.map(playlist=> playlist.playlist_name != 'Liked Songs' ? <Link to={`/home/playlists/${playlist.id}`} key={playlist.id} ><p>{playlist.playlist_name}</p></Link> : "")}
            </div>
        </div>
      )
    }
}

export default Sidebar