function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

  if (startPage == 0) {
      console.log("startPage = 0");
      noStartPage();
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
    targetElement.className = "instantComeUp";
  }


