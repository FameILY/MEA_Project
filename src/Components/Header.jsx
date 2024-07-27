"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import LOGO from "../Assets/LOGOS/logoMEA.png"
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import OnScrollAnimation from "../Components/OnScrollAnimmation";


export default function Header() {
    const [active, setActive] = useState(false);


    useEffect(() => {

        if (typeof document !== 'undefined') {
            // will run in client's browser only
            var hiddenElements1 = document.querySelectorAll(".hidden");
          //   var hiddenElement2 = document.querySelectorAll(".hidden2");
          //   var hiddenElement2 = document.querySelectorAll(".hidden3");
            // console.log(hiddenElements);
             OnScrollAnimation(hiddenElements1)
          //    OnScrollAnimation(hiddenElement2)
          }

        if (typeof window !== 'undefined') {
            // Perform localStorage action
            window.addEventListener('scroll', isSticky);         
        }
      
        return () => {
            if (typeof window !== 'undefined') {
                // Perform localStorage action
                window.removeEventListener('scroll', isSticky);
            }
        };
      });
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };
    
        return(
            <div className="HeaderContainer  shadow-lg  w-full flex flex-col text-white bg-white">
                <div className="NavContainer hidden  header-section w-full h-[4vh] bg-[#c72626]   justify-between justify-items-center items-center xl:flex ">
                    <div className="flex  justify-center pl-10">
                        <h4 className="text-white text-[0.8rem] ">Welcome To Municipal Engineer Association</h4>
                    </div>
                        <div className=" flex justify-end items-center  pr-10  gap-5">
                            <div className="flex justify-center gap-1">
                          
                            <div className="flex  justify-center">          
                            <span className="p-1"><FaLocationDot /></span> <h5 className="text-white text-[0.8rem]"> example@gmail.com</h5>
                            </div>
                            </div>
                            <div className="flex gap-1">
                            {/* <Image  
                                src={call}
                                className="HeaderEnvlope"
                                width={50}
                                height={50}
                            /> */}
                            <div className="flex  justify-center">          
                            <span className="p-1 "><IoCall /></span>  <h5 className="text-white text-[0.8rem]">+ 91 242342523</h5>
                            </div>
                            </div>
                          
                        </div>
                         
                </div>
                <div className="HeaderContent h-[13vh]   w-[100%] bg-white flex justify-start justify-items-center ">
                    <div className="flex w-[90%] bg-white justify-start justify-items-center h-[12vh] ">
                    <div className="flex  ">
                        <Image 
                            src={LOGO}
                            className="EMALOGOP  sm:w-[10rem] xl:w-full xl:pl-10"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className=" justify-center h-[13vh] items-center gap-8 text-black w-[90%] text-[1rem] font-medium xl:flex 	" >
                        <Link href={'/'}>
                            <h2 className="cursor-pointer">Home</h2>
                        </Link>
                    <div className="relative group h-[13vh] flex items-center">
                        <h3 className="flex cursor-pointer hover:text-red-400 items-center">
                            About Us <span className="p-1"><IoIosArrowDown /></span>
                        </h3>
                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2  w-60 flex flex-col bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out z-50">
                            <li className="border-b border-gray-200">
                                <Link href="#" className="block px-6 py-3 hover:bg-gray-100">Background of MEA</Link>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 2</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 3</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 4</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 5</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 6</a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative group h-[13vh] flex items-center">
                        <h3 className="flex cursor-pointer hover:text-red-400 items-center">
                            Members<span className="p-1"><IoIosArrowDown /></span>
                        </h3>
                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2  w-60 flex flex-col bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out z-50">
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 1</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 2</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 3</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 4</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 5</a>
                            </li>
                            <li className="border-b border-gray-200">
                                <a href="#" className="block px-6 py-3 hover:bg-gray-100">Option 6</a>
                            </li>
                        </ul>
                    </div>
                        <h3 className="cursor-pointer	">Events</h3>
                        <h3 className="cursor-pointer	">Gallery</h3>
                        <Link href={'/contact-us'}>
                        <h3 className="cursor-pointer	">Contact Us</h3>
                        </Link>
                        <Link href={'/members-registration'}>
                        <h3 className="cursor-pointer	">Member Registration</h3>
                        </Link>

                    </div>
                    </div>
                    <div className="HamBurgerIcon flex justify-center h-[13vh] justify-items-center pr-7 xl:hidden" onChange={() => setActive(!active)}>
                    <label className="label flex h-[13vh]  justify-center justify-items-center" for="check">
                        <input className="input" type="checkbox" id="check"/> 
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                    </label>
                    </div>
                </div>
            </div>
        );
        
    };
