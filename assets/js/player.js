let x = document.querySelector('#myAudio'); 

function playAudio() { 
  let playAudio = document.querySelector('#playPause')
  if(playAudio.classList.value === 'bi bi-play-circle-fill'){
    x.play(); 
    playAudio.classList.value = 'bi bi-pause-circle-fill'
    return
  }
  if(playAudio.classList.value === 'bi bi-pause-circle-fill'){
    x.pause(); 
    playAudio.classList.value = 'bi bi-play-circle-fill'
    return
  }
} 







if(!localStorage.getItem('trackNumber')){
  localStorage.setItem('trackNumber', "0")
  localStorage.setItem('idAlbum', "230935602")
  let playAudio = document.querySelector('#playPause')
  x.pause();
  playAudio.classList.value = 'bi bi-pause-circle-fill'
  grepAlbum()
} else {
  let playAudio = document.querySelector('#playPause')
  x.pause();
  playAudio.classList.value = 'bi bi-pause-circle-fill'
  grepAlbum()
}


document.querySelector('body').addEventListener('click', (e) => {
  let idNascostoAlbum = document.querySelector('#idNascostoPlayAlbumGrande').innerText
    if(e.target.id === 'playButtonAlbumGrande') {
        // console.log(idNascostoAlbum);
        localStorage.setItem('trackNumber', "0")
        localStorage.setItem('idAlbum', idNascostoAlbum)
        let playAudio = document.querySelector('#playPause')
        grepAlbum()
        playAudio.classList.value = 'bi bi-play-circle-fill'
        x.play();
        
    }
      
    if(e.target.id === 'vaiAvanti') {
      let jsonNew = JSON.parse(localStorage.getItem('oggettoString'));
      let lastTrack = jsonNew.tracks.data.length - 1;
      if(+localStorage.getItem('trackNumber') >= lastTrack){
        localStorage.setItem('trackNumber', "0");
        playAudio()
        grepAlbum()
        return
      }
      let avanti = +localStorage.getItem('trackNumber') + 1
      localStorage.setItem('trackNumber', avanti)
      playAudio()
      grepAlbum()
    }

    if(e.target.id === 'vaiIndietro') {
      let jsonNew = JSON.parse(localStorage.getItem('oggettoString'));
      let lastTrack = jsonNew.tracks.data.length - 1;
      if(+localStorage.getItem('trackNumber') == 0){
        localStorage.setItem('trackNumber', lastTrack);
        playAudio()
        grepAlbum()
        return
      }
      let indietro = +localStorage.getItem('trackNumber') - 1
      localStorage.setItem('trackNumber', indietro)
      playAudio()
      grepAlbum()
    }

    // if(e.target.classList.value === 'card-body generati-01' || e.target.classList.value === 'card-text generati-01' || e.target.classList.value === 'card-title generati-01' || e.target.classList.value === 'card-img-top p-4 img-fluid generati-01') {
    //   console.log("weweee");
    // }
    if(e.target.classList.value === 'card-img-top p-4 img-fluid generati-01') {
      let idNascostoAlbum = e.target.parentNode.childNodes[3].childNodes[5].innerText;
      localStorage.setItem('trackNumber', "0");
      localStorage.setItem('idAlbum', idNascostoAlbum);
      let playAudio = document.querySelector('#playPause');
      grepAlbum();
      playAudio.classList.value = 'bi bi-play-circle-fill';
      x.play();
    }
    // console.log(e.target);
        
})


async function grepAlbum() {
  let divPlayer = document.querySelector('#player');
  let copertinaAlbum = divPlayer.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
  let titoloCanzone = document.querySelector('#titoloCanzonePlayer')
  let artisti = document.querySelector('#titoloArtistiPlayer')
  let sourceAudio = document.querySelector('#myAudio')
  let Url = `https://striveschool-api.herokuapp.com/api/deezer/album/${localStorage.getItem('idAlbum')}`
  let oggettoJson = null;
  await fetch(Url, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.35.0"
      }
      }).then(response => response.json())
      .then(json => oggettoJson = json)
      .catch(error => console.log(error))

      // console.log(oggettoJson);
      copertinaAlbum.setAttribute("src", oggettoJson.cover_medium)
      if(oggettoJson.tracks.data[localStorage.getItem('trackNumber')].title_short.length <= 24){
        titoloCanzone.innerText = oggettoJson.tracks.data[localStorage.getItem('trackNumber')].title_short
      } else {
        titoloCanzone.innerText = oggettoJson.tracks.data[localStorage.getItem('trackNumber')].title_short.substring(0, 23) + "..."
      }
      artisti.innerText = oggettoJson.artist.name
      sourceAudio.setAttribute("src", oggettoJson.tracks.data[localStorage.getItem('trackNumber')].preview)
      let oggettoString = JSON.stringify(oggettoJson)
      localStorage.setItem('oggettoString', oggettoString)
      // console.log(oggettoJson);
      playAudio()
}

