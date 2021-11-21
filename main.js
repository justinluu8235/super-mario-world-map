function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 34.667868469382135, lng: 135.4305624131651 },
        zoom: 18,
        mapId: '7eb7e4d4ff23d028',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false

    });
    //Name, Latitude, Longitude, Image URL, scaledSize width height
    const markers = [
        [
          "You are Here",
          34.66767112713121,
          135.4297887322531,
            "./images/pointer.svg",
            30,
            47.8
        ],
        [
            "Yoshi\'s House",
              34.66676215387061,
              135.43086567579826,
              "./images/yoshi_house.svg",
              38,
              31
          ],
          [
            "Ghost House",
            34.66832715150856,
            135.43292762674864,
              "./images/ghosthouse.svg",
              40,
              48
          ],
          [
            "Castle",
            34.66775608022106,
            135.43139547897843,
              "./images/castle.svg",
              40,
              53
          ],
          [
            "Warp Pipe",
            34.66739738878135,
            135.43225049775214,
              "./images/pipe.svg",
              38,
              42.5
          ],
          [
            "Star World",
            34.667959023359266,
            135.42866400953733,
              "./images/star.svg",
              38,
              38
          ],
          [
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
        [
			'Donut Plains',
			34.66829411443392,
			135.43231361996433,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
        [
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
            './images/hill_with_eyes.svg',
			50,
			60.7,
		]

    ];

    for(let i=0; i<markers.length; i++){
        const currMarker = markers[i];
        let image = currMarker[3];
        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map: map,
            title: currMarker[0],
            icon:
            {
                url: image,
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });


        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });
    
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });



    }

   

    
}