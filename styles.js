function startPageUp() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "startPageComeUp";
  }

  if (startPage == 0) {
      console.log("startPage = 0");
      noStartPage();
  }

function noStartPage() {
    var targetElement = document.getElementById("startPage");
    targetElement.className = "instantComeUp";
  }


