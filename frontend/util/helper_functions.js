

 export const calculateTotalTimeLength = (songs) => { 
    let totalSeconds = 0;   
    songs.map(song => {
      let minutes, seconds;
      [minutes,seconds] = song.duration.split(":");
      minutes = parseInt(minutes);
      seconds = parseInt(seconds);
      totalSeconds += seconds + minutes*60;
    });
    let hours = Math.floor(totalSeconds / 3600); 
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    return `${hours === 1 ? `${hours} hr, ` : hours === 0 ? "": `${hours} hrs, `}${minutes} min`;
  }