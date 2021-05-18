import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/productActions'
// import productReducer from '../store/reducers/productReducer';
import ProductList from '../components/ProductList'

const Shop = () => {
 
    const dispatch = useDispatch();
    const productReducer = useSelector(state => state.productReducer)

    // När komponenten laddas görs en dispatch mot getProduct
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
     
    return (
        
        <div className="container my-5">
        <div className="bg-white rounded p-4 row row-cols-1 row-cols-md-3 g-4">
            {
                productReducer && productReducer.map(product => (
                    <ProductList key={product._id} product={product} />
                ))
            }
        </div>
        </div>
    )
}

export default Shop
