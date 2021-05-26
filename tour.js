data = `{   
    "default": {
        "firstScene": "room1",
        "sceneFadeDuration": 1000,
		"autoLoad" : true
    },

    "scenes": {
        "room1": {
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://actualquak.github.io/nths-server/room1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Airport",
                    "sceneId": "room2"
                }
            ]
        },

        "room2": {
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://actualquak.github.io/nths-server/360_1.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Room",
                    "sceneId": "room1",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
}`;
