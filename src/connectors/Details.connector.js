import {connect} from 'react-redux';
import {Details as DetailsComponent} from '../components/Details.component';
import {selectors as locationSelectors} from '../state/map-location';

function mapStateToProps(state) {
    return {
        lat: locationSelectors.getLat(state),
        lng: locationSelectors.getLng(state),
        zoom: locationSelectors.getZoom(state)
    };
}

export const Details = connect(mapStateToProps)(DetailsComponent);
