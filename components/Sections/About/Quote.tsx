import React from 'react'

function AboutQuote(){
return(
    <div className="border-t border-gray-200 px-4 py-10 sm:px-6 bg-[#FAFAFA]">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center mx-auto">
            <path  fill="#02B5A1" d="M22.5209 18.4595C22.5209 13.5664 18.5534 9.60013 13.66 9.60013C8.76711 9.60013 4.7998 13.5662 4.7998 18.4595C4.7998 23.25 8.60429 27.1437 13.3545 27.3045C12.7953 31.0844 10.1428 35.6675 6.10248 39.8096C5.97807 39.9371 6.06674 40.1495 6.24461 40.1392C13.8409 39.6985 22.5209 28.9473 22.5209 18.4595Z" />
            <path  fill="#02B5A1" d="M34.3388 9.59998C29.4462 9.59998 25.4779 13.5664 25.4779 18.4594C25.4779 23.2499 29.2823 27.1436 34.0325 27.3043C33.4733 31.0843 30.8211 35.6674 26.7811 39.8094C26.6567 39.937 26.7454 40.1494 26.9232 40.139C34.5202 39.6984 43.1998 28.9464 43.1998 18.4586C43.1998 13.5655 39.2325 9.59998 34.3388 9.59998Z"/>
        </svg>

        <div className="mx-auto max-w-3xl text-center">
            <p className={`relative mt-6 text-lg leading-8 text-[#71717A] mx-auto font-light italic`}>
                Qui dit voiture électrique dit recharge. La question de la borne devient alors centrale. Instaborne simplifie votre mobilité électrique en proposant des solutions adaptées à vos besoins.</p>
        </div>
    </div>
)

}
export default AboutQuote