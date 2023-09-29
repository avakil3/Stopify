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
drake.photo.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Artist+Pics/drake.jpeg"), filename: 'drake.jpeg')

# Drake - Certified Lover Boy
certifiedLoverBoy = Album.create!(album_name:"Certified Lover Boy", artist_id:drake.id, release_date: 2021 )
certifiedLoverBoy.photo.attach(io: URI.open("https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320,c_limit/Drake-Certified-Lover-Boy.png"), filename: 'Drake-Certified-Lover-Boy.png')
song1 = Song.create!(song_name: "Champagne Poetry", album_id: certifiedLoverBoy.id, duration:"5:36")
song1.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+-+Champagne+Poetry+%5Bwww.slider.kz%5D.mp3"), filename: 'Drake+-+Champagne+Poetry+%5Bwww.slider.kz%5D.mp3')

song2 = Song.create!(song_name: "Papi's Home", album_id: certifiedLoverBoy.id, duration:"2:58")
song2.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+-+Papi%E2%80%99s+Home+%5Bwww.slider.kz%5D.mp3"), filename: 'Drake+-+Papi%E2%80%99s+Home+%5Bwww.slider.kz%5D.mp3')

song3 = Song.create!(song_name: "Girls Want Girls (feat. Lil Baby)", album_id: certifiedLoverBoy.id, duration:"3:41")
song3.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+feat.+Lil+Baby+-+Girls+Want+Girls+%5Bwww.slider.kz%5D.mp3"), filename: 'Drake+feat.+Lil+Baby+-+Girls+Want+Girls+%5Bwww.slider.kz%5D.mp3')

song4 = Song.create!(song_name: "In The Bible (feat. Lil Durk & GI)", album_id: certifiedLoverBoy.id, duration:"4:56")
song4.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+feat.+Lil+Durk%2C+Giveon+-+In+The+Bible+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+feat.+Lil+Durk%2C+Giveon+-+In+The+Bible+%5Bwww.slider.kz%5D.mp3")

song5 = Song.create!(song_name: "Love All (feat. JAY-Z)", album_id: certifiedLoverBoy.id, duration:"3:48")
song5.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+feat.+JAY-Z+-+Love+All+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+feat.+JAY-Z+-+Love+All+%5Bwww.slider.kz%5D.mp3")

song6 = Song.create!(song_name: "Fair Trade (feat. Travis Scott)", album_id: certifiedLoverBoy.id, duration:"4:51")
song6.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+feat.+Travis+Scott+-+Fair+Trade+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+feat.+Travis+Scott+-+Fair+Trade+%5Bwww.slider.kz%5D.mp3")

song7 = Song.create!(song_name: "Way 2 Sexy (feat. Future & Young)", album_id: certifiedLoverBoy.id, duration:"4:18")
song7.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+feat.+Future%2C+Young+Thug+-+Way+2+Sexy+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+feat.+Future%2C+Young+Thug+-+Way+2+Sexy+%5Bwww.slider.kz%5D.mp3")

song8 = Song.create!(song_name: "TSU", album_id: certifiedLoverBoy.id, duration:"5:08")
song8.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/Drake+-+TSU+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+TSU+%5Bwww.slider.kz%5D.mp3")

# song9 = Song.create!(song_name: "N 2 Deep (feat. Future)", album_id: certifiedLoverBoy.id, duration:"4:33")
# song9.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/09+N+2+Deep+(feat.+Future).mp3"), filename: "09+N+2+Deep+(feat.+Future).mp3")

# song10 = Song.create!(song_name: "Pipe Down", album_id: certifiedLoverBoy.id, duration:"3:25")
# song10.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Certified+Lover+Boy/10+Pipe+Down.mp3"), filename: "10+Pipe+Down.mp3")


#Glass Animals - Dreamland
glass_animals = Artist.create!(name:"Glass Animals")
glass_animals.photo.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Artist+Pics/glass_animals.jpeg"), filename: 'glass_animals.jpeg')

dreamland = Album.create!(album_name:"Dreamland", artist_id:glass_animals.id, release_date: 2020 )
dreamland.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png"), filename: 'Dreamland_%28Glass_Animals%29.png')

song11 = Song.create!(song_name: "Dreamland", album_id: glass_animals.id, duration:"3:24")
song11.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals+-+Dreamland+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Dreamland+%5Bwww.slider.kz%5D.mp3")

