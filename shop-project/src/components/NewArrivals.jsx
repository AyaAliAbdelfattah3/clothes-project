import React from "react";
import { n1, n2, n3, n4, n5, n6, n7, n8 } from "../assets/img";
import { FaShoppingCart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n1,
      rate: "5",
    },
    {
      id: 2,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n2,
      rate: "5",
    },
    {
      id: 3,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n3,
      rate: "5",
    },
    {
      id: 4,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n4,
      rate: "5",
    },
    {
      id: 5,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n5,
      rate: "5",
    },
    {
      id: 6,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n6,
      rate: "5",
    },
    {
      id: 7,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n7,
      rate: "5",
    },
    {
      id: 8,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: n8,
      rate: "5",
    },
  ];
  return (
    // <!-- Start Arrivals Product Section -->
    <section id="Product1" className="section-p1">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>

      <div className="pro_container">
        {products.map((item) => (
          <div className="pro" key={item.id}>
            <img src={item.img} alt="" />
            <div className="descreption">
              <span>{item.brand}</span>
              <h5>{item.name}</h5>
              <div className="star">
                <i>
                  <IoStarSharp />
                </i>
                <i>
                  <IoStarSharp />
                </i>
                <i>
                  <IoStarSharp />
                </i>
                <i>
                  <IoStarSharp />
                </i>
                <i>
                  <IoStarSharp />
                </i>
              </div>
              <h4>${item.price}</h4>
            </div>
            <a href="#">
              <i className="fa-solid fa-cart-plus cart   ">
                <FaShoppingCart />
              </i>
            </a>
          </div>
        ))}
      </div>
    </section>
    /* <!-- End Product Section --> */
  );
};

export default NewArrivals;
