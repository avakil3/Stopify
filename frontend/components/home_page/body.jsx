import React from 'react';
// import HeaderContainer from './header_container';
import{Link} from 'react-router-dom'

class Body extends React.Component {
  constructor(props){
    super(props)
    this.state={};
  }
  
render(){
  
  const {currentUser} = this.props;
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
           <Link to={`/home/albums/${albums[0].id}`}>
            <div className="body-section-1">
                <img src={albums[0].imageUrl} className='body-section-1-img' alt={albums[0].album_name}/>
                <p>{albums[0].album_name}</p>
            </div>
           </Link>

           <Link to={`/home/albums/${albums[1].id}`}>
              <div className="body-section-1">
                  <img src={albums[1].imageUrl} className='body-section-1-img'alt={albums[1].album_name}/>
                  <p>{albums[1].album_name}</p>
              </div>
            </Link>

            <Link to={`/home/albums/${albums[2].id}`}>
              <div className="body-section-1">
                  <img src={albums[2].imageUrl} className='body-section-1-img' alt={albums[2].album_name}/>
                  <p>{albums[2].album_name}</p>
              </div>
            </Link>
         </div>
          <div className='body-section-1-row-2'>

            <Link to={playlists.length > 0 ? `/home/playlists/${playlists[0].id}` : '/home/us'}>
                <div className="body-section-1">
                    <img src={playlists.length > 0 ? playlists[0].playlistImgUrl === 'null' ? window.placeholderImg : playlists[0].playlistImgUrl : ""} className='body-section-1-img' alt={playlists[0].playlist_name}/> 
                    <p>{playlists.length > 0 ? playlists[0].playlist_name: "Create a playlist first"}</p>
                </div>
              </Link>

              <Link to={playlists.length > 1 ? `/home/playlists/${playlists[1].id}` : '/home/us'}>
                <div className="body-section-1">
                    <img src={playlists.length > 1 ? playlists[1].playlistImgUrl === 'null' ? window.placeholderImg : playlists[1].playlistImgUrl : ""} className='body-section-1-img' alt={playlists[1].playlist_name}/> 
                    <p>{playlists.length > 1 ? playlists[1].playlist_name : "Create a playlist first"}</p>
                </div>
              </Link>

              <Link to={`/home/artists/${artists[0].id}`}>
              <div className="body-section-1">
                  <img src={artists[0].imageUrl} className='body-section-1-img' alt={artists[0].name}/>
                  <p>{artists[0].name}</p>
              </div>
              </Link>
         </div>
       </div>
       
       <h2>Recommended for you</h2>

      <div className='body-section-2-container'>

        <Link to={`/home/albums/${albums[3].id}`}>
              <div className="body-section-2">
                  <img src={albums[3].imageUrl} className='body-section-2-img' alt={albums[3].album_name}/>
                  <h3>{albums[3].album_name}</h3>
              </div>
        </Link>

        <Link to={`/home/artists/${artists[4].id}`}>
              <div className="body-section-2">
                  <img src={artists[4].imageUrl} className='body-section-2-img' alt={albums[4].album_name}/>
                  <h3>{artists[4].name}</h3>
              </div>
        </Link>

        <Link to={`/home/albums/${albums[4].id}`}>
              <div className="body-section-2">
                  <img src={albums[4].imageUrl} className='body-section-2-img'/>
                  <h3>{albums[4].album_name}</h3>
              </div>
        </Link>

        <Link to={`/home/albums/${albums[5].id}`}>
              <div className="body-section-2">
                  <img src={albums[5].imageUrl} className='body-section-2-img'/>
                  <h3>{albums[5].album_name}</h3>
              </div>
        </Link>
		 
      </div>

	  <h2>Featured Artists</h2>

	  <div className='body-section-3-container'>
          {/* <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
				      <h3>Artist 1</h3>
          </div> */}

          <Link to={`/home/artists/${artists[0].id}`}>
              <div className="body-section-3">
                  <img src={artists[0].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[0].name}</h3>
              </div>
          </Link>

          <Link to={`/home/artists/${artists[1].id}`}>
              <div className="body-section-3">
                  <img src={artists[1].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[1].name}</h3>
              </div>
          </Link>

          <Link to={`/home/artists/${artists[2].id}`}>
              <div className="body-section-3">
                  <img src={artists[2].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[2].name}</h3>
              </div>
          </Link>
		 
          <Link to={`/home/artists/${artists[3].id}`}>
              <div className="body-section-3">
                  <img src={artists[3].imageUrl} className='body-section-3-img'/>
                  <h3>{artists[3].name}</h3>
              </div>
          </Link>

      </div>

    </div>
  )
}
}

export default Body;