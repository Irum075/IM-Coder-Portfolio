import Ecommerce from "../assets/Ecommerce.jfif";
import Blog from "../assets/Blog.jpg";
import Portfolio from "../assets/Portfolio.jfif";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function Port() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <div className=" port flex justify-center items-center flex-col mt-24">
        <p className="text-text-color font-extralight text-sm">
          Explore Our Best Work
        </p>
        <h2 className="text-white text-center text-3xl tracking-widest mt-2 mb-4 sm:mb-2 sm:justify-center md:text-4xl lg:text-6xl lg:my-4 lg:tracking-wide">
          Featured Projects <span> Spotlight</span>
        </h2>
        <div className="  portfolio-grid   lg:mt-20 mt-4">
          <div className="  lg:flex-row my-9 portfolio-card flex text-gray-500 justify-center items-center mx-10">
            <div data-aos="fade-right" className="portfolio-card-content mx-6">
              <h3 className="text-text-color lg:text-4xl md:text-3xl text-2xl">
                E-commerce Website
              </h3>
              <p
                className="lg:text-2xl mt-4 font-normal text-base md:text-lg text-neutral-300 
          max-w-lg mx-auto "
              >
                Developed a fully functional e-commerce platform with a sleek
                design and seamless user experience.
              </p>
            </div>
            <div data-aos="fade-left" className="portfolio-img  ">
              <img src={Ecommerce} alt="" />
            </div>
          </div>

          <div className=" my-24  lg:flex-row  portfolio-card flex text-gray-500 justify-center items-center mx-10">
            <div data-aos="fade-right" className="portfolio-img ">
              <img src={Blog} />
            </div>

            <div data-aos="fade-left" className="portfolio-card-content mx-6">
              <h3 className="text-text-color lg:text-4xl md:text-3xl text-2xl">
                Personal Blog
              </h3>
              <p
                className="lg:text-2xl   mt-4  font-normal text-base md:text-lg text-neutral-300 
          max-w-lg mx-auto"
              >
                Created a dynamic and responsive blog site with a content
                management system
              </p>
            </div>
          </div>

          <div className=" lg:flex-row my-9 portfolio-card flex text-gray-500 justify-center items-center mx-10">
            <div data-aos="fade-right" className="portfolio-card-content mx-6">
              <h3 className="text-text-color lg:text-4xl md:text-3xl text-2xl">
                Portfolio Website
              </h3>
              <p
                className="lg:text-2xl mt-4 font-normal text-base md:text-lg text-neutral-300 
          max-w-lg mx-auto "
              >
                Designed and developed a personal portfolio to showcase my
                projects and skills.
              </p>
            </div>
            <div data-aos="fade-left" className="portfolio-img ">
              <img src={Portfolio} />
            </div>
          </div>
        </div>

        <div className="button-container my-20">
          <button className="button">Explore More </button>
        </div>
      </div>
    </div>
  );
}

export default Port;
