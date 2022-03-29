

export const receiveUserPlaylists = () => (
    $.ajax({
      url: "/api/playlists",
    })
  );

  
  export const createPlaylist = playlist => (
    $.ajax({
      url: "/api/playlists",
      method: "POST",
      data: { playlist }
    })
  );

  export const deletePlaylist = playlistId => (
    $.ajax({
      url: `/api/playlists/${playlistId}`,
      method: "DELETE"
    })
  );

  export const updatePlaylist = playlist => (
    $.ajax({
      url: `/api/playlists/${playlist.id}`,
      method: "PATCH",
      data: { playlist }
    })
  );


export const addSongToPlaylist = (playlistId, songId) => (
  $.ajax({
    url: `/api/playlist_songs`,
    method: "POST",
    data: {playlist_id: playlistId, song_id: songId } 
  })
);

export const deleteSongFromPlaylist = (playlistId, songId) => (
  $.ajax({
    url: `/api/playlist_songs/1`,
    method: "DELETE",
    data: {playlist_id: playlistId, song_id: songId } 
  })
);