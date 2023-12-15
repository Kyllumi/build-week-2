//Ticket 5-creazione-dinamica-playlists

  addEventListener("DOMContentLoaded", (e) => {
    creazionePlaylistSinistra()


  });
  
function creazionePlaylistSinistra() {
    let playlistCol = document.querySelector('#playlistCol')
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
        "MIX HOUSE BENNY BENASSI 🏠 DIABOLIKA"
    ];
    playlistArray.forEach((element) => {
        let newA = document.createElement('a')
        newA.href = '#'
        newA.className = 'ms-3 mt-2'
        newA.innerText = element
        playlistCol.appendChild(newA)
    })

}


//fine ticket 5


