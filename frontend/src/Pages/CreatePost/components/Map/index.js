import React from 'react';
import { Mapa } from './style';
  
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
  
class Map extends React.Component {
    constructor(props){
        super(props);
        let marker = null;
    }

    componentDidMount(){
        // LEAFLET ----------------------------------------------------------------------
        var map = L.map('map').locate({setView: true, maxZoom: 9, enableHighAccuracy: true});
          
        L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
            attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        
        map.on('click', (e) => {
            if(!this.marker){
                this.marker = L.marker(e.latlng, {icon: icon, draggable: true}).addTo(map);
                
                this.marker.on('dragend', (e) => {
                    this.props.changeLatlng(e.target._latlng);
                });
            }else{
                this.marker.setLatLng(e.latlng);
            }
            this.props.changeLatlng(e.latlng);
        });
        // LEAFLET ----------------------------------------------------------------------
    }
    
    render(){
        return(
            <Mapa id='map'/>
        );
    }
}
  
  export default Map;