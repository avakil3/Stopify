import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faClock} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import SongItemContainer from '../songs/song_item_container';


export class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        	songs: [],
			albums: [],
			artists: []
        }
    	this.handleChange = this.handleChange.bind(this)
    }
  

	handleChange(e) {
		const {songs,albums,artists} = this.props;
		if(e.target.value === ''){
			this.setState({songs: [],
				albums: [],
				artists: []
			});
		}else{
			const filteredSongs = Object.values(songs).filter(song => 
				song.song_name.toLowerCase().includes(e.target.value.toLowerCase())
				|| song.artistName.toLowerCase().includes(e.target.value.toLowerCase())
				|| Object.values(albums).find(album=> album.id === song.album_id).album_name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			const filteredAlbums = Object.values(albums).filter(album => 
				album.album_name.toLowerCase().includes(e.target.value.toLowerCase())
				|| Object.values(artists).find(artist=> artist.id === album.artist_id).name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			const filteredArtists = Object.values(artists).filter(artist => 
				artist.name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			this.setState({songs: filteredSongs,
						albums: filteredAlbums,
						artists: filteredArtists
			});
		}
	}
  
  
    render() {
    return (
      <div className='search-page-container'>
		  <div className='search-bar-container'>
			  <FontAwesomeIcon icon={faSearch} className="search-icon"/> 
          	  <input type="text" onChange={this.handleChange} className="search-bar" placeholder='Find songs, artists, and albums.'/>
		  </div>

		  <div className='artists-section-container '>
			  <h1 className='search-section-header'>Artists</h1>
			  <div className='search-index-grid'>
				{
				this.state.artists.length === 0 ?
					<p>No artists found</p> :
					this.state.artists.map(artist => 
						<Link to={`/home/artists/${artist.id}`} key={artist.id}>
							<div className="body-section-2">
								<img src={artist.imageUrl} className='body-section-2-img' alt={artist.name}/>
								<h3>{artist.name}</h3>
							</div>
				  		</Link>
						)
				}
			  </div>
		  </div>

		  <div className='albums-section-container'>
			  <h1 className='search-section-header'>Albums</h1>
			  <div className='search-index-grid'>
				{
				this.state.albums.length === 0 ?
					<p>No albums found</p> :
					this.state.albums.map(album => 
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

		  <div className='songs-section-container'>
			  <h1 className='search-section-header'>Songs</h1>
			  <div className='search-index-grid'>
				{
				this.state.songs.length === 0 ?
					<p>No songs found</p> :

					<div className="show-content">
						<ul>
							{ 
							 this.state.songs.map((song,idx)=> <SongItemContainer key ={song.id} song={song} queue={this.state.songs} idx={idx+1} />) 
							}	
						</ul>
            		</div>
					
				}
			  </div>
		  </div>



	  </div>
    )
  }
}

export default Search