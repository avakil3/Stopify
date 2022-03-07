import React from 'react'
import Sidebar from './sidebar';
import BodyContainer from "./body_container"
import Footer from './footer';
import AlbumShowPageContainer from '../albums/album_show_page_container'
import {Switch,Route,Link} from 'react-router-dom';
import HeaderContainer from "./header_container"
import FooterContainer from './footer_container';

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
    // debugger
  }



  render(){
    return (
      <div className='home-page'>
          <div className='homepage_body'>
              <Sidebar />
              <Switch>
                <Route exact path="/home/albums/:albumId" component={AlbumShowPageContainer}/>
                <Route exact path="/home" component={BodyContainer}/>
              </Switch>
             <HeaderContainer />
          </div>
          <FooterContainer />
      </div>
    )
  }
}




export default HomePage;