const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
const term = document.querySelector('#search').value;
console.log('search for:', term);
// issue three Spotify queries at once...
getTracks(term);
getAlbums(term);
getArtist(term);
if (ev) {
ev.preventDefault();
}
}

async function getTracks (term) {
let trackEndpoint = baseURL + "?";
trackEndpoint += "q=" + term + "&type=track"; 
console.log(trackEndpoint)

document.querySelector('#tracks').innerHTML = "";

const trackData = await fetch(trackEndpoint).then(response => response.json())
console.log(trackData[0].name)
console.log(`
get tracks from spotify based on the search term
"${term}" and load them into the #tracks section 
of the DOM...`);

let i = 0;
while(i<5){       const template = `
<section class="track-item preview" onclick="playSong('${trackData[i].id}')">
<img src="${trackData[i].album.image_url}" alt="picture of ${trackData[i].artist.name}" 
<i class="fas play-track fa-play" aria-hidden="true"></i>
<div class = "label">
<h2>${trackData[i].name}</h2>
<p>
${trackData[i].artist.name}
</p>
</div>
</section>
`;
document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
i++;}
}
function playSong(id){

const template = `
<iframe style="border-radius:12px" 
src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
width="100%" 
height="152" 
frameBorder="0" 
allowfullscreen="" 
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
loading="lazy">
<h1>${"Now Playing"}</h1></iframe>
${document.querySelector('#artist-section').innerHTML = 'Now Playing'}
`;
// document.querySelector('#artist-section, h1').innerHTML = "Now Playing"
document.querySelector('#artist-section').innerHTML = template;
}
function playAlbum(id){

const template = `
<iframe style="border-radius:12px" 
src="https://open.spotify.com/embed/album/${id}?utm_source=generator" 
width="100%" 
height="300%" 
frameBorder="0" 
allowfullscreen="" 
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
loading="lazy"></iframe>
${document.querySelector('#artist-section').innerHTML = 'Now Playing'}
`;
document.querySelector('#artist-section').innerHTML = template;
}

async function getAlbums (term) {
let albumEndpoint = baseURL + "?";
albumEndpoint += "q=" + term + "&type=album"; 
console.log(albumEndpoint)

document.querySelector('#albums').innerHTML = "";

const albumData = await fetch(albumEndpoint).then(response => response.json())
console.log(albumData)
console.log(`
get tracks from spotify based on the search term
"${term}" and load them into the #tracks section 
of the DOM...`);

let i = 0;
while(i<10){    const template = `
<section class="album-card" onclick="playAlbums('${albumData[i].id}')" id="2lATw9ZAVp7ILQcOKPCPqp">
<div>
<img src="${albumData[i].image_url}" alt="picture of ${albumData[i].name}">
<div class="footer">
<a href="${albumData[i].spotify_url}" target="_blank">
    view on spotify
</a>
<section class="track-item preview" onclick="playAlbum('${albumData[i].id}')">
<i class ="fas fa-play play-track" aria-hidden="true"></i>
<div class = "label">

<h2>${albumData[i].name}</h2>

</div>
</section>
`;
document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
i++;}

console.log(`
get albums from spotify based on the search term
"${term}" and load them into the #albums section 
of the DOM...`);
}

async function getArtist (term) {

let artistEndpoint = baseURL + "?";
artistEndpoint += "q=" + term + "&type=artist"; 
console.log(artistEndpoint)
const artistData = await fetch(artistEndpoint).then(response => response.json())
console.log(artistData)
const template = `
<img src="${artistData[0].image_url}" alt="picture of ${artistData[0].id}">
<h2>${artistData[0].name}</h2>
<a href="${artistData[0].spotify_url}" target="_blank">
    view on spotify
</a>

`

document.querySelector('#artist').innerHTML = template;



console.log(`
get artists from spotify based on the search term
"${term}" and load the first artist into the #artist section 
of the DOM...`);
};


document.querySelector('#search').onkeyup = function (ev) {
console.log(ev.keyCode);
if (ev.keyCode === 13) {
ev.preventDefault();
search();
}
}