"use client"

import Image from "next/image";
import { useEffect } from "react";
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
import { FaLandmarkDome } from "react-icons/fa6";
import OnScrollAnimation from "../Components/OnScrollAnimmation";

const nunito = Nunito 
({ 
    subsets: [ 'latin'] ,
    weight:['700']

})
export default function Header() {
     //On Scroll Animation Function
     useEffect(()=> {
        if (typeof document !== 'undefined') {
          // will run in client's browser only
          var hiddenElements1 = document.querySelectorAll(".hidden3");
          var hiddenElements = document.querySelectorAll(".hidden2");
          var hiddenElement2 = document.querySelectorAll(".hidden1");
          var hiddenElement3= document.querySelectorAll(".hidden4");

        //   var hiddenElement2 = document.querySelectorAll(".hidden3");
          // console.log(hiddenElements);
           OnScrollAnimation(hiddenElements1)
           OnScrollAnimation(hiddenElements)
           OnScrollAnimation(hiddenElement2)
           OnScrollAnimation(hiddenElement3)

        //    OnScrollAnimation(hiddenElement2)
        }
        },[]);
    
        return(
            <div className=" w-[100%] bg-white">
                <div className=" w-full h-[100vh]  flex justify-center ">
                    <Image
                    src={BlackANDWHITE}
                    className=" w-[100%] h-[100%]  brightness-50 object-cover"
                    />
                </div>
                <div className=" hidden1 w-[100%] h-[100vh] md:h-[30vh] xl:h-[25vh] bg-white  flex justify-center">
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
                        <div className=" w-[100%] xl:w-[35%] flex  justify-center flex-col xl:block hidden2 ">
                            <h1 className={`${nunito.className} text-[2rem]  font-bold `}>WELCOME TO MUNCIPAL ENGINEERS ASSOCIATION</h1>
                            <div className="w-[87%]">
                            <h5 className="mt-5 ">The struggles undertaken by the Municipal Engineers Association have yielded numerous results. For instance,
                                 promotion policies have been established, increases in salary, allowances, and service facilities have been achieved, and a decision was made to retain positions for degree-holding engineers.</h5>
                            </div>
                            <button className=" py-4 px-4 rounded-md mt-5 bg-[#c72626]  text-white">Learn More</button>
                        </div>
                        <div className="w-[100%]  xl:w-[30%] md:h-[50%] xl:h-[90%] hidden3 ">
                           <Image src={heromage} 
                           className="w-[100%] h-[100%] xl:h-[100%] object-fit  "
                        
                           />
                        </div>
                        <div className=" w-[100%]  xl:w-[28%] md:h-[100%]  hidden4">
                        <Image src={IMGs} 
                           className=" w-[100%] h-[100%]  xl:h-[90%] object-fit "
                         
                           />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350vh] px-10 md:h-[200vh] lg:h-[150vh] xl:h-[100vh] flex justify-center x ">
                    <div className=" w-[100%] md:w-full xl:w-[85%] h-[90vh] flex justify-around items-center  flex-wrap md:gap-10 xl:gap-2  ">
                    <div className="  hidden2 h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaLandmarkDome  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Background Of Municipal Engineer Association</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p> It is an established fact that some engineers who run businesses under the name of Brihanmumbai Engineers Union become active in December by showing false promises.</p>
                        </div>  
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div> 
                        <div className="hidden2  h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaRegBuilding  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Objective of  Municipal Engineer Association</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>  
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" hidden2 h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaBook  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2"> Recognition and Affiliation </h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Social Security and Rights: MEU ensures social security for engineers by designing social security schemes and resolving their issues.</p>
                        </div>  
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" hidden3 h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className="hover:animate-pulse hover:shadow-xl  h-[10vh] uration-300 ease-in-out ">
                                 <FaPerson  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Contributing in Science and Technology</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Dispute Resolution: After attacks from municipal councilors, the organization provided support and pressured the administration to take action the 'Municipal Engineers Association.</p>
                        </div>
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" hidden3 h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaLandmark  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Future Of Municipal Engineer Association</h3>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Our Freedom movement gathered momentum in the early thirties and brought about a new awakening amongst the Freedom seeking inteligentsia.</p>
                        </div>  
                        <div>
                            <button className="py-2 px-5 bg-[#c72626] text-white mt-5">Learn More </button>
                        </div>

                        </div>
                        <div className=" hidden3 h-[60vh]  md:h-[45vh] xl:h-[40vh] w-[22rem] flex-col  flex justify-start">
                        <div className=" flex ">
                            <div className=" hover:animate-pulse hover:shadow-xl h-[10vh] uration-300 ease-in-out ">
                                 <FaCube  style={{ color:"#c72626", fontSize: '6rem', background:"white", padding:"1.2rem"}} />
                            </div>
                            <div className="flex h-[12vh]  py-10 items-center">
                                <h3 className="text-[1.2rem] ml-2">Participation and Appreciation</h3>
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
                <section className=" hidden1 w-full min-h-[270vh]  md:min-h-[140vh] lg:min-h-[120vh]  flex justify-start items-center flex-col gap-5">
                    
                    <div className="w-[90%] h-[15vh] bg-[#c72626] flex justify-center items-center mt-10">
                    <h1 className="text-[1.2rem] xl:text-[2rem] text-white ">Distinguished Honorary Fellows</h1>

                    </div>
                    <div className="mt-10 h-[30vh] w-full flex items-center flex-col">
                        <h2 className="text-[1rem] xl:text-[1.3rem]">67 years of tradition of faith!! An organization that protects life!</h2>
                    </div>
                    <div className=" w-[100%] flex justify-center h-[30vh]  ">
                        <div className=" w-[90%] md:w-full xl:w-full flex justify-center xl:justify-center gap-20 md:flex-col xl:flex-row">
                            <div className="flex text-[0.8rem] xl:text-[1rem] gap-2 flex-row justify-center flex-wrap xl:flex-nowrap xl:flex-col hidden2   list-disc opacity-[60%]" >
                                <li>Adv. Mahabal Shetty - President /General Secretary</li>
                                <li>Engr. Vijay Pachpande - Vice Present</li>

                                <li>Engr. Ramesh Malviya - Vice President</li>

                                <li>Engr. Ramesh Kurhade - Secretary</li>
                                <li> Engr. Ramesh Kurhade - Secretary</li>
                                <li>Engr. T.V. Shah - Founder Member</li>

                                <li>Engr. Jeevan Patil - Vice presidet</li>

                                <li>Engr. Rajendra Joshi - Vice resident</li>

                                <li>Engr. Satish Kumar Vani Vice - President</li>
                                <li>Engr. Jagannath Gavane - Secretary</li>

                                <li>Engr. Navnath Ghadge- Executive Chairman</li>

                                <li>
                                Engr. Vishal Kokate - Secretary</li>

                                <li>Engr. Yashpal Hungergekar - Secretary</li>
                                <li>Engr. Yashpal Hungergekar - Secretary</li>

                                <li>Engr. Rajendra Joshi - Vice resident</li>

                                <li>
                                Engr. Rajendra Joshi - Vice resident</li>


                            </div>
                            <div className="flex text-[0.8rem] xl:text-[1rem] gap-2 flex-row justify-center flex-wrap xl:flex-nowrap xl:flex-col hidden3  list-disc opacity-[60%]" >
                                <li>Engr. Rajendra Joshi - Vice resident</li>
                                <li>Engr. Vishal Kokate - Secretary</li>

                                <li>Engr. Vishal Kokate - Secretary</li>

                                <li>Engr. Vishal Kokate - Secretary</li>
                                <li>Engr. Navnath Ghadge- Executive Chairman</li>

                                <li>
                                Engr. Vishal Kokate - Secretary</li>

                                <li>Engr. Yashpal Hungergekar - Secretary</li>
                                <li>Engr. Yashpal Hungergekar - Secretary</li>

                                <li>Engr. Rajendra Joshi - Vice resident</li>

                                <li>
                                Engr. Rajendra Joshi - Vice resident</li>

                                <li>Engr. Navnath Ghadge- Executive Chairman</li>

                                <li>
                                Engr. Vishal Kokate - Secretary</li>

                                <li>Engr. Yashpal Hungergekar - Secretary</li>
                                <li>Engr. Yashpal Hungergekar - Secretary</li>

                                <li>Engr. Rajendra Joshi - Vice resident</li>

                                <li>
                                Engr. Rajendra Joshi - Vice resident</li>

                            </div>
                        </div>
                    </div>
                 
                </section>
                <section className="w-full  flex flex-col items-center">
                    <div className="w-[90%] h-[15vh] bg-[#c72626]  items-center justify-center flex">
                    <h1 className="text-[2.5rem] text-white  ">Municipal Engineer Association</h1>
                    </div>
                    <div className="w-[90%] h-[100vh] flex flex-col">   
                    <div className="w-[90%] mt-10 ">
                        <h1 className="text-[2.5rem]">Events</h1>
                    </div>
                    <div className="w-[90%] flex mt-10 gap-10">
                    <div className="relative w-full max-w-sm overflow-hidden shadow-lg cursor-pointer group hidden3 ">
                        <Image
                            className="w-full h-[50vh] object-cover transition-transform duration-300 transform group-hover:scale-110"
                            src={IMGs}
                            alt="Seminar On Low Cost Housing"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <div className="text-center p-4">
                            <p className="text-sm text-black  mb-2">DECEMBER 10, 2022</p>
                            <h2 className="text-xl font-bold text-black">Seminar On Low Cost Housing</h2>
                            </div>
                        </div>
                        </div>  
                        <div className="relative w-full max-w-sm overflow-hidden shadow-lg cursor-pointer hidden4 group">
                        <Image
                            className="w-full h-[50vh] object-cover transition-transform duration-300 transform group-hover:scale-110"
                            src={heromage}
                            alt="Seminar On Low Cost Housing"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <div className="text-center p-4">
                            <p className="text-sm text-black mb-2">DECEMBER 10, 2022</p>
                            <h2 className="text-xl font-bold text-black">Seminar On Low Cost Housing</h2>
                            </div>
                        </div>
                        </div>                     
                    </div>
                    </div>  

                </section>
            </div>
        );
        
    };
