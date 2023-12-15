let x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 



document.querySelector('#corpo').addEventListener('click', (e) => {
    let divPlayer = document.querySelector('#player');
    let idNascostoAlbum = document.querySelector('#idNascostoPlayAlbumGrande').innerText
    let copertinaAlbum = divPlayer.childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    let titoloCanzone = document.querySelector('#titoloCanzonePlayer')
    let artisti = document.querySelector('#titoloArtistiPlayer')

    if(e.target.id === 'playButtonAlbumGrande') {
        // console.log(idNascostoAlbum);
        grepAlbum()
        
        async function grepAlbum() {
            let Url = `https://striveschool-api.herokuapp.com/api/deezer/album/${idNascostoAlbum}`
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
        titoloCanzone.innerText = oggettoJson.tracks.data[0].title_short
        artisti.innerText = oggettoJson.artist.name
        console.log(titoloCanzone)



        }
        
    }
})