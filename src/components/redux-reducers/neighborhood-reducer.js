import { UPDATE_NEIGHBORHOOD, SHOW_ERROR } from '../actions/neighborhood-actions';

export default function neighborhoodsReducer(state = '', { type, payload }) {
    switch (type) {
        case UPDATE_NEIGHBORHOOD:
            return payload.neighborhood;
        case SHOW_ERROR:
            return payload.neighborhood;
        default:
            return state;
    }
}