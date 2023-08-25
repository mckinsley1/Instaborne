import Link from 'next/link'
import React from 'react'

function ServicesCTA() {

  const values = [
    { name: 'Notre équipe vous accompagne dès l’arrivée au concessionnaire afin de coordonner l’achat de votre véhicule et nos services.', value: 'Accompagnement', icon: '/accompagnement.svg' },
    { name: 'Instaborne s’adapte à votre situation. De la demande d’installation jusqu’au service après vente c’est vous qui décidez des conditions.', value: 'Adaptation client', icon: '/adaptationClient.svg' },
    { name: 'Notre service de base assure de répondre à tous vos besoins. Et s’il y a de nouvelles demandes, on s’adapte afin de vous y satisfaire.', value: 'Possibilités infinies', icon: 'possibiliteInfini.svg' },
  ]

  return (
    <>
      <div className='flex flex-col bg-white py-20'>
        <div className="m-auto max-w-[1280px]">
        <div className='text-center px-7'>
          <h1 className='text-secondary text-4xl font-bold'>Des solutions à votre service !</h1>
          <p className='text-gray-700 text-lg place-self-center max-w-3xl mx-auto mt-4'>Pour que vos projets se réalisent en toute tranquillité, nous répondons à chacun des besoins exprimés par nos clients.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 px-8 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-1 lg:grid-cols-3 lg:divide-x">
            {values.map((value) => (
                <div key={value.name} className="flex flex-col-reverse lg:pl-8">
                  <dt className="text-base leading-7 text-secondary text-center py-5">{value.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-secondary text-center">{value.value}</dd>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-200 place-self-center"><img src={value.icon}/></dd>
                </div>
            ))}
            </dl>
        </div>
        <div className='m-auto text-center place-self-center mt-8'>
          <Link href="/services">
            <button className='mt-6 rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Nos services
            </button> 
          </Link>
        </div>
      </div>
        </div>
        
    </>
  )
}

export default ServicesCTA