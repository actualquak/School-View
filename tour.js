$.ajax({
	url: 'https://actualquak.github.io/json/base.json',
	success: function (jsonData) {
		data = jsonData;
	}
});

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
json = JSON.parse(data);
json.default.firstScene = getUrlParam("room", "room1");
console.log(json.default.firstScene);

startPage = getUrlParam("startPage", 1);
