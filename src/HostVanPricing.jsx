import React from "react";
import data from "./data";
import { Link, useParams, useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
    const { id } = useOutletContext();
    return (
        <>
        <div className="w-[264.67px] left-[28px] top-[250px] absolute">
            <span className="text-neutral-900 text-xl font-bold font-['Inter'] leading-9">${data[id-1].price}</span>
            <span className="text-neutral-900 text-base font-medium font-['Inter'] leading-9">/day</span>
        </div>
        </>
    )
}