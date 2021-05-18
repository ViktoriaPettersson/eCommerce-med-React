const actionTypes = () => {
    return {
        products: {
            set: 'SET_PRODUCTS'
        },
        cart: {
            add: 'ADD_TO_CART',
            subtract: 'SUBTRACT_PRODUCT'
        },
        product: {
            setOne: 'SET_ONE_PRODUCT'
        },
    }
}

export default actionTypes