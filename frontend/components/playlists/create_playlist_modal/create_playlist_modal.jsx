import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom';

export class CreatePlaylistModal extends Component {

    constructor(props) {
        super(props);        
        this.state = {
          playlist_name: '',
          user_id: this.props.currentUser.id,
          error: '',
          redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.playlist_name === '')  {
          this.setState({error:"Playlist must have a name"});
        } else{
          this.setState({error:""});
          this.props.createPlaylist(this.state)
              .then( ()=> this.setState({ redirect: true }));
        }
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
      const allPlaylists = Object.values(this.props.playlists);
      if (this.state.redirect) return <Redirect to={`/home/playlists/${allPlaylists[allPlaylists.length-1].id}`}/>;
        return (
            <div className="playlist-modal-container">
                <FontAwesomeIcon className="close-modal" onClick={this.props.closeModal} icon={faX} />
              <h1>Create Playlist</h1>
              <form onSubmit={this.handleSubmit}>
                    <h2> Playlist Name</h2> 
                    <input
                    id="name"
                    type='text'
                    placeholder=" Playlist Name"
                    value={this.state.name}
                    onChange={this.update('playlist_name')}  
                    />
                    <h3 className="error">{this.state.error}</h3>
    
                <button type='submit'>Create</button>
              </form>
            </div>
        );
    }
}

export default CreatePlaylistModal