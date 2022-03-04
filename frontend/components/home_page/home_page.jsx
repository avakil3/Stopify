import React from 'react'
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';
import AlbumShowPageContainer from "../albums/album_show_page_container"
import {Switch,Route,Link} from 'react-router-dom';

class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchUsers();
    this.props.fetchAlbums();
  }

  render(){
    return (
      <div className='home-page'>
          <div className='homepage_body'>
              <Sidebar />
              <Body />
          </div>
          <Footer />
      </div>
    )
  }
}




export default HomePage;