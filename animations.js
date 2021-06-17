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

if (startPage == 0) { $("#startPage").hide(); }

function startPageUp() {
    $("#startPage").addClass("startPageComeUp");
    openNav()
  }

function openNav() {
  $("#mySidenav").css("width", "250px");
  $("#main").css("marginLeft", "250px");
}

function closeNav() {
  $("#mySidenav").css("width", "0px");
  $("#main").css("marginLeft", "0px");
}
