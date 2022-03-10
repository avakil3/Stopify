@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name
        json.albums artist.albums
        json.imageUrl url_for(artist.photo)

    end
  end