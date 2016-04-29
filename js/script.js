var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log("songs", songs );

//add 2 songs to songs array
songs.push ("Jump > by Van Halen on the album 1984");
songs.unshift("Living on a Prayer > by Bon Jovi on the album Slipery When Wet");

//update songs by relplacing and removing some characters to meet customer requirements
songs = songs.map(function(updateText) {
   updateText = updateText.replace("> by", "-");
   updateText = updateText.replace("on the album", "-");
   updateText = updateText.replace(/[^-\w\s]/gi, "");
   console.log("again", updateText );
  return updateText;
});
console.log("log", songs);

var populate = document.getElementById('right-col');

for(i = 0; i < songs.length; i++) {
  var eachSong = songs[i];
  populate.innerHTML +=
    "<div id='replace'><h2 id='song-name1'>" + eachSong + "</h2></div>";
}

      // <div>
      //   <h2 id="song-name1" >Song Name</h2>
      // </div>
      // <div>
      //   <h5 id="artist-info1" >Artist Name | Album Name | Genre</h5>
      // </div>

