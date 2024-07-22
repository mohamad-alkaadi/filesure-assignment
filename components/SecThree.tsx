import Image from "next/image"
import React from "react"
import social from "@/public/assets/social-media.png"
import fitness from "@/public/assets/fitness.png"
import bank from "@/public/assets/bank.png"
import construction from "@/public/assets/construction.png"
import game from "@/public/assets/game.png"
import education from "@/public/assets/education.png"
import auto from "@/public/assets/auto.png"
import medicine from "@/public/assets/medicine.png"
import restaurants from "@/public/assets/restaurants.png"
import marketplaces from "@/public/assets/marketplaces.png"
import ar from "@/public/assets/ar.png"
import tv from "@/public/assets/tv.png"
import startups from "@/public/assets/startups.png"
import religion from "@/public/assets/religion.png"
import online from "@/public/assets/online.png"
import ProudProjects from "./ProudProjects"
import phones from "@/public/assets/phones.png"
const SecThree = () => {
  return (
    <section className="bg-[#f2f4f7] pt-10">
      <h3 className="text-[30px] font-[600] mx-16 mb-6">
        Developed more than <span className="text-[#80a948]">100</span>
        <br /> projects in <span className="text-[#80a948]">15</span> industries
      </h3>

      <div className="flex justify-around max-[608px]:flex-col  max-[608px]:mx-16">
        <ul>
          <li className="flex items-center mb-2">
            <Image src={social} alt="" />
            <p className="text-[16px] font-[500] ml-2">Social media</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={fitness} alt="" />
            <p className="text-[16px] font-[500] ml-2">Fitness and sport</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={bank} alt="" />
            <p className="text-[16px] font-[500] ml-2">Bank</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={construction} alt="" />
            <p className="text-[16px] font-[500] ml-2">Construction</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={game} alt="" />
            <p className="text-[16px] font-[500] ml-2">Game projects</p>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-2">
            <Image src={education} alt="" />
            <p className="text-[16px] font-[500] ml-2">Education</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={auto} alt="" />
            <p className="text-[16px] font-[500] ml-2">Auto, transport</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={medicine} alt="" />
            <p className="text-[16px] font-[500] ml-2">Medicine, health</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={restaurants} alt="" />
            <p className="text-[16px] font-[500] ml-2">
              Restaurants, food delivery
            </p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={marketplaces} alt="" />
            <p className="text-[16px] font-[500] ml-2">Marketplaces</p>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-2">
            <Image src={ar} alt="" />
            <p className="text-[16px] font-[500] ml-2">AR technology</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={tv} alt="" />
            <p className="text-[16px] font-[500] ml-2">Tv series</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={startups} alt="" />
            <p className="text-[16px] font-[500] ml-2">Startups</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={religion} alt="" />
            <p className="text-[16px] font-[500] ml-2">Religion</p>
          </li>
          <li className="flex items-center mb-2">
            <Image src={online} alt="" />
            <p className="text-[16px] font-[500] ml-2">Online courses</p>
          </li>
        </ul>
      </div>
      <div className="mx-16">
        <h4 className="text-[30px] font-[600]  mt-20 mb-6">
          Projects we are proud of
        </h4>
        <p>
          Our software development company is truly proud of the wonderful
          clients we worked with. We enjoy a long-term partnership
        </p>
      </div>
      <div className="flex max-[908px]:flex-col max-[908px]:items-center">
        <ProudProjects />
        <Image src={phones} alt="phones" className="scale-90" />
      </div>
    </section>
  )
}

export default SecThree
