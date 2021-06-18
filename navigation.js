function togglePannellum() {
  if (informationDisplay == true) { 
    $("#information").removeClass("comeUp");
    $("#information").addClass("comeUp");
    informationDisplay = false; 
    width = window.innerWidth - 250; 
    $("#panorama").css("width", width+"px");
  } else { 
    $("#information").removeClass("goDown");
    $("#information").addClass("goDown"); 
    window.setTimeout(function(){  }, 2000);
    informationDisplay = true; 
  } 
}


