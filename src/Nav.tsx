
import React, { useState } from 'react';
import logoV from './assets/logo.png'
import SVG from './assets/chevron-down.png'
import './Nav.css'
function Nav() {

    const [isShifted, setIsShifted] = useState(false);
  const [isN1Active, setIsN1Active] = useState(true); // Trạng thái mới để theo dõi phần tử đang active

  const handleClick = () => {
    setIsShifted(!isShifted);
    setIsN1Active(!isN1Active); // Đảo ngược trạng thái khi click
  };

    return (
        <div className="Nav">
            <div className="Nav-center">
                <img src={logoV} id="LogoV" />
                <div className="Item-N">
                    <div>Tapos</div>
                    <div>Wallet</div>
                    <div>Leaderboard</div>
                    <div>Shop</div>
                    <div className="More">
                        <div>More</div>
                        <img src={SVG} id="SVG" />
                    </div>
                </div>
                <div className="Mode-N" onClick={handleClick}>
                    <span className={`boder ${isShifted ? 'shifted' : ''}`}></span>
                    <div id="N-1" style={{ color: !isShifted ? 'white' : 'black' }}><a>Mainnet</a></div>
                    <div id="N-2" style={{ color: isShifted ? 'white' : 'black' }}><a>Testnet</a></div>
                </div>
            </div>
        </div>
    );
}

export default Nav