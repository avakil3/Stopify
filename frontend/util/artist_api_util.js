export const fetchArtist = artistId => (
    $.ajax({
      url: `/api/artists/${artistId}`
    })
  )
  
  export const fetchArtists = () => (
    $.ajax({
      url: `/api/artists`
    })
  )