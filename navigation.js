function changeSection(to) {
  $(currentSection).removeClass("goDownFromTop");
  $(currentSection).addClass("comeUpFromMiddle");
  $(to).removeClass("goDownFromMiddle");
  $(to).addClass("comeUpFromBottom");
  currentSection = to;
}
