// Generate page

width = window.innerWidth - 260;
height = window.innerHeight - 260;

featuredContent = `
					<div id="featuredContent">
            <div id="demo"></div>
            <p class="title">FEATURED <br> CONTENT</p>
          </div>
`;

sideArticleColumn1 = `
				<div id="sideArticleColumn1">
  				<div class="sideArticle" id="studentLeaders">
    				<p class="title">STUDENT LEADERS: THE LOW DOWN</p>
  				</div>
          <div class="sideArticle" id="mathematics">
    				<p class="title">FROM THE HEAD OF MATHEMATICS</p>
  				</div>
          <div class="sideArticle" id="blendedLearning">
    				<p class="title">THE FUTURE OF LEARNING</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">VALUES EDUCATION</p>
  				</div>
				</div>	
`;

sideArticleColumn2 = `
				<div id="sideArticleColumn1">
  				<div class="sideArticle" id="geale">
            `+buildVideo("MS. GEALE")+`
  				</div>
          <div class="sideArticle" id="ussr-anthem-open">
    				`+buildVideo("SPORT")+`
  				</div>
          <div class="sideArticle" id="woolley">
    				`+buildVideo("OLIVER WOOLLEY")+`
  				</div>
          <div class="sideArticle" id="rick-roll-open">
    				`+buildVideo("THAT TEACHER")+`
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
  $("#content").html("<th>" + featuredContent + "</th><th>" + sideArticleColumn1 + "</th>");
  $("#featuredContent").css("width", (width - 330) + "px");
  $("#demo").css("width", (width - 330) + "px");
}

function buildDesktopUI() {
  $("#content").html("<th>" + featuredContent + "</th><th>" + sideArticleColumn1 + "</th><th>" + sideArticleColumn2 + "</th>");
  $("#featuredContent").css("width", (width - 600) + "px");
  $("#demo").css("width", (width - 600) + "px");
}

function buildVideo(title) {
	if (title.length > 11) {
  	centered = "textVerticallyCentered2Lines";
  } else {
  	centered = "textVerticallyCentered";
  }

	videoElement = `<table>
              <tr>
               	<th>
                 	<button class="playButton">
            				<i class="fa fa-play-circle"></i>
                  </button>
                </th>
                <th>
                	<div class="`+centered+`">
                  	<p class="playTitle">`+title+`</p>
                  </div>
                </th>
              </tr>
            </table>`;

	return videoElement;
}	

// Content display

const rickRollModal = $("#rick-roll-modal");
const ussrAnthemModal = $("#ussr-anthem-modal");
const rrClose = $("#rick-roll-close");
const uaClose = $("#ussr-anthem-close");
const rrOpen = $("#rick-roll-open");
const uaOpen = $("#ussr-anthem-open");
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
$(rrOpen).on("click", function() { show("rick-roll") });
$(uaOpen).on("click", function() { show("ussr") });

// Close button register
$(rrClose).on("click", function() { close("rick-roll") });
$(uaClose).on("click", function() { close("ussr") });

function close(id) {
	if (id == "rick-roll") {
    rickRollModal.removeClass("show");
    rickRollModal.addClass("hide");
  } else {
    ussrAnthemModal.removeClass("show");
    ussrAnthemModal.addClass("hide");
  }
  
  videos.trigger('pause');

  if (id == "rick-roll") {
    setTimeout(function() {
      rickRollModal.removeClass("hide")
    }, 700);
  } else {
    setTimeout(function() {
      ussrAnthemModal.removeClass("hide")
    }, 700);
  }
}
