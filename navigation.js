function changeSection(to) {
  // working out positions
  if (currentSection == "#information") { currentPosition = 0; }
  else if (currentSection == "#panorama") { currentPosition = 1; }
  else { currentPosition = 2; }
  
  if (to == "#information") { newPosition = 0; }
  else if (to == "#panorama") { newPosition = 1; }
  else { newPosition = 2; }
  
  layering(to);
  
  // moving sections around
  if (currentSection != to ) { // Don't move section if already selected
    if (currentPosition < newPosition) { 
      // Removing current section from view
      removeAllClasses(currentSection)
      $(currentSection).addClass("comeUpFromMiddle");
      // Moving new section into view
      removeAllClasses(to)
      $(to).addClass("comeUpFromBottom");
    } else {
      // Removing current section from view
      removeAllClasses(currentSection)
      $(currentSection).addClass("goDownFromMiddle");
      // Moving new section into view
      removeAllClasses(to)
      $(to).addClass("goDownFromTop");
    }  
    currentSection = to;
  }
}

function removeAllClasses(element) {
  $(element).removeClass("comeUpFromMiddle");
  $(element).removeClass("comeUpFromBottom");
  $(element).removeClass("goDownFromTop");
  $(element).removeClass("goDownFromMiddle");
}

function layering(newSection) {
  if (newSection == "#panorama" && currentSection == "#information") { otherSection = "#about" } 
  else if (newSection == "#panorama" && currentSection == "#about") { otherSection = "#information" }
  else { otherSection = "#panorama" }
  
  $(newSection).show();
  $(otherSection).hide();
}
