// Generate page
width = window.innerWidth - 260;
height = window.innerHeight - 260;
featuredContent = `
					<div id="featuredContent">
            <div id="featuredImage"></div>
            <p id="infoTitle">'HE'S WEIRD'<br>WHO IS HE?</p>
          </div>
`;
sideArticleColumn1 = `
				<div id="sideArticleColumn1">
  				<div class="sideArticle" id="leaders">
    				<p class="title">`+buildContent("STUDENT LEADERS: THE LOW DOWN", "link")+`</p>
  				</div>
          <div class="sideArticle" id="maths">
    				<p class="title">`+buildContent("FROM THE HEAD OF MATHEMATICS", "link")+`</p>
  				</div>
          <div class="sideArticle" id="blendedLearning">
    				<p class="title">`+buildContent("THE FUTURE OF LEARNING", "link")+`</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">`+buildContent("VALUES EDUCATION", "link")+`</p>
  				</div>
				</div>	
`;
sideArticleColumn2 = `
				<div id="sideArticleColumn2">
  				<div class="sideArticle" id="geale">
            `+buildContent("MS. GEALE", "play")+`
  				</div>
          <div class="sideArticle" id="ussr-anthem-open">
    				`+buildContent("SPORT", "play")+`
  				</div>
          <div class="sideArticle" id="woolley">
    				`+buildContent("OLIVER WOOLLEY", "play")+`
  				</div>
          <div class="sideArticle" id="rick-roll-open">
    				`+buildContent("THAT TEACHER", "play")+`
  				</div>
				</div>	
`;
if (width < 700) {
  buildPhoneUI();
} else if (width < 1000) {
  buildTabletUI();
} else {
  buildDesktopUI();
}
function buildPhoneUI() {
  $("#content").html(featuredContent);
  $("#featuredContent").css("width", (width - 50) + "px");
  $("#demo").css("width", (width - 50) + "px");
}
function buildTabletUI() {
  $("#content").html("<th>" + featuredContent + "</th><th id='infoColumn1'>" + sideArticleColumn1 + "</th>");
  $("#featuredContent").css("width", (width - 330) + "px");
  $("#demo").css("width", (width - 330) + "px");
}
function buildDesktopUI() {
  $("#content").html("<th>" + featuredContent + "</th><th id='infoColumn1'>" + sideArticleColumn1 + "</th><th id='infoColumn2'>" + sideArticleColumn2 + "</th>");
  $("#featuredContent").css("width", (width - 600) + "px");
  $("#demo").css("width", (width - 600) + "px");
}

function buildContent(title, icon) {
	if (title.length > 23) {
		centered = "textVerticallyCentered3Lines";
	} else if (title.length > 11) {
  	centered = "textVerticallyCentered2Lines";
  } else {
  	centered = "textVerticallyCentered";
  }
	
	if (icon == "play") { iconDisplayed = "fa fa-play-circle"; } else { iconDisplayed = "fa fa-external-link-square"; }
	content = `<table>
              <tr>
               	<th>
                 	<button class="`+icon+`Button">
            				<i class="`+iconDisplayed+`"></i>
                  </button>
                </th>
                <th>
                	<div class="`+centered+`">
                  	<p class="contentTitle">`+title+`</p>
                  </div>
                </th>
              </tr>
            </table>`;
	return content;
}	
// Content display
const rickRollModal = $("#rick-roll-modal");
const ussrAnthemModal = $("#ussr-anthem-modal");
const leadersModal = $("#leaders-modal");
const mathsModal = $("#maths-modal");

const rrClose = $("#rick-roll-close");
const uaClose = $("#ussr-anthem-close");
const slClose = $("#leaders-close");
const mhClose = $("#maths-close");

const rrOpen = $("#rick-roll-open");
const uaOpen = $("#ussr-anthem-open");
const slOpen = $("#leaders-open");
const mhOpen = $("#maths-open");

const videos = $("video");
if (window.innerWidth < window.innerHeight) {
  videos.css("width", (window.innerWidth - 200) + "px");
} else {
  videos.css("height", (window.innerHeight - 200) + "px");
}
function show(id) {
  if (id == "rick-roll") {
    rickRollModal.addClass("show");
  } else {
    ussrAnthemModal.addClass("show");
  }
}

// Open button register
$(rrOpen).on("click", function() { show("rr") });
$(uaOpen).on("click", function() { show("ua") });
$(slOpen).on("click", function() { show("sl") });
$(mhOpen).on("click", function() { show("mh") });

// Close button register
$(rrClose).on("click", function() { close("rr") });
$(uaClose).on("click", function() { close("ua") });
$(slClose).on("click", function() { close("sl") });
$(mhClose).on("click", function() { close("mh") });

function close(id) {
	if (id == "rr") {
    rickRollModal.removeClass("show");
    rickRollModal.addClass("hide");
  } else if (id == "mh") {
  	mathsModal.removeClass("show");
	mathsModal.addClass("hide");
  } else if (id == "sl") {
  	leadersModal.removeClass("show");
	leadersModal.addClass("hide");
  } else {
    ussrAnthemModal.removeClass("show");
    ussrAnthemModal.addClass("hide");
  }
  
  videos.trigger('pause');
   setTimeout(function() {
     	if (id == "rr") {
      		rickRollModal.removeClass("hide")
  	} else if (id == "mh") {
		mathsModal.removeClass("hide")
	} else if (id == "sl") {
		leadersModal.removeClass("hide")
	} else {
      		ussrAnthemModal.removeClass("hide")
  	}
    }, 700);
  
}
