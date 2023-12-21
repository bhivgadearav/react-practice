import React from "react";
import errorImg from '/images/van.png'
import { Link } from "react-router-dom";

export default function Error(){
    return (
        <>
        <div className="w-[548px] h-[563px] relative bg-orange-50">
            <img 
            className="left-[50px] top-[0px] w-[400px] h-[400px] absolute"
            src={errorImg} 
            alt="error image" />
            <div className="w-[494.33px] left-[60px] top-[350px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[42px]">
                Looks like there was an error loading this page..
            </div>
            <footer className="w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-0 top-[489px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}