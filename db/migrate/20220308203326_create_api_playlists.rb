class CreateApiPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :api_playlists do |t|

      t.timestamps
    end
  end
end
