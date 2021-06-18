function togglePannellum() {
  if (informationDisplay == true) { 
    $("#information").addClass("comeUp");
    window.setTimeout(function(){ $("#information").removeClass("comeUp"); }, 2000);
    informationDisplay = false; 
    width = window.innerWidth - 250; 
    $("#panorama").css("width", width+"px");
  } else { 
    $("#information").addClass("goDown"); 
    window.setTimeout(function(){ $("#information").removeClass("comeUp"); }, 2000);
    informationDisplay = true; 
  } 
}


