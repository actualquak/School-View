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
