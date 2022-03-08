import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle, faForwardStep, faBackwardStep,
faShuffle, faRepeat, faVolumeHigh,faHeart} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  constructor(props){
    super(props)
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
	musicPlayer.loop = false;
    if (musicPlayer.src.slice(musicPlayer.src.length - 10) !== currentSong.url.slice(currentSong.url.length - 10) ){
        musicPlayer.src = currentSong.url;
    } 
    if (!this.playing){
        musicPlayer.play();
        this.playing = true;
		const playbackTimeBar = document.getElementById("music-duration-slider");
		setInterval(() => { // start playback timer
			playbackTimeBar.value = (musicPlayer.currentTime/musicPlayer.duration) * 100;
			this.forceUpdate();
			}, 100)
    }else{
        musicPlayer.pause();
        this.playing = false;
    }

    const playerAlbumImage = document.getElementById("album-img");
    playerAlbumImage.src = currentSong.albumUrl;
  }

	changeVolume(e){ this.props.musicPlayer.volume = e.target.value;}

	scrubMusicPlayback(e){ 
		const {musicPlayer} = this.props;
		musicPlayer.currentTime = e.target.value/100.0 * musicPlayer.duration;
	}

	FormattedCurrentTime(){
		const currentTime = this.props.musicPlayer.currentTime; //time comes in as seconds
		let minutes = Math.floor(currentTime / 60);
		let seconds = Math.floor(currentTime - (minutes * 60));
		if(minutes + seconds === 0) {
		return '0:00';
		} else if(seconds < 10) { 
			seconds = '0'.concat(seconds); 
		}
		return `${minutes}:${seconds}`;
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
           <div className='player-center-btns'>
            <FontAwesomeIcon icon={faShuffle} id="shuffle-btn" />
            <FontAwesomeIcon icon={faBackwardStep} className="back-and-forward-btns" size="lg"/>
            <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                              id="play-btn" size="2xl"
                              onClick={()=> this.props.togglePlayback()} />
            <FontAwesomeIcon icon={faForwardStep} className="back-and-forward-btns" size="lg"/>
            <FontAwesomeIcon icon={faRepeat} id="repeat-btn" />
         </div>
         <div className='scroll-bar-container'>
			<audio id="music-player" src=""  />
			<p>{currentSong ? this.FormattedCurrentTime(): ""}</p>
			<input type="range" min="0" max="100" 
			onChange={e=> this.scrubMusicPlayback(e)} defaultValue="0" id="music-duration-slider" className="slider"/>
			<p>{currentSong ? currentSong.duration: ""}</p>
		 </div>
		</div>

        <div className="volume-controls">
         	<FontAwesomeIcon icon={faVolumeHigh} className="mute-btn" />
        	<input type="range" min="0" max="1" step=".01" onChange={e=> this.changeVolume(e)} defaultValue="0.5" className="slider" ></input>
        </div>
      
      </div>
    )
  }
}

export default Footer;