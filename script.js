console.log("Welcome to Spotify")

//Initialize the elements
let songIndex = 1;
let audioElement = new Audio("./Songs/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let masterSongName = document.getElementById("masterSongName")
let masterSongSinger = document.getElementById("masterSongSinger")
let masterSongCover = document.getElementById("masterSongCover")

//song List
let songs = [
    {songName: "Photograph", singer:"Ed Sheeran", filePath:"./Songs/1.mp3", coverPath:"./Covers/photograph.jpeg"},
    {songName: "Khairiyat", singer:"Arijit Singh", filePath:"./Songs/2.mp3", coverPath:"./Covers/Khairiyat.jpg"},
    {songName: "Perfect", singer:"Ed Sheeran", filePath:"./Songs/3.mp3", coverPath:"./Covers/perfect.jpeg"},
    {songName: "Soulmate", singer:"Badshah", filePath:"./Songs/4.mp3", coverPath:"./Covers/Soulmate.jpg"},
    {songName: "Snap", singer:"Rosa Linn", filePath:"./Songs/5.mp3", coverPath:"./Covers/snap.jpeg"},
    {songName: "On my way", singer:"Alan Walker", filePath:"./Songs/6.mp3", coverPath:"./Covers/on-my-way.jpg"},
    {songName: "Pal Pal dil ke pass", singer:"Kishore Kumar", filePath:"./Songs/7.mp3", coverPath:"./Covers/palpaldilkepass.jpeg"},
    {songName: "Dil Dhadakne Do", singer:"Piyanka Chopra, Farhan Akhtar", filePath:"./Songs/8.mp3", coverPath:"./Covers/dil-dhadakne-do.jpg"},
    {songName: "Senorita", singer:"Farhan Akhtar, Hrithik Roshan", filePath:"./Songs/9.mp3", coverPath:"./Covers/Senorita.jpg"},
]

//End Like or Unlike Song
let flag = true;
Array.from(document.getElementsByClassName("love")).forEach( function(element) {
    element.addEventListener("click", function(e){
        if (flag) {
            element.src = "./HeartGreen.png";
            flag = false;
        } else {
            element.src = "./HeartGrey.png";
            flag = true;
        }
    })
})

//Handle play/pause click
masterPlay.addEventListener("click", function() {
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause")
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play")
    }
})

//update seekbar
audioElement.addEventListener("timeupdate", function() {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

//change song duration w.r.t. change in seekbar on click
myProgressBar.addEventListener("change", function(){
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100
})

//play different songs on clicking the song name
Array.from(document.getElementsByClassName("songItemPlay")).forEach( function(element) {
    element.addEventListener("click", function(e){
        songIndex = parseInt(e.target.id);
        audioElement.src = `./Songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        masterSongSinger.innerText = songs[songIndex-1].singer;
        document.getElementById("masterSongCover").src = songs[songIndex-1].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})

//song next
document.getElementById("next").addEventListener("click", function(){
    if(songIndex>=9){
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `./Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    masterSongSinger.innerText = songs[songIndex-1].singer;
    document.getElementById("masterSongCover").src = songs[songIndex-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

//song previous
document.getElementById("previous").addEventListener("click", function(){
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `./Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    masterSongSinger.innerText = songs[songIndex-1].singer;
    document.getElementById("masterSongCover").src = songs[songIndex-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

audioElement.addEventListener("ended", function(){
    if(songIndex>=9){
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `./Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    masterSongSinger.innerText = songs[songIndex-1].singer;
    document.getElementById("masterSongCover").src = songs[songIndex-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

//shuffle songs
document.getElementById("shuffle").addEventListener("click", function(){
    songIndex = Math.floor(Math.random()*10);
    audioElement.src = `./Songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    masterSongSinger.innerText = songs[songIndex-1].singer;
    document.getElementById("masterSongCover").src = songs[songIndex-1].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

//sound Range
const volumeRange = document.getElementById('soundRange');
const audio = document.getElementById('audioElement');
volumeRange.addEventListener('input', function() {
    const volume = parseFloat(this.value)/100;
    audioElement.volume = volume;
});

//Sidepanel
function openNav() {
    document.getElementById("mySidepanel").style.width = "85%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


