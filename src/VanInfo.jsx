import React from "react";
import data from "./data";

export default function VanInfo(props){
    return(
        <>
        <div className="w-[548.15px] h-[1259.75px] relative bg-orange-50">
            <div className="left-[26.91px] top-[151.49px] absolute">
                <div className="text-stone-900 text-base font-medium font-['Inter'] underline leading-[22.92px]">
                    Back to all vans
                </div>
            </div>
            <div className="w-[494.33px] left-[26.91px] top-[810.27px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[33.65px]">
                {data[0].name}
            </div>
            <div className="w-[494.33px] left-[26.91px] top-[854px] absolute">
                <span className="text-neutral-900 text-2xl font-bold font-['Inter'] leading-[44.15px]">
                    {data[0].price}
                </span>
                <span className="text-neutral-900 text-xl font-medium font-['Inter'] leading-[44.15px]">
                    /day
                </span>
            </div>
            <div className="w-[494.33px] left-[26.91px] top-[908.81px] absolute text-neutral-900 text-base font-medium font-['Inter'] leading-normal">
                {data[0].description}
            </div>
            <div className="w-[494.33px] h-[49.83px] left-[26.91px] top-[1050.46px] absolute">
                <div className="w-[494.33px] h-[49.83px] left-0 top-0 absolute bg-orange-400 rounded-[4.98px]" />
                <div className="w-[207.90px] h-[30.09px] left-[143.52px] top-[9.97px] absolute text-center text-white text-lg font-bold font-['Inter'] leading-loose">Rent this van</div>
            </div>
            <img className="w-[497.32px] h-[490.35px] left-[26.91px] top-[215.27px] absolute rounded-[5px]" src={data[0].image} />
            <div className="w-[85.71px] h-[33.89px] left-[27.06px] top-[756px] absolute">
                <div className={ 
                    data[0].type === "simple" ? "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-red-400" : 
                    data[0].type === "luxury" ? "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-neutral-900" : 
                    "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-teal-800" 
                    }>
                    <div className="w-[58.80px] h-[28.90px] left-[13.95px] top-[1.99px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">
                        {data[0].type === "simple" ? "Simple" : 
                        data[0].type === "luxury" ? "Luxury" : 
                        "Rugged"}
                    </div>
                </div>
            </div>
            <footer className="Frame25 w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-[0.06px] top-[1185px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="2022Vanlife w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}