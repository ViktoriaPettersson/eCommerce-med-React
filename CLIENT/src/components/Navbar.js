import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import ShoppingCart from '../components/ShoppingCart'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const totalQ = useSelector(state => state.cartReducer.totalQ)

    return (
    <nav className="p-3 mb-1 navbar navbar-expand-lg navbar-dark">
    <div className="container">
        <div><NavLink exact to="/" className="navbar-brand font-weight-bold mr-5">BRAND</NavLink></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link mr-3">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/shop" className="nav-link">Shop</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item mr-3">
                    <NavLink exact to="/login" className="nav-link">Login</NavLink>
                </li> */}
               
                
                <li className="nav-item dropdown">
                    <span className="nav-link" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="cart fas fa-shopping-cart"></div>
                        <span className="badge rounded-pill badge-notification bg-danger">{totalQ}</span>
                    </span>
                    <div className="shoppingcart dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                       
                        <ShoppingCart />
                       
                    </div>
                </li>
                <button className="btn btn-outline-white btn-sm my-0 ml-4" type="submit">Login</button>
            </ul>
        </div>
    
    </div>
    </nav>
    )
}

export default Navbar
