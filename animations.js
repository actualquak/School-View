function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

startPage = getUrlParam("startPage");
console.log(startPage);

if (startPage == 0) {
    console.log(startPage);
    var targetElement = document.getElementById("startPage");
    console.log(targetElement);
    targetElement.className = "instantComeUp";
    console.log(targetElement.className);
  }

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function pannelumActivate() {
    var targetElement = document.getElementById("information");
    targetElement.className = "instantGoDown";
    closeNav();
}
