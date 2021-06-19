function togglePannellum() {
  if (informationDisplay == true) { 
    $("#information").removeClass("goDownFromTop");
    $("#information").addClass("comeUpFromMiddle");
    $("#information").removeClass("goDownFromMiddle");
    $("#information").addClass("comeUpFromBottom");
    informationDisplay = false; 
    width = window.innerWidth - 250; 
    $("#panorama").css("width", width+"px");
  } else { 
    $("#information").removeClass("comeUpFromMiddle");
    $("#information").addClass("goDownFromTop"); 
    $("#information").removeClass("comeUpFromBottom");
    $("#information").addClass("goDownFromMiddle");
    informationDisplay = true; 
  } 
}


