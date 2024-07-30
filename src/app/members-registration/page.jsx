"use client"

import OnScrollAnimation from "../../Components/OnScrollAnimmation";
import Link from "next/link";
import { useEffect } from "react";


export default function page() {
  

  // useEffect(()=> {
  //   if (typeof document !== 'undefined') {
  //     // will run in client's browser only
  //     var hiddenElements1 = document.querySelectorAll(".hidden3");
  //     var hiddenElements4 = document.querySelectorAll(".hidden4");
  //     var hiddenElements2 = document.querySelectorAll(".hidden2");
  //     var hiddenElements3 = document.querySelectorAll(".hidden");

  //   //   var hiddenElement2 = document.querySelectorAll(".hidden2");
  //   //   var hiddenElement2 = document.querySelectorAll(".hidden3");
  //     // console.log(hiddenElements);
  //      OnScrollAnimation(hiddenElements1)
  //      OnScrollAnimation(hiddenElements4)
  //      OnScrollAnimation(hiddenElements2)
  //       OnScrollAnimation(hiddenElements3)


  //      //    OnScrollAnimation(hiddenElement2)
  //   }
  //   },[]);
  // return (
  //   <main>
  //     <section className="h-44 bg-[#232323] flex justify-center items-center flex-col text-white">
  //       <h1 className="text-5xl p-3">Members Registration</h1>
  //       <p className="text-lg p-3"> Home / Members Registration</p>
  //     </section>
  //     <section className="flex justify-center items-center h-96 md:flex-row flex-col text-white">
  //       <Link href={'/register'}>
  //           <div className= " hidden3 w-40 h-20 bg-[#C72625]  flex justify-center items-center p-10 m-10 rounded-3xl">
  //               <h1 className="text-2xl">Register</h1>
  //           </div>
  //       </Link>
  //       <Link href={'/login'}>
  //           <div className="hidden4 w-40 h-20 bg-[#C72625] flex justify-center items-center p-10 m-10 rounded-3xl">
  //               <h1 className="text-2xl">Login</h1>
  //           </div>
  //       </Link>
  //     </section>
  //   </main>
  // );
}
