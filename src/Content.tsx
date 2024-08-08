import './index.css'
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
        <>
            <div className="relative">
                <img className="absolute w-10 h-9 left-[1302px] top-[140.47px] bg-[#D27815] transform -rotate-[9.29deg]" src={icon} alt="" />
                <img className="absolute w-10 h-9 left-[1199px] top-[58.31px] bg-[#D27815] transform -rotate-[9.51deg]" src={icon} alt="" />
            </div>
            <div className="absolute flex flex-col items-start gap-20 w-[1008px] h-[2006px] left-[216px] top-[158px]">
                <div className="flex flex-col items-center gap-4 w-[1008px] h-[297px]">
                    <div className="text-[40px] font-bold text-black">Sosial Tasks</div>
                    <div className="text-center text-[14px] text-[#6B6B6B]">Complete the Social Tasks to earn extra $Heart token</div>
                    <div className="flex flex-row items-center gap-4 p-6 w-[1008px] h-[196px] bg-white border-2 border-[#EEC5C7] rounded-lg">
                        <div className="flex flex-col items-start gap-6 w-[489px] h-[148px]">
                            <div className="text-[24px] font-medium text-black">Connect Your X account</div>
                            <div className="flex flex-col items-start gap-1 w-[489px] h-[40px]">
                                <div className="text-[14px] font-medium text-[#5A5A5A]">You need connect your X account to join Social Task</div>
                                <div className="text-[14px] font-normal text-[#0D88D8]"><a href="">Learn more {'>'}</a></div>
                            </div>
                            <button className="flex flex-row justify-center items-center gap-4 p-2.5 w-[235px] h-[40px] bg-[#CA5C3B] rounded-full text-white font-medium text-[16px]">Connect your X account</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4 w-[1008px] h-[332px]">
                    <div className="flex flex-row items-start gap-2 w-[120px] h-[40px]">
                        <img src={left} className="flex justify-center items-center gap-2 w-[56px] h-[40px] bg-white border-2 border-[#EEC5C7] rounded-full cursor-pointer" alt="left" />
                        <img src={right} className="flex justify-center items-center gap-2 w-[56px] h-[40px] bg-white border-2 border-[#EEC5C7] rounded-full cursor-pointer" alt="right" />
                    </div>

                    <div className="flex flex-row items-start gap-6 w-[1008px] h-[276px]">

                        <div className="relative flex-shrink-0 w-[320px] h-[276px] bg-white border-2 border-[#EEC5C7] rounded-[30px] overflow-hidden z-1">
                            <img src={Ball} className="absolute left-[61.4%] bottom-[71.74%]" alt="ball" />
                            <img src={meo} className="absolute left-[81%] top-[-1%] bottom-[56.74%]" alt="meo" />
                            <img src={fish} className="absolute left-[83.12%] top-[24.64%] bottom-[61.72%]" alt="fish" />

                            <img src={X} className="absolute w-9 h-9 left-[11.5%] top-[13%] z-4" alt="X" />
                            <img src={Back} className="absolute left-[7%] right-[71.08%] top-[9%] bottom-[67.39%] " alt="Back" />

                            <div className="absolute flex flex-row items-start gap-2 w-[259px] h-[126.86px] left-[50%] translate-x-[-50%] top-[131px]">
                                <div className="flex flex-col items-start gap-6 w-[259px] h-[126.86px]">
                                    <div className="flex flex-col items-start gap-1 w-[259px] h-[62.86px]">
                                        <div className="text-[24px] font-bold text-black">Follow Tapos X</div>
                                        <div className="text-[14px] font-medium text-black">Follow Tapos X to earn Points</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 w-[259px] h-[40px]">
                                        <div className="flex justify-center items-center gap-2.5 p-2.5 w-[100px] h-[40px] bg-[#F5EEEC] rounded-full cursor-pointer">+20 <img src={Hear} alt="heart" /></div>
                                        <button className="flex justify-center items-center gap-4 p-2.5 w-[143px] h-[40px] border border-[#CDD5DF] rounded-full text-[#CDD5DF] font-medium text-[16px]">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-shrink-0 w-[320px] h-[276px] bg-white border-2 border-[#EEC5C7] rounded-[30px] overflow-hidden z-1">
                            <img src={Ball} className="absolute left-[61.4%] bottom-[71.74%]" alt="ball" />
                            <img src={meo} className="absolute left-[81%] top-[-1%] bottom-[56.74%]" alt="meo" />
                            <img src={fish} className="absolute left-[83.12%] top-[24.64%] bottom-[61.72%]" alt="fish" />

                            <img src={X} className="absolute w-9 h-9 left-[11.5%] top-[13%] z-4" alt="X" />
                            <img src={Back} className="absolute left-[7%] right-[71.08%] top-[9%] bottom-[67.39%] " alt="Back" />

                            <div className="absolute flex flex-row items-start gap-2 w-[259px] h-[126.86px] left-[50%] translate-x-[-50%] top-[131px]">
                                <div className="flex flex-col items-start gap-6 w-[259px] h-[126.86px]">
                                    <div className="flex flex-col items-start gap-1 w-[259px] h-[62.86px]">
                                        <div className="text-[24px] font-bold text-black">Follow Tapos X</div>
                                        <div className="text-[14px] font-medium text-black">Follow Tapos X to earn Points</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 w-[259px] h-[40px]">
                                        <div className="flex justify-center items-center gap-2.5 p-2.5 w-[100px] h-[40px] bg-[#F5EEEC] rounded-full cursor-pointer">+20 <img src={Hear} alt="heart" /></div>
                                        <button className="flex justify-center items-center gap-4 p-2.5 w-[143px] h-[40px] border border-[#CDD5DF] rounded-full text-[#CDD5DF] font-medium text-[16px]">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-shrink-0 w-[320px] h-[276px] bg-white border-2 border-[#EEC5C7] rounded-[30px] overflow-hidden z-1">
                            <img src={Ball} className="absolute left-[61.4%] bottom-[71.74%]" alt="ball" />
                            <img src={meo} className="absolute left-[81%] top-[-1%] bottom-[56.74%]" alt="meo" />
                            <img src={fish} className="absolute left-[83.12%] top-[24.64%] bottom-[61.72%]" alt="fish" />

                            <img src={Dis} className="absolute w-9 h-9 left-[11.5%] top-[13%] z-4" alt="X" />
                            <img src={Back} className="absolute left-[7%] right-[71.08%] top-[9%] bottom-[67.39%] " alt="Back" />

                            <div className="absolute flex flex-row items-start gap-2 w-[259px] h-[126.86px] left-[50%] translate-x-[-50%] top-[131px]">
                                <div className="flex flex-col items-start gap-6 w-[259px] h-[126.86px]">
                                    <div className="flex flex-col items-start gap-1 w-[259px] h-[62.86px]">
                                        <div className="text-[24px] font-bold text-black">Follow Tapos X</div>
                                        <div className="text-[14px] font-medium text-black">Follow Tapos X to earn Points</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-4 w-[259px] h-[40px]">
                                        <div className="flex justify-center items-center gap-2.5 p-2.5 w-[100px] h-[40px] bg-[#F5EEEC] rounded-full cursor-pointer">+20 <img src={Hear} alt="heart" /></div>
                                        <button className="flex justify-center items-center gap-4 p-2.5 w-[143px] h-[40px] border border-[#CDD5DF] rounded-full text-[#CDD5DF] font-medium text-[16px]">Follow</button>
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
