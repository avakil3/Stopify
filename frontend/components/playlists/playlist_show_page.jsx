import React, { Component } from 'react'
import {calculateTotalTimeLength} from '../../util/helper_functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle,faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';


export class PlaylistShowPage extends Component {
    

  render() {
      const {playlist,currentUser,player} = this.props;
    //   debugger
      if (!playlist) return null;  
      const playlist_songs = Object.values(playlist.songs);
    return  (
        <div className=".show-container">
          <div className="show-body">
            <div className="playlist-header">
              <img className="playlist-cover-img" src={playlist.playlistImgUrl}/>
  
              <div className="detail-content">
                  <p>PLAYLIST</p>
                  <h1>{playlist.playlist_name}</h1>
                  <div>
                    <span className="playlist-user-name">
                      {currentUser.username}
                    </span>
                    {` • ${playlist_songs.length}`} songs, 
                    <span>{` ${calculateTotalTimeLength(playlist_songs)}`}</span>
                  </div>
              </div>
  
            </div>
            <div className="playlist-content">
            <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                                className="playlist play-btn" size="2xl"
                                onClick={()=> this.props.togglePlayback(player.currentSong,playlist_songs[0])} />
             <div className="songs-header">
               <div className='header-text-labels'>
                    <p>#</p>
                    <p>TITLE</p>
                 </div>
                 <FontAwesomeIcon className='clock-icon' icon={faClock} />
               </div>
               <ul className='playlist-song-list'>
                  {playlist_songs.map((song,idx)=> <SongItemContainer key ={song.id} song={song} queue={playlist_songs} idx={idx+1} /> )}
               </ul>
            </div>
          </div>
        </div>
      ) 
  }
}

export default PlaylistShowPage