

export const AlbumSongsSelector = (songs,albumId) => {
    const songsArr = Object.values(songs);
    return songsArr.filter(song => song.album_id === parseInt(albumId))
};

