function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

startPage = getUrlParam("startPage");
startPageElement = `<div id="alignStart"><div id="verticalAlign"><h1>Explore New Town High</h1><div id="padding"><button id="startButton" onclick="startPageUp();">Start Exploring</button></div> </div></div>`;

if (startPage != 0) {
    var targetElement = document.getElementById("startPage"); 
    targetElement.innerHTML = startPageElement;
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
