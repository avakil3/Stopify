import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';
import {faPlayCircle,faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {calculateTotalTimeLength} from '../../util/helper_functions';
import {Link} from 'react-router-dom'


class AlbumShowPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAlbums();
    this.props.fetchArtists();
  }
   
  playSong(song, queue){
    this.props.setCurrentSong(song);
    this.props.setQueue(queue);
  }

  handlePlayback(){
    const {album_songs,player,togglePlayback} = this.props;
    if(album_songs.includes(player.currentSong)){
      togglePlayback(); 
    }else{
      this.playSong(album_songs[0], album_songs.slice(1));
    }
  }


  render(){
    const {album,artists,album_songs,player} = this.props;
    if (!album || !artists) return null;  
    const artist = artists[album.artist_id];
    if (!artist) return null;

    return  (
        <div className="show-body">
          <div className="show-page-header">
            <img className="show-page-cover-img" src={album.imageUrl} alt={album.album_name}/>

            <div className="detail-content">
                <p>ALBUM</p>
                <h1>{album.album_name}</h1>
                <p>
                  <span className="album-artist-user-name">
                  <Link to={`/home/artists/${artist.id}`}>{artist.name}</Link>
                  </span>
                  {` • ${album.release_date} • ${album_songs.length}`} songs, 
                  {` ${calculateTotalTimeLength(album_songs)}`}
                </p>
            </div>

          </div>
          <FontAwesomeIcon icon={player.playing && album_songs.includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
                              className="show-page play-btn" size="2xl"
							  onClick={()=> this.handlePlayback()} />
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
    ) 

  }
}

export default AlbumShowPage