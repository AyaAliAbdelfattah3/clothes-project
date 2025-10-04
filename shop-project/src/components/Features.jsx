import React from 'react'
import { f1, f2, f3, f4, f5, f6 } from '../assets/img'

const Features = () => {
    const Data =[
        {id:1, img : f1, title: "Free Shiping"},
        {id:2, img : f2, title: "Online Order"},
        {id:3, img : f3, title: "Save Money"},
        {id:4, img : f4, title: "Promotions"},
        {id:5, img : f5, title: "Happy Sall"},
        {id:6, img : f6, title: "F24/7 Support"}
    ]
  return (
    
    //   <!-- Start Feature Section -->
    <section id="Features" className="section-p1">
        {
    Data.map((item)=>(
            <div  key={item.id} className="fe-box">
            <img src={item.img} alt=""/>
            <h6>{item.title}</h6>
            </div>

    ))
}
        
    </section>
    /* <!-- End Feature Section --> */
  )
}

export default Features
