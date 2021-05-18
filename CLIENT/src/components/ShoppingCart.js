import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalA = useSelector(state => state.cartReducer.totalA)

    const emptyCart = (
        <div className=" my-3 px-3">
            Your cart is empty
        </div>
    )


    return (
        <div>
            {
                shoppingCart && shoppingCart.map(product => (
                    <CartProduct key={product._id} product={product} />
                ))
            }
            {
                shoppingCart.length < 1 && emptyCart
            }
            <div className="dropdown-divider"></div>
            <div className="d-flex align-items-center justify-content-between px-3 mb-2">
                <div>Total amount: ${totalA}</div>
                <button className="btn btn-purple rounded-pill">Checkout</button>
            </div>
        </div>

        
    )
}

export default ShoppingCart
