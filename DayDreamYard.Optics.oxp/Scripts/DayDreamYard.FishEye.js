"use strict";
this.name           = "DayDreamYard FishEye";
this.author         = "Day";
this.copyright      = "(C) 2015 David Pradier (Day)";
this.licence        = "CC-by-SA 4.0";
this.description    = "When activated, the angle of view becomes 120° wide.";
this.version        = "0.1";

// View direction has changed. We reset the fov.
this.viewDirectionChanged = function(viewString) {
//	player.commsMessage("viewDirectionChanged. Resetting fov to gameSettings value: " + oolite.gameSettings.fovValue, 6);
	player.ship.viewFov = oolite.gameSettings.fovValue.valueOf();
};

// Key "n". We set the fov.
this.activated = function() {
//	player.commsMessage("activated, current fov: " + player.ship.viewFov + " setting to 120°", 6);
	player.ship.viewFov = 120.0;
};

// Key "b". We reset the fov.
this.mode = function() {
//	player.commsMessage("mode, current fov: " + player.ship.viewFov + " setting to gameSettings value: " + oolite.gameSettings.fovValue, 6);
	player.ship.viewFov = oolite.gameSettings.fovValue.valueOf();
};