song12 = Song.create!(song_name: "Heat Waves", album_id: glass_animals.id, duration:"3:58")
song12.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals+-+Heat+Waves+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Heat+Waves+%5Bwww.slider.kz%5D.mp3")

song13 = Song.create!(song_name: "Hot Sugar", album_id: glass_animals.id, duration:"3:55")
song13.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals+-+Hot+Sugar+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Hot+Sugar+%5Bwww.slider.kz%5D.mp3")

song14 = Song.create!(song_name: "Melon and the Coconut", album_id: glass_animals.id, duration:"2:28")
song14.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals+-+Melon+and+the+Coconut+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Melon+and+the+Coconut+%5Bwww.slider.kz%5D.mp3")

song15 = Song.create!(song_name: "Tangerine", album_id: glass_animals.id, duration:"3:21")
song15.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals+-+Tangerine+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Tangerine+%5Bwww.slider.kz%5D.mp3")

song16 = Song.create!(song_name: "Tokyo Drifting", album_id: glass_animals.id, duration:"3:36")
song16.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dreamland/Glass+Animals%2C+Denzel+Curry+-+Tokyo+Drifting+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals%2C+Denzel+Curry+-+Tokyo+Drifting+%5Bwww.slider.kz%5D.mp3")


# Ed Sheeran - Equals
ed_sheeran = Artist.create!(name:"Ed Sheeran")
ed_sheeran.photo.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Artist+Pics/ed_sheeran.jpeg"), filename: 'ed_sheeran.jpeg')

equal = Album.create!(album_name:"=", artist_id:ed_sheeran.id, release_date: 2021 )
equal.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/c/cd/Ed_Sheeran_-_Equals.png"), filename: 'Ed_Sheeran_-_Equals.png')

song17 = Song.create!(song_name: "Bad Habits", album_id: equal.id, duration:"3:51")
song17.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Equals/Ed+Sheeran+-+Bad+Habits+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Bad+Habits+%5Bwww.slider.kz%5D.mp3")

# song18 = Song.create!(song_name: "First Times", album_id: equal.id, duration:"3:06")
# song18.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+First+Times+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+First+Times+%5Bwww.slider.kz%5D.mp3")

song19 = Song.create!(song_name: "Leave Your Life", album_id: equal.id, duration:"3:44")
song19.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Equals/Ed+Sheeran+-+Leave+Your+Life+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Leave+Your+Life+%5Bwww.slider.kz%5D.mp3")

song20 = Song.create!(song_name: "Overpass Graffiti", album_id: equal.id, duration:"3:57")
song20.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Equals/Ed+Sheeran+-+Overpass+Graffiti+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Overpass+Graffiti+%5Bwww.slider.kz%5D.mp3")

song21 = Song.create!(song_name: "Shivers", album_id: equal.id, duration:"3:28")
song21.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Equals/Ed+Sheeran+-+Shivers+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Shivers+%5Bwww.slider.kz%5D.mp3")

# song22 = Song.create!(song_name: "The Joker And The Queen", album_id: equal.id, duration:"3:05")
# song22.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Ed+Sheeran+-+Equals/Ed+Sheeran+-+The+Joker+And+The+Queen+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+The+Joker+And+The+Queen+%5Bwww.slider.kz%5D.mp3")

song23 = Song.create!(song_name: "Tides", album_id: equal.id, duration:"3:15")
song23.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Equals/Ed+Sheeran+-+Tides+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Tides+%5Bwww.slider.kz%5D.mp3")

# Drake - Scorpion
scorpion = Album.create!(album_name:"Scorpion", artist_id:drake.id, release_date: 2018 )
scorpion.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"), filename: 'Scorpion_by_Drake.jpg')

song24 = Song.create!(song_name: "Elevate", album_id: scorpion.id, duration:"3:04")
song24.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Scorpion/Drake+-+Elevate+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Elevate+%5Bwww.slider.kz%5D.mp3")

song25 = Song.create!(song_name: "Emotionless", album_id: scorpion.id, duration:"5:02")
song25.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Scorpion/Drake+-+Emotionless+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Emotionless+%5Bwww.slider.kz%5D.mp3")

song26 = Song.create!(song_name: "God's Plan", album_id: scorpion.id, duration:"3:18")
song26.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Scorpion/Drake+-+God's+Plan+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+God's+Plan+%5Bwww.slider.kz%5D.mp3")

