import React from "react";
import { useState, useEffect } from "react";
import Van from "./Van";
import vans from "./data"

export default function Vans(){
    return(
        <>
        <div className="ProductList w-[548.15px] h-[1451.11px] relative bg-orange-50">
            <div className="w-[494.33px] left-[26.91px] top-[165.86px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[33.65px]">
                Explore our van options
            </div>
            <div className="Text left-[417.79px] top-[228.25px] absolute text-neutral-600 text-base font-medium font-['Inter'] underline leading-normal">
                Clear filters
            </div>
            <section className="Group249 w-[351px] h-[37px] left-[26.79px] top-[222.25px] absolute">
                <div className="SharedButtonLink w-[104px] h-[37px] px-[26px] pt-1.5 pb-[7px] left-0 top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Simple
                    </div>
                </div>
                <div className="SharedButtonLink w-[103px] h-[37px] px-[25px] pt-1.5 pb-[7px] left-[124px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Luxury
                    </div>
                </div>
                <div className="SharedButtonLink w-[104px] h-[37px] pl-[23px] pr-[22px] pt-1.5 pb-[7px] left-[247px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Rugged
                    </div>
                </div>
            </section>
            <main className="h-[1000px] w-[450px] left-7 top-[319.19px] flex flex-row absolute">
                <div className="grid grid-cols-2 gap-x-20 gap-y-20 w-full">
                    <Van type="Simple"/>
                    <Van type="Simple"/>
                    <Van type="Simple"/>
                    <Van type="Simple"/>
                    <Van type="Simple"/>
                    <Van type="Simple"/>
                </div>
            </main>
            <footer className="w-[550px] h-[70px] pl-[107px] pr-[107.13px] pt-[23px] pb-[23.08px] left-[-0.21px] top-[1381.86px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        {/* <div className="ProductList w-[548.15px] h-[1451.11px] relative bg-orange-50">
        <div className="ExploreOurVanOptions w-[494.33px] left-[26.91px] top-[165.86px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[33.65px]">Explore our van options</div>
        <div className="Group236 h-[646.95px] left-[26.91px] top-[314.94px] absolute">
            <div className="Group232 w-[492.34px] h-[407.75px] left-0 top-[239.19px] absolute">
            <div className="Group224 w-[492.34px] h-[41.86px] left-0 top-0 absolute">
                <div className="ModestExplorer w-[159px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">Modest Explorer</div>
                <div className="60 left-[188.35px] top-[-0px] absolute text-right text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">$60</div>
                <div className="Day w-[58.80px] h-3.5 left-[170.43px] top-[27.91px] absolute text-right text-neutral-900 text-sm font-medium font-['Avenir Next'] leading-loose">/day</div>
                <div className="Day w-[58.80px] h-3.5 left-[433.54px] top-[27.91px] absolute text-right text-neutral-900 text-sm font-medium font-['Avenir Next'] leading-loose">/day</div>
            </div>
            <div className="Group204 w-[85.71px] h-[33.89px] left-[0.09px] top-[36.87px] absolute">
                <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-0 absolute bg-red-400 rounded-[5px]" />
            </div>
            <div className="Group204 w-[85.71px] h-[33.89px] left-[265.09px] top-[373.87px] absolute">
                <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-0 absolute bg-red-400 rounded-[5px]" />
                <div className="Simple w-[58.80px] h-[28.90px] left-[13.95px] top-[1.99px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">Simple</div>
            </div>
            </div>
            <img className="Rectangle154 w-[229.23px] h-[229.23px] left-0 top-0 absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        </div>
        <div className="Day w-[58.80px] h-3.5 left-[462.44px] top-[919.90px] absolute text-right text-neutral-900 text-sm font-medium font-['Inter'] leading-loose">/day</div>
        <div className="Day w-[58.80px] h-3.5 left-[462.44px] top-[1257px] absolute text-right text-neutral-900 text-sm font-medium font-['Inter'] leading-loose">/day</div>
        <div className="Day w-[58.80px] h-3.5 left-[197.33px] top-[919.90px] absolute text-right text-neutral-900 text-sm font-medium font-['Inter'] leading-loose">/day</div>
        <div className="Day w-[58.80px] h-3.5 left-[197.33px] top-[1257px] absolute text-right text-neutral-900 text-sm font-medium font-['Inter'] leading-loose">/day</div>
        <div className="Group232 w-[229.23px] h-[309.96px] left-[26.91px] top-[651.80px] absolute">
            <div className="Group224 w-[228.39px] h-8 left-0 top-[239.19px] absolute">
            <div className="ReliableRed w-[119px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">Reliable Red</div>
            <div className="100 left-[178.39px] top-0 absolute text-right text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">$100</div>
            </div>
            <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-[276.08px] absolute bg-neutral-900 rounded-[5px]" />
            <img className="AlpertWangRxql0iefBsUnsplash1 w-[229.23px] h-[229.23px] left-0 top-0 absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        </div>
        <div className="Group240 w-[229.23px] h-[367.63px] left-[26.91px] top-[931px] absolute">
            <div className="Group232 w-[228.39px] h-[367.63px] left-0 top-0 absolute">
            <div className="Group224 w-[228.39px] h-8 left-0 top-[296.86px] absolute">
                <div className="TheCruiser w-[114px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">The Cruiser</div>
                <div className="120 w-[49px] left-[179.39px] top-0 absolute text-right text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">$120</div>
            </div>
            <div className="Group204 w-[85.71px] h-[367.63px] left-0 top-0 absolute">
                <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-[333.74px] absolute bg-neutral-900 rounded-[5px]" />
                <div className="Luxury w-[58.80px] h-[28.90px] left-[13.95px] top-[335.73px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">Luxury</div>
                <div className="Luxury w-[58.80px] h-[28.90px] left-[14.09px] top-0 absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">Luxury</div>
            </div>
            </div>
            <img className="Rectangle154 w-[229.23px] h-[229.23px] left-0 top-[57.66px] absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        </div>
        <div className="Group232 w-[228.39px] h-[68.77px] left-[26.91px] top-[1564.72px] absolute">
            <div className="Group224 w-[228.39px] h-[68.60px] left-0 top-0 absolute">
            <div className="VanTitle left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Avenir Next'] leading-loose">Van title</div>
            <div className="100 left-[179.39px] top-0 absolute text-right text-neutral-900 text-xl font-semibold font-['Avenir Next'] leading-loose">$100</div>
            <div className="Group204 w-[75.74px] h-[33.72px] left-[4.98px] top-[34.88px] absolute">
                <div className="Rectangle140 w-[75.74px] h-[33.72px] left-0 top-0 absolute bg-amber-200 rounded-[9.97px]" />
                <div className="Dog w-[40.98px] h-[29.07px] left-[16.94px] top-[0.83px] absolute text-center text-neutral-900 text-base font-semibold font-['Avenir Next'] leading-loose">Dog</div>
            </div>
            </div>
            <div className="Group204 w-[85.71px] h-[33.89px] left-0 top-[34.88px] absolute">
            <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-0 absolute bg-amber-200 rounded-[9.97px]" />
            <div className="Simple w-[58.80px] h-[28.90px] left-[13.95px] top-[1.99px] absolute text-center text-neutral-900 text-base font-semibold font-['Avenir Next'] leading-loose">Simple</div>
            </div>
        </div>
        <div className="Group224 w-[228.35px] h-8 left-[292.02px] top-[554.13px] absolute">
            <div className="BeachBum w-[109px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">Beach Bum</div>
            <div className="80 left-[191.35px] top-[-0px] absolute text-right text-neutral-900 text-xl font-semibold font-['Avenir Next'] leading-loose">$80</div>
        </div>
        <div className="Group239 h-[271.19px] left-[292.02px] top-[651.80px] absolute">
            <div className="Group224 w-[228.35px] h-8 left-0 top-[239.19px] absolute">
            <div className="Dreamfinder w-[167.44px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Avenir Next'] leading-loose">Dreamfinder</div>
            <div className="65 w-[37px] left-[191.35px] top-0 absolute text-right text-neutral-900 text-xl font-semibold font-['Avenir Next'] leading-loose">$65</div>
            </div>
            <img className="Rectangle154 w-[229.23px] h-[229.23px] left-0 top-0 absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        </div>
        <div className="Group232 w-[228.35px] h-[70.77px] left-[292.02px] top-[1227.86px] absolute">
            <div className="Group224 w-[228.35px] h-8 left-0 top-0 absolute">
            <div className="GreenWonder w-[140px] left-0 top-0 absolute text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">Green Wonder</div>
            <div className="70 w-[38px] left-[190.35px] top-0 absolute text-right text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">$70</div>
            </div>
            <div className="Group204 w-[85.71px] h-[33.89px] left-0 top-[36.88px] absolute">
            <div className="Rectangle140 w-[85.71px] h-[33.89px] left-0 top-0 absolute bg-teal-800 rounded-[5px]" />
            <div className="Rugged w-16 h-[29px] left-[10.98px] top-[2.26px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">Rugged</div>
            </div>
        </div>
        <img className="Rectangle154 w-[229.23px] h-[229.23px] left-[290.02px] top-[314.94px] absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        <img className="Rectangle155 w-[229.23px] h-[229.23px] left-[292.02px] top-[988.67px] absolute rounded-[5px]" src="https://via.placeholder.com/229x229" />
        <div className="Frame24 w-[550px] h-[70px] pl-[107px] pr-[107.13px] pt-[23px] pb-[23.08px] left-[-0.21px] top-[1381.86px] absolute bg-neutral-800 justify-center items-center inline-flex">
            <div className="2022Vanlife w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">Ⓒ 2022 #VANLIFE</div>
        </div>
        <div className="Frame26 pl-[26px] pr-[25.82px] pt-9 pb-[34.62px] left-0 top-0 absolute bg-orange-50 justify-center items-center gap-[235.21px] inline-flex">
            <div className="Vanlife w-[144.51px] text-black text-[25.35px] font-black font-['Inter'] leading-10">#VANLIFE</div>
            <div className="Group207 grow shrink basis-0 self-stretch relative">
            <div className="About w-[51.83px] h-[22.92px] left-0 top-0 absolute text-right text-neutral-600 text-base font-semibold font-['Inter'] leading-[22.92px]">About</div>
            <div className="Vans w-[51.83px] h-[22.92px] left-[64.78px] top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] underline leading-[22.92px]">Vans</div>
            </div>
        </div>
        <div className="Text left-[417.79px] top-[228.25px] absolute text-neutral-600 text-base font-medium font-['Inter'] underline leading-normal">Clear filters</div>
        <div className="Group249 w-[351px] h-[37px] left-[26.79px] top-[222.25px] absolute">
            <div className="SharedButtonLink w-[104px] h-[37px] px-[26px] pt-1.5 pb-[7px] left-0 top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
            <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">Simple</div>
            </div>
            <div className="SharedButtonLink w-[103px] h-[37px] px-[25px] pt-1.5 pb-[7px] left-[124px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
            <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">Luxury</div>
            </div>
            <div className="SharedButtonLink w-[104px] h-[37px] pl-[23px] pr-[22px] pt-1.5 pb-[7px] left-[247px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
            <div className="Text text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">Rugged</div>
            </div>
        </div>
        </div> */}
        </>
    )
}