

export const receiveUserPlaylists = () => (
    $.ajax({
      url: "/api/playlists",
    })
  );

  
  export const createPlaylist = playlist => (
    $.ajax({
      url: "/api/playlists",
      method: "POST",
      data: {playlist}
    })
  );

  export const deletePlaylist = playlistId => (
    $.ajax({
      url: `/api/playlists/${playlistId}`,
      method: "DELETE"
    })
  );