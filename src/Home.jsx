import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

    return (
        <>
        <div className="Home w-[548.15px] h-[573.07px] relative bg-orange-50">
            <main>
                <img src='/images/rename-bg.png' className="background w-[548.15px] h-[386.70px] left-0 top-[111.62px] absolute bg-black bg-opacity-50" />
                <section className="w-[494.33px] h-[256.13px] left-[26.91px] top-[177.40px] absolute">
                    <p className="w-[494.33px] left-0 top-0 absolute text-white text-4xl font-extrabold font-['Inter'] leading-[42px]">You got the travel plans, we got the travel vans.</p>
                    <div className="w-[494.33px] h-[149.50px] left-0 top-[106.64px] absolute">
                        <p className="w-[494.33px] left-0 top-0 absolute text-white text-base font-medium font-['Inter'] leading-normal">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                        <div className="w-[494.33px] h-[49.83px] left-0 top-[99.66px] absolute">
                            <div className="orange-bg w-[494.33px] h-[49.83px] left-0 top-0 absolute bg-orange-400 rounded-[5px]">
                                <Link to='/vans' className="find-van-btn w-[207.90px] h-[30.09px] left-[143.18px] top-[8.97px] absolute text-center text-white text-base font-bold font-['Inter'] leading-loose">
                                    Find your van
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="Frame22 w-[548.15px] h-[74.75px] left-0 top-[498.32px] absolute bg-neutral-800">
                <div className="w-[335.87px] h-[23.92px] left-[106px] top-[25.68px] absolute text-center text-neutral-400 text-sm font-medium font-['Inter'] leading-[22.92px]">
                Ⓒ 2022 #VANLIFE
                </div>
            </footer>
        </div>
        </>
    )
}

export default Home;