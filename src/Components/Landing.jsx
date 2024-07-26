"use client"

import Image from "next/image";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import BlackANDWHITE from "../Assets/IMGs/BlackANDWHITE.png"
import heromage from "../Assets/IMGs/hero-image.png"
import IMGs from "../Assets/IMGs/man.png"
import { Nunito } from 'next/font/google'


const nunito = Nunito 
({ 
    subsets: [ 'latin'] ,
    weight:['700']

})


export default function Header() {
   
    
        return(
            <div className=" w-[100%] bg-white">
                <div className=" w-full h-[100vh]  flex justify-center ">
                    <Image
                    src={BlackANDWHITE}
                    className=" w-[100%] h-[100%]  brightness-50 object-cover"
                    />
                </div>
                <div className=" w-[100%] h-[100vh] xl:h-[25vh] bg-white  flex justify-center">
                    <div className="w-[100%] h-[100vh] sm:h-[30vh] md:[30vh] bg-white mt-[-6rem] z-10 flex  justify-center flex-wrap xl:h-[25vh] gap-5 xl:flex-nowrap shadow-xl xl:w-[90%] text-center    ">
                        <div className=" flex justify-center  items-center px-10 py-5  text-center gap-2">
                            <h1 className="text-[2.5rem] text-[#c72626]  xl:text-[3rem] font-bold ">90</h1><h3 className="text-[0.7rem] w-14 xl:text-[0.8rem]">YEARS FOUNDATION</h3>
                        </div>
                        <div className=" flex justify-center items-center px-10 py-5  text-center gap-2">
                            <h1 className="text-[2.5rem] text-[#c72626]  xl:text-[3rem] font-bold ">3K</h1><h3 className="text-[0.7rem] w-14 xl:text-[0.8rem]">TOTAL MEMBERS</h3>
                        </div>
                        <div className=" flex justify-center items-center px-10 py-5  text-center gap-2">
                            <h1 className="text-[2.5rem] text-[#c72626]   xl:text-[3rem] font-bold ">25</h1><h3 className="text-[0.7rem] w-14 xl:text-[0.8rem]">Total SEMINARS</h3>
                        </div>
                        <div className=" flex justify-center px-10 py-5 items-center text-center gap-2">
                            <h1 className="text-[2.5rem] text-[#c72626]  xl:text-[3rem] font-bold ">525</h1><h3 className="text-[0.7rem] w-14 xl:text-[0.8rem]">SUCCESS PROGRAM</h3>
                        </div>
                    </div>

                </div>
                <div className="w-full h-[70vh] bg-white flex justify-center  ">
                    <div className="w-[90%] h-[70vh] text-black flex items-center xl:justify-around xl:items-start gap-5 xl:gap-2 flex-col xl:flex-row">
                        <div className=" w-[100%] xl:w-[35%] flex  justify-center flex-col xl:block ">
                            <h1 className={`${nunito.className} text-[2rem]  font-bold `}>WELCOME TO MUNCIPAL ENGINEERS ASSOCIATION</h1>
                            <div className="w-[87%]">
                            <h5 className="mt-5 ">The struggles undertaken by the Municipal Engineers Association have yielded numerous results. For instance,
                                 promotion policies have been established, increases in salary, allowances, and service facilities have been achieved, and a decision was made to retain positions for degree-holding engineers.</h5>
                            </div>
                            <button className=" py-4 px-4 rounded-md mt-5 bg-[#c72626]  text-white">Learn More</button>
                        </div>
                        <div className="w-[100%]  xl:w-[30%] xl:h-[90%] ">
                           <Image src={heromage} 
                           className="w-[100%] h-[50%] xl:h-[100%] object-fit  "
                        
                           />
                        </div>
                        <div className=" w-[80%] xl:w-[28%] ">
                        <Image src={IMGs} 
                           className=" w-[100%] h-[50%]  xl:h-[70%] object-fit "
                         
                           />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[100vh]">

                </div>
            </div>
        );
        
    };
