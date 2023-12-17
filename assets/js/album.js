const fac = new FastAverageColor();
let immagineDaPrendereMedia = document.querySelector('#likelike')
let mediaRisultato = null;

prendiMedia()
async function prendiMedia() {
    await fac.getColorAsync(immagineDaPrendereMedia)
    .then(color => {
        mediaRisultato = immagineDaPrendereMedia.style.backgroundColor = color.rgba;
        // container.style.color = color.isDark ? '#fff' : '#000';
    })
    .catch(e => {
        console.log(e);
    });
    console.log(mediaRisultato);
}
