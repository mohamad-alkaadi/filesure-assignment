import Image from "next/image"
import React from "react"
import logo from "@/public/assets/footer-logo.png"
import phone from "@/public/assets/footer-phone.png"
import mail from "@/public/assets/footer-mail.png"
import file from "@/public/assets/footer-file.png"
import location from "@/public/assets/footer-location.png"

const SecNine = () => {
  return (
    <section className="p-16">
      <div className="bg-black text-white flex flex-col items-center justify-center max-[666px]:items-start rounded-[20px] ">
        <Image src={logo} alt="logo" />
        <div className="flex justify-around w-full max-[666px]:flex-col max-[666px]:px-6 max-[666px]:mt-5 max-[666px]:space-y-4 mb-10">
          <div>
            <div className="flex space-x-4 text-[#98a2b3]">
              <Image src={phone} alt="phone" />
              <p>Contact nums</p>
            </div>
            <p className="font-[500]">+91 0000000000</p>
          </div>
          <div>
            <div className="flex space-x-4 text-[#98a2b3]">
              <Image src={mail} alt="mail" />
              <p className="font-[500]">Gmail</p>
            </div>
            <p>demo@gmail.com</p>
          </div>
          <div>
            <div className="flex space-x-4 text-[#98a2b3]">
              <Image src={location} alt="location" />
              <p>Adress</p>
            </div>
            <p className="font-[500]">Mumbai, India</p>
          </div>
          <div>
            <div className="flex space-x-4 text-[#98a2b3]">
              <Image src={file} alt="file" />
              <p>Leave a request</p>
            </div>
            <p className="font-[500]">Leave a request</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecNine
