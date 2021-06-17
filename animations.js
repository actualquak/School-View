var informationDisplay;

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

startPage = getUrlParam("startPage", 1);

if (startPage == 0) { $("#startPage").hide(); openNav(); informationDisplay = true; }

function startPageUp() {
    $("#startPage").addClass("startPageComeUp");
    window.setTimeout(function(){ openNav() }, 2000);
  }

function openNav() {
  $("#mySidenav").css("width", "250px");
  $("#main").css("marginLeft", "250px");
}

function closeNav() {
  $("#mySidenav").css("width", "0px");
  $("#main").css("marginLeft", "0px");
}
