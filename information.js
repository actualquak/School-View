function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

var articleParagraphs, articleTitles, videoURLs;

$.getJSON("/School-View/json/information.json", function(data){
        articleParagraphs = data.articleParagraphs;
        articleTitles = data.articleTitles;
        videoURLs = data.videoURLs;
    }).fail(function(){
        console.log("JSON failed to load");
});

informationDisplay = getUrlParam("information");

function generateArticle(i) {
  heading = articleTitles[i];
  paragraphText = articleParagraphs[i];
  return "<h1>"+heading+"</h1><p>"+paragraphText;
}  

function createVideoElement(i) {
  url = videoURLs[i];
  if (window.innerHeight < window.innerWidth) {
    change = window.innerHeight;
    returnString = '<video height="'+change+'" controls> <source src="'+url+'" type="video/mp4"</source> Your browser cannot play this video</video>';
  } else {
    change = window.innerWidth;
    returnString = '<video width="'+change+'" controls> <source src="'+url+'" type="video/mp4"</source> Your browser cannot play this video</video>';
  }  
  return returnString;
}  

function generateVideo(i) {
  $("#information").html(createVideoElement(i));
  $("#information").css("background-color", "black");
}  
  
if (informationDisplay == 0) {
  $("#information").html(generateArticle(0));
} else if (informationDisplay == 1) {
  generateVideo(0);
} else if (informationDisplay == 2) {
  $("#information").html(generateArticle(1));
} else if (informationDisplay == 3) {
  generateVideo(1);
} else if (informationDisplay == 4) {
  $("#information").html(generateArticle(2));
} else if (informationDisplay == 5) {
  generateVideo(2);
} else if (informationDisplay == 6) {
  generateVideo(3);
}
