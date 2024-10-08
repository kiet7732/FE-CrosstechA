import '../index.css'
import { useState } from 'react';
import logoV from '../assets/logo.png';
import SVG from '../assets/chevron-down.png';
import { siteMenu } from "../common/site";
import { RouterLink } from "../util/RouterLink";
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [isShifted, setIsShifted] = useState(false);
  const [isN1Active, setIsN1Active] = useState(true);

  const navige = useNavigate();
  const [active, setActive] = useState<string>(RouterLink.Tapos);

  const handleClick = () => {
    setIsShifted(!isShifted);
    setIsN1Active(!isN1Active);
  };

  const handleLogoClick = () => {
    window.location.href = RouterLink.Logo;
  };

  return (
    <div className="w-full h-[740px] bg-gradient-to-b from-white to-[#EADBD7] flex justify-center items-start absolute">
      <div className="w-[1440px] h-[98px] mx-auto relative">
        <div className="absolute w-[1220px] h-[40px] left-[110px] top-[29px]">
          <img
            src={logoV}
            className="w-[52.8px] h-[40px] cursor-pointer"
            alt="Logo"
            onClick={handleLogoClick}
          />
          <div className="flex flex-row items-center absolute w-[407px] h-[24px] left-1/2 transform -translate-x-1/2 top-[10.5px] gap-[32px]">
            {
              siteMenu.map(e => (
                <div
                  onClick={() => {
                    navige(e.link);
                    setActive(e.link);
                  }}
                  className={clsx(
                    active === e.link ? "" : "text-neutral-500",
                    "font-roboto font-medium text-[16px] leading-[19px] cursor-pointer "
                  )}
                >
                  {e.title}
                </div>
              ))
            }

            <div className="flex flex-row items-center text-[#CA5C3B]">
              <div className="flex flex-row items-center gap-[4px] w-[38px] h-[19px]">
                <span className="text-[#CA5C3B]">More</span>
                <img src={SVG} className="w-[24px] h-[24px]" alt="Dropdown Icon" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center absolute w-[150px] h-[34px] left-[1070px] top-[3px] bg-[#EEC5C7] rounded-full p-[2px] gap-[12px] cursor-pointer" onClick={handleClick}>
            <span className={`absolute flex flex-row justify-center items-center w-[76px] h-[30px] bg-[#CA5C3B] rounded-full transition-all duration-300 ease-in-out ${isShifted ? 'ml-[70px]' : ''}`}></span>
            <div id="" className={`w-[65px] h-[22px] font-roboto font-medium text-[14px] leading-[22px] text-black flex-none order-0 flex-grow-0 z-30 absolute transition-all duration-300 ease-in-out ml-[10px] cursor-pointer ${!isShifted ? 'text-white' : 'text-black'}`}><a>Mainnet</a></div>
            <div id="" className={`w-[65px] h-[22px] font-roboto font-medium text-[14px] leading-[22px] text-black flex-none order-0 flex-grow-0 z-30 absolute transition-all duration-300 ease-in-out  ml-[85px] cursor-pointer ${isShifted ? 'text-white' : 'text-black'}`}><a>Testnet</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
