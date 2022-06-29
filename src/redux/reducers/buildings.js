export const buildingReducer = (building = [], action) => {
    switch (action.type) {
        case 'GET_BUILDINGS': {
            return building
        }
        case 'CRETE_BUILDING': {
            return action.payload;
        }
        case 'EDIT_BUILDING': {
            return building
        }
        case 'DELETE_BUILDING': {
            return building
        }
        default:
            return building;
    }
}