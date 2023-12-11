import { useState } from "react";
import "./App.scss";
import Home from "./Home";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="w-[548.15px] relative z-10 bg-orange-50">
        <header className="pl-[26px] pr-[25.82px] pt-9 pb-[34.62px] left-[0.02px] top-0 absolute bg-orange-50 justify-center items-center gap-[235.21px] inline-flex">
            <Link to='/' className="w-[144.51px] text-black text-[25.35px] font-black font-['Inter'] leading-10">
                #VANLIFE
            </Link>
            <div className="grow shrink basis-0 self-stretch relative">
                <Link to='/about' className="w-[51.83px] h-[22.92px] left-0 top-0 absolute text-right text-neutral-900 text-base font-semibold font-['Inter'] underline leading-[22.92px]">
                    About
                </Link>
                <div className="w-[51.83px] h-[22.92px] left-[64.78px] top-0 absolute text-right text-neutral-600 text-base font-semibold font-['Inter'] leading-[22.92px]">
                    Vans
                </div>
            </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
