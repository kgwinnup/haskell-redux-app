
import { push } from 'react-router-redux';

export function setPath(path) {
    return (dispatch) => {
        dispatch(push(path));
    }
}
