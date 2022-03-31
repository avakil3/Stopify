import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom';

export class EditPlaylistModal extends Component {
  constructor(props) {
    super(props);        
    this.state = {
      id: this.props.playlist.id,
      playlist_name: '',
      user_id: this.props.currentUser.id,
      error: '',
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleDelete(playlistId){
  this.setState({redirect:true});
  this.props.removePlaylist(playlistId);
}

handleSubmit(e) {
  e.preventDefault();
  if (this.state.playlist_name === '')  {
    this.setState({error:"Playlist must have a name"});
  } else{
    this.setState({error:""});
    this.props.editPlaylist(this.state)
        .then( ()=> this.props.closeModal());
  }
}

update(field) {
  return e => this.setState({[field]: e.currentTarget.value});
}

render() {
  if (this.state.redirect) { return <Redirect to='/home/us'/>};
    return (
        <div className="playlist-modal-container">
            <FontAwesomeIcon className="close-modal" onClick={this.props.closeModal} icon={faX} />
          <h1>Edit Playlist</h1>
          <form>
                <h2> Playlist Name</h2> 
                <input
                id="name"
                type='text'
                placeholder="Edit your playlist's name"
                value={this.state.name}
                onChange={this.update('playlist_name')}  
                />
                <h3 className="error">{this.state.error}</h3>

            <div className="edit-playlist-btns">
              <button type='submit' onClick={this.handleSubmit}>Update</button>
              <button id="deletePlaylistBtn" onClick={()=> this.handleDelete(this.props.playlist.id)}>Delete</button>
            </div>
          </form>
        </div>
    );
}
}

export default EditPlaylistModal