song27 = Song.create!(song_name: "I'm Upset", album_id: scorpion.id, duration:"3:34")
song27.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Scorpion/Drake+-+I'm+Upset+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+I'm+Upset+%5Bwww.slider.kz%5D.mp3")

song28 = Song.create!(song_name: "Nonstop", album_id: scorpion.id, duration:"3:58")
song28.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Scorpion/Drake+-+Nonstop+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Nonstop+%5Bwww.slider.kz%5D.mp3")

# song29 = Song.create!(song_name: "Survival", album_id: scorpion.id, duration:"2:16")
# song29.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Drake+-+Scorpion/Drake+-+Survival+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Survival+%5Bwww.slider.kz%5D.mp3")


# Dua Lipa
dua_lipa = Artist.create!(name:"Dua Lipa")
dua_lipa.photo.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Artist+Pics/dua_lipa.jpeg"), filename: 'dua_lipa.jpeg')

future_nostalgia = Album.create!(album_name:"Future Nostalgia", artist_id:dua_lipa.id, release_date: 2021 )
future_nostalgia.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png"), filename: 'Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png')

song30 = Song.create!(song_name: "Break My Heart", album_id: future_nostalgia.id, duration:"3:41")
song30.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Break+My+Heart+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Break+My+Heart+%5Bwww.slider.kz%5D.mp3")

song31 = Song.create!(song_name: "Cool", album_id: future_nostalgia.id, duration:"3:29")
song31.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Cool+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Cool+%5Bwww.slider.kz%5D.mp3")

song32 = Song.create!(song_name: "Don't Start Now", album_id: future_nostalgia.id, duration:"3:03")
song32.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Don't+Start+Now+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Dont+Start+Now+%5Bwww.slider.kz%5D.mp3")

song33 = Song.create!(song_name: "Future Nostalgia", album_id: future_nostalgia.id, duration:"3:04")
song33.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Future+Nostalgia+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Future+Nostalgia+%5Bwww.slider.kz%5D.mp3")

song34 = Song.create!(song_name: "Hallucinate", album_id: future_nostalgia.id, duration:"3:28")
song34.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Hallucinate+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Hallucinate+%5Bwww.slider.kz%5D.mp3")

song35 = Song.create!(song_name: "Levitating", album_id: future_nostalgia.id, duration:"3:23")
song35.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Levitating+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Levitating+%5Bwww.slider.kz%5D.mp3")

song36 = Song.create!(song_name: "Physical", album_id: future_nostalgia.id, duration:"3:13")
song36.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Future+Nostalgia/Dua+Lipa+-+Physical+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Physical+%5Bwww.slider.kz%5D.mp3")


# Justin Bieber
justin_bieber = Artist.create!(name:"Justin Bieber")
justin_bieber.photo.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Artist+Pics/justin_bieber.jpeg"), filename: 'justin_bieber.jpeg')

# Justin Bieber - Justice
justice = Album.create!(album_name:"Justice", artist_id:justin_bieber.id, release_date: 2021 )
justice.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png"), filename: 'Justin_Bieber_-_Justice.png')

# song37 = Song.create!(song_name: "2 Much", album_id: justice.id, duration:"2:32")
# song37.song_file.attach(io: URI.open("https://stopify-dev.s3.amazonaws.com/Songs/Justin+Bieber+-+Justice/Justin+Bieber+-+2+Much+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+2+Much+%5Bwww.slider.kz%5D.mp3")

song38 = Song.create!(song_name: "Deserve You", album_id: justice.id, duration:"3:07")
song38.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Justice/Justin+Bieber+-+Deserve+You+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+Deserve+You+%5Bwww.slider.kz%5D.mp3")

song39 = Song.create!(song_name: "Ghost", album_id: justice.id, duration:"2:33")
song39.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Justice/Justin+Bieber+-+Ghost+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+Ghost+%5Bwww.slider.kz%5D.mp3")

song40 = Song.create!(song_name: "Peaches (feat. Daniel Caesar, Giveon)", album_id: justice.id, duration:"3:18")
song40.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Justice/Justin+Bieber+feat.+Daniel+Caesar%2C+Giveon+-+Peaches+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+feat.+Daniel+Caesar%2C+Giveon+-+Peaches+%5Bwww.slider.kz%5D.mp3")

song41 = Song.create!(song_name: "As I Am (feat. Khalid)", album_id: justice.id, duration:"2:54")
song41.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Justice/Justin+Bieber+feat.+Khalid+-+As+I+Am+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+feat.+Khalid+-+As+I+Am+%5Bwww.slider.kz%5D.mp3")

