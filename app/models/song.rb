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

    belongs_to :album,
      foreign_key: :album_id,
      class_name: :Album
  
   
  end
