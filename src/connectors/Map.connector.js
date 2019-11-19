import {connect} from 'react-redux';
import {Map as MapComponent} from '../components/Map.component';
import {actions as locationActions} from '../state/map-location';

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    moveMap: locationActions.move
};

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapComponent);
