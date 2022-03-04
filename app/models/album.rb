# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  album_name   :string           not null
#  artist_id    :integer          not null
#  release_date :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Album < ApplicationRecord

    has_one_attached :photo
    
    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist
end
