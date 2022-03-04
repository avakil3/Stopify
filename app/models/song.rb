# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  song_name  :string           not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  duration   :string
#
class Song < ApplicationRecord
    validates :song_name, presence: true
  
    has_one_attached :song_file
    has_one_attached :album_cover
  
   
  end
