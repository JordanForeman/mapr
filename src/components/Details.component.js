import React from 'react';
import '../styles/details.scss';

export function Details(props) {
    return (
        <div className='details-container'>
            <ul>
                <li><strong>Latitude:</strong> {props.lat}</li>
                <li><strong>Longitude:</strong> {props.lng}</li>
                <li><strong>Zoom-level:</strong> {props.zoom}</li>
            </ul>
        </div>
    );
}
