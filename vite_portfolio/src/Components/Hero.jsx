import Meteors from "./Ui/Meteors";
import cartoon from "../assets/cartoon.png";
import AOS from "aos";
import React, { useEffect } from "react";

import {
    FaArrowDown,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
 
function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: "ease-in-sine",
        }); 
      }, []);

  return (
    <div >
       <div
      className="h-auto md:h-[40rem] rounded-md relative w-full
     flex flex-col justify-center items-center overflow-hidden mx-auto py-10 md:py-0
    "
    >
 <Meteors number={25} color="#df00ff" />
      <div className="new-hero relative p-4 z-10 w-full text-center">
        <h1 data-aos="fade-right" className=" mt-20 
         font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50
 to-neutral-400        ">CREA  
 <span
            data-aos="flip-left"
            className=" rounded-full -mt-4 inline-block align-middle h-12 sm:h-16 md:h-20 lg:h-24 p-2 sm:p-3 bg-text-color"
          >
            <img src={cartoon} className="hero-img h-8 sm:h-10 md:h-12 lg:h-16 r" />
          </span>
  TIVE</h1>
{/* Changes i am going to make */}

<h1 data-aos="fade-left" className="
         font-bold 
     text-text-color  ">WEB DEVELOPER</h1>
<h1 data-aos="flip-right" className="  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50
 to-neutral-400   ">IRUM<span>*</span></h1>

{/* Changes i am going to make */}


        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 
          max-w-lg mx-auto
         ">
             Hello! I am Irum, a frontend developer with a strong foundation in
             HTML, CSS, JavaScript, React.js, TypeScript, and jQuery.
        </p>
        <div className="mt-4 ">
{/* Changes i am going to made  */}

<div className="hero-icon flex justify-between items-center space-y-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <div className="arrow arrow-icon cursor-pointer hover:bg-text-color border-text-color p-2 rounded-full">
          <FaArrowDown size={26} color="white" />
        </div>
        <div className="social-icon flex space-x-4 sm:space-x-6 md:space-x-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="arrow cursor-pointer hover:bg-text-color border-text-color p-2 rounded-full"
          >
            <FaFacebookF size={18} color="White" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="arrow cursor-pointer hover:bg-text-color border-text-color p-2 rounded-full"
          >
            <FaInstagram size={18} color="White" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="arrow cursor-pointer hover:bg-text-color border-text-color p-2 rounded-full"
          >
            <FaLinkedinIn size={18} color="White" />
          </a>
        </div>
      </div>


{/* Changes i am going to made  */}






       
          </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
