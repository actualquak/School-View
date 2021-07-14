// Width available for display
width = window.innerWidth - 260;

// HTML - the columns of content
featuredContent = `
	<div id="featuredContent"><div id="featuredImage"></div>
        	<p id="infoTitle">'HE'S WEIRD'<br>WHO IS HE?</p>
        </div>
`;
sideArticleColumn1 = `
	<div id="sideArticleColumn1">
		<div class="sideArticle" id="leaders-open"><p class="title">`+buildContent("STUDENT LEADERS: THE LOW DOWN", "link")+`</p></div>
		<div class="sideArticle" id="maths-open"><p class="title">`+buildContent("FROM THE HEAD OF MATHEMATICS", "link")+`</p></div>
		<div class="sideArticle" id="blendedLearning"><p class="title">`+buildContent("THE FUTURE OF LEARNING", "link")+`</p></div>
		<div class="sideArticle"><p class="title">`+buildContent("VALUES EDUCATION", "link")+`</p></div>
	</div>	
`;
sideArticleColumn2 = `
	<div id="sideArticleColumn2">
		<div class="sideArticle" id="geale">`+buildContent("MS. GEALE", "play")+`</div>
        	<div class="sideArticle" id="ussr-anthem-open">`+buildContent("SPORT", "play")+`</div>
        	<div class="sideArticle" id="woolley">`+buildContent("OLIVER WOOLLEY", "play")+`</div>
        	<div class="sideArticle" id="rick-roll-open">`+buildContent("THAT TEACHER", "play")+`</div>
	</div>	
`;

// Build UI depending on screen size
if (width < 700) {
  buildSmallUI();
} else if (width < 1000) {
  buildMediumUI();
} else {
  buildLargeUI();
}

// Different UI layouts
function buildSmallUI() {
  $("#content").html(featuredContent); // Display only the featured content - not enough room for anything else
  $("#featuredContent").css("width", (width - 50) + "px");
}

function buildMediumUI() {
  $("#content").html("<th>" + featuredContent + "</th><th id='infoColumn1'>" + sideArticleColumn1 + "</th>"); // Display only the featured content and first column - not enough room for anything else
  $("#featuredContent").css("width", (width - 330) + "px");
}

function buildLargeUI() {
  $("#content").html("<th>" + featuredContent + "</th><th id='infoColumn1'>" + sideArticleColumn1 + "</th><th id='infoColumn2'>" + sideArticleColumn2 + "</th>"); // Display everything
  $("#featuredContent").css("width", (width - 600) + "px");
}

// Function returns content adaptive to parameters 
function buildContent(title, icon) {
  // Text centering
  if (title.length > 23) { centered = "textVerticallyCentered3Lines"; } 
  else if (title.length > 11) { centered = "textVerticallyCentered2Lines"; } 
  else { centered = "textVerticallyCentered"; }

  // Set icon displayed
  if (icon == "play") { iconDisplayed = "fa fa-play-circle"; } else { iconDisplayed = "fa fa-external-link-square"; }
	
  return `<table><tr><th><button class="`+icon+`Button" aria-label="Open`+title+`"><i class="`+iconDisplayed+`"></i></button></th><th><div class="`+centered+`"><p class="contentTitle">`+title+`</p></div></th></tr></table>`;
}

// Show modal
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

// Open button register
$("#rick-roll-open").on("click", function() { show("rick-roll") });
$("#ussr-anthem-open").on("click", function() { show("ussr-anthem") });
$("#leaders-open").on("click", function() { show("leaders") });
$("#maths-open").on("click", function() { show("maths") });

// Close button register
$("#rick-roll-close").on("click", function() { close("rick-roll") });
$("#ussr-anthem-close").on("click", function() { close("ussr-anthem") });
$("#leaders-close").on("click", function() { close("leaders") });
$("#maths-close").on("click", function() { close("maths") });

// Detect key press
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) { // Esc key
        close(currentModal); // Close modal currently open
    } else if (evt.keyCode == 13) { // Enter key
    	startPageUp(); // Start page goes up
    }
};
