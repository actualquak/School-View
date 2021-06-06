informationDisplay = getUrlParam("information", 1);
informationElement = document.getElementById("information");

if (informationDisplay == 0) {
  informationElement.innerHTML = 'this is an article';
} else if (informationDisplay == 1) {
  informationElement.innerHTML = 'this is a video';
} else if (informationDisplay == 2) {
  informationElement.innerHTML = 'this is another article';
} else if (informationDisplay == 3) {
  informationElement.innerHTML = 'this is an interview';
} else if (informationDisplay == 4) {
  informationElement.innerHTML = 'yet another article';
} else if (informationDisplay == 5) {
  informationElement.innerHTML = 'this is the communist anthem';
} else if (informationDisplay == 6) {
  informationElement.innerHTML = 'you just got rick-rolled';
} else {
  informationElement.innerHTML = 'this the library of information';
}
