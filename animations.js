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
    $(".whatever").css("width", (window.innerWidth - 200)+"px")
    currentSection = "#information";
    $("#startPage").hide(); 
    openNav(); 
}

function startPageUp() {
    $(".whatever").css("width", (window.innerWidth - 200)+"px")
    $("#startPage").addClass("comeUpFromMiddle");
    currentSection = "#information";
    window.setTimeout(function(){ openNav() }, 2000);
  }

function openNav() { $("#nav").addClass("comeOut") }
