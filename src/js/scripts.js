function styleCheck() {
    let text = document.getElementById('header');
    
}


    const audio = document.getElementById('myAudio');
    const buttonPlay = document.getElementById('playBtn');
    const buttonStop = document.getElementById('stopBtn');

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


    audio.addEventListener('play', () => {
        alert('Аудио включилось!');
        
      });


      audio.addEventListener('ended', () => {
        alert('Аудио закончилось!');
      });


      

      audio.addEventListener('pause', () => {
        alert('Пауза!');
      });