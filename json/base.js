json = {};
$.when(
	$.ajax({
		dataType: "json",
		url: "https://actualquak.github.io/School-View/json/base.json",
		success: function(data) {json = data;}
	})
).then(function() {
console.log(json);
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
	})
).then(function() {
	pannellum.viewer('panorama', json); console.log(link);
});});