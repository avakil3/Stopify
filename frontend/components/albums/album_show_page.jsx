import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';
import {faPlayCircle,faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {calculateTotalTimeLength} from '../../util/helper_functions';



class AlbumShowPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAlbums();
    this.props.fetchArtists();
  }
 

  render(){
    const {album,artists,album_songs,player} = this.props;

    if (!album || !artists) return null;  
     const artist = artists[album.artist_id];
     if (!artist) return null;
    return  (
      // <div className=".show-container">
        <div className="show-body">
          <div className="show-page-header">
            <img className="show-page-cover-img" src={album.imageUrl}/>

            <div className="detail-content">
                <p>ALBUM</p>
                <h1>{album.album_name}</h1>
                <div>
                  <span className="album-artist-name">
                    {artist.name}
                  </span>
                  {` • ${album.release_date} • ${album_songs.length}`} songs, 
                  <span>{` ${calculateTotalTimeLength(this.props.album_songs)}`}</span>
                </div>
            </div>

          </div>
          <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                              className="show-page play-btn" size="2xl"
                              onClick={()=> this.props.togglePlayback(player.currentSong,album_songs[0])} />
          <div className="show-content">
           <div className="songs-header">
             <div className='header-text-labels'>
                  <p>#</p>
                  <p>TITLE</p>
              </div>
               <FontAwesomeIcon className='clock-icon' icon={faClock} />
            </div>
             <ul className='album-song-list'>
                {album_songs.map((song,idx)=> <SongItemContainer key ={song.id} song={song} queue={album_songs} idx={idx+1} /> )}
             </ul>
          </div>
        </div>
      // </div>
    ) 

  }
}

export default AlbumShowPage