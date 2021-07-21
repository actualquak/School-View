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

function currentLevel(id) {
 $("#map-image-div").html('<img src="'+id+'-level.jpg">');
}

$("#panoramaPage").append(modal("map", `
  <h1 class="title">School Map</h1>
  <div id="map-image-div"><img class="map-image" src="lower-level.jpg"></div>
  <table>
    <tr>
      <th>
        <button onclick=" currentLevel('lower'); " class="levels"><p>Lower Level</p></button>
        <button onclick=" currentLevel('upper'); "class="levels"><p>Upper Level</p></button>
      </th>
    </tr>
  </table>
`));

resizeMap();

function resizeMap() {
  if (window.innerWidth < window.innerHeight) {
    $(".mapImage").css("width", (window.innerWidth - 200) + "px");
  } else {
    $(".mapImage").css("height", (window.innerHeight - 200) + "px");
  }
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
  resizeMap();
});
