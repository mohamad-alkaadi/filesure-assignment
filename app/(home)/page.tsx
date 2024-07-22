import Navbar from "@/components/Navbar"
import SecEight from "@/components/SecEight"
import SecFive from "@/components/SecFive"
import SecFour from "@/components/SecFour"
import SecNine from "@/components/SecNine"
import SecOne from "@/components/SecOne"
import SecSeven from "@/components/SecSeven"
import SecThree from "@/components/SecThree"
import SecTwo from "@/components/SecTwo"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <SecOne />
        <SecTwo />
        <SecThree />
        <SecFour />
        <SecFive />
        <SecSeven />
        <SecEight />
        <SecNine />
      </main>
    </div>
  )
}
