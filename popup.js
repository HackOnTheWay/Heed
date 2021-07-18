function Start(song) {
    song.play();
    }
    
    function Pause(song) {
    song.pause();
    }
    
    function Restart(song) {
    song.currentTime = 0;
    }
    
    document.addEventListener('DOMContentLoaded', function(){
    var Start_ClassicalBackgroundMusic = document.getElementById('StartClassicalBackgroundMusic');
    var Pause_ClassicalBackgroundMusic = document.getElementById('PauseClassicalBackgroundMusic');
    var Restart_ClassicalBackgroundMusic = document.getElementById('RestartClassicalBackgroundMusic');
    var audio_element = document.createElement("audio");
    audio_element.src = "songs/ClassicalBackgroundMusic.mp3";
    audio_element.play();
    
    Start_ClassicalBackgroundMusic.addEventListener('click', function() {
        Start(ClassicalBackgroundMusic);
    });
    Pause_ClassicalBackgroundMusic.addEventListener('click', function() {
        Pause(ClassicalBackgroundMusic);
    });
    Restart_ClassicalBackgroundMusic.addEventListener('click', function() {
        Restart(ClassicalBackgroundMusic);
    });
    });