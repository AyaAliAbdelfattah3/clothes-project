import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import {
  ff1,
  ff2,
  ff3,
  ff4,
  ff5,
  ff6,
  ff7,
  ff8,
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
} from "../assets/img";
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
  {
    id: 9,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff1,
    rate: "5",
  },
  {
    id: 10,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff2,
    rate: "5",
  },
  {
    id: 11,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff3,
    rate: "5",
  },
  {
    id: 12,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff4,
    rate: "5",
  },
  {
    id: 13,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff5,
    rate: "5",
  },
  {
    id: 14,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff6,
    rate: "5",
  },
  {
    id: 15,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff7,
    rate: "5",
  },
  {
    id: 16,
    name: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
    img: ff8,
    rate: "5",
  },
];

const Shop = () => {
  return (
    <div>
      {/* <!-- start Hero Section --> */}
      <section id="page_header">
        <h2>#StayHome</h2>
        <p>Save More With Coupons & Up To 70% Off!</p>
      </section>

      {/* <!-- Start Product Section -->   */}
      <section id="Product1" className="section-p1">
        <div className="pro_container">
          {products.map((item) => (
            <div className="pro" key={item.id}>
              <img src={item.img} alt="" />
              <div className="descreption">
                <span>{item.brand}</span>
                <h5>{item.name}</h5>
                <div className="star">
                  <i><IoStarSharp/></i>
                  <i><IoStarSharp/></i>
                  <i><IoStarSharp/></i>
                  <i><IoStarSharp/></i>
                  <i><IoStarSharp/></i>
                 
                </div>
                <h4>${item.price}</h4>
              </div>
              <a href="#">
                <i ><FaShoppingCart/></i>
              </a>
            </div>
          ))}
        </div>
      </section>

        {/* <!-- Start Section Pagination --> */}
    <section id="Pagination" className="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    {/* <a href="#"><i class="fa-solid fa-arrow-right"></i></a> */}
    </section>

      {/* <!-- start section Form --> */}
    <section id="newsLetter" className="section-p1 section-m1">
        <div className="newText">
            <h4>Sign Up For NewsLetters</h4>
            <p>Get E-mail Updates About Our Latest Shop And <span>Special Offers</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your Emaill Adress"/>
            <button className="normal">Sign Up</button>
        </div>

    </section>
    </div>
  );
};

export default Shop;
