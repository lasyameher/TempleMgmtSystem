import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Livestream(){
    return(
      <div>
        <Navbar/>
        <div className="flex justify-center">
        <iframe width="1022" height="575" src="https://www.youtube.com/embed/Mk1WgSS2ExM" title="Omkaar Temple Live Stream" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        <Footer/>
      </div>  
    )
}