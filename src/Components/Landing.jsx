"use client"

import Image from "next/image";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import BlackANDWHITE from "../Assets/IMGs/BlackANDWHITE.png"
import heromage from "../Assets/IMGs/hero-image.png"
import IMG from "../Assets/IMGs/image.png"


export default function Header() {
   
    
        return(
            <div className=" w-[100%] bg-white">
                <div className=" w-full h-[100vh]  flex justify-center ">
                    <Image
                    src={BlackANDWHITE}
                    className=" w-[100%] h-[100%]  brightness-50 object-cover"
                    />
                </div>
                <div className=" w-[100%] h-[25vh] bg-[#232323]  flex justify-center">
                    <div className="w-[90%] h-[30vh] bg-white mt-[-8rem] z-10 flex justify-center   text-center    ">
                        <div className=" flex justify-center w-[30%] items-center text-center gap-2">
                            <h1 className="text-[3rem] text-[#c72626]   font-bold ">90</h1><h3 className="text-[0.8rem] w-14">YEARS FOUNDATION</h3>
                        </div>
                        <div className=" flex justify-center w-[30%] items-center text-center gap-2">
                            <h1 className="text-[3rem] text-[#c72626]  font-bold">3K</h1><h3 className="text-[0.8rem]  w-14">TOTAL MEMBERS</h3>
                        </div>
                        <div className=" flex justify-center w-[30%] items-center text-center gap-2">
                            <h1 className="text-[3rem] text-[#c72626]  font-bold">25</h1><h3 className="text-[0.8rem]  w-14">Total SEMINARS</h3>
                        </div>
                        <div className=" flex justify-center w-[30%] items-center text-center gap-2">
                            <h1 className="text-[3rem] text-[#c72626]  font-bold">525</h1><h3 className="text-[0.8rem]  w-14">SUCCESS PROGRAM</h3>
                        </div>
                    </div>

                </div>
                <div className="w-full h-[70vh] bg-[#232323] flex justify-center ">
                    <div className="w-[90%] text-white flex justify-center gap-5">
                        <div className=" w-[30%] ">
                            <h1 className="text-[1.8rem]">WELCOME TO MUNCIPAL ENGINEERS ASSOCIATION</h1>
                            <h5 className="mt-5">The struggles undertaken by the Municipal Engineers Association have yielded numerous results. For instance,
                                 promotion policies have been established, increases in salary, allowances, and service facilities have been achieved, and a decision was made to retain positions for degree-holding engineers.</h5>
                        </div>
                        <div className=" w-[30%] ">
                           <Image src={heromage} 
                           className="w-full h-[60%] "
                           width={100}
                           height={100}
                           />
                        </div>
                        <div className=" w-[30%] ">
                        <Image src={IMG} 
                           className="w-[10rem] h-[60%] "
                           width={100}
                           height={100}
                           />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[100vh]">

                </div>
            </div>
        );
        
    };
