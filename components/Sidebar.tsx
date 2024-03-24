import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";


const Sidebar = () => {
return (
    <>
    <Image
        src="/profile.png"
        alt="avatar"
        className=" mx-auto border rounded-full "
            width={128}
            height={128}
        layout="intrinsic"
        quality="100"
    />
    <h3 className="my-4 text-3xl font-medium tracking-wider ">
        <span className="text-green ">Majd</span> Ibrahem
    </h3>
    <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500 text-center">
        Frontend Develper
    </p>
      {/* Resume */}
    <a
        href="images/Majd's Resume.pdf"
        download="Majd's Resume (react)"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
    >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
    </a>

      {/* Socials */}
    <div className="flex justify-around w-9/12 mx-auto my-5 text-green-400 md:w-full ">
        <a href="https://www.facebook.com/majd.ibrahem.1426">
        <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/majd-ibrahim-211783262" >
        <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/MajdIbrahem">
        <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
    </div>

      {/* Contacts */}
    <div
        className="py-4 my-5 bg-gray-200  flex items-center justify-center flex-col"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
    >
        <div className="flex items-center justify-center">
        <GoLocation className="mr-2" /> <span>Latakia,Syria </span>
        </div>
        <p className="my-2 "> majdibrahem22400@gmail.com </p>
        <p className="my-2"> (+963) 992806570</p>
    </div>

      {/* Email Button */}
        <div className='flex items-center justify-center flex-col'>
            <button
                onClick={()=>{window.open("mailto:majdibrahem22400@gmail.com")}}
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 duration-100 focus:outline-none"
    >
        Email me
    </button>
    
    </div>
    
    </>
)
}

export default Sidebar