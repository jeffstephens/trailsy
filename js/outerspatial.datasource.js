/*
 * Outerspatial data source
 *
 * Implements methods so Trailsy frontend can use the Outerspatial API as its
 * backend
 */

// get the trailData from the API

var Outerspatial = function() {

};

Outerspatial.prototype = new DataSource();

function fetchTraildata(callback) {
	console.log("fetchTraildata");
	var callData = {
		type: "GET",
		path: "/trails.json"
	};
	makeAPICall(callData, function(response) {
		populateTrailData(response);
		if (typeof callback == "function") {
			callback();
		}
	});
}
