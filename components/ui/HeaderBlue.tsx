import React from 'react'
import styles from "./HeaderBlue.module.css";

function HeadBlue(props:any) {


  const pageTitle = props.title;
  const pageDescription  = props.description

    return (
    <>
          <div className="bg-[#03252F] w-full "></div>
        <div className="overflow-hidden py-40  bg-[#03252F]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:pl-8 h-[100px] max-sm:h-auto">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{pageTitle}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-300 font-extralight">
            {pageDescription}<br className="max-sm:hidden"/>
                     
          </p>
            
        </div>
        
        </div>
      </div>

    </>
    )
  }
  
export default HeadBlue