import About from '../assets/About.jpg'

function Intro() {
  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <p
        data-aos="fade-left"
        className="text-text-color font-extralight text-sm"
      >
        GET TO KNOW ME
      </p>
      <h2
        data-aos="fade-up"
        className="text-white text-3xl tracking-widest mt-2 mb-3 md:text-4xl lg:text-6xl lg:my-4 lg:tracking-wide"
      >
        WHO I <span>AM</span>
      </h2>
      <div  className="flex my-20 intro-section ml-8 ">
      <div  data-aos="fade-right" className='text-gray-500 w-2/3 mt-10 mx-4'>
        <p className=" font-normal text-base md:text-lg text-neutral-300 
          max-w-lg mx-auto">
                  {/* // className='lg:tex-xl flex justify-center items-center flex-col ' */}
        Hi, I am Irum, a passionate web developer with expertise in creating stunning and functional websites. With a background in computer science and a love for technology, I am dedicated to delivering top-notch digital solutions. My approach blends creativity with technical precision to craft user-friendly interfaces and seamless experiences. Constantly evolving with the latest trends, I strive to bring innovative ideas to life and exceed client expectations.
        </p>
        <div className="button-container mt-10">
        <button className="button">Explore More </button>
    </div>
        </div>     
    <div  data-aos="fade-left" className="intro-img">
        <img src={About} />
    </div>
      </div>
    </div>
  );
}

export default Intro;
