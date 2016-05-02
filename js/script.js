
//Vars
var viewSection = document.getElementById('music-list');    //grab music-list div
var addSection = document.getElementById('add-form');       //grab add-form div
var populate = document.getElementById('music-list');       //needed for loop of songs


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator - Rock";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America - Light Rock";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall - Classic Rock ";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction - Rock";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill - Alternative Rock";
console.log("songs", songs );

//add 2 songs to songs array
songs.push("Jump > by Van Halen on the album 1984 - Rock");
songs.unshift("Living on a Prayer > by Bon Jovi on the album Slipery When Wet - Hair Band");

//update songs by relplacing and removing characters to meet customer requirements
songs = songs.map(function(updateText) {
   updateText = updateText.replace("> by", "-");
   updateText = updateText.replace("on the album", "-");
   updateText = updateText.replace(/[^-\w\s]/gi, "");
   console.log("again", updateText );
  return updateText;
});



//Event Listeners
document.getElementById('view-link').addEventListener("click", function() {
  // addSection.classList.remove('add-form');
  viewSection.style.display = "block";
  addSection.style.display = "none";
});

document.getElementById('add-link').addEventListener("click", function() {
  // addSection.classList.remove('add-form');
  viewSection.style.display = "none";
  addSection.style.display = "block";
});

//View Music Section - Loop to display Songs
function addMusic() {
  for(i = 0; i < songs.length; i++) {
    var eachSong = songs[i];
    populate.innerHTML +=
      "<div id='replace'><h2 id='song-name1'>" + eachSong + "</h2></div>";
  }
}

//Add Music View - Populate HTML
var addMusicForm = document.getElementById('add-form');
addMusicForm.innerHTML =
  "<fieldset><legend>Add Your Favorite Song!!!</legend>" +
  "<label for'song-input'>Enter Song:</label>" +
  "<input type='text' id='song-input' placeholder='Enter Song Title' autofocus>" +
  "</fieldset>" +
  "<fieldset>" +
  "<label for'artist-input'>Enter Artist:</label>" +
  "<input type='text' id='artist-input' placeholder='Who is the Artist?''>" +
  "</fieldset>" +
  "<fieldset>" +
  "<label for='album-input'>Enter Album:</label>" +
  "<input type='text' id='album-input' placeholder='What Album in this on?''>" +
  "</fieldset>" +
  "<fieldset>" +
  "<label for='genre-input'>Enter Genre:</label>" +
  "<input type='text' id='genre-input' placeholder='What Genre is this music?''>" +
  "</fieldset>" +
  "<div id='add-song-area'><input type='button' id='add-song-button' value='Add Songs Now'>" +
  "</fieldset></div>";

var addedSong = document.getElementById("song-input");
var addedArtist = document.getElementById("artist-input");
var addedAlbum = document.getElementById("album-input");
var addedGenre = document.getElementById("genre-input");


document.getElementById("add-song-button").addEventListener("click", function(event) {
  addedSong = document.getElementById('song-input').value
  addedArtist = document.getElementById('artist-input').value
  addedAlbum = document.getElementById('album-input').value
  addedGenre = document.getElementById('genre-input').value
// addedSong =  added.value;
  songs.push (addedSong + ' - ' + addedArtist + ' - ' + addedAlbum + ' - ' + addedGenre);
  addMusic();
console.log("added song..", addedSong, addedArtist, addedAlbum, addedGenre);
});


addMusic();


