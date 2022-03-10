import React from 'react';
// import HeaderContainer from './header_container';
import{Link} from 'react-router-dom'

class Body extends React.Component {
  constructor(props){
    super(props)
    this.state={};
  }
  
render(){
  
  const {artists,currentUser} = this.props;
  if(!currentUser || Object.keys(this.props.albums).length === 0 || Object.keys(artists).length === 0 ) return null;
  if(Object.keys(this.props.playlists).length === 0 && currentUser.username === "Demo") return null;
  
  const albums = Object.values(this.props.albums);
  const playlists = Object.values(this.props.playlists);
  return ( 
    <div className='body'>
       <h1>Welcome to Stopify</h1>
       <div className="body-section-1-container">
         <div className='body-section-1-row-1'>
           <Link to={`/home/albums/${albums[0].id}`}>
            <div className="body-section-1">
                <img src={albums[0].imageUrl} className='body-section-1-img'/>
                <p>{albums[0].album_name}</p>
            </div>
           </Link>

           <Link to={`/home/playlists/${playlists[0].id}`}>
              <div className="body-section-1">
                  <img src={playlists[0].playlistImgUrl} className='body-section-1-img'/> 
                  <p>{playlists[0].playlist_name}</p>
              </div>
            </Link>

            <Link to={`/home/playlists/${playlists[1].id}`}>
              <div className="body-section-1">
                  <img src={playlists[1].playlistImgUrl} className='body-section-1-img'/> 
                  <p>{playlists[1].playlist_name}</p>
              </div>
            </Link>
         </div>
          <div className='body-section-1-row-2'>

            <Link to={`/home/albums/${albums[1].id}`}>
              <div className="body-section-1">
                  <img src={albums[1].imageUrl} className='body-section-1-img'/>
                  <p>{albums[1].album_name}</p>
              </div>
            </Link>

            <Link to={`/home/albums/${albums[2].id}`}>
              <div className="body-section-1">
                  <img src={albums[2].imageUrl} className='body-section-1-img'/>
                  <p>{albums[2].album_name}</p>
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