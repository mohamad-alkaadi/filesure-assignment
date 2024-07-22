import Image from "next/image"
import React from "react"
import analysis from "@/public/assets/analysis.png"
import design from "@/public/assets/design.png"
import development from "@/public/assets/development.png"
import phone from "@/public/assets/five-phone.png"
import testing from "@/public/assets/testing.png"
import launching from "@/public/assets/launching.png"
import support from "@/public/assets/support.png"
const SecFive = () => {
  return (
    <section className="px-16 py-16">
      <h3 className="mb-36 text-[30px] font-[600]">
        Application Development Stages
      </h3>
      <div className="flex max-[900px]:flex-col justify-around items-center">
        <div className="flex flex-col">
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={analysis} alt="analysis" />
              <h4 className="font-[500] text-[20px]">Analysis</h4>
            </div>
            <p className="pt-2">
              We craft precise technical specs, aligning with your business,
              technology, and user requirements
            </p>
          </div>
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={design} alt="design" />
              <h4 className="font-[500] text-[20px]">Design</h4>
            </div>
            <p className="pt-2">
              we adapt the customer's corporate identity to the platform
              guidelines. We draw convenient and understandable interfaces
            </p>
          </div>
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={development} alt="development" />
              <h4 className="font-[500] text-[20px]">Development</h4>
            </div>
            <p className="pt-2">
              We create an extensible architecture, write clean and stable code.
              We integrate with customer technologies.
            </p>
          </div>
        </div>
        <div className="max-[1040px]:hidden">
          <Image src={phone} className="scale-125" alt="phone" />
        </div>
        <div className="flex flex-col">
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={testing} alt="testing" />
              <h4 className="font-[500] text-[20px]">Testing</h4>
            </div>
            <p className="pt-2">
              We carry out functional testing and do bug fixes <br /> We adapt
              the application to different phone resolutions
            </p>
          </div>
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={launching} alt="launching" />
              <h4 className="font-[500] text-[20px]">Launching</h4>
            </div>
            <p className="pt-2">
              We design the application page and publish it in the App Store and
              Google Play stores.
            </p>
          </div>
          <div className="min-[900px]:max-w-[390px] w-full min-h-[172px] flex flex-col justify-center shadow-lg py-4 px-4 mb-6 rounded-[15px] border-slate-50 border-2">
            <div className="flex items-center space-x-3">
              <Image src={support} alt="support" />
              <h4 className="font-[500] text-[20px]">Support</h4>
            </div>
            <p className="pt-2">
              We monitor the stability of the application, update it for new
              devices and versions of IOS and Android.
            </p>
          </div>
        </div>
        <div className="min-[1040px]:hidden mt-20">
          <Image src={phone} className="scale-125" alt="phone" />
        </div>
      </div>
    </section>
  )
}

export default SecFive
