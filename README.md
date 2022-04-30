# Stopify
[Stopify](https://stopify-100.herokuapp.com/#/) is a Spotify clone, a music streaming platform that enables users to stream the latest music, listen to podcasts, and get music recommendations based on their preferences. In Stopify, users are able to browse songs from a collection of albums, pre-made playlists, and custom playlists made by the user. Users can also like songs, albums, and artists to include within their library page.

Stopify's frontend is built using React.js and Redux to manage the frontend state. The backend is built using Ruby on Rails with a PostgreSQL database while AWS S3 storage is used to store song files, album covers, and artist pics. 

## Features
* Signup and login with a custom account or use a demo account
* Search songs, artists, albums, and playlists
* Play, pause, repeat a song, shuffle the play queue, go to the next or previous song, adjust the volume, and scrub the song's current time in music player.
* Like songs, albums, and artists to be displayed under the user's library page
* Users can view their liked songs, liked albums, and followed artists
* Discover new songs, albums, artists

## Music Player
* Built a music player from scratch using HTML media components 
  * Challenge: Implementing a playback queue system that would update based on the page the user was on
  * Failed Attempt: Originally attempted to update the queue only when a user first pressed play on a song. This would add all the current page's songs to the queue but did not maintain proper song ordering from the user's previous page
  * Solution: Created a Redux action to update the queue every time the user changed the current song. If the user originally played a song from Album #1 and then subsequently changed to a song from Album #2, then the queue will dynamically update to Album #2's song list. This applies to artist and playlist pages as well.
 
Implementation:
```JavaScript
const MusicPlayerReducer = (state=preloadedState, action) => 
{
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.SET_CURRENT_SONG:
            newState.currentSong = action.song;
            newState.currentSongIdx = newState.playQueue.findIndex(song => song.id === newState.currentSong.id);
            newState.playing = true; 
            return newState;
        case Actions.TOGGLE_PLAYBACK:
            newState.playing = !newState.playing;
            return newState;
        case Actions.SHUFFLE_PLAYBACK:
            newState.shuffle = !state.shuffle;
            if (newState.shuffle){
                newState.playQueue = shuffleArray(state.playQueue);
            }else{
                newState.playQueue = state.unshuffledQueue;
            }
            return newState;
        case Actions.PAUSE_SONG:
            newState.playing = false;
            return newState;
        case Actions.SET_QUEUE:
            newState.playQueue = (state.shuffle ? shuffleArray(action.queue) : action.queue);
            newState.unshuffledQueue = action.queue.slice();
            return newState;
        case Actions.PREV_SONG:
           if(state.currentSongIdx > 0){
            newState.currentSong = state.playQueue[state.currentSongIdx-1];
            newState.currentSongIdx = state.currentSongIdx-1;
           }else{
            newState.currentSong = state.playQueue[state.playQueue.length-1];
            newState.currentSongIdx = state.playQueue.length-1; 
           }
            return newState;
        case Actions.NEXT_SONG:
            if(state.currentSongIdx < state.playQueue.length-1){
                newState.currentSong = state.playQueue[state.currentSongIdx+1];
                newState.currentSongIdx = state.currentSongIdx+1;
            }else{
                newState.currentSong = state.playQueue[0];
                newState.currentSongIdx = 0;
            }
                return newState;
        default:
            return state;
    }
  }
```

## Search Functionality
* Built search functionality to quickly find songs, albums, and artists
* Challenge: Originally, the search functionality would only search songs that started with the search input, but this would leave out some results. 
* Solution: I used .includes() to search for the search input in the entire song name, helping catch searches of songs with longer, multi-word names
* Note that when searching for an artist or album, the search functionality will also show an the artist's albums, the album's artist, as well as the cumulative song list. This provides for a more holistic search experience.

<p align="center"><img src="/app/assets/images/README pics/search_page.png" width="1000">  </p>

Implementation:
```JavaScript
handleChange(e) {
		const {songs,albums,artists} = this.props;
		if(e.target.value === ''){
			this.setState({songs: [],
				albums: [],
				artists: []
			});
		}else{
			const filteredSongs = Object.values(songs).filter(song => 
				song.song_name.toLowerCase().includes(e.target.value.toLowerCase())
				|| song.artistName.toLowerCase().includes(e.target.value.toLowerCase())
				|| Object.values(albums).find(album=> album.id === song.album_id).album_name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			const filteredAlbums = Object.values(albums).filter(album => 
				album.album_name.toLowerCase().includes(e.target.value.toLowerCase())
				|| Object.values(artists).find(artist=> artist.id === album.artist_id).name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			const filteredArtists = Object.values(artists).filter(artist => 
				artist.name.toLowerCase().includes(e.target.value.toLowerCase())
			);
	
			this.setState({songs: filteredSongs,
						albums: filteredAlbums,
						artists: filteredArtists
			});
		}
	}
```

## Home Page
<p align="center"><img src="/app/assets/images/README pics/home_page.png" width="1000">  </p>


## Artist Page
<p align="center"><img src="/app/assets/images/README pics/artist_page.png" width="1000">  </p>


## Playlist Page
<p align="center"><img src="/app/assets/images/README pics/playlist_page.png" width="1000">  </p>



## Technologies
* Ruby 
* Ruby on Rails
* React & Redux
* Heroku for website hosting
* AWS S3 for media storage

