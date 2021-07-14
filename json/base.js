json = {};

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
panorama = pannellum.viewer("panorama", {
  "default": {
    "hotSpotDebug": true,
    "firstScene": "DownCenNE",
    "sceneFadeDuration": 1000,
    "autoLoad": true
  },
  "scenes": {
    "DownCenNE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-CenNE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownNE",
          "sceneId": "DownNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownSE",
          "sceneId": "DownSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -20.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadNE",
          "sceneId": "DownQuadNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownFoyer": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-Foyer.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "Airport",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownNE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-NE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownCenNE",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidNE",
          "sceneId": "MidNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownNW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-NW.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidNW",
          "sceneId": "MidNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadNW",
          "sceneId": "DownQuadNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownQuadCen": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-QuadCen.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadNE",
          "sceneId": "DownQuadNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadSE",
          "sceneId": "DownQuadSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -20.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadSW",
          "sceneId": "DownQuadSW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -30.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadNW",
          "sceneId": "DownQuadNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownQuadNE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-QuadNE.jpg",
      "hotSpots": [
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownCenNE",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -20.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadCen",
          "sceneId": "DownQuadCen",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownQuadNW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-QuadNW.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadCen",
          "sceneId": "DownQuadCen",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownNW",
          "sceneId": "DownNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownQuadSE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-QuadSE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadCen",
          "sceneId": "DownQuadCen",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownSE",
          "sceneId": "DownSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownQuadSW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-SW.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "Airport",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownSE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-SE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownCenNE",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidSE",
          "sceneId": "MidSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -20.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownQuadSE",
          "sceneId": "DownQuadSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "DownSW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Down-SW.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "Airport",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "MidNE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Mid-NE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownNE",
          "sceneId": "DownNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNE",
          "sceneId": "UpNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "MidNW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Mid-NW.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNW",
          "sceneId": "UpNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownNW",
          "sceneId": "DownNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "MidSE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Mid-SE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "DownSE",
          "sceneId": "DownSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpSE",
          "sceneId": "UpSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "MidSW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Mid-SW.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "Airport",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpClassroom": {},
    "UpFoyer": {},
    "UpNCenE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Mid-SW.jpg",
      "hotSpots": [
        {
          "pitch": -2.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "Airport",
          "sceneId": "DownCenNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpNCenW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Up-NCenW.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNCenE",
          "sceneId": "UpNCenE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNW",
          "sceneId": "UpNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpNE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Up-NE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidNE",
          "sceneId": "MidNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpSE",
          "sceneId": "UpSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -20.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNCenE",
          "sceneId": "UpNCenE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpNW": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Up-NW.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNCenW",
          "sceneId": "UpNCenW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidNW",
          "sceneId": "MidNW",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpSCen": {},
    "UpSE": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://actualquak.github.io/School-View/images/Up-SE.jpg",
      "hotSpots": [
        {
          "pitch": -0.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "MidSE",
          "sceneId": "MidSE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        },
        {
          "pitch": -10.1,
          "yaw": 132.9,
          "type": "scene",
          "text": "UpNE",
          "sceneId": "UpNE",
          "targetPitch": "same",
          "targetYaw": "same",
          "targetHfov": "same"
        }
      ]
    },
    "UpSW": {},
    "Debug": {},
    "Stalin": {
      "hfov": 110,
      "pitch": 0,
      "yaw": 0,
      "type": "equirectangular",
      "panorama": "https://cdn.images.express.co.uk/img/dynamic/141/590x/secondary/Stalin-521148.jpg"
    }
  }
}
)
