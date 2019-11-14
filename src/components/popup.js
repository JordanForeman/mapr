import React from 'react';
import mapboxgl from 'mapbox-gl';

export function Popup(props) {
    new mapboxgl.Popup({ className: 'map-popup' })
        .setHTML(`<h1>${props.message}</h1>`)
        .addTo(props.map);
}
