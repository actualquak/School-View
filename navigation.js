function togglePannellum() {
  if (informationDisplay == true) { 
    $("#information").removeClass("goDownFromTop");
    $("#information").addClass("comeUpFromMiddle");
    $("#panorama").removeClass("goDownFromMiddle");
    $("#panorama").addClass("comeUpFromBottom");
    informationDisplay = false; 
    width = window.innerWidth - 250; 
    $("#panorama").css("width", width+"px");
  } else { 
    $("#information").removeClass("comeUpFromMiddle");
    $("#information").addClass("goDownFromTop"); 
    $("#panorama").removeClass("comeUpFromBottom");
    $("#panorama").addClass("goDownFromMiddle");
    informationDisplay = true; 
  } 
}


