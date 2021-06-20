function changeSection(element) {
  oldPos = getElementPosition(currentSection);
  newPos = getElementPosition(element);
  
  console.log(oldPos);
  console.log(newPos);
}

function getElementPosition(element) {
  if (element == "#information") { pos = 0 }
  else if (element == "#panoramaPage") { pos = 1 }
  else { pos = 2 }
  return pos;
}  
