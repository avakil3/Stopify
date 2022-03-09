class DropAccidentalTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :api_playlists
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
