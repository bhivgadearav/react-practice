import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function HostNav() {
    return(
        <>
        <div className="w-[548px] z-40 relative bg-orange-50">
            <NavLink to='/host' 
            end
            className={({ isActive }) => 
            isActive ? "underline w-[98px] h-[21px] left-[26px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"
            : "w-[98px] h-[21px] left-[26px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"}
            >
                Dashboard
            </NavLink>
            <NavLink to='vans' 
            className={({ isActive }) => 
            isActive ? "underline w-12 h-[21px] left-[249px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"
            : "w-12 h-[21px] left-[249px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"}
           >
                Vans
            </NavLink>
            <NavLink to='reviews' 
            className={({ isActive }) => 
            isActive ? "underline w-[75px] h-[21px] left-[326px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"
            : "w-[75px] h-[21px] left-[326px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"}
            >
                Reviews
            </NavLink>
            <NavLink to='income' 
            className={({ isActive }) => 
            isActive ? "underline w-[67px] h-[21px] left-[153px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"
            : "w-[67px] h-[21px] left-[153px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]"}
            >
                Income
            </NavLink>
        </div>
        <Outlet />
        </>
    )
}