import './Content.css'
import icon from './assets/Vector.jpg'
import Ball from './assets/ball.png'
import meo from './assets/meo.png'
import fish from './assets/fish.png'
import Hear from './assets/hear.png'
import Back from './assets/Back.png'
import X from './assets/Social Icons.png'
import Dis from './assets/dis.png'
import left from './assets/chevron-left.png'
import right from './assets/chevron-right.png'

function Content() {
    return (
        <><div className="icon">
            <img id="icon-1" className="Icon" src={icon} alt="" />
            <img id="icon-2" className="Icon" src={icon} alt="" />
            <img id="icon-3" className="Icon" src={icon} alt="" />
            <img id="icon-4" className="Icon" src={icon} alt="" />
        </div><div className="Main">

                <div className="Social-Tasks">
                    <div id="text-1">Sosial Tasks</div>
                    <div id="text-2">Complete the Social Tasks to earn extra $Heart token</div>
                    <div className="Connect-Y">
                        <div className="box">

                            <div id="text-3">Connect Your X account</div>
                            <div className="text-link">
                                <div className="text-4">You need connect your X account to join Social Task</div>
                                <div className="Text-5"><a href="">Learn more {'>'}</a></div>
                            </div>

                            <button id="Button"><p>Connect your X account</p></button>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="Chevron">
                            <img src={left} className="C-left"></img>
                            <img src={right} className="C-right"></img>
                        </div>
                    <div className="Item">
                       

                        <div className="Box-Icon">
                            <img src={Ball} id="I-ball" />
                            <img src={meo} id="I-meo" />
                            <img src={fish} id="I-fish" />
                            <div className="Icons">
                                <img src={X} id="X" />
                                <img src={Back} id="Back" />
                            </div>

                            <div className="Box-Text">
                                <div className="Box-i">
                                    <div className="B-text">
                                        <div className="textB-1">Follow Tapos X</div>
                                        <div className="textB-2">Follow Tapos X to earn Points</div>
                                    </div>
                                    <div className="B-icon">
                                        <div className="I-like">+20 <img src={Hear} alt="" /></div>
                                        <button className="Follow">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Box-Icon">
                            <img src={Ball} id="I-ball" />
                            <img src={meo} id="I-meo" />
                            <img src={fish} id="I-fish" />
                            <div className="Icons">
                                <img src={X} id="X" />
                                <img src={Back} id="Back" />
                            </div>

                            <div className="Box-Text">
                                <div className="Box-i">
                                    <div className="B-text">
                                        <div className="textB-1">Retweet post on X</div>
                                        <div className="textB-2">Retweet Tapos post on X to earn Points</div>
                                    </div>
                                    <div className="B-icon">
                                        <div className="I-like">+20 <img src={Hear} alt="" /></div>
                                        <button className="Follow">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Box-Icon">
                            <img src={Ball} id="I-ball" />
                            <img src={meo} id="I-meo" />
                            <img src={fish} id="I-fish" />
                            <div className="Icons">
                                <img src={Dis} id="X" />
                                <img src={Back} id="Back" />
                            </div>

                            <div className="Box-Text">
                                <div className="Box-i">
                                    <div className="B-text">
                                        <div className="textB-1">Joint VibrantX Discord</div>
                                        <div className="textB-2">Retweet a daily tweet to earn HEART</div>
                                    </div>
                                    <div className="B-icon">
                                        <div className="I-like">+20 <img src={Hear} alt="" /></div>
                                        <button className="Follow">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div></>
    );
}

export default Content;
