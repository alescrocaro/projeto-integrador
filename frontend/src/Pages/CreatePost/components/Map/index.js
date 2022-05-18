import React, {useRef} from 'react';
import { Mapa } from './style';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet';
import L from 'leaflet';

import { useMapEvent } from 'react-leaflet/hooks'

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
                    // attribution='LAT: ${props.latlng.lat}, LNG: ${props.latlng.lng}'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMaps</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* <UseMapEvent/> */}

                <Marker position={position} icon={icon} draggable={true}
                    eventHandlers={{
                        move: (e) => {
                            props.changeLatlng(e.latlng);
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