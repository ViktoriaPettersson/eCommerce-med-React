import actionTypes from '../actionTypes'

// Skapar ett state som är null från början
const initState = null;

// Skickar med state och action-objekt
const productReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes().products.set:
            // retunerar state som innehåller produkterna 
            state = action.payload
            return state
        
        
        default:
            return state
    }
}

export default productReducer