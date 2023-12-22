import React from "react";
import vanImg from '/images/van.png'
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export function loader({ request }){
    return new URL(request.url).searchParams.get("message")
}

export default function Login(){
    const message = useLoaderData();
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""});
    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginFormData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            email: loginFormData.email,
            password: loginFormData.password
        })
    }
    return (
        <>
        <div className="w-[548px] h-[617px] relative bg-orange-50">
            <img 
                className="left-[170px] top-[50px] w-[200px] h-[200px] absolute"
                src={vanImg} 
                alt="van image" />
            <div className="h-[161px] left-[27px] top-[235px] absolute flex-col justify-start items-start gap-[22px] inline-flex">
                <form onSubmit={handleSubmit} className="self-stretch h-[84px] bg-white rounded-md border border-gray-300 flex-col justify-start items-start flex">
                    <input 
                    id="email"
                    type="email"
                    name="email" 
                    onChange={handleChange} 
                    value={loginFormData.email}
                    placeholder="Email Adress" 
                    className="self-stretch px-[13px] py-[9px] bg-white rounded-tl-md rounded-tr-md shadow justify-start items-center inline-flex" />
                    <input 
                    id="password" 
                    type="password" 
                    name="password"
                    onChange={handleChange} 
                    value={loginFormData.password}
                    placeholder="Password" 
                    className="self-stretch px-[13px] py-[9px] bg-white rounded-bl-md rounded-br-md shadow border border-gray-300 justify-start items-center inline-flex" />
                    <div className="w-[494px] pl-56 pr-[217px] pt-[18px] pb-[17px] bg-orange-400 rounded-md shadow justify-end items-center inline-flex">
                        <button type="submit" className="text-white text-base font-bold font-['Inter'] leading-tight">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-[494.33px] left-[27.12px] top-[400px] absolute text-center">
                {
                    message ? (
                        <>
                        <span className="text-red-400 text-base font-bold font-['Inter'] leading-normal">
                            {message}
                        </span>
                        <br />
                        </>
                    ) : null
                }
                <span className="text-neutral-900 text-base font-medium font-['Inter'] leading-normal">
                    Don’t have an account? 
                </span>
                &nbsp;
                <span className="text-orange-400 text-base font-bold font-['Inter'] leading-normal">
                    Create one now
                </span>
            </div>
            <footer className="w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-0 top-[542px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}