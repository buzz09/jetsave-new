var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

// Family Routes Call from Views/itineary/family

router.get("/family/Captivating-Egypt-Family", (req, res) => {
    res.render("itineary/family/Captivating-Egypt-Family"); 
}
);

router.get("/family/Classic-Golden-Triangle", (req, res) => {
    res.render("itineary/family/Classic-Golden-Triangle"); 
}
);

router.get("/family/Fascinating-Florida-Family", (req, res) => {
    res.render("itineary/family/Fascinating-Florida-Family"); 
}
);

router.get("/family/Itineraries-Astounding-Dubai-Honeymoon-Package", (req, res) => {
    res.render("itineary/family/Itineraries-Astounding-Dubai-Honeymoon-Package"); 
}
);

router.get("/family/Itineraries-Exotic-Singapore-Package-with-Sentosa-Island", (req, res) => {
    res.render("itineary/family/Itineraries-Exotic-Singapore-Package-with-Sentosa-Island"); 
}
);

router.get("/family/Itineraries-London-Switzerland-and-Paris", (req, res) => {
    res.render("itineary/family/Itineraries-London-Switzerland-and-Paris"); 
}
);

router.get("/family/Itineraries-Princely-Rajasthan", (req, res) => {
    res.render("itineary/family/Itineraries-Princely-Rajasthan"); 
}
);

router.get("/family/Itineraries-South-India-Journey", (req, res) => {
    res.render("itineary/family/Itineraries-South-India-Journey"); 
}
);

router.get("/family/Scintillating-Northern-Lights-Experience", (req, res) => {
    res.render("itineary/family/Scintillating-Northern-Lights-Experience"); 
}
);

router.get("/family/United-Kingdom-and-Scotland", (req, res) => {
    res.render("itineary/family/United-Kingdom-and-Scotland"); 
}
);

module.exports = router;
