import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart, subtractProduct } from '../store/actions/cartActions'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const add = e => {
        // Använder samma funktion som gälller för 'add to cart'-knappen i ProductList
        e.stopPropagation()
        dispatch(addToCart(product))
    }
    const subtract = e => {
        e.stopPropagation()
        dispatch(subtractProduct(product))
    }


    return (
        <div className="d-flex align-items-center mb-5 mt-2">
            <div>
                <img
                        src={product.image}
                        className="img-fluid"
                        width="150px"
                        alt="..."
                        />  
            </div>
            <div>
                <div><strong>{product.name}</strong></div>
                <small>{product.quantity} x ${product.price}</small>
            </div>

            <div className="ml-auto mr-4 btn-group">
                <button className="btn btn-sm btn-indigo rounded-left" onClick={subtract}>-</button>
                <button className="btn btn-sm btn-indigo rounded-right" onClick={add}>+</button>
            </div> 

        </div>
    )
}

export default CartProduct
