import React from 'react'
import BodyContainer from "./body_container"
import AlbumShowPageContainer from '../albums/album_show_page_container';
import PlaylistShowPageContainer from '../playlists/playlist_show_page_container';
import {Switch,Route,Link} from 'react-router-dom';
import HeaderContainer from "../header/header_container"
import FooterContainer from '../footer/footer_container';
import SidebarContainer from '../sidebar/sidebar_container';

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchUsers();
    this.props.fetchAlbums();
    this.props.fetchArtists();
    this.props.fetchUserPlaylists();
  }



  render(){
    return (
      <div className='home-page'>
          <div className='homepage_body'>
              <SidebarContainer />
              <Switch>
                <Route exact path="/home/albums/:albumId" component={AlbumShowPageContainer}/>
                <Route exact path="/home/playlists/:playlistId" component={PlaylistShowPageContainer}/>
                <Route exact path="/home/us" component={BodyContainer}/>
              </Switch>
             <HeaderContainer />
          </div>
          <FooterContainer />
      </div>
    )
  }
}




export default HomePage;