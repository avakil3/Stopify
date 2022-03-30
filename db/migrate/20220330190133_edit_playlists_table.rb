class EditPlaylistsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :playlists, [:playlist_name, :user_id], unique: true
  end
end
