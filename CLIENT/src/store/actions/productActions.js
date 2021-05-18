import axios from 'axios'
import actionTypes from '../actionTypes'

// Hämtar produkterna från API
export const getProducts = () => {

    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/products')
        // Dispatchar en funktion som skickar med data
        dispatch(setProducts(res.data))
    }
}
// Skapar setProducts som innehåller en type och payload med data
export const setProducts = data => {
    return {
        type: actionTypes().products.set,
        payload: data
    }
}