function dimmiGianluca() {

    let divPlayer = document.querySelector('#player');
    let copertinaAlbum = divPlayer.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    let titoloCanzone = document.querySelector('#titoloCanzonePlayer')
    let artisti = document.querySelector('#titoloArtistiPlayer')
    let sourceAudio = document.querySelector('#myAudio')
    copertinaAlbum.setAttribute("src", "assets/imgs/main/40.png")
    titoloCanzone.innerText = "Andiamo a fleXare with Gianluca 40"
    artisti.innerText = "Gianluca Forty"
    sourceAudio.setAttribute("src", "assets/audio/dimmi-gianluca.mp3")
    localStorage.setItem('trackNumber', "0")
    playAudio()
  
}

function tribalAcidHouse() {

  let divPlayer = document.querySelector('#player');
  let copertinaAlbum = divPlayer.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
  let titoloCanzone = document.querySelector('#titoloCanzonePlayer')
  let artisti = document.querySelector('#titoloArtistiPlayer')
  let sourceAudio = document.querySelector('#myAudio')
  copertinaAlbum.setAttribute("src", "assets/imgs/main/acid-house.png")
  titoloCanzone.innerText = "Tribal House"
  artisti.innerText = "R. Sanchez, Joe T. Vannelli, C. Coccoluto"
  sourceAudio.setAttribute("src", "assets/audio/tribal-acid-house.mp3")
  localStorage.setItem('trackNumber', "0")
  playAudio()

}


function dankMaurizio() {

  let divPlayer = document.querySelector('#player');
  let copertinaAlbum = divPlayer.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
  let titoloCanzone = document.querySelector('#titoloCanzonePlayer')
  let artisti = document.querySelector('#titoloArtistiPlayer')
  let sourceAudio = document.querySelector('#myAudio')
  copertinaAlbum.setAttribute("src", "assets/imgs/main/costanzo.png")
  titoloCanzone.innerText = "State Boni Lo-fi"
  artisti.innerText = "Maurizio Kostanzo"
  sourceAudio.setAttribute("src", "assets/audio/dank-maurizio.mp3")
  localStorage.setItem('trackNumber', "0")
  playAudio()

}

// richiamo funzioni sotto
sliderPlayer()
controlloVolume()


function sliderPlayer() {
  let audio = document.getElementById("myAudio");
  let currentStart = document.getElementById("currentStart");
  let currentEnd = document.getElementById("currentEnd");
  let statusBar = document.querySelector(".slider-progress");

  audio.ontimeupdate = function() {
    if (isFinite(audio.duration)) {
      let percentuale = (audio.currentTime / audio.duration) * 100;
      statusBar.value = percentuale;

      currentStart.textContent = convertiSecondiInMinuti(audio.currentTime);
      currentEnd.textContent = convertiSecondiInMinuti(audio.duration);
    }
  };

  // Funzione per convertire i secondi in formato minuti:secondi
  function convertiSecondiInMinuti(secondi) {
      let min = Math.floor(secondi / 60);
      let sec = Math.floor(secondi % 60);
      return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  // Aggiungi un listener per quando l'utente cambia la posizione della status bar
  statusBar.addEventListener('input', function() {
      let durata = audio.duration;
      let valore = statusBar.value;
      audio.currentTime = (valore / 100) * durata;
  });

}


function controlloVolume() {
  document.addEventListener('DOMContentLoaded', function() {
  let audio = document.getElementById('myAudio'); 
  let controlloVolume = document.getElementById('controlloVolume');

  audio.volume = controlloVolume.value / 100;

  controlloVolume.addEventListener('input', function() {
      audio.volume = this.value / 100;
  });


});

}