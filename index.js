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
  const image = document.createElement("img");
  imgHolder.append(image);
  image.src = elem.img;
  image.addEventListener("click", () => {
    createInfo(elem);
  });
}

function createInfo(elem) {
  const name = document.querySelector("#name");
  const artist = document.querySelector("h3.artist");
  const vid = document.querySelector("#video");
  name.textContent = elem.song;
  artist.textContent = elem.artist;
  vid.src = elem.url;
}

newSong.addEventListener("submit", (e) => {
  e.preventDefault();
  const newObj = {
    artist: e.target["new-song"].value,
    song: e.target["new-artist"].value,
    url: e.target["new-video"].value,
    img: e.target["new-cover"].value,
    badtakes: [e.target["new-comment"].value],
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObj),
  });
});

function getBread(data) {
  patchR.addEventListener("submit", (e) => {
    e.preventDefault();
    const updateArray = [ e.target["new-com"].value];
    //console.log(updateArray);
    fetch(`http://localhost:3000/Songs/?song=${nameSearch.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(updateArray),
    })
    .then(r => r.json())
    .then(dota => dota.entries)
    //console.log(elem.badtakes);
  });
}

loadIn();
