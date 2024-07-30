{/*import { useTheme } from "next-themes";
import { MagicCard } from "../Components/Ui/MagicCard";
import Responsive from "../assets/Responsive.png";
import RestAPi from "../assets/RestApi.png";
import UxUi from "../assets/UxUi.png";
import Webdesign from "../assets/Webdesign.png";

function Serve() {
  const { theme } = useTheme();

  return (
    <div className=" mt-28 serve flex flex-col justify-center items-center ">
      <p className="text-text-color text-center font-semibold text-sm">
        Which Services I Offer
      </p>
      <h2 className="text-white text-center text-3xl tracking-widest mt-2 mb-10 md:text-4xl lg:text-6xl lg:my-4 lg:tracking-wide">
        What I<span> Offer</span>
      </h2>

      <div className="mx-10 mt-20 mb-20 gap-6 serve-cards  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MagicCard
          className=" serve-design border-gray-900 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={Responsive} />
            <h3 className="text-2xl font-semibold">Responsive Website</h3>
          </div>
        </MagicCard>

        <MagicCard
          className=" serve-design border-gray-900 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={UxUi} />
            <h3 className="text-2xl font-semibold">Ux/Ui Design</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design  cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={Webdesign} />
            <h3 className="text-2xl font-semibold">Web Design</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={RestAPi} />
            <h3 className="text-2xl font-semibold">API Integration</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={Webdesign} />
            <h3 className="text-2xl font-semibold">SEO Optimization</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px]  flex flex-col justify-center items-center  w-[300px] rounded">
            <img src={Responsive} />
            <h3 className="text-2xl font-semibold">Web Maintenance</h3>
          </div>
        </MagicCard>

 
      </div>
      <div className="button-container text-center my-20">
        <button className="button">Explore More </button>
    </div>
   

    </div>
  );
}

export default Serve;*/}



import { useTheme } from "next-themes";
import { MagicCard } from "../Components/Ui/MagicCard";
import Responsive from "../assets/Responsive.png";
import RestAPi from "../assets/RestApi.png";
import UxUi from "../assets/UxUi.png";
import Webdesign from "../assets/Webdesign.png";

function Serve() {
  const { theme } = useTheme();

  return (
    <div className="mt-28 serve flex flex-col justify-center items-center">
      <p className="text-text-color text-center font-semibold text-sm">
        Which Services I Offer
      </p>
      <h2 className="text-white text-center text-3xl tracking-widest mt-2 mb-10 md:text-4xl lg:text-6xl lg:my-4 lg:tracking-wide">
        What I<span> Offer</span>
      </h2>

      <div className="serve-cards mx-10 mt-20 mb-20 gap-6 ">
        <MagicCard
          className="serve-design border-gray-900 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={Responsive} alt="Responsive Website" />
            <h3 className="text-2xl font-semibold">Responsive Website</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="serve-design border-gray-900 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={UxUi} alt="Ux/Ui Design" />
            <h3 className="text-2xl font-semibold">Ux/Ui Design</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={Webdesign} alt="Web Design" />
            <h3 className="text-2xl font-semibold">Web Design</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={RestAPi} alt="API Integration" />
            <h3 className="text-2xl font-semibold">API Integration</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={Webdesign} alt="SEO Optimization" />
            <h3 className="text-2xl font-semibold">SEO Optimization</h3>
          </div>
        </MagicCard>

        <MagicCard
          className="border-gray-900 serve-design cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#DF00FF" : "#DF00FF"}
        >
          <div className="serve-card border-gray-900 text-white h-[175px] flex flex-col justify-center items-center w-[300px] rounded">
            <img src={Responsive} alt="Web Maintenance" />
            <h3 className="text-2xl font-semibold">Web Maintenance</h3>
          </div>
        </MagicCard>
      </div>

      <div className="button-container text-center my-20">
        <button className="button">Explore More</button>
      </div>
    </div>
  );
}

export default Serve;
