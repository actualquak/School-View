width = window.innerWidth;
height = window.innerHeight;

featuredContent = `
					<div id="featuredContent">
            <div id="demo"></div>
            <p class="title">FEATURED <br> CONTENT</p>
          </div>
`;

sideArticleColumn1 = `
				<div id="sideArticleColumn1">
  				<div class="sideArticle">
    				<p class="title">NTHS BE SUS MY GUY</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">NTHS BE SUS MY GUY</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">NTHS BE SUS MY GUY</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">NTHS BE SUS MY GUY</p>
  				</div>
				</div>	
`;

sideArticleColumn2 = `
				<div id="sideArticleColumn1">
  				<div class="sideArticle">
    				<p class="title">OGILVIE BE SUSUS AMOGUS MY GUY</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">OGILVIE BE SUSUS AMOGUS MY GUY</p>
  				</div>
          <div class="sideArticle">
    				<p class="title">OGILVIE BE SUSUS AMOGUS MY GUY</p>
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
  $("#featuredContent").css("width", (width-50)+"px");
  $("#demo").css("width", (width-50)+"px");
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
