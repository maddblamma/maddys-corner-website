// Placeholder file for main JavaScript
function playAudio(url) {
  new Audio(url).play();
}

init();

//placeholder so it doesn't complain that init doesn't exist
function init() {
  //console.log("running!");
}

// sidebar collapse button, pardon the terrible code
document.getElementById('sidebar-button').addEventListener('click', function() {
  let sideBar = document.getElementById('leftside');
  sideBar.classList.toggle('collapse');
  let sidebarTexts = sideBar.getElementsByClassName('sidebar-text');
  for (let i = 0; i < sidebarTexts.length; i++) {
    sidebarTexts[i].classList.toggle('collapse');
  }

  // change the funny appearance of le button
  let button = document.getElementById('sidebar-button');
  if (sideBar.classList.contains('collapse')) {
    button.textContent = '>'; // text when sidebar is collapsed
  } else {
    button.textContent = '<'; // text when sidebar is expanded, so, not collapsed
  }
});