import React from "react";
import data from "./data";
import { Link, useParams, useOutletContext } from "react-router-dom";

export default function HostVanDetails(){
    const { id } = useOutletContext();
    return (
        <>
        <div className="w-[443.50px] left-[25px] top-[328px] absolute">
            <span className="text-neutral-900 text-sm font-bold font-['Inter'] leading-snug">Description: </span>
            <span className="text-neutral-900 text-sm font-medium font-['Inter'] leading-snug">{data[id-1].description}</span>
            </div>
        <div className="w-[443.50px] left-[25px] top-[254px] absolute">
            <span className="text-neutral-900 text-sm font-bold font-['Inter'] leading-snug">Name:</span>
            <span className="text-neutral-900 text-sm font-medium font-['Inter'] leading-snug">{data[id-1].name}</span>
        </div>
        <div className="w-[443.50px] left-[25px] top-[291px] absolute">
            <span className="text-neutral-900 text-sm font-bold font-['Inter'] leading-snug">Category:</span>
            <span className="text-neutral-900 text-sm font-medium font-['Inter'] leading-snug">{data[id-1].type}</span>
        </div>
        <div className="w-[443.50px] left-[25px] top-[420px] absolute">
            <span className="text-neutral-900 text-sm font-bold font-['Inter'] leading-snug">Visibility:</span>
            <span className="text-neutral-900 text-sm font-medium font-['Inter'] leading-snug"> Public</span>
        </div>
        </>
    )
}