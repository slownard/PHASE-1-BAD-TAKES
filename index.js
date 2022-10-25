const url = "http://localhost:3000/Songs"
const imgHolder = document.querySelector("#music-menu")

function loadIn (){
fetch(url)
.then (res => res.json())
.then (data => {
    data.forEach(elem => {
        loadImage(elem)
    })
})
}


function loadImage(elem) {
    const image = document.createElement('img')
    imgHolder.append(image)
    image.src = elem.img 
    image.addEventListener('click', () => {
        createInfo(elem)
    })
}

function createInfo(elem){
    const name = document.querySelector('#name')
    const artist = document.querySelector('h3.artist')
    const vid = document.querySelector('#video')
    name.textContent = elem.song
    artist.textContent = elem.artist
    vid.src = elem.url
}











loadIn()