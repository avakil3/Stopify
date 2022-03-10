# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

require 'open-uri'

User.delete_all
Song.delete_all
Album.delete_all
Artist.delete_all
Playlist.delete_all
PlaylistSong.delete_all

demoUser = User.create!(username:"Demo",email: 'demo@demo.com', password: 'password')


drake = Artist.create!(name:"Drake")
certifiedLoverBoy = Album.create!(album_name:"Certified Lover Boy", artist_id:drake.id, release_date: 2021 )
certifiedLoverBoy.photo.attach(io: open("https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320,c_limit/Drake-Certified-Lover-Boy.png"), filename: 'Drake-Certified-Lover-Boy.png')
song1 = Song.create!(song_name: "Champagne Poetry", album_id: certifiedLoverBoy.id, duration:"5:36")
song2 = Song.create!(song_name: "Papi's Home", album_id: certifiedLoverBoy.id, duration:"2:58")
song3 = Song.create!(song_name: "Girls Want Girls (feat. Lil Baby)", album_id: certifiedLoverBoy.id, duration:"3:41")
song1.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/01+Champagne+Poetry.mp3"), filename: '01+Champagne+Poetry.mp3')
song2.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/02+Papi_s+Home.mp3"), filename: '02+Papi_s+Home.mp3')
song3.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/03+Girls+Want+Girls+(feat.+Lil+Baby).mp3"), filename: '03+Girls+Want+Girls+(feat.+Lil+Baby).mp3')


