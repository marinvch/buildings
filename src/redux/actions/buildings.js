import * as api from '../../services/api'
import { data } from '../../data/data'
// ACTION CREATORS;

export const getBuildings = () => async (dispatch) => {
    try {
        // const { data } = await api.fetchBuildings();
        // console.log(data);
        return dispatch({ type: 'GET_BUILDINGS', payload: data });
    } catch (err) {
        console.log(err.message)
    }
} 