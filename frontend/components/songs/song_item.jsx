import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faEllipsis} from "@fortawesome/free-solid-svg-icons";


class SongItem extends React.Component{
  
  playSong(){
      
  }
  
    render(){
        const {song,idx} = this.props;
      return(
          <li className='song-item'> 
                    <p className="song-idx-num">{idx}</p>
                    <div className="song-container-left">
                        <h2>{song.song_name}</h2>
                        <p>{song.artist_name}</p> 
                    </div>
                    <div className="song-container-right">
                        <FontAwesomeIcon className="song-row-like" icon={faHeart} />
                        <p>{song.duration}</p>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
          </li>
      );  
    }
}

export default SongItem