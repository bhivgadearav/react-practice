import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <>
        <div className="w-[548px] h-[563px] relative bg-orange-50">
            <div className="w-[494.33px] left-[26px] top-[215px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[42px]">
                Sorry, the page you were looking for was not found.
            </div>
            <section className="w-[494.33px] h-[55px] left-[26px] top-[328.59px] absolute">
                <div className="w-[494.33px] h-[55px] left-0 top-0 absolute bg-neutral-900 rounded-[4.98px]" />
                <Link to='/' className="w-[207.90px] h-[30.09px] left-[142.94px] top-[12.40px] absolute text-center text-white text-lg font-bold font-['Inter'] leading-loose">
                    Return to home
                </Link>
            </section>
            <footer className="w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-0 top-[489px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}