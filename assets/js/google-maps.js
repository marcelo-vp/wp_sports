/*Google Maps | Development API Key: AIzaSyDnzQpNe1LnsQyYZSpvSunIgLQUagtHhdw */
    
function initMap() {

	/* Sets marker location */
	var location = new google.maps.LatLng( -23.607821, -46.744719 );

	/* Sets map config */
	var mapConfig = {
		center:location,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		draggable:true,
		scrollwheel:false
	};

	/* Create map based on config and insert content in the DOM using the element's ID */
	var googleMap = new google.maps.Map(document.getElementById("google-map"),mapConfig);

	/* Create a marker and choose a map to place it in */
	var krMarker = new google.maps.Marker({
		position:location,
		map:googleMap
	});
		
}