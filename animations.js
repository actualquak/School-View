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

if (startPage == 0) { 
    currentSection = "#information";
    $("#startPage").hide(); 
    openNav(); 
    initiatePages()
}

function startPageUp() {
    $("#startPage").addClass("comeUpFromMiddle");
    currentSection = "#information";
    window.setTimeout(function(){ openNav("#main") }, 2000);
    initiatePages();
  }

function openNav(element) {
  $("#mySidenav").css("width", "250px");
  $(element).css("marginLeft", "250px");
}

function initiatePages() {
    width = (window.innerWidth - 310) / 3;
    $(".featuredDevs").css("width", width + "px");
}    
