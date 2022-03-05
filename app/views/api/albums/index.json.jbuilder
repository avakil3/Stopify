@albums.each do |album|
    json.set! album.id do
      json.extract! album, :id,  :album_name, :artist_id, :release_date
      json.imageUrl url_for(album.photo)
    end
  end