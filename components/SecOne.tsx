import React from "react"
import Form from "./Form"
import Image from "next/image"
import dashboard from "@/public/assets/dashboard.png"
const SecOne = () => {
  return (
    <section className="w-full h-[100vh] bg-[#f2f4f7] relative overflow-hidden">
      <div className="z-10 relative ml-16 mt-36">
        <h1 className="text-[46px] font-bold mb-3">
          <span className="text-[#ffba00]">User-Centric Excellence</span>: Our
          <br /> App Development services
          <br /> Tackles Your Pain Points
        </h1>
        <p className="text-[19px] mb-8">
          Experience a Seamless Digital Journey with{" "}
          <span className="text-[#80a948] font-bold">Desun</span> - Where Every
          Line <br /> of Code Resolves Your Challenges and{" "}
          <span className="text-[#ffba00]">Elevates Your App Experience</span>{" "}
          <br /> to Unparalleled Heights.
        </p>
      </div>
      <div className="ml-16 bg-white px-5 pt-4 pb-5 w-[600px] rounded-[18px] shadow-md mt-14">
        <h3 className="font-bold text-[21px]">
          Leave your contacts and we will call you back
          <br /> within 30 minutes
        </h3>
        <Form />
      </div>
      <div className="absolute h-[160vh] z-0 bottom-0 right-0 overflow-hidden ">
        <Image
          className="min-[1632px]:scale-125 max-[1632px]:pl-[200px] max-[1632px]:pt-[200px]"
          draggable={false}
          src={dashboard}
          alt="dashboard"
        />
      </div>
    </section>
  )
}

export default SecOne
