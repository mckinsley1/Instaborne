import React from 'react'
import styles from './Companies.module.css'

function AboutCompanies(){
return(
    <div className="px-4 py-5 sm:px-6 bg-[#FAFAFA]">
        <div className="mx-auto max-w-2xl text-center">
            <p className={styles.pClass}>Instaborne, professionnel certifié!</p>
        </div>
        <br/>
        <div className='flex justify-center max-sm:justify-around mb-6'>
            <img src="/CMEQ.svg" className={styles.logoClass}/> 
            <img src="/RBQ.svg" className={styles.logoClass}/>
        </div>
    </div>
)
}
export default AboutCompanies