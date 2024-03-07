// Placeholder file for main JavaScript
function playAudio(url) {
  new Audio(url).play();
}

init();

//placeholder so it doesn't complain that init doesn't exist
function init() {
  //console.log("running!");
}

// waits for sidebar toggle to be clicked
document.querySelector('#sidebar-button').addEventListener('click', function() {
  // selects sidebar and toggles the 'collapse' class
  const sideBar = document.querySelector('#leftside');
  sideBar.classList.toggle('collapse');
  
  // does the same but with sidebar text
  const sidebarTexts = sideBar.querySelectorAll('.sidebar-text');
  sidebarTexts.forEach(text => text.classList.toggle('collapse'));

  // changes sidebar button based on it's state!
  // ? for collapse, : for expanded
  const button = document.querySelector('#sidebar-button');
  button.textContent = sideBar.classList.contains('collapse') ? '>' : '<';
  // you wiill probably want to use icons, but the brackets work for now :)
});