song4 = Song.create!(song_name: "In The Bible (feat. Lil Durk & GI)", album_id: certifiedLoverBoy.id, duration:"4:56")
song4.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/04+In+The+Bible+(feat.+Lil+Durk+%26+GI.mp3"), filename: "04+In+The+Bible+(feat.+Lil+Durk+%26+GI.mp3")

song5 = Song.create!(song_name: "Love All (feat. JAY-Z)", album_id: certifiedLoverBoy.id, duration:"3:48")
song5.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/05+Love+All+(feat.+JAY-Z).mp3"), filename: "05+Love+All+(feat.+JAY-Z).mp3")

song6 = Song.create!(song_name: "Fair Trade (feat. Travis Scott)", album_id: certifiedLoverBoy.id, duration:"4:51")
song6.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/06+Fair+Trade+(feat.+Travis+Scott).mp3"), filename: "06+Fair+Trade+(feat.+Travis+Scott).mp3")

song7 = Song.create!(song_name: "Way 2 Sexy (feat. Future & Young", album_id: certifiedLoverBoy.id, duration:"4:17")
song7.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/07+Way+2+Sexy+(feat.+Future+%26+Young.mp3"), filename: "07+Way+2+Sexy+(feat.+Future+%26+Young.mp3")

song8 = Song.create!(song_name: "TSU", album_id: certifiedLoverBoy.id, duration:"5:08")
song8.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/08+TSU.mp3"), filename: "08+TSU.mp3")


song9 = Song.create!(song_name: "N 2 Deep (feat. Future)", album_id: certifiedLoverBoy.id, duration:"4:33")
song9.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/09+N+2+Deep+(feat.+Future).mp3"), filename: "09+N+2+Deep+(feat.+Future).mp3")


song10 = Song.create!(song_name: "Pipe Down", album_id: certifiedLoverBoy.id, duration:"3:25")
song10.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/10+Pipe+Down.mp3"), filename: "10+Pipe+Down.mp3")

#Glass Animals - Dreamland
glass_animals = Artist.create!(name:"Glass Animals")
Dreamland = Album.create!(album_name:"Dreamland", artist_id:glass_animals.id, release_date: 2020 )
Dreamland.photo.attach(io: open("https://stopify-dev.s3.amazonaws.com/Album+Covers/Dreamland.png"), filename: 'Dreamland.png')

song11 = Song.create!(song_name: "Dreamland", album_id: glass_animals.id, duration:"3:23")
song11.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals+-+Dreamland+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Dreamland+%5Bwww.slider.kz%5D.mp3")

song12 = Song.create!(song_name: "Heat Waves", album_id: glass_animals.id, duration:"3:58")
song12.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals+-+Heat+Waves+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Heat+Waves+%5Bwww.slider.kz%5D.mp3")

song13 = Song.create!(song_name: "Hot Sugar", album_id: glass_animals.id, duration:"3:54")
song13.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals+-+Hot+Sugar+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Hot+Sugar+%5Bwww.slider.kz%5D.mp3")

song14 = Song.create!(song_name: "Melon and the Coconut", album_id: glass_animals.id, duration:"2:28")
song14.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals+-+Melon+and+the+Coconut+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Melon+and+the+Coconut+%5Bwww.slider.kz%5D.mp3")

song15 = Song.create!(song_name: "Tangerine", album_id: glass_animals.id, duration:"3:20")
song15.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals+-+Tangerine+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Tangerine+%5Bwww.slider.kz%5D.mp3")

song16 = Song.create!(song_name: "Tokyo Drifting", album_id: glass_animals.id, duration:"3:36")
song16.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Glass+Animals+-+Dreamland/Glass+Animals%2C+Denzel+Curry+-+Tokyo+Drifting+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals%2C+Denzel+Curry+-+Tokyo+Drifting+%5Bwww.slider.kz%5D.mp3")


# Ed Sheeran - Equals
ed_sheeran = Artist.create!(name:"Ed Sheeran")
equal = Album.create!(album_name:"=", artist_id:ed_sheeran.id, release_date: 2021 )
equal.photo.attach(io: open("https://upload.wikimedia.org/wikipedia/en/c/cd/Ed_Sheeran_-_Equals.png"), filename: 'Ed_Sheeran_-_Equals.png')

song17 = Song.create!(song_name: "Bad Habits", album_id: equal.id, duration:"3:50")
song17.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+Bad+Habits+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Bad+Habits+%5Bwww.slider.kz%5D.mp3")

song18 = Song.create!(song_name: "First Times", album_id: equal.id, duration:"3:05")
song18.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+First+Times+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+First+Times+%5Bwww.slider.kz%5D.mp3")

song19 = Song.create!(song_name: "Leave Your Life", album_id: equal.id, duration:"3:43")
song19.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+Leave+Your+Life+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Leave+Your+Life+%5Bwww.slider.kz%5D.mp3")

song20 = Song.create!(song_name: "Overpass Graffiti", album_id: equal.id, duration:"3:56")
song20.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+Overpass+Graffiti+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Overpass+Graffiti+%5Bwww.slider.kz%5D.mp3")

song21 = Song.create!(song_name: "Shivers", album_id: equal.id, duration:"3:27")
song21.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+Shivers+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Shivers+%5Bwww.slider.kz%5D.mp3")

song22 = Song.create!(song_name: "The Joker And The Queen", album_id: equal.id, duration:"3:05")
song22.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+The+Joker+And+The+Queen+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+The+Joker+And+The+Queen+%5Bwww.slider.kz%5D.mp3")

song23 = Song.create!(song_name: "Tides", album_id: equal.id, duration:"3:15")
song23.song_file.attach(io: open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+Tides+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Tides+%5Bwww.slider.kz%5D.mp3")

# Demo Playlist #1
playlist1 = Playlist.create!(playlist_name: "Demo Playlist #1", user_id: demoUser.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song23.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song2.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song4.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song5.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song6.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song7.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song8.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song9.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song11.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song14.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song17.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song18.id)



# Demo Playlist #2
playlist2 = Playlist.create!(playlist_name: "Demo Playlist #2", user_id: demoUser.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song1.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song22.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song25.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song20.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song16.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song14.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song15.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song13.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song11.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song9.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song5.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song3.id)