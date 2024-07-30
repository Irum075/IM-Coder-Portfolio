import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
function Footer() {
  return (
    <div>
  <div>
    <footer>
    <h3 className="text-gray-500 bg-gray-900 p-4  text-center">Connect with me on social media:</h3>
    <div className="social-links">
      <div className="p-10 bg-[#171717]">
      <div className="social-icon flex justify-center items-center space-x-6 mr-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 cursor-pointer hover:bg-text-color  border-text-color p-2 rounded-full  "
          >
            <FaFacebookF size={18} color="White" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 cursor-pointer hover:bg-text-color  border-text-color  p-2 rounded-full  "
          >
            <FaInstagram size={18} color="WHite" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-700 cursor-pointer hover:bg-text-color  border-text-color p-2 rounded-full  "
          >
            <FaLinkedinIn size={18} color="White" />
          </a>
        </div>
      </div>
    </div>
    <h3 className="text-center bg-gray-900 text-gray-200 text-sm py-3">Copyright: © 2024 Irum. All rights reserved.</h3>
    </footer>
    </div>    
  
    </div>
  )
}

export default Footer
