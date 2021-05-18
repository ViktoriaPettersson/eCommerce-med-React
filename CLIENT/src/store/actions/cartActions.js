// Lägga till produkt i cart

import actionTypes from '../actionTypes'

// Tar in en produkt som ska läggas till 
 export const addToCart = product => {
    return {
        type: actionTypes().cart.add,
        payload: product
    }
 }
// Ta bort produkter
export const subtractProduct = product => {
    return {
        type: actionTypes().cart.subtract,
        payload: product
    }
}