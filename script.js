let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctlIcon = document.getElementById("ctlIcon");
song.onloadmetadata = function(){
progress.max = somg.duration;
progress.value = song.currentTime;
}
function playPause(){
    if(ctlIcon.classList.contains("fa-pause")){
        song.pause();
        ctlIcon.classList.remove("fa-pause");
        ctlIcon.classList.remove("fa-play");
    }else{
        song.play();
        ctlIcon.classList.add("fa-pause");
        ctlIcon.classList.remove("fa-play");
    }
}