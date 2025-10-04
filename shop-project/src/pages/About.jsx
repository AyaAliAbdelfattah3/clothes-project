import React from "react";

import { a6, vedio1 } from "../assets/img";
const About = () => {
  return (
    <>
      {/* <!-- start Hero Section --> */}
      <section id="page_header" className="about_header">
        <h2>#KnowUs</h2>
        <p>Read All Case Studies About Our Products!</p>
      </section>

       {/* <!-- start Section Abourt --> */}
    <section id="about_head" className="section-p1 ">
        <img src={a6} alt=""/>
        <div>
            <h2>Who Are You ?</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            </p>
            <abbr title="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!

            </abbr>
            <br/>
            <br/>
            <marquee bgcolor="aqua" loop="-1" scrollamount="5" width="100%">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            </marquee>
        </div>

    </section>

    {/* !-- Start Section about app --> */}
    <section id="about_app"  className="section-p1 ">
     <h1>Download Our <a href="#">App</a> </h1>
     

    <div className="video" >
        <video autoPlay muted loop src={vedio1}></video>
    </div>

    </section>
    {/* <!-- End Section about app --> */}

    </>
  );
};

export default About;
