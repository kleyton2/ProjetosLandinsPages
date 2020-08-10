window.onload = function(){
	var map;

	function initialize(){
			var mapProp = {
				center: new google.maps.LatLng(-22.855817, -43.594023),
				scrollWheel:false,
				zoom:15,
				MapTypeId:google.maps.MapTypeId.ROADMAP
			}

			map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
	
		}else{
			infoWindow.open(map,marker);
		}


	}


	initialize();

	var conteudo = '<p style="color:black; font-size:13px; padding:5px 0;">oh eu aki</p>';
	addMarker(-22.855817, -43.594023,'',conteudo,true);
}