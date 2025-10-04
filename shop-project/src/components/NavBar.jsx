import React from 'react'
import { logo } from '../assets/img'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';

const NavBar = () => {
  return (
    //  <!-- Start Header NavBar -->
    <section id="header">
        <a href="#"> <img src={logo} alt="" /> </a>
        
        <div>
            <ul id="navBar">
             <li><Link  className="active" to = "/">Home</Link></li>
             <li><Link  to ="/shop">Shop</Link></li>
             <li><Link  to ="/blog">Blog</Link></li>
             <li><Link  to ="/about">About</Link></li>
             <li><Link  to ="/contact">Contact</Link></li>
             <li><Link id="lg_bag" to="/cart"><i className="fa-sharp fa-solid fa-cart-shopping">
                <FaShoppingCart/>
                
                </i></Link></li>
             <a href="#" id="close"><i className="fa-solid fa-xmark">
                
                </i></a>
            </ul>
            
        </div>
        <div id="mobil">
            <a href="Cart.html"><i className="fa-sharp fa-solid fa-cart-shopping">

                </i></a>
            <i id="bar" className="fas fa-outdent">
            </i>

        </div>
    </section>

  )
}

export default NavBar
