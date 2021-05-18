import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
   
    <div className="container showcase text-center showcase p-5">
     <div className="showcase-text">
         <h1 className="text-white">Lorem Ipsum</h1>
         <p className="text-white"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum maxime, velit amet omnis officiis ipsa reiciendis cumque molestiae architecto nemo!</p>
         <NavLink to="/shop">
         <button className="btn btn-outline-white rounded-pill animated pulse infinite">SHOP NOW</button>
         </NavLink>
     </div>
    </div>
        
    )
}

export default Home
