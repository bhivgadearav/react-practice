import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <>
        <div className="w-[548.15px] relative z-50 bg-orange-50">
          <header className="pl-[26px] pr-[25.82px] pt-9 pb-[34.62px] left-[0.02px] top-0 absolute bg-orange-50 justify-center items-center gap-[235.21px] inline-flex">
              <NavLink to='/' className="w-[144.51px] text-black text-[25.35px] font-black font-['Inter'] leading-10">
                  #VANLIFE
              </NavLink>
              <div className="grow shrink basis-0 self-stretch relative">
                <NavLink to='host' 
                className={({ isActive }) => 
                isActive ? "w-[51.83px] h-[22.92px] left-[-64.78px] underline top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"
              : "w-[51.83px] h-[22.92px] left-[-64.78px] top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"}
                >
                  Host
                </NavLink>
                <NavLink to='about' 
                className={({ isActive }) => 
                isActive ? "w-[51.83px] h-[22.92px] left-0 underline top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"
              : "w-[51.83px] h-[22.92px] left-0 top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"}
                >
                    About
                </NavLink>
                <NavLink to='vans' 
                className={({ isActive }) => 
                isActive ? "w-[51.83px] h-[22.92px] left-[64.78px] underline top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"
              : "w-[51.83px] h-[22.92px] left-[64.78px] top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-[22.92px]"}
                >
                    Vans
                </NavLink>
              </div>
          </header>
        </div>
        <Outlet />
        </>
    )
}