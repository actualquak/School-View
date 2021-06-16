base = `{
    "default": {
    	"hotSpotDebug" : true,
        "firstScene": "DownCenNE",
        "sceneFadeDuration": 1000,
	"autoLoad" : true
    },

    "scenes": {
        "DownCenNE": {},
        "DownFoyer" : {},
		"DownNE" : {},
		"DownNW" : {},
		"DownQuadCen" : {},
		"DownQuadNE" : {},
		"DownQuadNW" : {},
		"DownQuadSE" :  {},
		"DownQuadSW" : {}
    }
}`;
json = JSON.parse(base);
console.log(base);

DownCenNE = $.ajax({
  dataType: "json",
  url: "https://actualquak.github.io/School-View/json/Down-CenNE.json",
  success: function(data) {json.scenes.DownCenNE = data; pannellum.viewer('panorama', json); console.log(link);},
});