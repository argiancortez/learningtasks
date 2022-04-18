var Music = document.getElementById("Music");
    var icon = document.getElementById("icon");

    icon.onclick = function(){
       if(Music.paused){
           Music.play();
           icon.src = "media/Pause.png";
       }else{
          Music.pause();
           icon.src = "media/Play.png";
       }
       
    }