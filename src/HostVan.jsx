import React from "react";
import data from "./data";
import { Link, useParams, Outlet, NavLink, useOutletContext } from "react-router-dom";

export default function HostVan(props){
    const { id } = useParams();
    return (
        <>
        <div className="w-[548px] h-[905px] relative bg-orange-50">
        <div className="left-[30px] top-[230px] absolute">
                <Link to=".." relative="path" className="text-stone-900 text-base font-medium font-['Inter'] underline leading-[22.92px]">
                    Back to all vans
                </Link>
            </div>
            <div className="w-[496px] h-[499px] left-[26px] top-[286px] absolute">
                <div className="w-[496px] h-[499px] left-0 top-0 absolute bg-white rounded-md" />
                <NavLink to={`/host/vans/${id}`} 
                end
                className={({ isActive }) => 
                isActive ? "underline w-[59.21px] h-[18.84px] left-[25px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"
                : "w-[59.21px] h-[18.84px] left-[25px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"}
                >
                    Details
                </NavLink>
                <NavLink to={`photos`} 
                className={({ isActive }) => 
                isActive ? "underline w-[59.21px] h-[18.84px] left-[188.29px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"
                : "w-[59.21px] h-[18.84px] left-[188.29px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"}
                >
                    Photos
                </NavLink>
                <NavLink to={`pricing`} 
                className={({ isActive }) => 
                isActive ? "underline w-[55.62px] h-[18.84px] left-[105.75px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"
                : "w-[55.62px] h-[18.84px] left-[105.75px] top-[207.82px] absolute text-neutral-900 text-base font-bold font-['Inter'] leading-tight"}
                >
                    Pricing
                </NavLink>
                <img className="w-[160.15px] h-[157.90px] left-[25px] top-[23px] absolute rounded-[5px]" src={data[id-1].image} />
                <Outlet context={{id: id}} />
            </div>
            <div className="w-[264.67px] left-[231px] top-[360px] absolute text-neutral-900 text-[26.06px] font-bold font-['Inter'] leading-7">{data[id-1].name}</div>
            <div className="w-[264.67px] left-[231px] top-[400px] absolute">
                <span className="text-neutral-900 text-xl font-bold font-['Inter'] leading-9">{data[id-1].price}$</span>
                <span className="text-neutral-900 text-base font-medium font-['Inter'] leading-9">/day</span>
            </div>
            <footer className="w-[548px] h-[75px] pl-[106px] pr-[106.13px] pt-[25.68px] pb-[25.40px] left-0 top-[830px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}