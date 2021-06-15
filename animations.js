function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

startPage = getUrlParam("startPage", 1);
startPageElement = `<div id="alignStart"><div id="verticalAlign"><h1>Explore New Town High</h1><div id="padding"><button id="startButton" onclick="startPageUp();">Start Exploring</button></div> </div></div>`;

if (startPage != 0) { $("#startPage").addClass("instantComeUp"); }   

function startPageUp() {
    $("#startPage").addClass("startPageComeUp");
  }
