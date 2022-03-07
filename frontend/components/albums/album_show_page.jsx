import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';



class AlbumShowPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAlbums();
    // debugger
    // this.props.fetchArtists()
  }
  calculateAlbumTimeLength(){ 
    let totalSeconds = 0;   
    this.props.album_songs.map(song => {
      let minutes, seconds;
      [minutes,seconds] = song.duration.split(":");
      minutes = parseInt(minutes);
      seconds = parseInt(seconds);
      totalSeconds += seconds + minutes*60;
    });
    let hours = Math.floor(totalSeconds / 3600); 
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    return `${hours === 1 ? `${hours} hr` : hours === 0 ? "": `${hours} hrs, `}${minutes} min`;
  }

  render(){
    const {album,artist,album_songs} = this.props;
    let render = false;
    // debugger
    if (album.album_name) render = true;

    return render ? (
      <div className="album-show-container">
        <div className="album-show-body">
          <div className="album-header">
            <img className="album-cover-img" src={album.imageUrl}/>

            <div className="detail-content">
                <p>ALBUM</p>
                <h1>{album.album_name}</h1>
                <div>
                  <span className="album-artist-name">
                    {artist.name}
                  </span>
                  {` • ${album.release_date} • ${album_songs.length}`} songs, 
                  <span>{` ${this.calculateAlbumTimeLength()}`}</span>
                </div>
            </div>

          </div>
          <div className="album-content">
           <div className="songs-header">
             <div className='header-text-labels'>
                  <p>#</p>
                  <p>TITLE</p>
               </div>
               <FontAwesomeIcon className='clock-icon' icon={faClock} />
             </div>
             <ul className='album-song-list'>
                {album_songs.map((song,idx)=> <SongItemContainer key ={song.id }song={song} idx={idx+1} /> )}
             </ul>
          </div>
        </div>
      </div>
    ) : ""

  }
}

export default AlbumShowPage