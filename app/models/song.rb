class Song < ApplicationRecord
    validates :song_name, presence: true
  
    has_one_attached :song_file
    has_one_attached :album_cover
  
   
  end