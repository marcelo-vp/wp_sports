/* Google Maps | Development API Key: AIzaSyDnzQpNe1LnsQyYZSpvSunIgLQUagtHhdw */
    
function initMap() {

	/* Sets marker location */
	var location = new google.maps.LatLng( -23.607821, -46.744719 );

	/* Sets map config */
	var mapConfig = {
		center:location,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		scrollwheel:false,
		styles: [
			{
				'featureType' : 'landscape',
				'elementType' : 'geometry',
				'stylers' : [
					{ 'color' : '#FFE0B2' } /* orange-100 */
				]
			},
			{
				'featureType' : 'poi',
				'elementType' : 'geometry',
				'stylers' : [
					{ 'color' : '#FFCC80' } /* orange-200 */
				]
			},
			{
				'featureType' : 'poi',
				'elementType' : 'labels',
				'stylers' : [
					{ 'visibility' : 'off' }
				]
			},
			{
				'featureType' : 'transit',
				'elementType' : 'geometry',
				'stylers' : [
					{ 'color' : '#FFCC80' } /* orange-200 */
				]
			},
			{
				'featureType' : 'road',
				'elementType' : 'geometry',
				'stylers' : [
					{ 'color' : '#FFA726' } /* orange-400 */
				]
			},
			{
				'featureType' : 'water',
				'elementType' : 'geometry',
				'stylers' : [
					{ 'color' : '#EF6C00' } /* orange-800 */
				]
			},
			{
				'elementType' : 'labels.text.fill',
				'stylers' : [
					{ 'color' : '#333333' }
				]
			}
		]
	};

	/* Create map based on config and insert content in the DOM using the element's ID */
	var googleMap = new google.maps.Map(document.getElementById("google-map"),mapConfig);

	/* Create a marker and choose a map to place it in */
	var krMarker = new google.maps.Marker({
		position:location,
		map:googleMap
	});
		
}