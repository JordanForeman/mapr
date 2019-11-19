import React from 'react';
import {Map} from '../connectors/Map.connector';
import * as defaults from '../const/defaults';
import '../styles/base.scss';

export default () => (
    <div>
        <Map
            lng={defaults.LONGITUDE}
            lat={defaults.LATITUDE}
            zoom={defaults.ZOOM}
        />
    </div>
);
