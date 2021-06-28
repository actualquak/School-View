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
  				<div class="sideArticle" id="geale" onclick="play('geale')">
            `+buildVideo("MS. GEALE")+`
  				</div>
          <div class="sideArticle" id="sport" onclick="play('sport')">
    				`+buildVideo("SPORT")+`
  				</div>
          <div class="sideArticle" id="woolley" onclick="play('woolley')">
    				`+buildVideo("OLIVER WOOLLEY")+`
  				</div>
          <div class="sideArticle" id="mrHarrison" onclick="play('mrHarrison')">
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

function play(id) {
	$('#'+id).toggleClass('videoExpand');
}	
