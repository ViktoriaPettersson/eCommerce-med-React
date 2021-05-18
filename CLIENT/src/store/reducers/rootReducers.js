import { combineReducers } from 'redux' 
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import oneProductReducer from './oneProductReducer'

export default combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
    oneProductReducer: oneProductReducer
})