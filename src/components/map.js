import React from 'react';
import mapboxgl from 'mapbox-gl';

import '../styles/map.scss';
import '../../node_modules/mapbox-gl/src/css/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoiam9yZGFuZm9yZW1hbiIsImEiOiJjazJ1dnR6OTYwM2pqM2draXFoOGhpaXd0In0.qWJvuqpu6RJowavAhcuXBw';

mapboxgl.accessToken = ACCESS_TOKEN;

export class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div
                    ref={el => this.mapContainer = el}
                    className="mapContainer"
                />
            </div>
        );
    }
}
