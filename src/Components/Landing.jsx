"use client"

import Image from "next/image";
import { useEffect } from "react";
import { FaLandmarkDome } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import BlackANDWHITE from "../Assets/IMGs/BlackANDWHITE.png"
import heromage from "../Assets/IMGs/hero-image.png"
import IMGs from "../Assets/IMGs/man.png"
import { Nunito } from 'next/font/google'
import { FaRegBuilding } from "react-icons/fa6";
import { FaCube } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";


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
                <div className=" w-[100%] h-[100vh] md:h-[30vh] xl:h-[25vh] bg-white  flex justify-center">
                    <div className="w-[100%] h-[100vh] sm:h-[30vh] md:h-[30vh] bg-white mt-[-6rem] z-10 flex  justify-center flex-wrap xl:h-[25vh] gap-5 xl:flex-nowrap shadow-xl xl:w-[90%] text-center    ">
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
                <div className="w-full h-[200vh] md:h-[180vh]  xl:h-[90vh] bg-white flex justify-center  ">
                    <div className="w-[90%] h-[70vh] text-black flex items-center xl:justify-around xl:items-start gap-20 md:gap-10 xl:gap-2 flex-col xl:flex-row">
                        <div className=" w-[100%] xl:w-[35%] flex  justify-center flex-col xl:block ">
                            <h1 className={`${nunito.className} text-[2rem]  font-bold `}>WELCOME TO MUNCIPAL ENGINEERS ASSOCIATION</h1>
                            <div className="w-[87%]">
                            <h5 className="mt-5 ">The struggles undertaken by the Municipal Engineers Association have yielded numerous results. For instance,
                                 promotion policies have been established, increases in salary, allowances, and service facilities have been achieved, and a decision was made to retain positions for degree-holding engineers.</h5>
                            </div>
                            <button className=" py-4 px-4 rounded-md mt-5 bg-[#c72626]  text-white">Learn More</button>
                        </div>
                        <div className="w-[100%]  xl:w-[30%] md:h-[50%] xl:h-[90%] ">
                           <Image src={heromage} 
                           className="w-[100%] h-[100%] xl:h-[100%] object-fit  "
                        
                           />
                        </div>
                        <div className=" w-[100%]  xl:w-[28%] md:h-[100%] ">
                        <Image src={IMGs} 
                           className=" w-[100%] h-[100%]  xl:h-[90%] object-fit "
                         
                           />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350vh] px-10 md:h-[200vh] xl:h-[100vh] flex justify-center x ">
                    <div className=" w-[100%] md:w-full xl:w-[85%] h-[90vh] flex justify-around items-center  flex-wrap md:gap-10 xl:gap-2  ">
                    <div className="h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[100%] md:w-[22rem] xl:w-[22rem] flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:shadow-xl hover:animate-pulse  h-[10vh] duration-300 ease-in-out ">
                                 <FaLandmarkDome  style={{ color:"#112356",fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                             <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>
                        </div>

                        </div>
                        <div className="h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaRegBuilding  style={{color:"#112356", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                             <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>
                        </div>

                        </div>
                        <div className="h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex justify-start">
                        <div className=" flex ">
                            <div className="hover:animate-pulse  hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaBook  style={{ color:"#112356",fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                        </div>
                          <div className="flex flex-col">
                             <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>
                        </div>

                        </div>
                        <div className=" h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className="hover:animate-pulse hover:shadow-xl  h-[10vh] uration-300 ease-in-out ">
                                 <FaPerson  style={{ color:"#112356", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaLandmark  style={{ color:"#112356", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>  
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaCube  style={{ color:"#112356", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of The India Society Of Engineers</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>

                    </div>
                </div>
                <div className="w-full h-[140vh]  flex justify-start items-center flex-col ">
                    <div className="w-[90%] h-[15vh] bg-[#c72626] mt-10">
                    </div>
                    <div className="mt-10 h-[20vh] w-full flex items-center flex-col">
                        <h1 className="text-[1.2rem] xl:text-[2rem]">Distinguished Honorary Fellows</h1>
                    </div>
                    <div className=" w-full flex justify-center h-[30vh ] ">
                        <div className="w-full flex justify-evenly gap-2">
                            <ul className="flex gap-2 flex-col list-disc" >
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>


                            </ul>
                            <ul className="flex gap-2 flex-col list-disc" >
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>
                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>

                                <li>Bharat Ratna Sir C. V. Raman (1948), Nobel Laureate & Scientist</li>


                            </ul>
                        </div>
                    </div>
                 
                </div>
            </div>
        );
        
    };
