// Add task and delete task functionality
function AddDeleteEditTask(event) {
  event.preventDefault();  // Останавливаем стандартное поведение формы, чтобы она не перезагружала страницу.

  let task = document.getElementById("taskInput").value;
  if (task === "") {
    console.log("Task is null");
    return;
  }

  // Генерация HTML для новой задачи
  const html = `
  <div class="todo-item">
    <input type="checkbox" class="task-checkbox">
    <label class="task-text">${task}</label>
    <div class="task-controls">
      <button class="edit-btn"><i class="fas fa-edit"></i></button>
      <button class="delete-btn"><i class="fas fa-trash"></i></button> 
    </div>
  </div>
  `;

  // Добавление задачи в список
  document.getElementById("todoList").innerHTML += html;

  // Очистка поля ввода
  document.getElementById("taskInput").value = "";
}

// Делегирование событий для кнопки удаления
document.getElementById("todoList").addEventListener("click", function(event) {
  // Проверяем, был ли клик по кнопке удаления
  if (event.target.classList.contains("delete-btn") || (event.target.tagName === "I" && event.target.parentElement.classList.contains("delete-btn"))) {
    // Находим родительский элемент (саму задачу) и удаляем её
    let taskItem = event.target.closest(".todo-item");
    if (taskItem) {
      taskItem.remove();
    }
  }
});

// Добавление обработчика на кнопку "Добавить задачу"
document.getElementById("addTaskBtn").addEventListener("click", AddDeleteEditTask);





































////////////////////////////////////////////////////////// MUSIC//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        console.log('Play!');
        
      });


      audio.addEventListener('ended', () => {
        console.log('End!');
      });


      

      audio.addEventListener('pause', () => {
        console.log('Pause!');
      });




      document.getElementById('embedBtn').addEventListener('click', () => {
        const link = document.getElementById('soundcloudInput').value;
        document.getElementById("soundcloudInput").value = "";
        // Проверка, что это ссылка SoundCloud
        if (!link.includes("soundcloud.com")) {
          alert("Это не ссылка на SoundCloud.");
          return;
        }
      
        // Генерация iframe embed
        const embedURL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(link)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false`;
      
        const iframe = document.createElement("iframe");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "166");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("frameborder", "no");
        iframe.setAttribute("allow", "autoplay");
        iframe.src = embedURL;
      
        const container = document.getElementById('playerContainer');
        container.innerHTML = ""; // очищаем предыдущий плеер
        container.appendChild(iframe);
      });
      


