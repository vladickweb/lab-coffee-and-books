function initMap() {

    const map = new google.maps.Map(
        document.querySelector('.map'), {
            zoom: 10,
            center: {
                lat: 40.399904839319994,
                lng: -3.697681433262504
            },
            styles: [{
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                        hue: "#ffa200"
                    },
                    {
                        lightness: -20
                    }
                ]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                        hue: "#ff9100"
                    },
                    {
                        lightness: 52
                    }
                ]
            }, {
                featureType: "administrative",
                elementType: "labels",
                stylers: [{
                        hue: "#1100ff"
                    },
                    {
                        saturation: -100
                    },
                    {
                        lightness: -18
                    }
                ]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                        lightness: -18
                    },
                    {
                        visibility: "off"
                    }
                ]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [{
                        lightness: -18
                    },
                    {
                        visibility: "off"
                    }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    saturation: -100
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    saturation: -100
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    lightness: -27
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }]

        })

    getPlacesMap(map)
}


function getPlacesMap(map) {
    axios
        .get('/api/places')
        .then(response => printRestaurants(response.data, map))
        .catch(err => console.log(err))
}


function printRestaurants(restaurants, map) {

    restaurants.forEach(elm => {

        let position = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({
            map,
            position,
            title: elm.name
        })
    })
}