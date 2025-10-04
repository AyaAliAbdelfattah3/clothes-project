import React from 'react'
import { f1, ff1, ff2, ff3 } from '../assets/img'

const Cart = () => {
  return (
    <>
       <section id="page_header" className="about_header">
        
        <h2>#Cart</h2>
        <p>LEAVE MESSAGE, We Love To Hear From You!</p>
    </section>
    {/* <!-- End Hero Section --> */}
     {/* <!-- start Section Cart --> */}
    <section id="cart" className="section-p1 " >
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Imag</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i>remove</a></td>
                    <td><img src={ff1} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>

                
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={ff2} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


                
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={ff3} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


            </tbody>
        </table>

    </section>
    {/* <!-- End Section Cart --> */}
    </>
  )
}

export default Cart
