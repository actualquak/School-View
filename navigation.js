function togglePannellum() {
  if (informationDisplay == true) { 
    $("#information").removeClass("goDownFromTop");
    $("#information").addClass("comeUpFromMiddle");
    informationDisplay = false; 
    width = window.innerWidth - 250; 
    $("#panorama").css("width", width+"px");
  } else { 
    $("#information").removeClass("comeUpFromMiddle");
    $("#information").addClass("goDownFromTop"); 
    window.setTimeout(function(){  }, 2000);
    informationDisplay = true; 
  } 
}


