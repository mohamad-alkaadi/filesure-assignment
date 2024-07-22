"use client"
import React, { ChangeEvent, useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import PhoneInput, { CountryData } from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const handlerPhoneNumber = (
    value: string,
    data: CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    setPhoneNumber(value)
  }
  return (
    <form className="mt-8 flex">
      <div>
        <div className="grid w-full max-w-sm items-center mb-2">
          <Label className="text-[#667085]" htmlFor="name">
            Full name
          </Label>
          <Input
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none"
            type="text"
            id="name"
          />
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label className="text-[#667085]" htmlFor="bname">
            Business name
          </Label>
          <Input
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none"
            type="text"
            id="bname"
          />
        </div>
      </div>
      <div className="ml-5">
        <div className="grid w-full max-w-sm items-center mb-2">
          <Label className="text-[#667085] mb-[5px]" htmlFor="number">
            Phone number
          </Label>
          <PhoneInput
            enableAreaCodeStretch
            inputProps={{
              name: "phoneNumber",
            }}
            autoFormat
            specialLabel=""
            value={phoneNumber}
            onChange={handlerPhoneNumber}
            placeholder=""
          />
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label className="text-[#667085]" htmlFor="bname">
            Business mail
          </Label>
          <Input
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none"
            type="text"
            id="bname"
          />
        </div>
      </div>
      <div className="flex items-end ml-5">
        <button className="flex flex-col items-center bg-[#80a948] text-white px-5 py-2 rounded-md text-[14px] font-[400]">
          <p>Get</p>
          <p>Consultation</p>
        </button>
      </div>
    </form>
  )
}

export default Form
