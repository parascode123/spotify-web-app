console.log("welcome to spotify");

//initializing

let songIndex=0;
mastersongname=document.getElementById('mastersongname')
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let audioElement = new Audio('songs/1.mp3');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let myProgressBar=document.getElementById('myProgressBar');



let songs=[ {songNam:"Faded-Alan Walker",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
{songNam:"On My Way-Alan Walker",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
{songNam:"Gym CLass Heroes",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
{songNam:"Janji-Heroes Tonight",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
{songNam:"Tu Jo Mila",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
{songNam:"Glass Animals-Heat Waves",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},

]


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         // audioElement.src = `songs/${songIndex+1}.mp3`;
//         // masterSongName.innerText = songs[songIndex].songName;
//         // audioElement.currentTime = 0;
//         // audioElement.play();
//         // gif.style.opacity = 1;
//         // masterPlay.classList.remove('fa-play-circle');
//         // masterPlay.classList.add('fa-pause-circle');
//     })
// })
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;

})
// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })



audioElement.addEventListener('timeupdate',()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value=progress;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

songitems.forEach((element,i)=>{
    element.getElementsByClassName("songname")[0].innerText=songs[i].songNam
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`
        e.target.classList.remove( 'fa-play-circle')
        e.target.classList.add('fa-pause-circle')
    audioElement.currentTime=0;
    audioElement.play()
    mastersongname.innerText=songs[songIndex].songNam
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songNam
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    audioElement.currentTime=0;
    audioElement.play()
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songNam
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    audioElement.currentTime=0;
    audioElement.play()
})
