function getUserPreference() {
    return localStorage.getItem("theme") || "system";
}

function saveUserPreference(userPreference) {
    localStorage.setItem("theme", userPreference);
}

function getAppliedMode(userPreference) {
    if (userPreference === "light") {
      return "light";
    }
    if (userPreference === "dark") {
      return "dark";
    }
    // system
    if (matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }
  
function setAppliedMode(mode) {
    document.documentElement.dataset.appliedMode = mode;
}

function rotatePreferences(userPreference) {
    if (userPreference === "system") {
      return "light";
    }
    if (userPreference === "light") {
      return "dark";
    }
    if (userPreference === "dark") {
      return "system";
    }
    // for invalid values, just in case
    return "system";
}


const themeToggler = document.getElementById("theme-toggle");

// Mimic heavy load done by other JS scripts
//setTimeout(() => {
  let userPreference = getUserPreference();
  setAppliedMode(getAppliedMode(userPreference));
  themeToggler.onclick = () => {
    const newUserPref = rotatePreferences(userPreference);
    userPreference = newUserPref;
    saveUserPreference(newUserPref);
    setAppliedMode(getAppliedMode(newUserPref));
  };
//}, 1000);

// if(localStorage.getItem('mode') == 'dark')
// 		{
//     		darkmode();
//     	}
// 		var isDark = false;
// 		var monicon = document.getElementById('iconSun');
// 		var classicon = document.getElementById('theme-toggle');

// 		function darklightfnc(){
// 			if(isDark == false){
// 				document.body.style.backgroundColor = "black";
// 				document.body.style.color="white";
// 				isDark = true;
// 				classicon.classList.replace("fa-moon","fa-sun")
// 				monicon.style.color="gray";
// 			}else{
// 				document.body.style.backgroundColor = "white";
// 				document.body.style.color="black";
// 				isDark =false;
// 				classicon.classList.replace("fa-sun","fa-moon")
// 				monicon.style.color="black";
// 			}
// 		}
// darkModeToggle.addEventListener('click',()=>{
// body.classList.toggle('dark-mode');
// const isDarkModeEnabled = body.classList.contains('dark-mode');
// localStorage.setItem('dark-mode',isDarkModeEnabled ? 'enabled' : 'disabled');
// });
/* just for git */
