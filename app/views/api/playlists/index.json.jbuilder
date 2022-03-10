
@playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :playlist_name
      json.playlistImgUrl (playlist.playlist_songs[0].nil? ? "null" : url_for(playlist.playlist_songs[0].song.album.photo))
      json.songs do
          playlist.playlist_songs.each do |playlist_song|
            json.set! playlist_song.song.id do
              json.extract! playlist_song.song, :id, :song_name, :album_id, :duration
              json.url url_for(playlist_song.song.song_file)
              json.albumImgUrl url_for(playlist_song.song.album.photo)
              json.artistName playlist_song.song.album.artist.name
            end
          end
      end  
    end
  end


