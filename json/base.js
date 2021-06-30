json = {};
$.when(
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/base.json",
		success: function(data) {json = data;}
	})
).then(function() {
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
var viewer;
$.when(
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-CenNE.json",
		success: function(data) {json.scenes.DownCenNE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-Foyer.json",
		success: function(data) {json.scenes.DownFoyer = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-NE.json",
		success: function(data) {json.scenes.DownNE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-NW.json",
		success: function(data) {json.scenes.DownNW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-QuadCen.json",
		success: function(data) {json.scenes.DownQuadCen = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-QuadNE.json",
		success: function(data) {json.scenes.DownQuadNE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-QuadNW.json",
		success: function(data) {json.scenes.DownQuadNW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-QuadSE.json",
		success: function(data) {json.scenes.DownQuadSE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-QuadSW.json",
		success: function(data) {json.scenes.DownQuadSW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-SE.json",
		success: function(data) {json.scenes.DownSE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-SW.json",
		success: function(data) {json.scenes.DownSW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Mid-NE.json",
		success: function(data) {json.scenes.MidNE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Mid-NW.json",
		success: function(data) {json.scenes.MidNW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Mid-SE.json",
		success: function(data) {json.scenes.MidSE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Down-SW.json",
		success: function(data) {json.scenes.MidSW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-Classroom.json",
		success: function(data) {json.scenes.UpClassroom = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-Foyer.json",
		success: function(data) {json.scenes.UpFoyer = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-NCenE.json",
		success: function(data) {json.scenes.UpNCenE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-NCenW.json",
		success: function(data) {json.scenes.UpNCenW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-NE.json",
		success: function(data) {json.scenes.UpNE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-NW.json",
		success: function(data) {json.scenes.UpNW = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-SCen.json",
		success: function(data) {json.scenes.UpSCen = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-SE.json",
		success: function(data) {json.scenes.UpSE = data;}
	}),
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/Up-SW.json",
		success: function(data) {json.scenes.UpSW = data;}
	})
).then(function() {
	viewer = pannellum.viewer('panorama', json); 
	viewer.loadScene(getUrlParam("room", "DownCenNE"), 0, 0);
});});
