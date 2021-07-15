json = {};
function done() {
 	panorama = pannellum.viewer('panorama', json);
	panorama.loadScene(getUrlParam("room", "DownCenNE"), 0, 0);
}

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
var panorama = pannellum.viewer('panorama', 'https://actualquak.github.io/School-View/json/base.json')
