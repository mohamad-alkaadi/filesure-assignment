import React from "react"
import Form from "./Form"

const SecFour = () => {
  return (
    <section className="text-white bg-gradient-to-r from-[#fabc1f] to-[#7ca545] flex justify-between items-center max-[792px]:flex-col max-[792px]:items-start  max-[792px]:space-y-8 px-16 py-8">
      <div className="max-w-[351px]">
        <h3 className="text-[27px] font-[600] mb-6">
          Let{"'"}s discuss <br /> Your Project
        </h3>
        <p className="text-[15px]">
          Let{"'"}s figure out hw to create an effective application its cost
          amd terms of its development
        </p>
      </div>
      <div className="bg-white max-[792px]:w-full px-5 pb-5 rounded-[18px] shadow-md">
        <Form secFour />
      </div>
    </section>
  )
}

export default SecFour
