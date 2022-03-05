import React from 'react'
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';
import AlbumShowPageContainer from '../albums/album_show_page_container'
import {Switch,Route,Link} from 'react-router-dom';
import HeaderContainer from "./header_container"

class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchUsers();
    this.props.fetchAlbums();
    this.props.fetchArtists();
  }

handlePlay(){
  const player = document.getElementById("music-player");
  player.src = this.props.test_song.url;
  player.play();
}

  render(){
    return (
      <div className='home-page'>
          <div className='homepage_body'>
              <Sidebar />
              <Switch>
                <Route exact path="/home/albums/:albumId" component={AlbumShowPageContainer}/>
                <Route exact path="/home" component={Body}/>
              </Switch>
             <HeaderContainer />
           {/* {
             this.props.test_song ? <button onClick={this.handlePlay.bind(this)}>Play music</button> : ""
           } */}
          </div>
          <Footer />
      </div>
    )
  }
}




export default HomePage;