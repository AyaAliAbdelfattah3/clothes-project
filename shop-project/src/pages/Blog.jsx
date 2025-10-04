import React from 'react'
import { b1, b2, b3, b4, b5, b6, b7 } from '../assets/img'

const Blog = () => {
    const Blogs =[
        {id:1,img:b1 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

          {id:2,img:b2 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

            {id:3,img:b3 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

              {id:4,img:b4 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

                {id:5,img:b5 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

                  {id:6,img:b6 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},

                    {id:7,img:b7 ,name:"The Cotton-Jesrey Zip-UP Hoodie",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores", link:"CONTINUE READING", title:"13/01"},
    ]
  return (
    <>
      {/* <!-- start Hero Section --> */}
    <section id="page_header" className="blog_header">
        
        <h2>#ReadMore</h2>
        <p>Read All Case Studies About Our Products!</p>
    </section>
    
     {/* <!-- start Blog Section --> */}
      <section id="blog">
        {Blogs.map((blog) => (
          <div className="blog-box" key={blog.id}>
            <div className="blog-imag">
              <img src={blog.img} alt={blog.name} />
            </div>
            <div className="blog-details">
              <h4>{blog.name}</h4>
              <p>{blog.para}</p>
              <a href="#">{blog.link}</a>
            </div>
            <h1>{blog.title}</h1>
          </div>
        ))}
      </section>

        
        

            
        

    
    </>
  )
}

export default Blog
