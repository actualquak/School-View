base = `{   
    "default": {
    	"hotSpotDebug" : true,
        "firstScene": "room1",
        "sceneFadeDuration": 1000,
	"autoLoad" : true
    },

    "scenes": {
        "Down-CenNE": {},
        "Down-Foyer" : {},
		"Down-NE" : {},
		"Down-NW" : {},
		"Down-QuadCen" : {},
		"Down-QuadNE" : {},
		"Down-QuadNW" : {},
		"Down-QuadSE" :  {},
		"Down-QuadSW" : {}
    }
}`;
json = JSON.parse(base);
DownCenNE = $.getJSON("https://actualquak.github.io/School-View/json/Down-CenNE.json", function(data) {
	json.scenes.DownCenNE = data
	}
);