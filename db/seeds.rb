# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Song.delete_all
Album.delete_all
Artist.delete_all

demoUser = User.create!(username:"Demo",email: 'demo@demo.com', password: 'password');


drake = Artist.create!(name:"Drake")
certifiedLoverBoy = Album.create!(album_name:"Certified Lover Boy", artist_id:drake.id, release_date: 2021 )
song1 = Song.create!(song_name: "Girls Want Girls", album_id: certifiedLoverBoy.id, duration:"3:41")

song1.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Were_all_in_this_together.mp3"), filename: 'Were_all_in_this_together.mp3')
certifiedLoverBoy.photo.attach(io: open("https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320,c_limit/Drake-Certified-Lover-Boy.png"), filename: 'Drake-Certified-Lover-Boy.png')
