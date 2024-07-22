import Image from "next/image"
import React from "react"
import logo from "@/public/assets/logo.png"
import phone from "@/public/assets/phone.png"
import mail from "@/public/assets/mail.png"
import Link from "next/link"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
    <nav className="fixed justify-between z-20 w-full px-20 py-8">
      <div className=" flex w-full bg-white px-6 py-6 rounded-[20px] shadow-md justify-between">
        <div className="flex">
          <Image src={logo} alt="logo" />
          <div className="flex max-[1199px]:hidden items-center font-[500] space-x-6 ml-20">
            <Link href="/">Services</Link>
            <Link href="/">Media</Link>
            <Link href="/">Cases</Link>
            <Link href="/">Cases</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Contacts</Link>
          </div>
        </div>
        <div className="flex max-[1199px]:hidden items-center space-x-8 text-[#80a948]">
          <div className="flex items-center space-x-3">
            <div>
              <Image src={phone} alt="phone" />
            </div>
            <div>+91 000000000</div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <Image src={mail} alt="mail" />
            </div>
            <div>demo@gmail.com</div>
          </div>
        </div>
        <div className="min-[1199px]:hidden flex justify-center items-center">
          <IoMenu className="text-[28px] cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
