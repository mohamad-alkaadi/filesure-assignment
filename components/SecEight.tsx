"use client"
import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { FaMinus } from "react-icons/fa"

const SecEight = () => {
  const [showParagraph, setShowParagraph] = useState(false)
  return (
    <section className="px-16 mb-8 ">
      <h3 className="font-[600] text-[33px] my-8">FAQ</h3>
      <div className="flex max-[816px]:flex-col min-[816px]:space-x-16">
        <div className="min-[816px]:w-[50%]">
          <div>
            <div className="flex justify-between items-center font-[600] py-5 border-y-[1px] border-slate-200 ">
              <h4>What is the cost of mobile application</h4>
              <button className="shadow-lg  p-2 rounded-full text-[#80a948]">
                <FaPlus />
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center font-[600] py-5 border-b-[1px] border-slate-200 ">
              <h4>Do you provide a guarantee for the mobile application?</h4>
              <button className="shadow-lg  p-2 rounded-full text-[#80a948]">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="min-[816px]:w-[50%]">
          <div>
            <div className="flex flex-col items-start  py-5 min-[816px]:border-y-[1px] border-b-[1px] border-slate-200 ">
              <div className="flex font-[600] justify-between w-full ">
                <h4>How long will development take?</h4>
                <button
                  onClick={() => setShowParagraph(!showParagraph)}
                  className="shadow-lg  p-2 rounded-full text-[#80a948]"
                >
                  {!showParagraph ? <FaPlus /> : <FaMinus />}
                </button>
              </div>
              {showParagraph ? (
                <div className="flex flex-col mt-4">
                  <p className="mb-5">
                    Development terms directly depend on the requirements for
                    the mobile application, the characteristics of the company,
                    as well as the wishes of the customer.
                  </p>
                  <p>
                    Average development time from start to finished application:
                    <br />
                    Medium projects up to{" "}
                    <span className="font-[600]">3 months.</span>
                    <br />
                    Large projects about{" "}
                    <span className="font-[600]">4-6 months.</span>
                    <br />
                    To get a more accurate estimate of he project completion
                    time, it is necessary to determine the main task of the
                    application, think over its logic and functionality.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center font-[600] py-5 border-b-[1px] border-slate-200 mb-8">
              <h4>
                I will not tell my idea, do you guarantee confidentiality?
              </h4>
              <button className="shadow-lg  p-2 rounded-full text-[#80a948]">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecEight
