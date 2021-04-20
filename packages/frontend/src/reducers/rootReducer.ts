import { increment, decrement } from '../actions'

const initialState = {
    count: 0 
}

const rootReducer = (state = initialState, action = {type: ''}) => {
    // Object.freeze(state); 
    switch(action.type) {
        case 'INCREMENT':
            console.log('increment!')
            return state = {count: state.count + 1};
            // return state;   
        case 'DECREMENT': 
            // state.count --;  
            console.log('decrement!')
            return state = {count: state.count - 1}; 
        default:  
            return state;
    } 
}

export default rootReducer; 