articleTitles = ["STUDENT LEADERS", "MR PRATAP"];
		articleBody = ["Student leaders have an incredibly important role to play in school.", "Mr. Pratap is legendary"];
		
		// Build modals
function modal(id, filler) {
	$(id+"-modal").css("padding", "20px");
	
	return `<div id="`+id+`-modal" class="modal">
  <div class="modal-container">
    <div class="modal-inner">`+filler+`
      <button id="`+id+`-close" class="modal-close" type="button">&#10799;</button>
    </div>
  </div>
</div>`;
}

function videoModal(id) {
	return modal(id, `<video id="`+id+`" controls>
        <source src="https://static-content-hosting-de818.firebaseapp.com/School-View/`+id+`.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>`);
}
		
function articleModal(id) {
	idList = ["leaders", "maths"];
	idIndex = idList.indexOf(id);
	return modal(id, `<h1 class="title">`+articleTitles[idIndex]+`</h1><p>`+articleBody[idIndex]+`</p>`);
} 

$("#information").append(videoModal("rick-roll")+videoModal("ussr-anthem")+articleModal("leaders")+articleModal("maths"));
