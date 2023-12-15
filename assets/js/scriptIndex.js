//Ticket 5-creazione-dinamica-playlists

addEventListener("DOMContentLoaded", (e) => {
  creazionePlaylistSinistra();
});

function creazionePlaylistSinistra() {
  let playlistCol = document.querySelector("#playlistCol");
  const playlistArray = [
    "🎭 early stage emily syndrome",
    "Be The Young Old 🌟",
    "cit. 📖 Kimiko e Chimicazza",
    "che minkia ci faccio con 🤔 4 day",
    "saggio vibes 🎷",
    "👑 A' main character energy (mag-giu 2022)",
    "that fucking mood 😡",
    "🚗 VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of 🌌 mood landing page",
    "lol cosa cazzo vuol dire 😂 questa affermazione",
    "honey and glass 🍯 (nov-dic 2021)",
    "💪 (Revenge) Training Arc Lidia W Emily",
    "minecraft e nintendo 🎮 switch",
    "silvano d'orba? 🧐 I hardly know her",
    "Culo 2021 🎵 Frah Quintale Mix",
    "Francesco Guccini 🎤 Mix",
    "😇 la mamm e ki nalluk e na p8tt3n",
    "GOMORRA x SUBURRA mix 🔫 camorra",
    "Il re Arcangelo a 👑 cappella",
    "Le fiabe di pierone 📚 e il polu",
    "MIX HOUSE BENNY BENASSI 🏠 DIABOLIKA",
  ];
  playlistArray.forEach((element) => {
    let newA = document.createElement("a");
    newA.href = "#";
    newA.className = "ms-3 mt-2";
    newA.innerText = element;
    playlistCol.appendChild(newA);
  });
}
//fine ticket 5


//Inizio ticket 13-logica-js-index
addEventListener("DOMContentLoaded", (e) => {

  grepAlbumPrincipale()
})

async function grepAlbumPrincipale() {
  let arrayAlbum = ["1215290", "112854212", "230935602", "111212"];
  let randomIndex = Math.floor(Math.random() * 4);
  let Url = `https://striveschool-api.herokuapp.com/api/deezer/album/${arrayAlbum[randomIndex]}`
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

  console.log(oggettoJson.artist.name);
  let bannerPrincipaleAlbum = document.querySelector('#bannerPrincipaleAlbum')
  let colDiv = document.createElement('div');
  colDiv.classList = 'col';
  colDiv.innerHTML = `
      <div class="card bg-black text-white mb-3">
      <div class="row g-0">
          <div class="col-md-4">
              <img src="${oggettoJson.cover_big}" class="img-fluid rounded-start p-4" alt="...">
          </div>
          <div class="col-md-8">
              <div class="card-body p-4">
                  <span>ALBUM</span>
                  <h1 class="card-title">${oggettoJson.title}</h1>
                  <p class="card-text">
                      ${oggettoJson.contributors[0].name}
                  </p>
                  <p class="card-text">Ascolta un album Italiano</p>
                  <div class="bottoniAlbumPrincipale">
                      <button type="button" class="btn btn-success me-3 px-4 py-2 rounded-5 text-black fw-bold">Play</button>
                      <button type="button" class="btn border-white text-white me-3 px-4 py-2 rounded-5 fw-bold">Save</button>
                      <i class="bi bi-three-dots"></i>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `
  bannerPrincipaleAlbum.appendChild(colDiv)
}




//fine ticket 13