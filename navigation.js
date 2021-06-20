function changeSection(element) {
  oldPos = getElementPosition(currentSection);
  newPos = getElementPosition(element);
  
  if (oldPos < newPos) {
    $(currentSection).addClass("comeUpFromMiddle")
    $(element).addClass("comeUpFromBottom")
  } else {
    $(currentSection).addClass("goDownFromMiddle")
    $(element).addClass("goDownFromTop")
  }  
}

function getElementPosition(element) {
  if (element == "#information") { pos = 0 }
  else if (element == "#panoramaPage") { pos = 1 }
  else { pos = 2 }
  return pos;
}  
