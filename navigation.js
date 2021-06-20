function switchSections(to) {
  if (to == "#information") {
    move("#information", "down", "top");
    if (currentSection == "#about") {
      move("#about", "down", "middle");
      move("#panoramaPage", "down", "middle");
    } else {
      move("#panoramaPage", "down", "middle");
    }  
  } else if (to == "#panoramaPage") {
    $("#panoramaPage").show();
    if (currentSection == "#about") {
      move("#panoramaPage", "down", "top");
      move("#about", "down", "middle");
    } else {
      move("#panoramaPage", "up", "bottom");
      move("#information", "up", "middle");
    }  
  } else {
    move("#about", "up", "bottom");
    if (currentSection == "#information") {
      $("#panoramaPage").hide();
      move("#information", "up", "middle");
    } else {
      move("#panoramaPage", "up", "middle");
    }  
  }  
}  

function move(element, direction, from) {
  removeAllClasses(element);
  if (direction == "up") {
    if (from == "middle") { $(element).addClass("comeUpFromMiddle"); } 
    else { $(element).addClass("comeUpFromBottom"); }
  } else {
    if (from == "middle") { $(element).addClass("goDownFromMiddle"); } 
    else { $(element).addClass("goDownFromTop"); }
  }  
}  

function removeAllClasses(element) {
  $(element).removeClass("comeUpFromMiddle");
  $(element).removeClass("comeUpFromBottom");
  $(element).removeClass("goDownFromTop");
  $(element).removeClass("goDownFromMiddle");
}
