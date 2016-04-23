// function init(){
// 	var mapOptions = {
// 		center: new google.maps.LatLng(-34.397, 150.644),
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		zoom:13
// 	};
// 	// var venueMap;
// 	venueMap = new google.maps.Map(document.getElementById('map0'), mapOptions);
// 	//need venueMap to be a global variable for function creatBarPin to work //

// }

function createBarPin(lat, lng, id){
	var mapOptions = {
		center: new google.maps.LatLng(lat, lng),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom:13
	};
	// var venueMap;
	venueMap = new google.maps.Map(document.getElementById(id), mapOptions);
	//need venueMap to be a global variable for function creatBarPin to work //

	var pinLocation = new google.maps.LatLng(lat, lng);
	var startPosition = new google.maps.Marker({
		position: pinLocation,
		map:venueMap,
		icon: "../../images/map-icon.png"
	});

};




$(document).ready(function(){
	$('.map-click').click(function(){
		$(this).parent().next().slideToggle();
		var id = $(this).parent().next().attr('id');
		console.log(id);
		var bar1 = pageBarsArray[0];
		var bar2 = pageBarsArray[1];
		var bar3 = pageBarsArray[2];
		var bar4 = pageBarsArray[3];
		var bar5 = pageBarsArray[4];
		console.log(bar1);
		if(id === "map0"){
		createBarPin(bar1.lat, bar1.lng, id);
	}else if (id === "map1"){
		createBarPin(bar2.lat, bar2.lng, id);
	} else if (id === "map2"){
		createBarPin(bar3.lat, bar3.lng, id);
	} else if (id === "map3"){
		createBarPin(bar4.lat, bar4.lng, id);
	}else if (id === "map4"){
		createBarPin(bar4.lat, bar4.lng, id);
	}else{
		console.log("something is wrong");
	}
	
		
	});

});