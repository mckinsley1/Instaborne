import Link from 'next/link'
import React from 'react'

function Advantage() {

  const values = [
    { name: 'Notre équipe vous accompagne depuis votre l’arrivée chez votre concessionnaire afin de coordonner l’achat de votre véhicule et nos services.', value: 'Accompagnement', icon: '/accompagnement.svg' },
    { name: 'Instaborne s’adapte à votre situation. De la demande d’installation jusqu’au service après vente c’est vous qui décidez des conditions.', value: 'Adaptation client', icon: '/adaptationClient.svg' },
    { name: 'Notre service de base assure de répondre à tous vos besoins. Et s’il y a de nouvelles demandes, on s’adapte afin de vous y satisfaire.', value: 'Possibilités infinies', icon: 'possibiliteInfini.svg' },
  ]

  return (
    <>
      <div className='mx-auto flex flex-col bg-[#FAFAFA] py-20 lg:px-14 px-0'>
        <div className="mx-auto  max-w-2xl   max-w-[1280px]">
            <dl className="lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3 lg:divide-x items-start">
            {values.map((value) => (
                <div key={value.name} className="flex flex-col-reverse lg:pl-8">
                  <dt className="text-base leading-7 text-black font-light text-center max-md:px-2">{value.name}</dt>
                  <dd className="text-2xl font-bold leading-9 text-black text-center">{value.value}</dd>
                  <dd className="text-2xl font-bold leading-9 text-black place-self-center"><img src={value.icon}/></dd>
                </div>
            ))}
            </dl>
        </div>
      </div>
    </>
  )
}

export default Advantage