song42 = Song.create!(song_name: "Unstable (feat. The Kid LAROI)", album_id: justice.id, duration:"2:38")
song42.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Justice/Justin+Bieber%2C+The+Kid+LAROI+-+Unstable+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber%2C+The+Kid+LAROI+-+Unstable+%5Bwww.slider.kz%5D.mp3")



# Justin Bieber - Changes
changes = Album.create!(album_name:"Changes", artist_id:justin_bieber.id, release_date: 2020 )
changes.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png"), filename: 'Justin_Bieber_-_Changes.png')

song43 = Song.create!(song_name: "Yummy", album_id: changes.id, duration:"3:28")
song43.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Changes/Justin+Bieber+-+Yummy+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+Yummy+%5Bwww.slider.kz%5D.mp3")

song44 = Song.create!(song_name: "Get Me (feat. Kehlani)", album_id: changes.id, duration:"3:05")
song44.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Changes/Justin+Bieber+feat.+Kehlani+-+Get+Me+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+feat.+Kehlani+-+Get+Me+%5Bwww.slider.kz%5D.mp3")

song45 = Song.create!(song_name: "Intentions (feat. Quavo)", album_id: changes.id, duration:"3:32")
song45.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Changes/Justin+Bieber+feat.+Quavo+-+Intentions+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+feat.+Quavo+-+Intentions+%5Bwww.slider.kz%5D.mp3")



# Glass Animals - How to be a human being
human_being = Album.create!(album_name:"How to Be a Human Being", artist_id:glass_animals.id, release_date: 2016 )
human_being.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg"), filename: 'How_To_Be_A_Human_Being_cover_art.jpg')

song46 = Song.create!(song_name: "Life Itself", album_id: human_being.id, duration:"4:41")
song46.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/How+to+Be+a+Human+Being/Glass+Animals+-+Life+Itself+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Life+Itself+%5Bwww.slider.kz%5D.mp3")

song47 = Song.create!(song_name: "Take A Slice", album_id: human_being.id, duration:"3:49")
song47.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/How+to+Be+a+Human+Being/Glass+Animals+-+Take+A+Slice+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Take+A+Slice+%5Bwww.slider.kz%5D.mp3")

song48 = Song.create!(song_name: "The Other Side Of Paradise", album_id: human_being.id, duration:"5:20")
song48.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/How+to+Be+a+Human+Being/Glass+Animals+-+The+Other+Side+Of+Paradise+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+The+Other+Side+Of+Paradise+%5Bwww.slider.kz%5D.mp3")



# Ed Sheeran - Divide
divide = Album.create!(album_name:"÷", artist_id:ed_sheeran.id, release_date: 2017 )
divide.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png"), filename: 'Divide_cover.png')

song49 = Song.create!(song_name: "Castle on the Hill", album_id: divide.id, duration:"4:21")
song49.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Divide/Ed+Sheeran+-+Castle+on+the+Hill+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Castle+on+the+Hill+%5Bwww.slider.kz%5D.mp3")

song50 = Song.create!(song_name: "Perfect", album_id: divide.id, duration:"4:23")
song50.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Divide/Ed+Sheeran+-+Perfect+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Perfect+%5Bwww.slider.kz%5D.mp3")

song51 = Song.create!(song_name: "Shape of You", album_id: divide.id, duration:"3:53")
song51.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Divide/Ed+Sheeran+-+Shape+of+You+%5Bwww.slider.kz%5D.mp3"), filename: "Ed+Sheeran+-+Shape+of+You+%5Bwww.slider.kz%5D.mp3")


# Dua Lipa - Dua Lipa (Deluxe)
dua_lipa_album = Album.create!(album_name:"Dua Lipa (Deluxe)", artist_id:dua_lipa.id, release_date: 2017 )
dua_lipa_album.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png"), filename: 'Dua_Lipa_%28album%29.png')

song52 = Song.create!(song_name: "IDGAF", album_id: dua_lipa_album.id, duration:"3:37")
song52.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dua+Lipa+(Deluxe)/Dua+Lipa+-+IDGAF+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+IDGAF+%5Bwww.slider.kz%5D.mp3")

song53 = Song.create!(song_name: "New Rules", album_id: dua_lipa_album.id, duration:"3:29")
song53.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dua+Lipa+(Deluxe)/Dua+Lipa+-+New+Rules+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+New+Rules+%5Bwww.slider.kz%5D.mp3")

