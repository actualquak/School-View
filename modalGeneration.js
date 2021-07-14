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
  </video>`);
}

// Function returns article modal adaptive to parameters
function articleModal(id) {
  idList = ["leaders", "maths"];
  idIndex = idList.indexOf(id);
  return modal(id, `<div class="article"><h1 class="title">`+articleTitles[idIndex]+`</h1><p>`+articleBody[idIndex]+`</p></div>`);
} 

// Add modals into html so that they can be called
$("#information").append(videoModal("rick-roll")+videoModal("ussr-anthem")+articleModal("leaders")+articleModal("maths"));
