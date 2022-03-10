import React from 'react';
// import HeaderContainer from './header_container';
import{Link} from 'react-router-dom'

class Body extends React.Component {
  constructor(props){
    super(props)
    this.state={};
  }
  
render(){
  // debugger
  const {albums,artists,playlists,currentUser} = this.props;
  if(!currentUser || Object.keys(albums).length === 0 || Object.keys(artists).length === 0 ) return null;
  // debugger
  // if(Object.keys(playlists).length === 0 && currentUser.username === "Demo") return null;
  return ( 
    <div className='body'>
       <h1>Welcome to Stopify</h1>
       <div className="body-section-1-container">
         <div className='body-section-1-row-1'>
           <Link to='/home/albums/7'>
            <div className="body-section-1">
                <img src={albums[7].imageUrl} className='body-section-1-img'/>
                <p>{albums[7].album_name}</p>
            </div>
           </Link>

           <Link to='/home/playlists/4'>
              <div className="body-section-1">
                  <img src={playlists[4] ? playlists[4].playlistImgUrl : ""} className='body-section-1-img'/> 
                  <p>{playlists[4] ? playlists[4].playlist_name : "Create a Playlist first"}</p>
              </div>
            </Link>

            <Link to='/home/playlists/5'>
              <div className="body-section-1">
                  <img src={playlists[5] ? playlists[5].playlistImgUrl : ""} className='body-section-1-img'/> 
                  <p>{playlists[5] ? playlists[5].playlist_name : "Create a Playlist first"}</p>
              </div>
            </Link>
         </div>
          <div className='body-section-1-row-2'>

            <Link to='/home/albums/8'>
              <div className="body-section-1">
                  <img src={albums[8].imageUrl} className='body-section-1-img'/>
                  <p>{albums[8].album_name}</p>
              </div>
            </Link>

            <Link to='/home/albums/9'>
              <div className="body-section-1">
                  <img src={albums[9].imageUrl} className='body-section-1-img'/>
                  <p>{albums[9].album_name}</p>
              </div>
            </Link>

            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #6</p>
            </div>
         </div>
       </div>
       
       <h2>Recommended for you</h2>

      <div className='body-section-2-container'>
          <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
				<h3>Daily Mix 1</h3>
				<p>Drake, Dua Lipa, JBalvin and more</p>
			  </span>
          </div>

		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 2</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>

		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 3</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>
		 
		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 4</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>

      </div>

	  <h2>Featured Artists</h2>

	  <div className='body-section-3-container'>
          <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
				<h3>Artist 1</h3>
          </div>

		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 2</h3>
          </div>

		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 3</h3>
          </div>
		 
		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 4</h3>
          </div>

      </div>

    </div>
  )
}
}

export default Body;