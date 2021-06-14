function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

startPage = getUrlParam("startPage");
console.log(startPage);
instantComeUp = "instantComeUp";
console.log(instantComeUp);

if (startPage == 0) {
    console.log(startPage);
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

  function informationComesUp() {
    var targetElement = document.getElementById("information");
    targetElement.className = "comeUp";
  }

  function informationGoesDown() {
    var targetElement = document.getElementById("information");
    targetElement.className = "goDown";
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
