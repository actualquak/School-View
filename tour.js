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

link = "https://www.youtube.com/watch?v=HIcSWuKMwOw";
json.default.firstScene = getUrlParam("room", "room1");
json.scenes.DownCenNE = Down-CenNEjson;
json.scenes.room2 = scene2json;
console.log(json.default.firstScene);

startPage = getUrlParam("startPage", 1);
