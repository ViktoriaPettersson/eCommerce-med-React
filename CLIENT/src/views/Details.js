import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct } from '../store/actions/oneProductActions'
import { addToCart } from '../store/actions/cartActions'
import { useParams } from 'react-router-dom'

const Details = () => {

     // Använder useParams för att få id
    let { id } = useParams();
    const dispatch = useDispatch()
    // När komponenten laddas ska en dispatch mot getOneProduct köras och den behöver skicka med ett id
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [dispatch, id])

    
    const product = useSelector(state => state.oneProductReducer.oneProduct)

    const _product = (product && 
        <div className="d-flex flex-column flex-md-row">
            <div>
            <img
                src={product.image}
                className="img-fluid"
                alt="..."
                width="2000px"
                />  
            </div>
            <div className="d-flex flex-column justify-content-between p-4">
                <h1>{ product.name }</h1>
                <h5 className="text-primary">${ product.price }</h5>
                <p>{ product.desc }</p>
                <button type="button" className="mt-4 btn btn-purple rounded-pill btn-lg"
                onClick={() => {
                    dispatch(addToCart(product))
                }}
                >Add to cart</button>
            </div>
        </div>
        )

    return (
        <div className="container bg-white mt-5 pt-5 p-4 rounded">
            <div>
                { _product }
            </div>
        </div>
    )
}

export default Details
