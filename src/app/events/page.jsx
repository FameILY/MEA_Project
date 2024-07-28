"use client"
import OnScrollAnimation from "../../Components/OnScrollAnimmation";
import { useEffect } from "react";
import IMGs from "../../Assets/IMGs/man.png"
import Image from "next/image";


export default function page() {
  useEffect(()=> {
    if (typeof document !== 'undefined') {
      // will run in client's browser only
      var hiddenElements1 = document.querySelectorAll(".hidden3");
      var hiddenElements4 = document.querySelectorAll(".hidden4");
      var hiddenElements2 = document.querySelectorAll(".hidden2");
      var hiddenElements3 = document.querySelectorAll(".hidden");

    //   var hiddenElement2 = document.querySelectorAll(".hidden2");
    //   var hiddenElement2 = document.querySelectorAll(".hidden3");
      // console.log(hiddenElements);
       OnScrollAnimation(hiddenElements1)
       OnScrollAnimation(hiddenElements4)
       OnScrollAnimation(hiddenElements2)
        OnScrollAnimation(hiddenElements3)


       //    OnScrollAnimation(hiddenElement2)
    }
    },[]);

  return (
    <>
      <main>
        <section className="h-44  bg-[#232323] flex justify-center items-center flex-col text-white">
          <h1 className="text-5xl p-3">Events</h1>
          <p className="text-lg p-3"> Home / Events</p>
        </section>
        <section className="w-full  flex flex-col items-center">
                  
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
                            src={IMGs}
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
        
      </main>
    </>
  );
}