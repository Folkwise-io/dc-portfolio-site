
const initialState = {
    count: 0 
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            initialState.count ++; 
            return state;  
        case 'DECREMENT': 
            initialState.count --;  
            return state;  
        default:  
            return state;
    } 
}

export default rootReducer; 