song54 = Song.create!(song_name: "Thinking 'Bout You", album_id: dua_lipa_album.id, duration:"2:51")
song54.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Dua+Lipa+(Deluxe)/Dua+Lipa+-+Thinking+'Bout+You+%5Bwww.slider.kz%5D.mp3"), filename: "Dua+Lipa+-+Thinking+'Bout+You+%5Bwww.slider.kz%5D.mp3")


# Drake - Views
views = Album.create!(album_name:"Views", artist_id:drake.id, release_date: 2016 )
views.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"), filename: 'Drake_-_Views_cover.jpg')


song55 = Song.create!(song_name: "Controlla", album_id: views.id, duration:"4:05")
song55.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Views/Drake+-+Controlla+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Controlla+%5Bwww.slider.kz%5D.mp3")

song56 = Song.create!(song_name: "Hotline Bling", album_id: views.id, duration:"4:27")
song56.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Views/Drake+-+Hotline+Bling+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Hotline+Bling+%5Bwww.slider.kz%5D.mp3")

song57 = Song.create!(song_name: "Hype", album_id: views.id, duration:"3:29")
song57.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Views/Drake+-+Hype+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+-+Views/Drake+-+Hype+%5Bwww.slider.kz%5D.mp3")

song58 = Song.create!(song_name: "One Dance (feat. WizKid, Kyla)", album_id: views.id, duration:"2:53")
song58.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Views/Drake+feat.+WizKid%2C+Kyla+-+One+Dance+%5Bwww.slider.kz%5D.mp3"), filename: "Drake+feat.+WizKid%2C+Kyla+-+One+Dance+%5Bwww.slider.kz%5D.mp3")


# Justin Bieber - Purpose
purpose = Album.create!(album_name:"Purpose", artist_id:justin_bieber.id, release_date: 2015 )
purpose.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png"), filename: 'Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png')

song59 = Song.create!(song_name: "Sorry", album_id: purpose.id, duration:"3:20")
song59.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Purpose/Justin+Bieber+-+Sorry+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+Sorry+%5Bwww.slider.kz%5D.mp3")

song60 = Song.create!(song_name: "What Do You Mean?", album_id: purpose.id, duration:"3:27")
song60.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/Purpose/Justin+Bieber+-+What+Do+You+Mean_+%5Bwww.slider.kz%5D.mp3"), filename: "Justin+Bieber+-+What+Do+You+Mean_+%5Bwww.slider.kz%5D.mp3")

# Glass Animals - ZABA
zaba = Album.create!(album_name:"Zaba", artist_id:glass_animals.id, release_date: 2014 )
zaba.photo.attach(io: URI.open("https://upload.wikimedia.org/wikipedia/en/3/32/Glass_animals_zaba.jpg"), filename: 'Glass_animals_zaba.jpg')

song61 = Song.create!(song_name: "Black Mambo", album_id: zaba.id, duration:"4:06")
song61.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/ZABA/Glass+Animals+-+Black+Mambo+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Black+Mambo+%5Bwww.slider.kz%5D.mp3")

song62 = Song.create!(song_name: "Flip", album_id: zaba.id, duration:"3:42")
song62.song_file.attach(io: URI.open("https://stopify-seeds.s3.amazonaws.com/Songs/ZABA/Glass+Animals+-+Flip+%5Bwww.slider.kz%5D.mp3"), filename: "Glass+Animals+-+Flip+%5Bwww.slider.kz%5D.mp3")



# Liked Songs Playlist for Demo User
demoUser_like_songs_playlist = Playlist.create!(playlist_name: "Liked Songs", user_id: demoUser.id)

# Demo Playlist #1
playlist1 = Playlist.create!(playlist_name: "Demo Playlist #1", user_id: demoUser.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song23.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song2.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song4.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song5.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song6.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song7.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song8.id)
# PlaylistSong.create!(playlist_id:playlist1.id, song_id: song9.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song11.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song14.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song17.id)
PlaylistSong.create!(playlist_id:playlist1.id, song_id: song19.id)



# Demo Playlist #2
playlist2 = Playlist.create!(playlist_name: "Demo Playlist #2", user_id: demoUser.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song1.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song21.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song23.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song20.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song16.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song14.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song15.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song13.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song11.id)
# PlaylistSong.create!(playlist_id:playlist2.id, song_id: song9.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song5.id)
PlaylistSong.create!(playlist_id:playlist2.id, song_id: song3.id)