import React from 'react';
import { Mapa } from './style';

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'

import "leaflet/dist/leaflet.css";
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

export default function Map(props) {
    const position = [props.latlng.coordinates[1], props.latlng.coordinates[0]];
    
    console.log(position);

    function BackToPos(){
        const map = useMapEvents({
            click(){
                map.flyTo(position, 10);
            },
        });
    }

    return (
        <Mapa>
            <MapContainer center={position} zoom={10} style={{width: '100%', height: '100%'}}>
                <TileLayer
                    attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                />

                <Marker position={position} icon={icon}>
                    <Popup>
                        <p>Espécime encontrado<br/>Lat: {position[1]}, Lng: {position[0]}</p>
                    </Popup>
                </Marker>
                <BackToPos/>
            </MapContainer>
        </Mapa>
    );
  }