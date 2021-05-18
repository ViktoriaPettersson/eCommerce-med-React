import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

const ProductList = ({product}) => {

    const dispatch = useDispatch();

    return (
        <div className="col py-3 text-center">
            <div className="card p-3">
           
                <div className="product-image view zoom">
                    <Link to={`/shop/${product._id}`}>
                    <img
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                    />  
                    </Link>

                </div>
                <div className="card-body">
                    <p className="mb-1 font-weight-bold black-text">{product.name}</p>
                    <p className="mb-1">${product.price}</p>

                    <button type="button" className="mt-4 btn btn-purple rounded-pill btn-sm"
                    // Kör funktionen addToCart och skickar med produkt-objektet
                    onClick={() => {
                        dispatch(addToCart(product))
                    }}
                    >Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default ProductList
