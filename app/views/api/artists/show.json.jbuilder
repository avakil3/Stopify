json.extract! @artist, :id, :name
json.imageUrl url_for(@artist.photo)