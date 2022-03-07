import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faEllipsis} from "@fortawesome/free-solid-svg-icons";


class SongItem extends React.Component{
    constructor(props){
        super(props);
    }
  
  playSong(){
    this.props.setCurrentSong(this.props.song);
    // if (this.musicPlayer.src.slice(this.musicPlayer.src.length - 10) !== this.props.song.url.slice(this.props.song.url.length - 10) ){
    //     this.musicPlayer.src = this.props.song.url;
    // } 
    // if (!this.playing){
    //     this.musicPlayer.play();
    //     this.playing = true;
    // }else{
    //     this.musicPlayer.pause();
    //     this.playing = false;
    // }
  }

  
    render(){
        const {song,idx} = this.props;
        // debugger 
      return(
          <li className='song-item' onDoubleClick={this.playSong.bind(this)}> 
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