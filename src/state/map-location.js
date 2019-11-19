import * as defaults from '../const/defaults';

const DEFAULT_STATE = {
    lng: defaults.LONGITUDE,
    lat: defaults.LATITUDE,
    zoom: defaults.ZOOM
};
const NAMESPACE = 'map-location'
const MOVE = `${NAMESPACE}/move`

export const actions = {
    move: (position) => ({
        type: MOVE,
        position
    })
};

const reducers = {
    [MOVE]: (state, action) => ({
        ...state,
        ...action.position
    }),
    default: state => state
};

export default (state = DEFAULT_STATE, action = {}) => {
    return reducers[action.type] ? reducers[action.type](state, action) : state;
}

export const selectors = {
    getLat: state => state.mapLocation.lat,
    getLng: state => state.mapLocation.lng,
    getZoom: state => state.mapLocation.zoom
};
