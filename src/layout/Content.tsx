import '../index.css'
import icon from '../assets/Vector.jpg';
import { ButtonConnect } from '../component/ButtonConnect';

// import Ball from '../assets/ball.png'
// import meo from '../assets/meo.png'
// import fish from '../assets/fish.png'
// import Hear from '../assets/hear.png'
// import Back from '../assets/Back.png'
// import X from '../assets/Social Icons.png'
// import Dis from '../assets/dis.png'
// import left from '../assets/chevron-left.png'
// import right from '../assets/chevron-right.png'

function Content() {
    return (
        <>


            <div className="relative mx-auto flex flex-col items-start gap-20 w-[1008px]  top-[158px]">

                <div className="absolute left-[939px] w-[220px] ">
                    <img className=" w-10 h-9 ml-9 bg-[#D27815] transform -rotate-[9.29deg]" src={icon} alt="" />
                    <img className=" w-10 h-9 mt-2 ml-36 bg-[#D27815] transform -rotate-[9.51deg]" src={icon} alt="" />
                    <img className=" w-10 h-9 mt-4 ml-20 bg-[#D27815] transform -rotate-[9.29deg]" src={icon} alt="" />
                    <img className=" w-10 h-9 mt-2 ml-44 bg-[#D27815] transform -rotate-[9.51deg]" src={icon} alt="" />
                </div>

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
                            <ButtonConnect />
                        </div>
                    </div>
                </div>


            </div></>
    );
}

export default Content;
