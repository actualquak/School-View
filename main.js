function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }
  
  startDown();

  if (startPage = 0) {
      noStartPage();
  }
  
  function startDown() {
    var targetElement = document.getElementById("information");
    targetElement.className = "startDown";
  }
  
  function informationComesUp() {
    var targetElement = document.getElementById("information");
    targetElement.className = "comeUp";
  }
  
  function informationGoesDown() {
    var targetElement = document.getElementById("information");
    targetElement.className = "goDown";
  }

function noStartPage() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }
