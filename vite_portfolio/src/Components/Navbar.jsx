import { Link } from 'react-router-dom';
import { FaBars , FaTimes} from 'react-icons/fa';

import AOS from 'aos';
// eslint-disable-next-line no-unused-vars
import React, { useEffect ,  useState } from 'react';

function Navbar() {
const [navOpen, setNavOpen]= useState(true)
  useEffect(() => {  

    AOS.init({ duration: 2000 }); // Initialize AOS
  }, []);

  const handleToggle = () => {
   setNavOpen(!navOpen)
  };



  return (
    <div>
      <div className="navbar flex justify-between text-white items-center ">
        <div data-aos="fade-right" className=" logo text-white font-bold text-2xl"> <span className='font-extrabold'>IM</span> CODER </div>
       
        <div className="menu-icon cursor-pointer" onClick={handleToggle}>
          {navOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
        </div>
       
       
        <nav>
            <ul  data-aos="flip-left"  className={`nav-menu ${navOpen ? 'open' : 'closed'} flex justify-center items-center gap-8 mr-6`}  >
                <li>  <Link className='link font-extrallight uppercase  text-sm' to="/">Home</Link></li>
                <li>  <Link className='link font-extrallight uppercase  text-sm' to="/about">About</Link></li>
                <li>  <Link className='link font-extrallight uppercase  text-sm' to="/contact">Contact</Link></li>
                <li>  <Link className='link font-extrallight uppercase  text-sm' to="/project">Projects</Link></li>
            </ul>
        </nav>

    
      </div>
    </div>
  )
}

export default Navbar
