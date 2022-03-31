import React from 'react';
import{Link} from 'react-router-dom';
import {ArtistSongsSelector,AlbumSongsSelector} from '../../util/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faPauseCircle} from "@fortawesome/free-solid-svg-icons";


class Body extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={};
//   }


  playSong(song, queue){
    this.props.setCurrentSong(song);
    this.props.setQueue(queue);
  }

  handlePlayback(element, elementType){
    const {player,togglePlayback} = this.props;
    let playbackQueue;
    if(elementType==='album'){
      playbackQueue = AlbumSongsSelector(this.props.songs,element.id)
    }else if(elementType==='artist'){
      playbackQueue = ArtistSongsSelector(this.props.songs,element.id)
    }if(elementType==='playlist'){
      playbackQueue = element.songs ? Object.values(element.songs) : null;
    }

    if(playbackQueue.includes(player.currentSong)){
      togglePlayback(); 
    }else{
      this.playSong(playbackQueue[0], playbackQueue.slice(1));
    }
  }


  
render(){
  
  const {currentUser,player} = this.props;
  if(!currentUser || Object.keys(this.props.albums).length === 0 || Object.keys(this.props.artists).length === 0 ) return null;
  if(Object.keys(this.props.playlists).length === 0 && currentUser.username === "Demo") return null;
  
  const albums = Object.values(this.props.albums);
  const playlists = Object.values(this.props.playlists);
  const artists = Object.values(this.props.artists);

  return ( 
    <div className='body'>
       <h1>Welcome to Stopify</h1>
       <div className="body-section-1-container">
         <div className='body-section-1-row-1'>
            
            <div className="body-section-1">
              <Link to={`/home/albums/${albums[0].id}`}>
                <img src={albums[0].imageUrl} className='body-section-1-img' alt={albums[0].album_name}/>
                <p>{albums[0].album_name}</p>
              </Link>
                <FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[0].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
                              className="body play-btn"
							  onClick={()=> this.handlePlayback(albums[0],'album')} />
            </div>

            <div className="body-section-1">
              <Link to={`/home/albums/${albums[1].id}`}>
                <img src={albums[1].imageUrl} className='body-section-1-img' alt={albums[1].album_name}/>
                <p>{albums[1].album_name}</p>
              </Link>
                <FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[1].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
                              className="body play-btn"
							  onClick={()=> this.handlePlayback(albums[1],'album')} />
            </div>

            <div className="body-section-1">
              <Link to={`/home/albums/${albums[2].id}`}>
                <img src={albums[2].imageUrl} className='body-section-1-img' alt={albums[2].album_name}/>
                <p>{albums[2].album_name}</p>
              </Link>
                <FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[2].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
                              className="body play-btn"
							  onClick={()=> this.handlePlayback(albums[2],'album')} />
            </div>
         </div>
          <div className='body-section-1-row-2'>

				<div className="body-section-1">
					<Link to={`/home/artists/${artists[0].id}`}>
							<img src={artists[0].imageUrl} className='body-section-1-img' alt={artists[0].name}/>
							<p>{artists[0].name}</p>
					</Link>
					<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[0].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
								className="body play-btn"
								onClick={()=> this.handlePlayback(artists[0],'artist')} />
				</div>

			  <div className="body-section-1">
					<Link to={playlists.length > 1 ? `/home/playlists/${playlists[1].id}` : '/home/us'}>
							<img src={(!playlists[1] || playlists[1].playlistImgUrl === 'null' ? window.placeholderImg : playlists[1].playlistImgUrl)} className='body-section-1-img' /> 
							<p>{playlists.length > 1 ? playlists[1].playlist_name: "Create a playlist first"}</p>
					</Link>
					<FontAwesomeIcon icon={player.playing && Object.values(playlists[1].songs).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
								className="body play-btn"
								onClick={()=> this.handlePlayback(playlists[1],'playlist')} />
              </div>

			  <div className="body-section-1">
					<Link to={playlists.length > 2 ? `/home/playlists/${playlists[2].id}` : '/home/us'}>
							<img src={(!playlists[2] || playlists[2].playlistImgUrl === 'null' ? window.placeholderImg : playlists[2].playlistImgUrl)} className='body-section-1-img'/> 
							<p>{playlists.length > 2 ? playlists[2].playlist_name : "Create a playlist first"}</p>
					</Link>
					<FontAwesomeIcon icon={player.playing && Object.values(playlists[2].songs).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
								className="body play-btn"
								onClick={()=> this.handlePlayback(playlists[2],'playlist')} />
              </div>
        </div>
       </div>
       
       <h2>Recommended for you</h2>

      <div className='body-section-2-container'>


		<div className='body-section-2'>
			<Link to={`/home/albums/${albums[3].id}`}>
					<div className='content'>
							<img src={albums[3].imageUrl} className='body-section-2-img' alt={albums[3].album_name}/>
							<h3>{albums[3].album_name}</h3>
					</div>
			</Link>
			<FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[3].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(albums[3],'album')} />
		</div>


		<div className='body-section-2'>
			<Link to={`/home/artists/${artists[4].id}`}>
				<div className="content">
					<img src={artists[4].imageUrl} className='body-section-2-img' alt={artists[4].name}/>
					<h3>{artists[4].name}</h3>
				</div>
			</Link>
			<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[4].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(artists[4],'artist')} />
		</div>


		<div className='body-section-2'>
			<Link to={`/home/albums/${albums[4].id}`}>
					<div className='content'>
							<img src={albums[4].imageUrl} className='body-section-2-img' alt={albums[4].album_name}/>
							<h3>{albums[4].album_name}</h3>
					</div>
			</Link>
			<FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[4].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(albums[4],'album')} />
		</div>

		<div className='body-section-2'>
			<Link to={`/home/albums/${albums[5].id}`}>
					<div className='content'>
							<img src={albums[5].imageUrl} className='body-section-2-img' alt={albums[5].album_name}/>
							<h3>{albums[5].album_name}</h3>
					</div>
			</Link>
			<FontAwesomeIcon icon={player.playing && AlbumSongsSelector(this.props.songs,albums[5].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(albums[5],'album')} />
		</div>


      </div>

	  <h2>Featured Artists</h2>

	  <div className='body-section-3-container'>

	  <div className='body-section-3'>
          <Link to={`/home/artists/${artists[0].id}`}>
              <div className="content">
                  <img src={artists[0].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[0].name}</h3>
              </div>
          </Link>
			<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[0].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(artists[0],'artist')} />
		</div>

		<div className='body-section-3'>
          <Link to={`/home/artists/${artists[1].id}`}>
              <div className="content">
                  <img src={artists[1].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[1].name}</h3>
              </div>
          </Link>
			<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[1].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(artists[1],'artist')} />
		</div>

		<div className='body-section-3'>
          <Link to={`/home/artists/${artists[2].id}`}>
              <div className="content">
                  <img src={artists[2].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[2].name}</h3>
              </div>
          </Link>
			<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[2].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(artists[2],'artist')} />
		</div>

		<div className='body-section-3'>
          <Link to={`/home/artists/${artists[3].id}`}>
              <div className="content">
                  <img src={artists[3].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[3].name}</h3>
              </div>
          </Link>
			<FontAwesomeIcon icon={player.playing && ArtistSongsSelector(this.props.songs,artists[3].id).includes(player.currentSong) ? faPauseCircle : faPlayCircle} 
				className="body play-btn"
				onClick={()=> this.handlePlayback(artists[3],'artist')} />
		</div>

      </div>

    </div>
  )
}
}

export default Body;