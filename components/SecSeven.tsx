import Image from "next/image"
import React from "react"
import people from "@/public/assets/people.png"

const SecSeven = () => {
  return (
    <section className=" bg-[#f2f4f7] flex justify-around items-center max-[792px]:flex-col max-[792px]:items-start  max-[792px]:space-y-8 px-16 py-8">
      <div className="max-w-[542px]">
        <h3 className="text-[33px] font-[600] mb-6">Our team</h3>
        <p className="text-[15px]">
          Thousand is a full-cycle igital production company with its own
          product analytics, design, web and mobile development
        </p>
        <div className="flex space-x-8 my-8">
          <div>
            <h4 className="min-[505px]:text-[35px] text-[30px] font-[700]">
              28
            </h4>
            <p className="text-[14px] text-slate-500">team members</p>
          </div>
          <div>
            <h4 className="min-[505px]:text-[35px] text-[30px] font-[700]">
              +100
            </h4>
            <p className="text-[14px] text-slate-500">projects</p>
          </div>
          <div>
            <h4 className="min-[505px]:text-[35px] text-[30px] font-[700]">
              7 years
            </h4>
            <p className="text-[14px] text-slate-500">in IT sphere</p>
          </div>
        </div>
        <p className="text-[15px]">
          All the necessary specialists - from a designer to tester - are on our
          staff. We hire the best specialists in the market. It's expensive but
          worth it.
        </p>
      </div>
      <div className="shadow-md">
        <Image src={people} alt="people" />
      </div>
    </section>
  )
}

export default SecSeven
