//fetching IDs 
const play = document.getElementById('play');
const music = document.querySelector("audio");
const currentimg = document.querySelector("img");
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const next = document.getElementById('next');
const prev = document.getElementById('prev');


let isPlaying = false;    //To Check whether Song is playing or it is pause
let currentSong = 0;      //Current song index, intially points to the first song in the array

//Play Music Function
const playMusic = () => {

    isPlaying = true;                           //Music is playing
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    currentimg.classList.add('anime');

}

//Pause Music Function
const pauseMusic = () => {

    isPlaying = false;                          //Music is Paused
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    currentimg.classList.remove('anime');

}

//Play button clicked
play.addEventListener('click', () => {
    if (isPlaying === true) {
        pauseMusic();                           //If Music is playing it will pause
    }                                           // otherwise it will start playing

    else {
        playMusic();
    }
});

// song playlist
const playlist = [
   
    {
        name: "onmyway",
        title: "On My Way",
        artist: "Alen Walker",
        image: "onmywayimg"
    },
    {
        name: "seeyouagain",
        title: "See You Again",
        artist: "Wiz-khalifa",
        image: "seeyouagainimg"
    },
    {
        name: "badguy",
        title: "Bad Guy",
        artist: "Billie Eilish",
        image: "badguyimg"
    },
    
    {
        name: "duaa",
        title: "Duaa",
        artist: "Arijit Singh",
        image: "duaaimg"
    },
    
];

//Enter key pressed
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        if (isPlaying === true) {                           //If Music is playing it will pause
            pauseMusic();                                   // otherwise it will start playing
        }
        else {
            playMusic();
        }
    }
});

//load current song
const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "song/" + songs.name + ".mp3";
    currentimg.src = "song themes/" + songs.image + ".jpg";
}
loadSongs(playlist[currentSong]);                          //Calling loadSongs function when page is load

//Next btton clicked
next.addEventListener('click', () => {
    if (currentSong === playlist.length-1) {
        next.disabled = true;
    }
    else {
        currentSong += 1;
        loadSongs(playlist[currentSong]);
        isPlaying = false;
        playMusic();
    }

});

//Prev button clicked
prev.addEventListener('click', () => {
    if (currentSong === 0) {
        prev.disabled = true;
    }
    else {
        currentSong -= 1;
        loadSongs(playlist[currentSong]);
        isPlaying = false;
        playMusic();
    }
});
