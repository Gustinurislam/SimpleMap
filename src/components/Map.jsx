import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import L from 'leaflet'
import LeafletGeocoder from './LeafletGeocoder'
import LeafletRoutingMachine from './LeafletRoutingMachine';

const Map = () => {
    const position = [-6.573010537483888, 106.73794591204077]
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LeafletGeocoder />
                <LeafletRoutingMachine />
            </MapContainer>
        </div>
    )
}

let DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
})
L.Marker.prototype.options.icon = DefaultIcon

export default Map
