import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';
import {faPlayCircle,faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {calculateTotalTimeLength} from '../../util/helper_functions';
import {Link} from 'react-router-dom';


class ArtistShowPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount() {
    // this.props.fetchAlbums();
    this.props.fetchArtists();
  }
 

  render(){
    const {albums,artist,artist_songs,player} = this.props;

    if (!albums || !artist) return null;  
    const artistAlbums = Object.values(albums).filter(album => album.artist_id === artist.id);
    return  (
        <div className="show-body">
          <div className="show-page-header">
            <img className="show-page-cover-img" src={artist.imageUrl} alt={artist.name}/>

            <div className="detail-content">
                <p>ARTIST</p>
                <h1>{artist.name}</h1>
                <p>
                  <span className="album-artist-name">
                      {artist.name}
                  </span>
                  {` • ${artist_songs.length} songs, ${calculateTotalTimeLength(artist_songs)}`}
                </p>
            </div>

          </div>
          <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                              className="show-page play-btn" size="2xl"
                              onClick={()=> this.props.togglePlayback(player.currentSong,artist_songs[0])} />
          
          <div className='albums-section-container'>
            <h1 className='section-header'>Albums</h1>
            <div className='search-index-grid'>
            {
            artistAlbums.length === 0 ?
              <p>No albums found</p> :
              artistAlbums.map(album => 
                <Link to={`/home/albums/${album.id}`} key={album.id}>
                  <div className="body-section-2">
                    <img src={album.imageUrl} className='body-section-2-img' alt={album.album_name}/>
                    <h3>{album.album_name}</h3>
                  </div>
                  </Link>
                )
				      }
			      </div>
		      </div>
          

          <div className="show-content">
          <h1 className='section-header songs'>Songs</h1>
           <div className="songs-header">
             <div className='header-text-labels'>
                  <p>#</p>
                  <p>TITLE</p>
              </div>
               <FontAwesomeIcon className='clock-icon' icon={faClock} />
            </div>
             <ul className='album-song-list'>
                {artist_songs.map((song,idx)=> <SongItemContainer key ={song.id} song={song} queue={artist_songs} idx={idx+1} /> )}
             </ul>
          </div>
        </div>
    ) 

  }
}

export default ArtistShowPage