import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle, faForwardStep, faBackwardStep,
faShuffle, faRepeat, faVolumeHigh,faHeart} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  constructor(props){
    super(props)
	this.state ={loop:false, playbackQueue:[]};
  }



  componentDidUpdate(prevProps){
    const {musicPlayer,player} = this.props;
    if (prevProps.player.currentSong !== player.currentSong) this.playSong();
	
	player.playing ? musicPlayer.play() : musicPlayer.pause();
  }

	playSong(){
		const currentSong = this.props.player.currentSong;
		const playbackTimeBar = document.getElementById("music-duration-slider");
		const {musicPlayer} = this.props;
		// debugger
		if (musicPlayer.src.slice(musicPlayer.src.length - 50) !== currentSong.url.slice(currentSong.url.length - 50) ){
			musicPlayer.src = currentSong.url;
			// debugger
			musicPlayer.play();

			const playerAlbumImage = document.getElementById("album-img");
			playerAlbumImage.src = currentSong.albumImgUrl;

			const timer = setInterval(() => { // start playback timer for music playback control bar
			playbackTimeBar.value = (musicPlayer.currentTime/musicPlayer.duration) * 1000;
			if (playbackTimeBar.value < 1000 || this.state.loop) {
				this.forceUpdate();
			}else{
				clearInterval(timer);
				this.props.nextSong();
			}
			}, 100)
		} 
	}

	changeVolume(e){ this.props.musicPlayer.volume = e.target.value;}

	toggleLoop(){this.state.loop = !this.state.loop;}

	scrubMusicPlayback(e){ 
		const {musicPlayer} = this.props;
		musicPlayer.currentTime = e.target.value/1000.0 * musicPlayer.duration;
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
	//   debugger
    const currentSong = this.props.player.currentSong;
	  const {prevSong,nextSong,togglePlayback,shufflePlayback,player} = this.props;
     return (
      <div className='footer'>
         { currentSong ? (<div className="song-details">
             <img src="" id='album-img'></img>
             <div className='track-info'>
                <p id="current-song-name">{currentSong.song_name}</p>
                <p id="current-artist-name">{currentSong.artistName}</p>
             </div>
         <FontAwesomeIcon icon={faHeart} id="footer-like-btn" />
       </div>) : (<div className="song-details"> </div>)}
        
        <div className="player-controls">
           <div className='player-center-btns'>
            <FontAwesomeIcon icon={faShuffle} onClick={()=> currentSong ? shufflePlayback() : null} className={player.shuffle ? "shuffle-btn clicked":"shuffle-btn"}/>
            <FontAwesomeIcon icon={faBackwardStep} className="back-and-forward-btns" onClick={()=> currentSong ? prevSong() : null} size="lg"/>
            <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                              className="play-btn" size="2xl"
                              onClick={()=> currentSong ? togglePlayback(): null} />
            <FontAwesomeIcon icon={faForwardStep} className="back-and-forward-btns" onClick={()=> currentSong ? nextSong() : null} size="lg"/>
            <FontAwesomeIcon icon={faRepeat} className={this.state.loop ? "loop-btn clicked":"loop-btn"} onClick={()=> this.toggleLoop()}/>
         </div>
         <div className='scroll-bar-container'>
			<audio id="music-player" src=""  />
			<p>{currentSong ? this.FormattedCurrentTime(): ""}</p>
			<input type="range" min="0" max="1000" 
			onChange={e=> this.scrubMusicPlayback(e)} defaultValue="0" id="music-duration-slider" className="slider"/>
			<p>{currentSong ? currentSong.duration: ""}</p>
		 </div>
		</div>

        <div className="volume-controls">
         	<FontAwesomeIcon icon={faVolumeHigh} className="mute-btn" />
        	<input type="range" min="0" max="1" step=".01" onChange={e=> this.changeVolume(e)} className="slider" ></input>
        </div>
      
      </div>
    )
  }
}

export default Footer;