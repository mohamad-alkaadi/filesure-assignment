"use client"
import React, { ChangeEvent, useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import PhoneInput, { CountryData } from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
const Form = ({ secFour, secOne }: { secFour?: boolean; secOne?: boolean }) => {
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
    <form className="mt-8 flex max-[698px]:flex-col">
      <div>
        <div className="grid w-full max-w-sm items-center mb-2">
          <Label className="text-[#667085]" htmlFor="name">
            Full name
          </Label>
          <Input
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none max-[698px]:w-full"
            type="text"
            id="name"
          />
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label className="text-[#667085]" htmlFor="bname">
            Business name
          </Label>
          <Input
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none max-[698px]:w-full"
            type="text"
            id="bname"
          />
        </div>
      </div>
      <div className="min-[698px]:ml-5">
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
            className="border-x-0 w-[200px] border-t-0 outline-none focus:border-0 focus:outline-0 focus:rounded-none rounded-none max-[698px]:w-full"
            type="text"
            id="bname"
          />
        </div>
        {secFour ? (
          <div className="flex justify-end mt-4">
            <button className="flex flex-col items-center bg-[#feb800] text-white px-5 py-2 rounded-md text-[14px] font-[400] justify-self-end">
              <p>Discuss the project</p>
            </button>
          </div>
        ) : null}
      </div>
      {secOne ? (
        <div className="flex items-end min-[698px]:ml-5">
          <button className="flex flex-col items-center bg-[#80a948] text-white px-5 py-2 rounded-md text-[14px] font-[400]">
            <p>Get</p>
            <p>Consultation</p>
          </button>
        </div>
      ) : null}
    </form>
  )
}

export default Form
