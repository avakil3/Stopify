json.album do
    json.extract! @album, :id,  :album_name, :artist_id, :release_date
    json.imgUrl url_for(@album.photo)
    json.artist @album.artist
  end