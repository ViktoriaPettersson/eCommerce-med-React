import actionTypes from '../actionTypes'

// Skapar ett state som är null från början
const initState = {
    oneProduct: null
};

const oneProductReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes().product.setOne:
             // skickar in action.payload i state
             return {
                ...state,
                oneProduct: action.payload
              }
         
         default:
             return state
     }
}

export default oneProductReducer 