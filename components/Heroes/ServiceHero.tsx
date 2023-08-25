import Link from "next/link"
  import React from "react"
  export default function ServiceHero() {
    return (
      <>
      <div className="bg-[#03252F] w-full "></div>
        <div className="overflow-hidden py-40  bg-[#03252F]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:pl-8 h-[100px] max-sm:h-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nos services</h2>
            <p className="mt-2 text-lg leading-8 text-gray-300 font-extralight">
            Pour que vos projets se réalisent en toute tranquillité, <br className="max-sm:hidden"/>
            nous répondons à chacun des besoins exprimés par nos clients.            
          </p>
            
        </div>
        
        </div>
      </div>
      </>
        
    )
  }
  