function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function

  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs) //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(songList) {
    var template = ''
    var songElem = document.getElementById('songs')
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
      
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div class="thumbnail">
          <img src="${song.albumArt}" height="100px" width="100">
          <h5>${song.title}</h5>
          <p>${song.artist}</p>
          <p>${song.collection}</p>
          <p>$${song.price}</p>
          <audio controls>
            <source src="${song.preview}" type="audio/ogg">
            <source src="${song.preview}" type="audio/mpeg">
            Your browser does not support the audio tag.
          </audio>           
        </div>
                
      </div>
          
      `
    }
    songElem.innerHTML = template

  }




}