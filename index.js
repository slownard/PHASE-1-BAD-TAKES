// this Created the place the info will show
const url = "http://localhost:3000/Songs";
const imgHolder = document.querySelector("#music-menu");
const newSong = document.querySelector("#new-music");
const papaR = [];
const patchR = document.querySelector("#ez");


//const nameSearch = document.querySelector("#new-rating");

const songTitle = document.createElement("h3")
const songCover = document.createElement("img")
const songArtist = document.createElement("h4")
const songUrl = document.createElement("p")
const reviewList = document.createElement("ul")
const songBox = document.createElement("li")
songBox.id = "song"

const about = document.querySelector(".about");
about.textContent = "WE ARE HERE TO PROVIDE A UNIQUE EXPERIENCE TO MUSIC EXPERTS AND TO THE AVERAGE MELOMANIAC. JOIN OUR COMMUNITY IN REDEFINING HOW WE VIEW MUSIC. IN THIS SPACE WE ARE ABLE TO INTRODUCE EACH OTHER TO NEW LENSES. ALL GENRES.ALL ARTISTS.ONE COMMUNITY"


const reviewForm = document.createElement("form")
const formLabel = document.createElement("label")
const formInput = document.createElement("input")
const formH5 = document.createElement("h5")
const submitReview = document.createElement("button")
reviewForm.append(formLabel, formInput, formH5, submitReview)
console.log(reviewForm)
let currentElem



// this fetches info
function loadIn() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((elem) => {
                loadImage(elem);
            });

        });
}





// DISPLAYS ALBUM IMAGES
function loadImage(elem) {


    const image = document.createElement('img')
    imgHolder.append(image)
    image.src = elem.img
    image.addEventListener('click', () => {
        createInfo(elem)

    })
}







//  DISPLAYS CLICKED SONG INFORMATION 
function createInfo(elem) {
    currentElem = elem
    const songList = document.querySelector("#song-list")
    formH5.textContent = "Add a Song Review!"
    reviewForm.id = "review-form"
    formLabel.textContent = "Review: "
    formInput.id = "add-review"
    formInput.type = "input"
    submitReview.textContent = " SUBMIT "


    // creates the review inside the json
    const allReviews = elem.badtakes.forEach(value => {
        const rr = document.createElement('li')
        rr.textContent = value
        formH5.append(rr)
    })
    songTitle.textContent = elem.song
    songCover.src = elem.img
    songArtist.textContent = elem.artist
    songUrl.textContent = elem.url



    songList.append(songBox)
    songBox.append(songTitle, songCover, songArtist, songUrl, reviewList, reviewForm)
    reviewForm.append(formH5, formLabel, formInput, submitReview)
}



// POST: ADDS NEW SONG 
newSong.addEventListener("submit", (e) => {
    e.preventDefault();
    const newObj = {
        artist: e.target["new-artist"].value,
        song: e.target["new-song"].value,
        url: e.target["new-video"].value,
        img: e.target["new-img"].value,
        badtakes: [e.target["new-review"].value],
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
    });
})

// PATCH:     ADDS NEW REVIEWS TO EACH SONG 
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(currentElem)
    const oldtake = currentElem.badtakes
    const newtake = [...oldtake, formInput.value]
    fetch(`http://localhost:3000/Songs/${currentElem.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ badtakes: newtake })

    })

})


loadIn()