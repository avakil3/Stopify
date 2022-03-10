import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import SongItemContainer from '../songs/song_item_container';
import {faPlayCircle,faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {calculateTotalTimeLength} from '../../util/helper_functions';



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
    return  (
        <div className="show-body">
          <div className="show-page-header">
            <img className="show-page-cover-img" src={artist.imageUrl}/>

            <div className="detail-content">
                <p>ARTIST</p>
                <h1>{artist.name}</h1>
                <div>
                  <span className="album-artist-name">
                    {artist.name}
                  </span>
                  {` • ${artist_songs.length}`} songs, 
                  <span>{` ${calculateTotalTimeLength(artist_songs)}`}</span>
                </div>
            </div>

          </div>
          <FontAwesomeIcon icon={this.props.player.playing ? faPauseCircle : faPlayCircle} 
                              className="show-page play-btn" size="2xl"
                              onClick={()=> this.props.togglePlayback(player.currentSong,artist_songs[0])} />
          <div className="show-content">
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