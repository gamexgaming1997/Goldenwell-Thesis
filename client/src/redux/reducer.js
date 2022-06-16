const initialState = {
    isLoading: false,
    isClientValid: false,
    storage: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATABASE':
            return {
                storage: action.payload
            }
        case 'ITEM_ADDED':
            return {
                storage: action.payload
            }
        case 'EDIT_ITEM':
            return {
                storage: state.storage.find(product => product._id === action.payload._id ? action.payload : product)
            }
        case 'DELETE_ITEM':
            return {
                storage: state.storage.filter(itemFilter => itemFilter._id !== action.payload._id)
            }
        case 'DELIVER': 
            return {
                storage: state.reducer.storage.map(state => state._id === action.payload._id ? action.payload : state)
            }
        default:
            return state;
    }
}

export default reducer;