const url = "http://localhost:3000/Songs";
const imgHolder = document.querySelector("#music-menu");
const newSong = document.querySelector("#new-music");
const papaR = [];
const patchR = document.querySelector("#ez");
const nameSearch = document.querySelector("#new-rating");
const songList = document.querySelector("#song-list")
const songBox = document.createElement("li")
songBox.id = "song"
const songTitle = document.createElement("h3")
const songCover = document.createElement("img")
const songArtist = document.createElement("h4")
const songUrl = document.createElement("p")
const reviewList = document.createElement("ul")
const reviewForm = document.createElement("form")
const formLabel = document.createElement("label")
const formInput = document.createElement("input")
const formH5 = document.createElement("h5")
const submitReview = document.createElement("button")
submitReview.id = "submitReview"


function loadIn() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((elem) => {
                loadImage(elem);
            });
            getBread(data);
        });
}


//loading images in top bar 
function loadImage(elem) {

    const about = document.querySelector(".about");
    about.textContent = "WE ARE HERE TO PROVIDE A UNIQUE EXPERIENCE TO MUSIC EXPERTS AND TO THE AVERAGE MELOMANIAC. JOIN OUR COMMUNITY IN REDEFINING HOW WE VIEW MUSIC. IN THIS SPACE WE ARE ABLE TO INTRODUCE EACH OTHER TO NEW LENSES. ALL GENRES.ALL ARTISTS.ONE COMMUNITY"



    const image = document.createElement('img')
    imgHolder.append(image)
    image.src = elem.img
    image.addEventListener('click', () => {
        createInfo(elem)
    })
}

function createInfo(elem) {

    formH5.textContent = "Add a Song Review!"
    reviewForm.id = "review-form"
    formLabel.textContent = "Review: "
    formInput.id = "add-review"
    formInput.type = "input"
    submitReview.textContent = " SUBMIT "

    reviewForm.addEventListener("submit", (e) => {

        e.preventDefault

        const newReview = document.createElement("li")
        newReview.textContent = e.target["add-review"].value
        reviewList.append(newReview)
    })

    songTitle.textContent = elem.song
    songCover.src = elem.img
    songArtist.textContent = elem.artist
    songUrl.textContent = elem.url

    songList.append(songBox)
    songBox.append(songTitle, songCover, songArtist, songUrl, reviewList, reviewForm)
    reviewForm.append(formH5, formLabel, formInput, submitReview)
}

loadIn()