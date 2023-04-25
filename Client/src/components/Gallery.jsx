import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../images/pic1.jpeg";
import img2 from "../images/pic2.jpeg";
import img3 from "../images/pic3.jpeg";
import img4 from "../images/pic4.jpeg";
import img5 from "../images/pic5.jpeg";
import img6 from "../images/pic6.jpeg";
import img7 from "../images/pic7.jpeg";


export default function Gallery(){
    return(
      <div>
        <Navbar/>
        
        <AliceCarousel autoPlay autoPlayInterval="500" className ="mx-auto max-w-fit" >
          <img src={img1} className="slider img" alt=""/>
          <img src={img2} className="slider img" alt=""/>
          <img src={img3} className="slider img" alt=""/>
          <img src={img4} className="slider img" alt=""/>
          <img src={img5} className="slider img" alt=""/>
          <img src={img6} className="slider img" alt=""/>
          <img src={img7} className="slider img" alt=""/>
        </AliceCarousel>

          

        <Footer/>

      </div>  
    )
}