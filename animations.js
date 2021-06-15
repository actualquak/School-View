function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

startPage = getUrlParam("startPage", 1);

if (startPage == 0) { 
    $("#startPage").addClass("instantComeUp"); 
} else {
    $("#startPage").removeClass("instantComeUp"); 
}

function startPageUp() {
    $("#startPage").addClass("startPageComeUp");
  }
