json.extract! @song, :id,:song_name, :album_id, :duration
json.albumUrl url_for(@song.album.photo)
json.artist_name song.album.artist.name