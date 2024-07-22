"use client"
import React, { useState } from "react"
import location from "@/public/assets/location.png"
import real from "@/public/assets/real-estate.png"
import Image from "next/image"
import google from "@/public/assets/google-play.png"
import apple from "@/public/assets/apple-store.png"
const ProudProjects = () => {
  const [project, setProject] = useState("Project 1")
  return (
    <div className="mx-16 mt-10 min-[908px]:w-[50%]">
      <div className="flex space-x-8 mb-10 font-[500]">
        <button
          className={`${
            project === "Project 1"
              ? "font-[700] border-b-[1px] border-[#ffba00]"
              : ""
          } `}
          onClick={() => setProject("Project 1")}
        >
          Project 1
        </button>
        <button
          className={`${
            project === "Project 2"
              ? "font-[700] border-b-[1px] border-[#ffba00]"
              : ""
          } `}
          onClick={() => setProject("Project 2")}
        >
          Project 2
        </button>
        <button
          className={`${
            project === "Project 3"
              ? "font-[700] border-b-[1px] border-[#ffba00]"
              : ""
          } `}
          onClick={() => setProject("Project 3")}
        >
          Project 3
        </button>
        <button
          className={`${
            project === "Project 4"
              ? "font-[700] border-b-[1px] border-[#ffba00]"
              : ""
          } `}
          onClick={() => setProject("Project 4")}
        >
          Project 4
        </button>
      </div>
      <div>
        <h3 className="text-[30px] font-[600] mb-8">{project}</h3>
        <p className="mb-8">
          Crafted an innovative rental property management app, seamlessly
          integrating secure login, absence registration, and a tenant notice
          board. Elevating the resident experience with user-friendly design and
          efficient communication channels
        </p>
        <p className="text-[18px] font-[500] text-[#646464]">
          Business analysis <span className="text-[#ffba00]">/</span> IOS{" "}
          <span className="text-[#ffba00]">/</span> Android{" "}
          <span className="text-[#ffba00]">/</span> QA{" "}
          <span className="text-[#ffba00]">/</span> UI/UX Design
        </p>
        <div className="flex space-x-10 my-10 ">
          <div className="flex space-x-4">
            <Image src={location} alt="location" />
            <p>India</p>
          </div>
          <div className="flex space-x-4">
            <Image src={real} alt="real estate" />
            <p>Real Estate</p>
          </div>
        </div>
        <div className="flex space-x-8">
          <div>
            <h4 className="text-[22px] font-[600]">400%</h4>
            <p className="text-[14px]">User Growth</p>
          </div>
          <div>
            <h4 className="text-[22px] font-[600]">+ 200 000</h4>
            <p className="text-[14px]">Active Users</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-14 mb-10">
          <Image src={apple} alt="apple" />
          <Image src={google} alt="google" />
        </div>
      </div>
    </div>
  )
}

export default ProudProjects
