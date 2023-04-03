console.log("Welcome to spotify")
let songIndex = 0
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myprogressbar = document.getElementById('myprogressbar')
let songs = [
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"salame-e-Ishq",filePath:"song/1.mp3", coverPath: "covers/1.jpg"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused  || audioElement.currentTime<=0)
    audioElement.play()
    masterPlay.classList.remove('')
    masterPlay.classList.add('')
})








myprogressbar.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
})