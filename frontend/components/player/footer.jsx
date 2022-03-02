import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle, faForwardStep, faBackwardStep,faShuffle, faRepeat, faVolumeHigh} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='footer'>
       <div className="song-details">
            <p>Album and song details</p>
       </div>
       <div className="player-controls">
       <FontAwesomeIcon icon={faShuffle} id="shuffle-btn" />
       <FontAwesomeIcon icon={faBackwardStep} className="back-and-forward-btns" size="lg"/>
       <FontAwesomeIcon icon={faPlayCircle} id="play-btn" size="2xl"/>
       <FontAwesomeIcon icon={faForwardStep} className="back-and-forward-btns" size="lg"/>
       <FontAwesomeIcon icon={faRepeat} id="repeat-btn" />

       </div>
        <div className="volume-controls">
       <FontAwesomeIcon icon={faVolumeHigh} className="mute-btn" />
        <input type="range" min="0" max="100" defaultValue="50" className="vol-slider" ></input>

        </div>
    
    </div>
  )
}

export default Footer;