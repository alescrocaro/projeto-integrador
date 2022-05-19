import React, {useRef} from 'react';
import { Mapa } from './style';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41],
    popupAnchor: [0, -41]
});

// const icon = L.icon({ iconUrl: "/logo192.png" });
let position = [-15.7217175,-48.0774459];

// function UseMapEvent() {
//     const map = useMapEvent('click', (e) => {
//         // console.log('e =>', e)
//         // console.log(e.latlng)
//         // position = [e.latlng.lat, e.latlng.lng]
//     });
//     return null
// }

export default function Map(props) {

    return (
        <Mapa>
            <MapContainer center={[-15.7217175,-48.0774459]} zoom={4} style={{width: '100%', height: '100%'}}>
                <TileLayer
                    attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                />

                <Marker position={position} icon={icon} draggable={true}
                    eventHandlers={{
                        moveend: (e) => {
                            props.changeLatlng(e.target._latlng);
                            // console.log('movend >', e.target._latlng)
                        },
                    }}
                >
                    <Popup>
                        <p>Arraste este pin para selecionar a localização do espécime encontrado</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </Mapa>
    );
  }