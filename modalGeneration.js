// Map data
var lowerX = [70, 85, 85, 91.8, 91.65, 91.65];
var lowerY = [35, 30, 50, 28.7, 21.76, 12.50];

var upperX = [83, 76, 83, 77.9, 91.8, 81.6, 91.8, 91.8, 91.8];
var upperY = [52.5, 29, 66, 23.4, 57, 56.8, 23.4, 12.6, 66.1];

var lowerSpots = ["Down-QuadCen", "Down-QuadSE", "Down-QuadNE", "Down-CenE", "Down-NW", "Mid-NW"];
var upperSpots = ["SciLab", "Up-Classroom", "CPULab", "Up-NCenE", "Up-SE", "Up-SCen", "Up-SE", "Stalin"];

var lowerSc = 3;
var upperSc = 0;

var h;
var w;

var level = "lower";

// Article data
articleTitles = ["STUDENT LEADERS", "MR PRATAP"];
articleBody = ["Student leaders have an incredibly important role to play in school.", "Mr. Pratap is legendary"];

// Function returns modal adaptive to parameters
function modal(id, filler) {	
  return `<div id="`+id+`-modal" class="modal">
    <div class="modal-container">
      <div class="modal-inner">`+filler+`<button id="`+id+`-close" class="modal-close" type="button">&#10799;</button></div>
    </div>
  </div>`;
}

// Function returns video modal adaptive to parameters
function videoModal(id) {
  return modal(id, `<video id="`+id+`" controls>
    <source src="https://static-content-hosting-de818.firebaseapp.com/School-View/`+id+`.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="extraVideoContent"><p>Extra video content goes here. To change the styles of this, find .extraVideoContent in the css file. For its position, add parameters like "top: 50px". This will push the div down from the top by 50px. The rest of the parameters are self-explanetory: width, height, background-color. Have fun!</p></div>`);
}

// Function returns article modal adaptive to parameters
function articleModal(id) {
  idList = ["leaders", "maths"];
  idIndex = idList.indexOf(id);
  return modal(id, `<div class="article"><h1 class="title">`+articleTitles[idIndex]+`</h1><p>`+articleBody[idIndex]+`</p></div>`);
} 

// Add modals into html so that they can be called
$("#information").append(videoModal("rick-roll")+videoModal("ussr-anthem")+articleModal("leaders")+articleModal("maths"));

$("#panoramaPage").append(modal("map", `
  <h1 class="title">School Map</h1>
  <div id="map-image-div"></div>
  <table>
    <tr>
      <th>
        <button onclick=" changeLevels('lower'); " class="levels"><p>Lower Level</p></button>
        <button onclick=" changeLevels('upper'); "class="levels"><p>Upper Level</p></button>
      </th>
    </tr>
  </table>
`));

setCircles(); 
setCircles();
setCircles();
if (level == "lower") { select(lowerSc) }
else { select(upperSc) }

function setCircles() {
  if (window.innerWidth < window.innerHeight) {
    h = (window.innerHeight - 300)
    w = h * ($(".map-image").width() / $(".map-image").height())
  } else {
    w = (window.innerWidth - 520)
    h = w * ($(".map-image").height() / $(".map-image").width())
  }

  var lowerCl = [];
  var upperCl = [];

  for (var i = 0; i < lowerX.length; i++) {
    lowerCl.push(c(i, "lower"));
  }

  for (var i = 0; i < upperX.length; i++) {
    upperCl.push(c(i, "upper"));
  }

  if (level == "lower") {
    cl = lowerCl
  } else {
    cl = upperCl
  }

  $("#map-image-div").html(`
	<img class="map-image" src="https://actualquak.github.io/School-View/` + level + `-level.jpg" height="` + h + `" width="` + w + `" >
	<svg height="` + h + `" width="` + w + `">
  	` + cl + `
  	Sorry, your browser does not support inline SVG.  
	</svg> 
	`);
}

function c(i, fLevel) {
  if (fLevel == "lower") {
    x = lowerX[i];
    y = lowerY[i];
  } else {
    x = upperX[i];
    y = upperY[i];``
  }

  return '<circle class="circle' + i + fLevel + '" onclick="select(' + i + ')" cx="' + (x / 100) * w + '" cy="' + (y / 100) * h + '" r="4" fill="grey" stroke-width="2"/>';
}

function select(i) {
  if (level == "lower") {
    lowerSc = i;
    xLength = lowerX.length
  } else {
    upperSc = i;
    xLength = upperX.length
  }

  loadPanorama(i);

  for (var j = 0; j < xLength; j++) {
    $("circle.circle" + j + level).css("fill", "grey")
    $("circle.circle" + j + level).css("stroke", "transparent")
    $("circle.circle" + j + level).css("r", "4")
  }

  $("circle.circle" + i + level).css("fill", "red")
  $("circle.circle" + i + level).css("r", "5")
  $("circle.circle" + i + level).css("stroke", "black")
}

function loadPanorama(i) {
  if (level == "lower") {
    panorama.loadScene(lowerSpots[i]);
  } else {
    panorama.loadScene(upperSpots[i]);
  }
}

function changeLevels(fLevel) {
	level = fLevel; 
  setCircles(); 
  if (level == "lower") { select(lowerSc) }
  else { select(upperSc) }
}

$("#map-modal-open").on("click", function() { show("map") });
$("#map-close").on("click", function() { close("map") });

function show(id) {
  currentModal = id;
  $("#"+id+"-modal").addClass("show");
}

// Close modal
function close(id) {
  currentModal = null;
	
  $("#"+id+"-modal").removeClass("show");
  $("#"+id+"-modal").addClass("hide");
  
  $("video").trigger('pause');
 
  setTimeout(function() {
    $("#"+id+"-modal").removeClass("hide")
  }, 700);
}

// Rebuild screen on window resize
$(window).resize(function() {
  setCircles();
  if (level == "lower") { select(lowerSc) }
  else { select(upperSc) }
});
