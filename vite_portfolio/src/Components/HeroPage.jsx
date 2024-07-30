  // import Meteors from "./Ui/Meteors";
 import cartoon from "../assets/cartoon.png";
 import MousePosition from "./Ui/MousePosition";
 import GradualSpacing from "./Ui/GradualSpacing";
//  import Marquee3D from '../Components/Ui/Marquee3D'
  import React, { useEffect } from "react";
 import {
   FaArrowDown,
   FaFacebookF,
   FaInstagram,
   FaLinkedinIn,
 } from "react-icons/fa";

 import AOS from "aos";

 {/*function HeroPage() {
   useEffect(() => {
     AOS.init({
       duration: 2000,
       easing: "ease-in-sine",
     }); 
   }, []);
   return (
     <div className="hero-page   flex-col relative items-center justify-center w-full h-screen  text-text-color">
       <div className="gradient"></div>
       <MousePosition color="#DF00FF" size={0.9} refresh={true} />
       <div className="hero-page-section  flex justify-center items-center flex-col ">
         <h1
           data-aos="flip-up"
           className="text-center creative text-3xl sm:text-4xl   md:text-7xl lg:text-8xl tracking-wide font-bold "
         >
           CREA
           <span
             data-aos="flip-left"
             className="inline-block align-middle h-24 p-3 bg-text-color"
           >
            
             <img src={cartoon} className="hero-img -mt-4 h-8 " />
           </span>
           TIVE
         </h1>
         <GradualSpacing
           text="WEB DEVELOPER "
           className="text-text-color text-center text-3xl md:text-7xl   pt-4  lg:text-8xl font-bold tracking-[-0.1em]"
         />

         <h1
           data-aos="flip-up"
           className="text-center  text-3xl md:text-7xl font-bold pt-4  lg:text-8xl tracking-wide "
         >
           IRUM<span data-aos="zoom-in">*</span>
         </h1>

         <p className="text-center text-gray-500 md:mx-16 pt-4">
           Hello! I am Irum, a frontend developer with a strong foundation in
           HTML, CSS, JavaScript, React.js, TypeScript, and jQuery.
         
         </p>
       </div>

       <div className="hero-icon flex justify-between items-center -mt-8">
         <div className="arrow arrow-icon cursor-pointer hover:bg-text-color  arrow-down border-text-color mx-10 p-2 rounded-full  ">
           <FaArrowDown size={26} color="white" />
         </div>
         <div className="social-icon flex justify-between items-center space-x-6 mr-4">
           <a
             href="https://www.facebook.com"
             target="_blank"
             rel="noopener noreferrer"
             className="arrow  cursor-pointer hover:bg-text-color  border-text-color p-2 rounded-full  "
           >
             <FaFacebookF size={18} color="White" />
           </a>

           <a
             href="https://www.instagram.com"
             target="_blank"
             rel="noopener noreferrer"
             className="arrow  cursor-pointer hover:bg-text-color  border-text-color  p-2 rounded-full  "
           >
             <FaInstagram size={18} color="WHite" />
           </a>
           <a
             href="https://www.linkedin.com"
             target="_blank"
             rel="noopener noreferrer"
             className="arrow  cursor-pointer hover:bg-text-color  border-text-color p-2 rounded-full  "
           >
             <FaLinkedinIn size={18} color="White" />
           </a>
         </div>
       </div>

     
   </div>
 );
 }

 export default HeroPage;*/}


// HeroPage component
function HeroPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div className="hero-page flex-col relative items-center justify-center w-full h-screen text-text-color">
      <div className="gradient"></div>
      <MousePosition color="#DF00FF" size={0.9} refresh={true} />
      <div className="hero-page-section flex flex-col items-center justify-center text-center">
        <h1
          data-aos="flip-up"
          className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl tracking-wide font-bold"
        >
          CREA
          <span
            data-aos="flip-left"
            className="inline-block align-middle h-12 sm:h-16 md:h-20 lg:h-24 p-2 sm:p-3 bg-text-color"
          >
            <img src={cartoon} className="hero-img h-8 sm:h-10 md:h-12 lg:h-16" />
          </span>
          TIVE
        </h1>
        <GradualSpacing
          text="WEB DEVELOPER"
          className="text-text-color text-2xl sm:text-4xl md:text-6xl lg:text-8xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 font-bold tracking-[-0.1em]"
        />
        <h1
          data-aos="flip-up"
          className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold pt-2 sm:pt-4 md:pt-6 lg:pt-8 tracking-wide"
        >
          IRUM<span data-aos="zoom-in">*</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
          Hello! I am Irum, a frontend developer with a strong foundation in
          HTML, CSS, JavaScript, React.js, TypeScript, and jQuery.
        </p>
      </div>
      <div className="hero-icon flex flex-col items-center space-y-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
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
    </div>
  );
}



export default HeroPage;




