import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faEllipsis} from "@fortawesome/free-solid-svg-icons";

class SongItem extends React.Component{
    constructor(props){
        super(props);
		this.state={clicked:true};
    }
  handleDoubleClick(){
    this.props.setQueue(this.props.queue);
    this.props.setCurrentSong(this.props.song);
  }
  
  handleDropdownClick(){
	this.setState({clicked: !this.state.clicked})
  }

  handleAddSongToPlaylist(playlistId,songId){
    this.props.addSongToPlaylist(playlistId,songId);
	this.setState({clicked: !this.state.clicked})
  }

  handleDeleteSongToPlaylist(playlistId,songId){
    this.props.removeSongFromPlaylist(playlistId,songId);
	this.setState({clicked: !this.state.clicked})
  }

  render(){
        const {song,currentSong,idx} = this.props;
      return(
          <li className='song-item' onDoubleClick={()=> this.handleDoubleClick()}> 
                    <p  className={currentSong && currentSong.id === song.id ? 'song-idx-num playing' : "song-idx-num"} >{idx}</p>
                    <div className="song-container-left">
                        <h2 className={currentSong && currentSong.id === song.id ? 'playing' : ""}>{song.song_name}</h2>
                        <p>{song.artistName}</p> 
                    </div>
                    <div className="song-container-right">
                        <FontAwesomeIcon className="song-row-like" icon={faHeart} />
                        <p>{song.duration}</p>
								
						<div className='song-dropdown-container'>
							<FontAwesomeIcon icon={faEllipsis} onClick={()=> this.handleDropdownClick()} />
							<ul className={this.state.clicked ? 'song-dropdown clicked' : 'song-dropdown'}>
								<p>Add to Playlist</p>
								{
									Object.values(this.props.playlists).map(playlist => playlist.playlist_name != 'Liked Songs' ? <li key={playlist.id} onClick={()=> this.handleAddSongToPlaylist(playlist.id, song.id)}> {playlist.playlist_name} </li> : "")
								}
								<hr />
								{
									this.props.playlist ?  <li onClick={()=> this.handleDeleteSongToPlaylist(this.props.playlist.id, song.id)}>Remove from this playlist</li> : ""
								}
							</ul>
						</div>	
									
                    </div>
          </li>
      );  
    }
}

export default SongItem