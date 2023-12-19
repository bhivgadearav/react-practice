import React from "react";
import { Link } from "react-router-dom";

export default function HostVans(){
    return (
        <>
        <div className="w-[548px] h-[763px] relative bg-orange-50">
            <div className="w-[548px] h-[75px] pl-[106px] pr-[106.13px] pt-[25.68px] pb-[25.40px] left-0 top-[688px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">Ⓒ 2022 #VANLIFE</div>
            </div>
            <div className="w-[494.33px] left-[26.12px] top-[220px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[33.65px]">Your listed vans</div>
            <Link to='1' className="w-[494px] h-[102px] left-[26px] top-[286px] absolute">
                <div className="w-[494px] h-[102px] left-0 top-0 absolute bg-white rounded-md" />
                <div className="w-[411px] h-[66px] left-[24px] top-[18px] absolute">
                    <img className="w-[65.88px] h-[65.88px] left-[0.12px] top-[0.08px] absolute rounded-[5px]" src="/images/modest-explorer.png" />
                    <div className="w-[328px] left-[83px] top-[7px] absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
                        Modest Explorer
                    </div>
                    <div className="w-[139px] h-5 left-[83px] top-[39px] absolute text-neutral-600 text-base font-medium font-['Inter'] leading-loose">
                        $60/day
                    </div>
                </div>
            </Link>
            <Link to='2' className="w-[494px] h-[102px] left-[27px] top-[403px] absolute">
                <div className="w-[494px] h-[102px] left-0 top-0 absolute bg-white rounded-md" />
                <div className="w-[411px] h-[66px] left-[24px] top-[18px] absolute">
                    <img className="w-[66px] h-[66px] left-0 top-0 absolute rounded-[5px]" src="/images/beach-bum.png" />
                    <div className="w-[328px] left-[83px] top-[7px] absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
                        Beach Bum
                    </div>
                    <div className="w-[139px] h-5 left-[83px] top-[39px] absolute text-neutral-600 text-base font-medium font-['Inter'] leading-loose">
                        $80/day
                    </div>
                </div>
            </Link>
            <Link to='6' className=" w-[494px] h-[102px] left-[26px] top-[520px] absolute">
                <div className="w-[494px] h-[102px] left-0 top-0 absolute bg-white rounded-md" />
                <div className="w-[231px] h-[66px] left-[24px] top-[18px] absolute">
                    <img className="w-[66px] h-[66px] left-0 top-0 absolute rounded-[5px]" src="/images/green-wonder.png" />
                    <div className="w-[148px] left-[83px] top-[7px] absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
                        Green Wonder
                    </div>
                    <div className="w-[139px] h-5 left-[83px] top-[39px] absolute text-neutral-600 text-base font-medium font-['Inter'] leading-loose">
                        $70/day
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}
