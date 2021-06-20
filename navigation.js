function changeSection(element) {
  oldPos = getElementPosition(currentSection);
  newPos = getElementPosition(element);

  if (oldPos < newPos) {
    removeAllClasses(currentSection)
    $(currentSection).addClass("comeUpFromMiddle")
    removeAllClasses(element)
    $(element).addClass("comeUpFromBottom")
  } else {
    removeAllClasses(currentSection)
    $(currentSection).addClass("goDownFromTop")
    removeAllClasses(element)
    $(element).addClass("goDownFromMiddle")
  }  
  
  currentSection = element
}

function getElementPosition(element) {
  if (element == "#information") { pos = 0 }
  else if (element == "#panoramaPage") { pos = 1 }
  else { pos = 2 }
  return pos;
}   

function removeAllClasses(element) {
  $(element).removeClass("comeUpFromMiddle");
  $(element).removeClass("comeUpFromBottom");
  $(element).removeClass("goDownFromTop");
  $(element).removeClass("goDownFromMiddle");
}
