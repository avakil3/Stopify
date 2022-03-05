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
certifiedLoverBoy.photo.attach(io: open("https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320,c_limit/Drake-Certified-Lover-Boy.png"), filename: 'Drake-Certified-Lover-Boy.png')
song1 = Song.create!(song_name: "Champagne Poetry", album_id: certifiedLoverBoy.id, duration:"5:36")
song2 = Song.create!(song_name: "Papi's Home", album_id: certifiedLoverBoy.id, duration:"2:58")
song3 = Song.create!(song_name: "Girls Want Girls (feat. Lil Baby)", album_id: certifiedLoverBoy.id, duration:"3:41")


song1.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/01+Champagne+Poetry.mp3"), filename: '01+Champagne+Poetry.mp3')
song2.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/02+Papi_s+Home.mp3"), filename: '02+Papi_s+Home.mp3')
song3.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/03+Girls+Want+Girls+(feat.+Lil+Baby).mp3"), filename: '03+Girls+Want+Girls+(feat.+Lil+Baby).mp3')
