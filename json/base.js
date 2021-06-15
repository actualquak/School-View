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
DownCenNE = $.getJSON("https://actualquak.github.io/School-View/json/Down-CenNE.json", function(data) {
	json.scenes.DownCenNE = data;
	}, async = false
);