import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Van(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
        <Link state={{query: searchParams.toString()}} to={props.id}> 
            <div className="w-[492.34px] h-[41.86px]">
                <div className="relative max-w-xl mx-auto">
                    <img className="w-[229.23px] h-[229.23px] rounded-[5px]" src={props.image} />
                    <div className="absolute top-0 left-[153.8px] w-[75px] h-[40px] rounded-[5px] flex items-center bg-indigo-500 justify-center">
                        <h2 className="text-white text-base font-bold">{props.price}$/day</h2>
                    </div>
                </div>
                <div className="flex">
                    <div className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
                        {props.name}
                    </div>
                </div>
                <div className="w-[85.71px] h-[33.89px] top-0 relative">
                    <div className={ 
                        props.type === "simple" ? "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-red-400" : 
                        props.type === "luxury" ? "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-neutral-900" : 
                        "w-[85.71px] h-[33.89px] left-0 top-0 absolute rounded-[5px] bg-teal-800" 
                        }>
                        <div className="w-[58.80px] h-[28.90px] left-[13.95px] top-[1.99px] absolute text-center text-orange-100 text-base font-semibold font-['Inter'] leading-loose">
                            {props.type === "simple" ? "Simple" : 
                            props.type === "luxury" ? "Luxury" : 
                            "Rugged"}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}