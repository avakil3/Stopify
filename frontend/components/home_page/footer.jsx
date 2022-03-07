import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle, faForwardStep, faBackwardStep,
faShuffle, faRepeat, faVolumeHigh,faHeart} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  constructor(props){
    super(props)
    // this.musicPlayer = document.getElementById("music-player");
  }
  componentDidUpdate(prevProps){
    const {musicPlayer} = this.props;
    prevProps.player.currentSong !== this.props.player.currentSong ? this.playSong() : null;
    if(this.props.player.playing){
      musicPlayer.play()
    }else{
      musicPlayer.pause()
    }
  }

  playSong(){
    const currentSong = this.props.player.currentSong;
    const {musicPlayer} = this.props;
    debugger
    if (musicPlayer.src.slice(musicPlayer.src.length - 10) !== currentSong.url.slice(currentSong.url.length - 10) ){
        musicPlayer.src = currentSong.url;
    } 
    if (!this.playing){
        musicPlayer.play();
        this.playing = true;
    }else{
        musicPlayer.pause();
        this.playing = false;
    }

    const playerAlbumImage = document.getElementById("album-img");
    playerAlbumImage.src = currentSong.albumUrl;
  }


  render(){
    const currentSong = this.props.player.currentSong;
    return (
      <div className='footer'>
         { currentSong ? (<div className="song-details">
             <img src="" id='album-img'></img>
             <div className='track-info'>
                <p id="current-song-name">{currentSong.song_name}</p>
                <p id="current-artist-name">{currentSong.artist_name}</p>
             </div>
         <FontAwesomeIcon icon={faHeart} id="footer-like-btn" />
         </div>) : (<div className="song-details"> </div>)}
        
         <div className="player-controls">
         <FontAwesomeIcon icon={faShuffle} id="shuffle-btn" />
         <FontAwesomeIcon icon={faBackwardStep} className="back-and-forward-btns" size="lg"/>
         <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                          id="play-btn" size="2xl"
                          onClick={()=> this.props.togglePlayback()} />
         <FontAwesomeIcon icon={faForwardStep} className="back-and-forward-btns" size="lg"/>
         <FontAwesomeIcon icon={faRepeat} id="repeat-btn" />
         <audio id="music-player" src="" />
         </div>
          <div className="volume-controls">
         <FontAwesomeIcon icon={faVolumeHigh} className="mute-btn" />
          <input type="range" min="0" max="100" defaultValue="50" className="vol-slider" ></input>
        </div>
      
      </div>
    )
  }
}

export default Footer;