import React, { Component } from 'react'
import {calculateTotalTimeLength} from '../../util/helper_functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle,faClock, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';
import EditPlaylistModalContainer from './edit_playlist_modal/edit_playlist_modal_container';
import { PortalWithState } from 'react-portal';

export class PlaylistShowPage extends Component {
    

  render() {
      const {playlist, currentUser,player} = this.props;
      if (!playlist) return null;  
      const playlist_songs = playlist.songs ? Object.values(playlist.songs) : null;

    return  (
          <div className="show-body">
            <div className="show-page-header">
              <img className="show-page-cover-img" src={playlist.playlistImgUrl === 'null' ? window.placeholderImg : playlist.playlistImgUrl} alt={playlist.playlist_name}/>
  
              <div className="detail-content">
                  <p>PLAYLIST</p>
                  <h1>{playlist.playlist_name}</h1>
                  <p>
                    <span className="album-artist-user-name">
                      {currentUser.username}
                    </span>
                    {playlist_songs ? ` • ${playlist_songs.length} songs, ${calculateTotalTimeLength(playlist_songs)}` : ""}
                  </p>
              </div>
  
            </div>
            <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                                className="show-page play-btn" size="2xl"
                                onClick={()=> playlist_songs ? this.props.togglePlayback(player.currentSong,playlist_songs[0]) : null} />
                       
                       
            <PortalWithState closeOnOutsideClick closeOnEsc>
                 {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>                     
                      <FontAwesomeIcon className='playlist-options' onClick={openPortal} icon={faEllipsis} />  
                    {portal(
                      <EditPlaylistModalContainer closeModal={closePortal} playlist={playlist}/>
                    )}
                  </React.Fragment>
                  )}
                </PortalWithState>   

            <div className="show-content">
             <div className="songs-header">
               <div className='header-text-labels'>
                    <p>#</p>
                    <p>TITLE</p>
                 </div>
                 <FontAwesomeIcon className='clock-icon' icon={faClock} />
               </div>
               <ul className='playlist-song-list'>
                  { playlist_songs.length != 0 ? playlist_songs.map((song,idx)=> <SongItemContainer key ={song.id} playlist={playlist} song={song} queue={playlist_songs} idx={idx+1} />) 
                    : 
                    <p className='no-music-in-playlist'>Add music to your playlist</p>
                  }
               </ul>
            </div>
          </div>
      ) 
  }
}

export default PlaylistShowPage