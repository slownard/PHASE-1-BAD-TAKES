const url = "http://localhost:3000/Songs";
const imgHolder = document.querySelector("#music-menu");
const newSong = document.querySelector("#new-music");
const papaR = [];
const patchR = document.querySelector("#ez");
const nameSearch = document.querySelector("#new-rating");

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


function loadImage(elem) {
    const image = document.createElement('img')
    imgHolder.append(image)
    image.src = elem.img
    image.addEventListener('click', () => {
        createInfo(elem)
    })

    const about = document.querySelector(".about");
    about.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus adipisci nemo rem asperiores doloribus amet dolor facere quidem esse. Commodi, vero qui earum officia maiores voluptates expedita minus adipisci. Mollitia.yup"

}

function createInfo(elem) {

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

    formH5.textContent = "Add a Song Review!"
    reviewForm.id = "review-form"
    formLabel.textContent = "Review: "
    formInput.id = "add-review"
    formInput.type = "submit"
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
    songBox.append(songTitle, songCover, songArtist, songUrl, reviewForm)
    reviewForm.append(formH5, formLabel, formInput, reviewList, submitReview)
}

loadIn()