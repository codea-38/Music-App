let index=0;
let songName = document.querySelector("#song-name");
let singerName = document.querySelector("#singer-name");
let songimage = document.querySelector(".song-img");
let playPauseImg = document.querySelector("#play-pause");
let volumeRange = document.querySelector("#volume-range");
let songRange = document.querySelector("#song-duration");
let volSvg = document.querySelector("#vol-svg");
let musicAnim = document.querySelector("#musicanim");
let playlistImg = document.querySelector("#playlist-img");
let playlist= document.querySelector(".playlist");
let playlistSong= document.querySelectorAll(".playlist-song");
let playingsong=false;
let track= document.createElement("audio");

volumeRange.addEventListener("input", volume);

let songs=[
    {
        name:"Ve Kamleya",
        path:"vekamleya.mp3",
        image:"artist1.jpg",
        singer: "Arijit Singh"
    },

    {
        name:"Apna Banale",
        path:"apnabanale.mp3",
        image:"artist2.jpeg",
        singer: "Arijit Singh"
    },

    {
        name:"Jugraafiya",
        path:"jugraafia.mp3",
        image:"artist3.jpg",
        singer: "Shreya Ghoshal and Udit Narayan "
    },

    {
        name:"Haseen",
        path:"haseen.mp3",
        image:"artist4.jpg",
        singer: "Talwiinder"
    },
]
function loadTrack(index){
track.src=songs[index].path;
songName.innerHTML=songs[index].name;
singerName.innerHTML=songs[index].singer;
songimage.style.backgroundImage = `url("${songs[index].image}")`

volume()
duration()
setInterval(()=>{
songRange.max=track.duration
songRange.value=track.currentTime
},1000)
track.loop=true
track.load()

}


loadTrack(index);

function playPause(){
    if (playingsong==false){
        playSong()
        
    }else{
        pauseSong()
        
    }

}

function  playSong(){
    track.play();
    playingsong=true;
playPauseImg.src="pause_32dp_FFF_FILL0_wght400_GRAD0_opsz40.png"
musicAnim.style.display="block"

}

function  pauseSong(){
    track.pause();
    playingsong=false;
playPauseImg.src="play_arrow_32dp_FFF_FILL0_wght400_GRAD0_opsz40.png"
musicAnim.style.display="none"

}

function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
 function previousSong(){
    if(index>0){
        index--
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}

function volume() {
  track.volume = volumeRange.value / 100;
  if(volumeRange.value==0){
    volSvg.src="volume_off_28dp_FFF_FILL0_wght400_GRAD0_opsz24.png"
  }else{
    volSvg.src="volume_down_alt_30dp_FFF_FILL0_wght400_GRAD0_opsz24.png"
  }
}

function duration(){
    track.currentTime=songRange.value
}

playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="close_28dp_FFF_FILL0_wght400_GRAD0_opsz24.png"
}else{
    playlistImg.src="queue_music_28dp_FFF_FILL0_wght400_GRAD0_opsz24.png"
}
})

songRange.addEventListener("input", () => {
    track.currentTime = songRange.value;
});


playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="queue_music_28dp_FFF_FILL0_wght400_GRAD0_opsz24.png"
    })
})



