@songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :song_name, :album_id, :duration
      json.url url_for(song.song_file)
      json.albumUrl url_for(song.album.photo)
      json.artist_name song.album.artist.name
    end
  end

  