import React from "react";
import { useState, useEffect } from "react";
import Van from "./Van";
import vans from "./data"
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams();
    let typeFilter = searchParams.get("tier");
    function setQuery(key, value){
        const sp = new URLSearchParams(searchParams);
        if (value === null){
            sp.delete(key);
        } else {
            sp.set(key, value);
        }
        return `?${sp.toString()}`
    }
    return(
        <>
        <div className="w-[548.15px] h-[1451.11px] relative bg-orange-50">
            <div className="w-[494.33px] left-[26.91px] top-[165.86px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[33.65px]">
                Explore our van options
            </div>
            { typeFilter ? 
            (<Link to={setQuery("tier", null)} className="left-[417.79px] top-[228.25px] absolute text-neutral-600 text-base font-medium font-['Inter'] underline leading-normal">
                Clear filters
            </Link>)
            : null
            }
            <section className="w-[351px] h-[37px] left-[26.79px] top-[222.25px] absolute">
                {typeFilter === "simple" ? (<div className="bg-red-400 w-[104px] h-[37px] px-[26px] pt-1.5 pb-[7px] left-0 top-0 absolute rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "simple")} className="text-center text-orange-100 text-base font-medium font-['Inter'] leading-normal">
                        Simple
                    </Link>
                </div>)
                    : (<div className="w-[104px] h-[37px] px-[26px] pt-1.5 pb-[7px] left-0 top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "simple")} className="text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Simple
                    </Link>
                </div>)}
                {typeFilter === "luxury" ? (<div className="bg-neutral-900 w-[103px] h-[37px] px-[25px] pt-1.5 pb-[7px] left-[124px] top-0 absolute rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "luxury")} className="text-center text-orange-100 text-base font-medium font-['Inter'] leading-normal">
                        Luxury
                    </Link>
                </div>)
                    : (<div className="w-[103px] h-[37px] px-[25px] pt-1.5 pb-[7px] left-[124px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "luxury")} className="text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Luxury
                    </Link>
                </div>)}
                {typeFilter === "rugged" ? (<div className="bg-teal-800 w-[104px] h-[37px] pl-[23px] pr-[22px] pt-1.5 pb-[7px] left-[247px] top-0 absolute rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "rugged")} className="text-center text-orange-100 text-base font-medium font-['Inter'] leading-normal">
                        Rugged
                    </Link>
                </div>)
                    : (<div className="w-[104px] h-[37px] pl-[23px] pr-[22px] pt-1.5 pb-[7px] left-[247px] top-0 absolute bg-orange-100 rounded-[5px] justify-center items-center inline-flex">
                    <Link to={setQuery("tier", "rugged")} className="text-center text-neutral-600 text-base font-medium font-['Inter'] leading-normal">
                        Rugged
                    </Link>
                </div>)}
            </section>
            <main className="h-[1000px] w-[450px] left-7 top-[319.19px] flex flex-row absolute">
                <div className="grid grid-cols-2 gap-x-20 gap-y-20 w-full">
                {
                    typeFilter
                        ? vans.map((van) => {
                            if (van.type === typeFilter) {
                            return <Van id={van.id} name={van.name} type={van.type} image={van.image} price={van.price} />;
                            }
                        })
                        : vans.map((van) => (
                            <Van id={van.id} name={van.name} type={van.type} image={van.image} price={van.price} />
                        ))
                }
                </div>
            </main>
            <footer className="w-[550px] h-[70px] pl-[107px] pr-[107.13px] pt-[23px] pb-[23.08px] left-[-0.21px] top-[1381.86px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}