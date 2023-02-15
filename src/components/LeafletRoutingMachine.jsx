import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useMap } from 'react-leaflet'

const LeafletRoutingMachine = () => {
    const map = useMap()
    let DefaultIcon = L.icon({
        iconUrl: 'https://www.gifsanimes.com/data/media/1635/marche-a-pied-image-animee-0013.gif',
        iconSize: [90, 90]
    })
    useEffect(() => {
        var marker1 = L.marker([-6.573010537483888, 106.73794591204077], { icon: DefaultIcon }).addTo(map)
        map.on('click', function (e) {
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
            L.Routing.control({
                waypoints: [
                    L.latLng(-6.573010537483888, 106.73794591204077),
                    L.latLng(e.latlng.lat, e.latlng.lng)
                ],
                lineOptions: {
                    styles: [
                        {
                            color: 'blue',
                            weight: 4,
                            opacity: 0.7,
                        }
                    ]
                },
                routeWhileDragging: false,
                geocoder: L.Control.Geocoder.nominatim(),
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                showAlternatives: true
            })
                .on('routesfound', function (e) {
                    e.routes[0].coordinates.forEach((c, i) => {
                        setTimeout(() => {
                            marker1.setLatLng([c.lat, c.lng])
                        }, 100 * i)
                    })
                })
                .addTo(map);
        })
    })
    return null;
}

export default LeafletRoutingMachine
