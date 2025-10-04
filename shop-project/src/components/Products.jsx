import React from "react";
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "../assets/img";
import { FaShoppingCart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

const Products = () => {
  const Data = [
    {
      id: 1,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p1,
      rate: "5",
    },
    {
      id: 2,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p2,
      rate: "5",
    },
    {
      id: 3,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p3,
      rate: "5",
    },
    {
      id: 4,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p4,
      rate: "5",
    },
    {
      id: 5,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p5,
      rate: "5",
    },
    {
      id: 6,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p6,
      rate: "5",
    },
    {
      id: 7,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p7,
      rate: "5",
    },
    {
      id: 8,
      name: "Carton Astrount T-Shirts",
      brand: "adidas",
      price: 90,
      img: p8,
      rate: "5",
    },
  ];
  return (
    // <!-- Start Product Section -->
    <section id="Product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>

      <div  className="pro_container">
        {Data.map((item) => (
          <div className="pro" key={item.id}>
            <div >
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
                <i className="fa-solid fa-cart-plus cart">
                  <FaShoppingCart />
                </i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
