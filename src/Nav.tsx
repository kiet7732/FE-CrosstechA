import { useState } from 'react';
import logoV from './assets/logo.png';
import SVG from './assets/chevron-down.png';

function Nav() {
  const [isShifted, setIsShifted] = useState(false);
  const [isN1Active, setIsN1Active] = useState(true);

  const handleClick = () => {
    setIsShifted(!isShifted);
    setIsN1Active(!isN1Active);
  };

  return (
    <div className="Nav">
      <div className="Nav-center">
        <img src={logoV} id="LogoV" className="absolute w-14 h-10" />
        <div className="Item-N flex flex-row items-center absolute w-[407px] h-6 left-1/2 transform -translate-x-1/2 top-2.5 gap-8">
          <div className="font-roboto font-medium text-lg leading-5">Tapos</div>
          <div className="font-roboto font-medium text-lg leading-5 text-gray-500">Wallet</div>
          <div className="font-roboto font-medium text-lg leading-5 text-gray-500">Leaderboard</div>
          <div className="font-roboto font-medium text-lg leading-5 text-gray-500">Shop</div>
          <div className="More flex flex-row items-center text-orange-600">
            <div className="font-roboto font-medium text-lg leading-5">More</div>
            <img src={SVG} id="SVG" className="w-6 h-6" />
          </div>
        </div>
        <div className="Mode-N flex flex-row items-center absolute w-40 h-8 left-[1070px] top-0.75 bg-pink-200 rounded-full relative p-1.5 gap-3" onClick={handleClick}>
          <span className={`boder ${isShifted ? 'shifted' : ''} absolute flex flex-row justify-center items-center w-19 h-7 bg-orange-600 rounded-full transition-all duration-300 ease-in-out`}></span>
          <div id="N-1" className="absolute left-1.5 z-3 text-sm font-medium leading-[22px]" style={{ color: !isShifted ? 'white' : 'black' }}><a>Mainnet</a></div>
          <div id="N-2" className="absolute right-1.5 z-3 text-sm font-medium leading-[22px]" style={{ color: isShifted ? 'white' : 'black' }}><a>Testnet</a></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
