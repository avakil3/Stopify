

export const receiveUserPlaylists = () => (
    $.ajax({
      url: `/api/playlists`,
    })
  );

  