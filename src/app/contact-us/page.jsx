"use client"
import OnScrollAnimation from "../../Components/OnScrollAnimmation";
import { useEffect } from "react";

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
          <h1 className="text-5xl p-3">Contact Us</h1>
          <p className="text-lg p-3"> Home / Contact Us</p>
        </section>
        <section className="md:mx-32 ">
          <section className="flex md:flex-row flex-col w-full justify-center items-center my-20">
            <div className="hidden2 h-60 md:w-96 w-80 bg-[#c72626] m-5 text-white p-10 flex flex-col justify-center items-center">
                <h1 className="text-3xl m-6">Call us</h1>
                <p className="text-lg">(022) 23098063</p>
            </div>
            <div className=" hidden3 h-60 md:w-96 w-80 bg-[#c72626] m-5 text-white p-10 flex flex-col justify-center items-center">
                <h1 className="text-3xl m-6">Visit us here</h1>
                <p className="text-lg">237-239, Bal Dandavate Smruti, Bawla Masjid, Joshi Marg, Dilai Road, Mumbai-400013</p>
            </div>
            <div className=" hidden4 h-60 md:w-96 w-80 bg-[#c72626] m-5">

            </div>
          </section>
          <section className="flex flex-col md:flex-row w-full justify-around items-center hidden3 my-20">
            <div className="flex-1 p-6 bg-white rounded-lg mx-4 ">
              <h1 className="text-2xl font-bold mb-4">Leave a Reply</h1>
              <p className="mb-6">
                We are waiting for you at our office in Mumbai or on the way.
                Contact us via the contact form below with your idea.
              </p>
              <form action="#" className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  className="px-4 py-2 focus:outline-none border-b border-black"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  className="px-4 py-2 focus:outline-none border-b border-black"
                />
                <input
                  type="tel"
                  name="Number"
                  placeholder="Your Number"
                  className="px-4 py-2 focus:outline-none border-b border-black"
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Your Address"
                  className="px-4 py-2 focus:outline-none border-b border-black"
                />
                <textarea
                  name="Message"
                  placeholder="Message"
                  className="px-4 py-2 focus:outline-none border-b border-black h-32 resize-none"
                />
                <button
                  type="submit"
                  className="w-24 h-12 p-2 bg-red-500 text-white rounded-full hover:bg-[#c72626] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex-1 flex justify-center items-center mx-4 hidden3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4121.367717921485!2d72.8291020754929!3d18.993317154562476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4fbda15561%3A0x742a525b6cce28a8!2sBal%20Dandavate%20Smruti%20Hall!5e1!3m2!1sen!2sin!4v1722009442070!5m2!1sen!2sin"
                height={600}
                width={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-h-96 max-w-96"
              ></iframe>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
