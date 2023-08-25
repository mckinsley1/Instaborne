import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function InstallationCTA() {
  return (
    <div className="bg-[#03252F] py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
            <div className='w-full h-full relative'>
                <img className="object-cover w-full h-full rounded-2xl" src="/installationCTA.jpg" alt=""/>

                <div className="absolute bottom-4 px-6 py-4 text-center">
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-white">Faites vous aussi votre demande, le rendez-vous et l'estimation sont gratuits !</h4>
                </div>
            </div>
            
            <div className="w-full flex-auto px-4">
              <img className="h-20 w-auto invisible lg:visible lg:mb-20" src="./LogoBlanc.svg" alt="instaborne logo" />
              <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                  <li className="mb-10 ml-6">            
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#02B5A1] rounded-full -left-3 ring-8 ring-[#02B5A1]/50 dark:ring-gray-900 dark:bg-[#02B5A1]">
                          <p className='text-white'>1</p>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Demande de rendez-vous</h3>
                      <p className="mb-4 text-base font-normal text-white dark:text-white">Réalisez votre demande de rendez-vous directement en ligne, en remplissant le formulaire qui nous donnera à cette occasion plus d’informations sur votre projet.</p>
                  </li>
                  <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#02B5A1] rounded-full -left-3 ring-8 ring-[#02B5A1]/50 dark:ring-gray-900 dark:bg-[#02B5A1]">
                          <p className='text-white'>2</p>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Estimation et évaluation (Gratuit)</h3>
                      <p className="text-base font-normal text-white dark:text-white">Un expert Instaborne vous rencontre à domicile pour évaluer le travail à effectuer et planifier l'installation en fonction de vos besoin. Nous vous soumettons par la suite un ou plusieurs devis.</p>
                  </li>
                  <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#02B5A1] rounded-full -left-3 ring-8 ring-[#02B5A1]/50 dark:ring-gray-900 dark:bg-[#02B5A1]">
                          <p className='text-white'>3</p>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Installation</h3>
                      <p className="text-base font-normal text-white dark:text-white">Vous choisissez le devis qui vous convient et nous nous chargeons d'installer votre solution de recharge pour véhicule électrique.</p>
                  </li>
              </ol>
                <div className="mt-10 flex">
                  <Link href="/new-quote">
                      <button className='mt-6 rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                      Demander estimation gratuite
                      </button> 
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
