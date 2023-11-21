const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

if(isDarkMode){
body.classList.add('dark-mode');
}

// darkModeToggle.addEventListener('click',()=>{
// body.classList.toggle('dark-mode');
// const isDarkModeEnabled = body.classList.contains('dark-mode');
// localStorage.setItem('dark-mode',isDarkModeEnabled ? 'enabled' : 'disabled');
// });
/* just for git */