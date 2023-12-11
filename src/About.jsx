import { Link } from 'react-router-dom';
import './About.css';
import React from 'react';

function About() {

    return (
        <>
        <div className="w-[548.15px] h-[1035.51px] relative bg-orange-50">
            <img className="Image54 w-[548.15px] h-[233.21px] left-0 top-[111.62px] absolute" src="/images/about-img1.png" />
            <div className="w-[494.33px] left-[26.91px] top-[393.67px] absolute text-neutral-900 text-[32px] font-bold font-['Inter'] leading-[38px]">
                Don’t squeeze in a sedan when you could relax in a van.
            </div>
            <div className="w-[494px] left-[27.02px] top-[501px] absolute text-neutral-900 text-base font-medium font-['Inter'] leading-snug">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                <br/>(Hitch costs extra 😉)
                <br/><br/>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </div>
            <section className="w-[494px] h-[198px] left-[27.02px] top-[710px] absolute">
                <div className="w-[494px] h-[198px] left-0 top-0 absolute">
                    <div className="w-[494px] h-[198px] left-0 top-0 absolute bg-amber-200 rounded-[5px]" />
                    <div className="w-[420px] left-[37px] top-[32px] absolute text-neutral-900 text-2xl font-bold font-['Inter'] leading-[30px]">
                        Your destination is waiting.<br/>Your van is ready.
                    </div>
                </div>
                <div className="w-[174px] h-[49px] px-[22px] pt-3 pb-[13px] left-[38px] top-[117px] absolute bg-neutral-900 rounded-[10px] justify-center items-center inline-flex">
                    <div className="text-white text-base font-bold font-['Inter'] leading-normal">
                        Explore our vans
                    </div>
                </div>
            </section>
            <footer className="w-[548.15px] h-[74.75px] pl-[106px] pr-[106.28px] pt-[25.68px] pb-[25.15px] left-[0.02px] top-[961px] absolute bg-neutral-800 justify-center items-center inline-flex">
                <div className="w-[335.87px] h-[23.92px] text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                    Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}

export default About;