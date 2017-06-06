/*Google Maps | Development API Key: AIzaSyDnzQpNe1LnsQyYZSpvSunIgLQUagtHhdw */
    
function initMap() {

	/* Sets marker location */
	var location = new google.maps.LatLng( -23.607576, -46.744729 );

	/* Sets map config */
	var mapSConfig = {
		center:location,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		draggable:false,
		scrollwheel:false
	};

	/* Create map based on config and insert content in the DOM using the element's ID */
	var mapSmall = new google.maps.Map(document.getElementById("googleMapS"),mapSConfig);

	/* Create a marker and choose a map to place it in */
	var markerS = new google.maps.Marker({
		position:location,
		map:mapSmall
	});
		
}