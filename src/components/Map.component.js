import React from 'react';
import mapboxgl from 'mapbox-gl';

import '../styles/map.scss';
import '../../node_modules/mapbox-gl/src/css/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoiam9yZGFuZm9yZW1hbiIsImEiOiJjazM1YXgxZG0xZWN1M2dwaTdlcG9hcGdzIn0.pr4DzccjqOfKOpsd334jdw';

mapboxgl.accessToken = ACCESS_TOKEN;

export class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: props.lat,
            lng: props.lng,
            zoom: props.zoom
        };
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.props.lng, this.props.lat],
            zoom: this.props.zoom
        });
        this.map.on('move', ::this.handleMove);
    }

    handleMove() {
        const position = {
            lng: this.map.getCenter().lng.toFixed(4),
            lat: this.map.getCenter().lat.toFixed(4),
            zoom: this.map.getZoom().toFixed(2)
        };
        this.setState(() => position);
        this.props.moveMap(position);
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
