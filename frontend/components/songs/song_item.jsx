import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faEllipsis} from "@fortawesome/free-solid-svg-icons";


class SongItem extends React.Component{
    constructor(props){
        super(props);
    }
  handleDoubleClick(){
    debugger
    this.props.setQueue(this.props.queue);
    this.props.setCurrentSong(this.props.song);
  }
  
    render(){
        const {song,currentSong,idx} = this.props;
        // const [click,setClick] = useState(true);
        // const handleClick = () => setClick(!click);
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
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
          </li>
      );  
    }
}

export default SongItem