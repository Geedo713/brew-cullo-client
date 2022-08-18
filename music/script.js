// Media Player Application / Cullo
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recentVolume = document.querySelector('#volume');
let volumeShow = document.querySelector('#volume-show');
let durationSlider = document.querySelector('#duration-slider');
let showDuration = document.querySelector('#show-duration');
let trackImg = document.querySelector('#track-img');
let autoPlay = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let indexNum = 0;
let playingSong = false;

//create an audio element
let track = document.createElement('audio');

//All songs list
let allTracks = [
    {
        name: "Recession",
        path: "Recession.mp3",
        artist: "Cullo",
        img: "image1.jpeg"
    },
    {
         name: "APTTMH",
         path: "APTTMH.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
    }, 
    {
         name: "AZ",
         path: "AZ.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
    },
    {
         name: "Frequency",
         path: "Frequency.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
    }, 
    {
         name: "Indigo",
         path: "Indigo.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
    }, 
    {
         name: "Shabbat Shalom",
         path: "Shabbat-Shalom.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
    }, 
    {
        name: "TD Jakes",
        path: "TD-Jakes.mp3",
        artist: "Cullo",
        img: "image1.jpeg"
    },
    {
        name: "Shabbat Shalom",
        path: "Shabbat-Shalom.mp3",
        artist: "Cullo",
        img: "image1.jpeg"
    },
   {
         name: "Shabbat Shalom",
         path: "Shabbat-Shalom.mp3",
         artist: "Cullo",
         img: "image1.jpeg"
   }
]

//All functions

//function load the track
function loadTrack(indexNum) {
     clearInterval(timer);
     resetSlider();
     track.src = allTracks[indexNum].path;
     title.src = allTracks[indexNum].name;
     trackImg.src = allTracks[indexNum].img;
     artist.src = allTracks[indexNum].artist; 
     track.load();

     artist.innerHTML = allTracks[indexNum].artist;
     title.innerHTML = allTracks[indexNum].name;
     total.innerHTML = allTracks.length;
     present.innerHTML = indexNum + 1;
     timer = setInterval(rangeSlider, 1000);
}
loadTrack(indexNum);

//reset song slider
function resetSlider() {
     durationSlider.value = 0;
}

//checking if the song is playing or not
function justPlay() {
     if (playingSong == false) {
         playSong();
     } else {
          pauseSong();
     }
}

//play song
function playSong() {
     track.play();
     playingSong = true;
     play.innerHTML = '<i class="fa-solid fa-pause"></i>'
}

//pause song 
function pauseSong() {
     track.pause();
     playingSong = false;
     play.innerHTML = '<i class="fa-solid fa-play"></i>'
}

//next song 
function nextSong () {
     if (indexNum < allTracks.length - 1) {
          indexNum += 1;
          loadTrack(indexNum);
          playSong();
     } else {
          indexNum = 0;
          loadTrack(indexNum);
          playSong();
     }
}

//previous song 
function previousSong() {
     if (indexNum > 0) {
          indexNum -= 1;
          loadTrack(indexNum);
          playSong();
     } else {
          indexNum = allTracks.length;
          loadTrack(indexNum);
          playSong();
     }
}
// change volume
function volumeChange() {
     volumeShow.innerHTML = recentVolume.value;
     track.volume = recentVolume.value / 100;
}

//mute song 
function muteSound() {
     track.volume = 0;
     volume.value = 0;
     volumeShow.innerHTML = 0;
}

//autoplay function
function autoplaySwitch() {
     if (autoplay == 1) {
          autoplay = 0;
          autoPlay.style.background = "#EEE";
     } else {
          autoplay = 1;
          autoPlay.style.background = "black";
     }
}

//range slider position

function changeDuration() {
     sliderPosition = track.duration * (durationSlider.value / 100);
     track.currentTime = sliderPosition;
}

function rangeSlider() {
     let position = 0;

     //update slider position
     if (!isNaN(track.duration)) {
          position = track.currentTime * (100 / track.duration);
          durationSlider.value = position;
     }
}

//function will run when the song is over
if (track.ended) {
     play.innerHTML = '<i class="fa-solid fa-play"></i>';
     if (autoplay == 1) {
          indexNum += 1;
          loadTrack(indexNum);
          playSong();
     }
}