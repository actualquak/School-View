function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

var articleParagraphs, articleTitles, videoURLs;
articleParagraphs = [
    "The answer to that my friend is eshays. They are what makes school a true experience. Without eshays there would be less appointments made to the psychologist, more learning time die to less telling off time. Every aspect of school is interesting and unpredictable thanks to this group of people. The best thing is, they'll never go away. It's an intergenerational problem<br><br>I can use brs effectively, otherwise this text wouldn't be on a new line",
    "It's going to become co-educational soon. If you can afford it, you should send you boy to Hutchins. If they're a girl then you should send her to Collegiate. Girls do better when boys aren't in their class.<br><br>I can use brs effectively, otherwise this text wouldn't be on a new line",
    "<p> Yes. And we better see no bragging br tag!<br><br>I can use brs effectively, otherwise this text wouldn't be on a new line 😜",
  ];
articleTitles = [
    "What is the single biggest influencing group of people at New Town High School?",
    "What is a good reason not to send my child to New Town High School?",
    "Do I have to write an article?",
  ];
videoURLs = [
    "https://static-content-hosting-de818.firebaseapp.com/School-View/00087.MTS.mp4",
    "https://static-content-hosting-de818.firebaseapp.com/School-View/00088.MTS.mp4",
    "https://static-content-hosting-de818.firebaseapp.com/School-View/rick-roll.mp4",
    "https://static-content-hosting-de818.firebaseapp.com/School-View/ussr.mp4",
  ];

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
