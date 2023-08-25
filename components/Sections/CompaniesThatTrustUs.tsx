import React from 'react'
import styles from './About/Companies.module.css'

export default function CompaniesThatTrustUs(){
    return (
        <div className="px-4 py-10 sm:px-6 bg-[#f0f0f0]">
            <div className="mx-auto max-w-2xl text-center pt-4">
                <p className="font-bold text-3xl text-gray-900">Ils nous font confiance !</p>
            </div>
            <br/>
            <div className='flex justify-center max-sm:justify-around mb-6 pt-5 gap-10'>
                <a href="https://www.440ford.ca/en/"><img src="/ford440.webp" className="h-24"/></a>
                <img src="/FordLogo.png" className="h-24"/>
            </div>
        </div>
    )
}