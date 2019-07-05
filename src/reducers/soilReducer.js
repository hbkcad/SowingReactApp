const soilReducer = (state = {
    soilList:[],
    soilSelected:''
}, action) => {
    switch (action.type) {
        case 'LOAD_SOIL':
            state = {
                soilList : action.payload
            }
            return state;
        case 'SELECTED_SOIL':
                state = {
                    ...state,
                    soilSelected : action.payload
                }
            return state;
        default:
            return state;
    }

}

export default soilReducer;