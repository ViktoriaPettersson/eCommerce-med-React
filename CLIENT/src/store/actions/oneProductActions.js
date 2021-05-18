import axios from 'axios'
import actionTypes from '../actionTypes'

// Använder axios för att hämta en product och skickar med id
export const getOneProduct = (id) => {
    return async(dispatch) => {

    const res = await axios.get(`http://localhost:9999/api/products/${id}`)
    // Dispatchar en funktion setProduct som har med sig res.data
    dispatch(setProduct(res.data));
    }
}
// Skapar setProduct som innehåller en type och payload med data(id)
export const setProduct = product => {
    return {
        type: actionTypes().product.setOne,
        payload: product
    }
}