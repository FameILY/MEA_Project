// npm i react-icons install this for react-icons

import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    
  const d = new Date();
  return (
    <footer className="text-white   ">
        <section className="min-h-96 bg-mainFooter flex items-center md:flex-row flex-col">
            <section className="max-w-96 p-10 bg-sectionOne h-full md:mb-0 md:mt-20 md:mr-20 md:ml-20 m-10">
                <h1 className="text-lg">Municipal Engineer Association</h1>
                <br />
                <div className="text-lightText">
                <p className="text-sm">"Engineering is not just about building things; it's about building the future and pushing the boundaries of what’s possible."</p>
                <br />
                <p className="flex justify-center"><span className="p-1"><FaLocationDot /></span> 237-239, Bal Dandavate Smruti, Bawla Masjid, Joshi Marg, Dilai Road, Mumbai-400013</p>
                <br />
                <p className="flex"><span className="p-1 "><IoCall /></span> 23098063 / 23086553</p>
                </div>
            </section>
            <section className=" p-10 h-full m-10 flex flex-col justify-center">
                <h1>Quick Links</h1>
                <br />  
                <ul className="text-sm text-lightText flex flex-col">
                    <Link href={'/'} className="p-2">Home</Link>
                    <Link href={'/background-of-mea'} className="p-2">Background of MEA</Link>
                    <Link href={'/contact-us'} className="p-2">Contact us</Link>
                    <Link href={'/members-registration'} className="p-2">Members Registration</Link>
                </ul>
            </section>
            <section className=" p-10 h-full m-10 flex flex-col justify-center">
                <h1>Useful Links</h1>
                <br />
                <ul className="text-sm text-lightText flex flex-col">
                    <Link href={'/'} className="p-2">Home</Link>
                    <Link href={'/background-of-mea'} className="p-2">Background of MEA</Link>
                    <Link href={'/contact-us'} className="p-2">Contact us</Link>
                    <Link href={'/register'} className="p-2">Members Registration</Link>
                </ul>
            </section>
        </section>
      <section className="p-5 h-16 bg-customGray flex justify-center items-center">
        <p className="text-white text-sm">
          Municipal Engineer Association {d.getFullYear()}. Powered By <span className="text-blue-400">VPPCOE Consultancy</span>.
        </p>
      </section>
    </footer>
  );
}
