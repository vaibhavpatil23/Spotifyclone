console.log("Welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let songItem = Array.from(document.getElementById("songItem"));
let songs = [
  {
    songName: "Aarambh hai prachand",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "shiv tandav",
    filePath: "songs/2.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "laksh ko har hal me pana hai",
    filePath: "songs/3.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/5.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salame-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/1.jpg",
  },
];
songItem.forEach((element) => {
  element.getElementByTagName("img")[0].src = songs[1].coverPath;
  element.getElementByclassName("songname")[0].innerText = songs[1].coverPath;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration;
});
  
document.getElementsByClassName('songitemplay').forEach((element)=>{
  element.addEventListener("click",(e)=>{
console.log(e)
  })

})
