function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

  if (startPage == 0) {
      console.log("startPage = 0");
      var targetElement = document.getElementById("startPage");
    targetElement.className = "instantComeUp";
  }

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

