import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostNav() {
    return(
        <>
        <div className="w-[548px] h-[50px] z-30 top-[-50px] relative bg-orange-50">
            <Link to='/host' className="w-[98px] h-[21px] left-[26px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]">
                Dashboard
            </Link>
            <Link to='/host/vans' className="w-12 h-[21px] left-[249px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]">
                Vans
            </Link>
            <Link to='/host/reviews' className="w-[75px] h-[21px] left-[326px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]">
                Reviews
            </Link>
            <Link to='/host/income' className="w-[67px] h-[21px] left-[153px] top-[144px] absolute text-neutral-900 text-lg font-bold font-['Inter'] leading-[22.92px]">
                Income
            </Link>
            <Outlet />
        </div>
        </>
    )
}