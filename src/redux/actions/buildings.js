import * as api from '../../services/api'

// ACTION CREATORS;

export const getBuildings = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBuildings();
        console.log(data);
        dispatch({ type: 'GET_BUILDINGS', payload: data });
    } catch (err) {
        console.log(err.message)
    }



} 