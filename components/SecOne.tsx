import React from "react"
import Form from "./Form"
import Image from "next/image"
import dashboard from "@/public/assets/dashboard.png"
const SecOne = () => {
  return (
    <section className="w-full h-[100vh] min-h-[980px] bg-[#f2f4f7] relative overflow-hidden">
      <div className="z-10  relative">
        <div className="min-[698px]:ml-16 mx-8  mt-40 ">
          <h1 className="min-[698px]:text-[46px] text-[36px] font-bold mb-3">
            <span className="text-[#ffba00]">User-Centric Excellence</span>: Our
            <br className="max-[698px]:hidden" /> App Development services
            <br className="max-[698px]:hidden" /> Tackles Your Pain Points
          </h1>
          <p className="min-[698px]:text-[19px] text-[16px] mb-8">
            Experience a Seamless Digital Journey with{" "}
            <span className="text-[#80a948] font-bold">Desun</span> - Where
            Every Line <br className="max-[698px]:hidden" /> of Code Resolves
            Your Challenges and{" "}
            <span className="text-[#ffba00]">Elevates Your App Experience</span>{" "}
            <br className="max-[698px]:hidden" /> to Unparalleled Heights.
          </p>
        </div>
        <div className="min-[698px]:ml-16 mx-8 bg-white px-5 pt-4 pb-5 w-fit min-[698px]:w-[600px] rounded-[18px] shadow-md mt-14">
          <h3 className="font-bold text-[21px]">
            Leave your contacts and we will call you back
            <br /> within 30 minutes
          </h3>
          <Form secOne />
        </div>
      </div>

      <div className="absolute h-[160vh] z-0 min-[1388px]:bottom-0 min-[1388px]:right-0 overflow-hidden max-[1388px]:left-0 max-[1388px]:top-0 max-[1388px]:mt-[230px] max-[1388px]:ml-[0] max-[698px]:mt-[500px]">
        <Image
          className="min-[1632px]:scale-125 max-[1632px]:pl-[200px] max-[1632px]:pt-[200px] "
          draggable={false}
          src={dashboard}
          alt="dashboard"
        />
      </div>
    </section>
  )
}

export default SecOne
