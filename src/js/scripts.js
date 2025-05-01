function styleCheck() {
    let text = document.getElementById('header');
    
}


    const audio = document.getElementById('myAudio');
    const buttonPlay = document.getElementById('playBtn');
    const buttonStop = document.getElementById('stopBtn');
    const buttonPause = document.getElementById('pauseBtn')

    // Воспроизведение
    buttonPlay.addEventListener('click', () => {
        
        audio.play();
        document.body.style.background = 'url("https://media1.tenor.com/m/uxdFPjXVhR0AAAAC/dexter.gif")';

    });

    // Остановка
    buttonStop.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0; // Сброс на начало
      document.body.style.background = 'white'
    });

    // pause
    buttonPause.addEventListener('click', () => {
        audio.pause();
        document.body.style.background = '#f3f1f1'
      });


    audio.addEventListener('play', () => {
        alert('Play!');
        
      });


      audio.addEventListener('ended', () => {
        alert('End!');
      });


      

      audio.addEventListener('pause', () => {
        alert('Pause!');
      });