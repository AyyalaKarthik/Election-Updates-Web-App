
console.log("hi ra ");
function updateMap() {
    

    fetch("../data.json")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                let color = "rgb(255, 0, 0)";


                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })

}


// let interval = 20000;
let interval = 10000;
setInterval( updateMap, interval); 