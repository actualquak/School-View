function changeSection(to) {
  // working out positions
  if (currentSection == "#information") { currentPosition = 0; }
  else if (currentSection == "#panorama") { currentPosition = 1; }
  else { currentPosition = 2; }
  
  if (to == "#information") { newPosition = 0; }
  else if (to == "#panorama") { newPosition = 1; }
  else { newPosition = 2; }
  
  // moving sections around
  if (currentSection != to ) { // Don't move section if already selected
    if (currentPosition < newPosition) { 
      // Removing current section from view
      removeAllClasses()
      $(currentSection).addClass("comeUpFromMiddle");
      // Moving new section into view
      removeAllClasses()
      $(to).addClass("comeUpFromBottom");
    } else {
      // Removing current section from view
      removeAllClasses()
      $(currentSection).addClass("goDownFromMiddle");
      // Moving new section into view
      removeAllClasses()
      $(to).addClass("goDownFromTop");
    }  
    currentSection = to;
  }
}

function removeAllClasses() {
  
}
