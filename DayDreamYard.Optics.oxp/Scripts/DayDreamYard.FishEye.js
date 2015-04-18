"use strict";
this.name           = "DayDreamYard FishEye";
this.author         = "Day";
this.copyright      = "(C) 2015 David Pradier (Day)";
this.licence        = "CC-by-SA 4.0";
this.description    = "When activated, the angle of view becomes 120° wide.";
this.version        = "3";

this._DayDreamYard_Optics_continuousFov = function(originalFov, requestedFov, currentFov, framesNb) {
	var requestedChange = requestedFov / originalFov;
	var rateOfChangePerFrame = Math.pow(requestedChange, 1 / framesNb);
	return currentFov * rateOfChangePerFrame;
};

this._DayDreamYard_Optics_convergeToFov = function(requestedFov, framesNb) {
	var originalFov = player.ship.viewFov.valueOf();
	var continuousFov = this._DayDreamYard_Optics_continuousFov;

	var trackingId = null;
	trackingId = addFrameCallback(function (delta)
	{
		var newFov = continuousFov(originalFov, requestedFov, player.ship.viewFov, framesNb);
		var attained = ((requestedFov > originalFov) && (newFov > requestedFov))
					|| ((requestedFov <= originalFov) && (newFov <= requestedFov));
		if (attained) {
			newFov = requestedFov;
			removeFrameCallback(trackingId);
		}
		player.ship.viewFov = newFov;
	});
};

// View direction has changed. We reset the fov.
this.viewDirectionChanged = function(viewString) {
	player.ship.viewFov = oolite.gameSettings.fovValue.valueOf();
};

// Key "n". We set the fov.
this.activated = function() {
	this._DayDreamYard_Optics_convergeToFov(120.0, 30);
};

// Key "b". We reset the fov.
this.mode = function() {
	this._DayDreamYard_Optics_convergeToFov(oolite.gameSettings.fovValue.valueOf(), 30);
};