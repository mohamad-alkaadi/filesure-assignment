import React from "react"
import plant from "@/public/assets/plant.png"
import Image from "next/image"
const SecTwo = () => {
  return (
    <section className="bg-[#ffffff]  ">
      <div className="flex min-[455px]:justify-between justify-center border-y-[1px] py-10 mt-14 mb-3 mx-10">
        <Image src={plant} alt="plant" />
        <Image className="max-[455px]:hidden" src={plant} alt="plant" />
        <Image className="max-[640px]:hidden" src={plant} alt="plant" />
        <Image className="max-[810px]:hidden" src={plant} alt="plant" />
        <Image className="max-[1183px]:hidden" src={plant} alt="plant" />
      </div>
      <div className="flex justify-around mx-16 min-[688px]:space-x-10 max-[688px]:flex-col ">
        <div className="min-[688px]:w-[50%] flex flex-col ">
          <div className="">
            <h3 className="font-[600] text-[33px] mb-5">
              Full development cycle
            </h3>
            <p className="font-[500] mb-5 text-start">
              we use proven technologies
            </p>
            <h4 className="mb-2 font-[600]">Web</h4>
            <p className="mb-5 max-w-[430px]">
              PHP / Javascript / NodeJS / Web Socket / Socket.io / Vue.js / Nuxt
              / MySQL / Laravel / GO lang / django / Python
            </p>
            <h4 className="mb-2 font-[600]">Mobile</h4>
            <p className="mb-5 max-w-[430px]">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RXJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="min-[688px]:w-[50%]  flex flex-col justify-center">
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              IOS development
            </span>{" "}
            <span className="text-[#80a948] ml-[5px] ">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              Android development
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              Web development
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              UI/UX design
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              Testing
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              Launch
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
          <div className="mb-3">
            <span className="hover:border-b-[1px] border-[#80a948] text-[18px]">
              IT consulting
            </span>{" "}
            <span className="text-[#80a948] ml-[5px]">{">"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecTwo
