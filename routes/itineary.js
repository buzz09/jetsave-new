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

// Honeymoon Routes Call from Views/itineary/honeymoon

router.get("/honeymoon/Idyllic-Honeymoon-Package-For-Maldives", (req, res) => {
    res.render("itineary/honeymoon/Idyllic-Honeymoon-Package-For-Maldives"); 
}
);

router.get("/honeymoon/Itineraries-Blissful-Seychelles-Honeymoon-Package", (req, res) => {
    res.render("itineary/honeymoon/Itineraries-Blissful-Seychelles-Honeymoon-Package"); 
}
);

router.get("/honeymoon/Itineraries-Exotic-And-Romantic-Andaman-Tour", (req, res) => {
    res.render("itineary/honeymoon/Itineraries-Exotic-And-Romantic-Andaman-Tour"); 
}
);

router.get("/honeymoon/Itineraries-Greece-Honeymoon-Packages", (req, res) => {
    res.render("itineary/honeymoon/Itineraries-Greece-Honeymoon-Packages"); 
}
);

router.get("/honeymoon/Itineraries-Jammu-and-Kashmir", (req, res) => {
    res.render("itineary/honeymoon/Itineraries-Jammu-and-Kashmir"); 
}
);

router.get("/honeymoon/Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia", (req, res) => {
    res.render("itineary/honeymoon/Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia"); 
}
);

router.get("/honeymoon/Krabi-Phuket-Honeymoon-Package", (req, res) => {
    res.render("itineary/honeymoon/Krabi-Phuket-Honeymoon-Package"); 
}
);

router.get("/honeymoon/Soothing-Munnar-and-Alleppey-Honeymoon", (req, res) => {
    res.render("itineary/honeymoon/Soothing-Munnar-and-Alleppey-Honeymoon"); 
}
);

router.get("/honeymoon/The-Most-Exquisite-Italy", (req, res) => {
    res.render("itineary/honeymoon/The-Most-Exquisite-Italy"); 
}
);

router.get("/honeymoon/Tropical-Honeymoon-in-Rio", (req, res) => {
    res.render("itineary/honeymoon/Tropical-Honeymoon-in-Rio"); 
}
);


// Friends Routes Call from Views/itineary/friends


router.get("/friends/A-Relaxed-Week-in-Goa", (req, res) => {
    res.render("itineary/friends/A-Relaxed-Week-in-Goa"); 
}
);


router.get("/friends/croatia", (req, res) => {
    res.render("itineary/friends/croatia"); 
}
);


router.get("/friends/Impeccable-Tour-of-Ladakh", (req, res) => {
    res.render("itineary/friends/Impeccable-Tour-of-Ladakh"); 
}
);


router.get("/friends/Tour-the-Epic-Land-of-Spain", (req, res) => {
    res.render("itineary/friends/Tour-the-Epic-Land-of-Spain"); 
}
);


router.get("/friends/Tour-the-Natural-Treasure-Indonasia", (req, res) => {
    res.render("itineary/friends/Tour-the-Natural-Treasure-Indonasia"); 
}
);

router.get("/friends/Tour-the-Splendid-Towns-of-Amsterdam", (req, res) => {
    res.render("itineary/friends/Tour-the-Splendid-Towns-of-Amsterdam"); 
}
);

router.get("/friends/Wonderful-West-Coast-Tour", (req, res) => {
    res.render("itineary/friends/Wonderful-West-Coast-Tour"); 
}
);

// Wildlife Routes Call from Views/itineary/wildlife

router.get("/wildlife/Ahmedabad-Gir-Package", (req, res) => {
    res.render("itineary/wildlife/Ahmedabad-Gir-Package"); 
}
);


router.get("/wildlife/Explore-the-Wilderness-in-Ranthambhore-National-Park", (req, res) => {
    res.render("itineary/wildlife/Explore-the-Wilderness-in-Ranthambhore-National-Park"); 
}
);


router.get("/wildlife/Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari", (req, res) => {
    res.render("itineary/wildlife/Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari"); 
}
);

router.get("/wildlife/Fascinating-Wildlife-Experience-of-Kerala", (req, res) => {
    res.render("itineary/wildlife/Fascinating-Wildlife-Experience-of-Kerala"); 
}
);

router.get("/wildlife/Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Park", (req, res) => {
    res.render("itineary/wildlife/Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Park"); 
}
);

// solo Routes Call from Views/itineary/solo

router.get("/solo/A-Memorable-Trip-to-Austria", (req, res) => {
    res.render("itineary/solo/A-Memorable-Trip-to-Austria"); 
}
);

router.get("/solo/Tour-the-Enchanting-Setting-of-Portuga", (req, res) => {
    res.render("itineary/solo/Tour-the-Enchanting-Setting-of-Portuga"); 
}
);

router.get("/solo/A-One-Week-Scandinavian", (req, res) => {
    res.render("itineary/solo/A-One-Week-Scandinavian"); 
}
);

router.get("/solo/A-Trip-To-The-Wildlife-Hub-South-Africa", (req, res) => {
    res.render("itineary/solo/A-Trip-To-The-Wildlife-Hub-South-Africa"); 
}
);

router.get("/solo/Best-1-Week-Sri-Lanka-Itinerary", (req, res) => {
    res.render("itineary/solo/Best-1-Week-Sri-Lanka-Itinerary"); 
}
);

router.get("/solo/Tour-The-Splendorous-Turkey", (req, res) => {
    res.render("itineary/solo/Tour-The-Splendorous-Turkey"); 
}
);


// Fixed Departure Routes Call from Views/itineary/Fixed Departure

router.get("/fixed-departure/The-Stupendous-Eastern-Explorer-Tour-With-Orlando", (req, res) => {
    res.render("itineary/fixed-departure/The-Stupendous-Eastern-Explorer-Tour-With-Orlando"); 
}
);

router.get("/fixed-departure/The-Ultimate-Vietnam-Itinerary", (req, res) => {
    res.render("itineary/fixed-departure/The-Ultimate-Vietnam-Itinerary"); 
}
);

router.get("/fixed-departure/Tour-The-Amazing-America-East-to-West", (req, res) => {
    res.render("itineary/fixed-departure/Tour-The-Amazing-America-East-to-West"); 
}
);


router.get("/fixed-departure/Central-Highlight", (req, res) => {
    res.render("itineary/fixed-departure/Central-Highlight"); 
}
);

router.get("/fixed-departure/The-Breathtaking-Eastern-Explorer-Tour", (req, res) => {
    res.render("itineary/fixed-departure/The-Breathtaking-Eastern-Explorer-Tour"); 
}
);

router.get("/fixed-departure/The-Remarkable-Western-Wanderer-Tour", (req, res) => {
    res.render("itineary/fixed-departure/The-Remarkable-Western-Wanderer-Tour"); 
}
);

// spritual Routes Call from Views/itineary/spritual

router.get("/spritual/Itinerary-Buddhist-Circuit-2", (req, res) => {
    res.render("itineary/spritual/Itinerary-Buddhist-Circuit-2"); 
}
);

router.get("/spritual/The-Enlightening-Buddha-Circuit-Tour", (req, res) => {
    res.render("itineary/spritual/The-Enlightening-Buddha-Circuit-Tour"); 
}
);

module.exports = router;
